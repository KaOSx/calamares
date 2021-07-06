#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# === This file is part of Calamares - <https://github.com/calamares> ===
#
#   Copyright 2014-2018, Anke Boersma <demm@kaosx.us>
#   Copyright 2014, Benjamin Vaudour <benjamin.vaudour@yahoo.fr>
#
#   Calamares is free software: you can redistribute it and/or modify
#   it under the terms of the GNU General Public License as published by
#   the Free Software Foundation, either version 3 of the License, or
#   (at your option) any later version.
#
#   Calamares is distributed in the hope that it will be useful,
#   but WITHOUT ANY WARRANTY; without even the implied warranty of
#   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
#   GNU General Public License for more details.
#
#   You should have received a copy of the GNU General Public License
#   along with Calamares. If not, see <http://www.gnu.org/licenses/>.

import libcalamares

import os
import subprocess

from libcalamares.utils import check_target_env_call


def detect_firmware_type():
    # Check for EFI variables support
    if(os.path.exists("/sys/firmware/efi/efivars")):
        fw_type = 'efi'
    else:
        fw_type = 'bios'

    libcalamares.globalstorage.insert("firmwareType", fw_type)
    libcalamares.utils.debug("Firmware type: {!s}".format(fw_type))


def get_uuid():
    root_mount_point = libcalamares.globalstorage.value("rootMountPoint")
    print(root_mount_point)
    partitions = libcalamares.globalstorage.value("partitions")
    print(partitions)
    for partition in partitions:
        if partition["mountPoint"] == "/":
            libcalamares.utils.debug(partition["uuid"])
            return partition["uuid"]
    return ""


def create_conf(uuid, conf_path):
    distribution = libcalamares.job.configuration["distribution"]
    kernel = libcalamares.job.configuration["kernel"]
    img = libcalamares.job.configuration["img"]
    partitions = libcalamares.globalstorage.value("partitions")

    kernel_params = ["quiet systemd.show_status=0"]
    swap = ""
    swap_luks = ""
    cryptdevice_params = []
    btrfs_params = ""

    for partition in partitions:
        if partition["fs"] == "linuxswap" and not "luksMapperName" in partition:
            swap = partition["uuid"]

        if partition["fs"] == "linuxswap" and "luksMapperName" in partition:
            swap_luks = partition["luksMapperName"]

        if partition["mountPoint"] == "/" and "luksMapperName" in partition:
            cryptdevice_params = [
                "cryptdevice=UUID={!s}:{!s}".format(partition["luksUuid"],
                                                    partition["luksMapperName"]),
                "root=/dev/mapper/{!s}".format(partition["luksMapperName"]),
                "resume=/dev/mapper/{!s}".format(partition["luksMapperName"])
            ]
            
        if partition["mountPoint"] == "/" and partition["fs"] == "btrfs":
            btrfs_params = "rootflags=subvol=@"

    if cryptdevice_params:
        kernel_params.extend(cryptdevice_params)
    else:
        kernel_params.append("root=UUID={!s}".format(uuid))

    if swap:
        kernel_params.append("resume=UUID={!s}".format(swap))
    if swap_luks:
        kernel_params.append("resume=/dev/mapper/{!s}".format(swap_luks))
    if btrfs_params:
        print('BTRFS')
        kernel_params.append(btrfs_params)

    lines = [
        '## Please edit the paths and kernel parameters according to your system.\n',
        '\n',
        'title   {!s} GNU/Linux, with Linux kernel (Type h or ? for a Help menu)\n'.format(distribution),
        'linux   {!s}\n'.format(kernel),
        'initrd  {!s}\n'.format(img),
        'options {!s} rw\n'.format(" ".join(kernel_params)),
    ]

    with open(conf_path, 'w') as f:
        for l in lines:
            f.write(l)
    f.close()


def create_fallback(uuid, fallback_path):
    distribution = libcalamares.job.configuration["distribution"]
    kernel = libcalamares.job.configuration["kernel"]
    fb_img = libcalamares.job.configuration["fallback"]
    partitions = libcalamares.globalstorage.value("partitions")

    kernel_params = ["quiet systemd.show_status=0"]
    swap = ""
    cryptdevice_params = []

    for partition in partitions:
        if partition["fs"] == "linuxswap":
            swap = partition["uuid"]

        if partition["mountPoint"] == "/" and "luksMapperName" in partition:
            cryptdevice_params = [
                "cryptdevice=UUID={!s}:{!s}".format(partition["luksUuid"],
                                                    partition["luksMapperName"]),
                "root=/dev/mapper/{!s}".format(partition["luksMapperName"])
            ]

    if cryptdevice_params:
        kernel_params.extend(cryptdevice_params)
    else:
        kernel_params.append("root=UUID={!s}".format(uuid))

    if swap:
        kernel_params.append("resume=UUID={!s}".format(swap))

    lines = [
        '## Please edit the paths and kernel parameters according to your system.\n',
        '\n',
        'title   {!s} GNU/Linux, with Linux fallback kernel\n'.format(distribution),
        'linux   {!s}\n'.format(kernel),
        'initrd  {!s}\n'.format(fb_img),
        'options {!s} rw\n'.format(" ".join(kernel_params)),
    ]

    with open(fallback_path, 'w') as f:
        for l in lines:
            f.write(l)
    f.close()


def create_loader(loader_path):
    distribution = libcalamares.job.configuration["distribution"]
    timeout = libcalamares.job.configuration["timeout"]
    lines = [
        'timeout {!s}\n'.format(timeout),
        'default {!s}\n'.format(distribution),
    ]

    with open(loader_path, 'w') as f:
        for l in lines:
            f.write(l)
    f.close()


def install_bootloader(boot_loader, fw_type):
    if fw_type == 'efi':
        install_path = libcalamares.globalstorage.value("rootMountPoint")
        uuid = get_uuid()
        distribution = libcalamares.job.configuration["distribution"]
        conf_path = os.path.join(
            install_path, "boot", "loader", "entries",
            "{!s}.conf".format(distribution))
        fallback_path = os.path.join(
            install_path, "boot", "loader", "entries", "{!s}-fallback.conf".format(distribution))
        loader_path = os.path.join(
            install_path, "boot", "loader", "loader.conf")
        partitions = libcalamares.globalstorage.value("partitions")
        device = ""

        for partition in partitions:
            if partition["mountPoint"] == "/boot":
                libcalamares.utils.debug(partition["device"])
                boot_device = partition["device"]
                boot_p = ''.join([s for s in boot_device if s.isdigit()])
                device = ''.join([s for s in boot_device if not s.isdigit()])
                if boot_device.startswith('/dev/nvme'):
                    device = boot_device[:-2]

                if not boot_p or not device:
                    return ("EFI directory /boot not found!",
                            "Boot partition: \"{!s}\"",
                            "Boot device: \"{!s}\"".format(boot_p, device))
                else:
                    print("EFI directory: /boot")
                    print("Boot partition: \"{!s}\"".format(boot_p))
                    print("Boot device: \"{!s}\"".format(device))
                    
        if not device:
            print("WARNING: no EFI system partition or EFI system partition mount point not set.")
            print("         >>> no EFI bootloader will be installed <<<")
            return None
        print("Set 'EF00' flag")
        subprocess.call(
            ["sgdisk", "--typecode={!s}:EF00".format(boot_p), "{!s}".format(device)])
        subprocess.call(
            ["bootctl", "--path={!s}/boot".format(install_path), "install"])
        create_conf(uuid, conf_path)
        create_fallback(uuid, fallback_path)
        create_loader(loader_path)
    else:
        install_path = boot_loader["installPath"]
        check_target_env_call(["grub-install", install_path])
        check_target_env_call(["grub-mkconfig", "-o", "/boot/grub/grub.cfg"])


def run():

    #detect_firmware_type()
    boot_loader = libcalamares.globalstorage.value("bootLoader")
    fw_type = libcalamares.globalstorage.value("firmwareType")
    
    if libcalamares.globalstorage.value("bootLoader") is None and fw_type != "efi":
        libcalamares.utils.debug('no bootloader install')
        return None
    
    install_bootloader(boot_loader, fw_type)
    return None
