#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
# === This file is part of Calamares - <http://github.com/calamares> ===
#
#   Copyright 2014-2024, Anke Boersma <demm@kaosx.us>
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

import os
import subprocess

import libcalamares


def run():
    """ Package removal module. Live only packages, surplus language packs. """

    install_path = libcalamares.globalstorage.value("rootMountPoint")
    fw_type = libcalamares.globalstorage.value("firmwareType")

    # remove any db.lck
    db_lock = os.path.join(install_path, "var/lib/pacman/db.lck")
    if os.path.exists(db_lock):
        with misc.raised_privileges():
            os.remove(db_lock)

    # Remove Calamares and depends
    if os.path.exists("{!s}/usr/bin/calamares" .format(install_path)):
        print('Removing installer packages')
        libcalamares.utils.target_env_call(
            ['pacman', '-Rns', '--noconfirm', 'calamares', 'calamares-debug', 'console-setup'])

    # Remove welcome
    if os.path.exists("{!s}/usr/bin/welcome" .format(install_path)):
        print('Removing live ISO packages')
        libcalamares.utils.target_env_call(
            ['pacman', '-Rns', '--noconfirm', 'welcome'])

    # Remove hardware detection
    if os.path.exists("{!s}/etc/kdeos-hwdetect.conf" .format(install_path)):
        print('Removing live start-up packages')
        libcalamares.utils.target_env_call(
            ['pacman', '-Rns', '--noconfirm', 'hardware-detection'])

    # Remove init-live
    if os.path.exists("{!s}/etc/live" .format(install_path)):
        print('Removing live configuration packages')
        libcalamares.utils.target_env_call(
            ['pacman', '-R', '--noconfirm', 'init-live'])

    # Remove surplus bootloader packages
    if fw_type == 'efi':
        print('Removing grub packages')
        libcalamares.utils.target_env_call(
            ['pacman', '-Rncs', '--noconfirm', 'grub'])

    if fw_type == 'bios':
        print('Removing EFI packages')
        libcalamares.utils.target_env_call(
            ['pacman', '-Rns', '--noconfirm', 'efibootmgr', 'refind-efi'])

    # Remove VirtualBox Guest packages
    if os.path.exists("{!s}/usr/bin/VBoxClient" .format(install_path)):
        if 'hypervisor' in open('/proc/cpuinfo').read():
            print('Virtual Machine')
            vbox = subprocess.check_output('systemd-detect-virt')
            if 'oracle' in str(vbox):
                print('VirtualBox')
            else:
                print('Removing guest-utils')
                libcalamares.utils.target_env_call(
                    ['pacman', '-R', '--noconfirm', 'virtualbox-guest-utils'])
        else:
            print('Removing guest-utils')
            libcalamares.utils.target_env_call(
                ['pacman', '-R', '--noconfirm', 'virtualbox-guest-utils'])

    # Remove ZFS packages
    zfs_pool_list = libcalamares.globalstorage.value("zfsPoolInfo")
    if not zfs_pool_list:
        print('ZFS not in use')
        libcalamares.utils.target_env_call(
                ['pacman', '-Rns', '--noconfirm', 'zfs-kmod'])
    else:
        print(zfs_pool_list)

    # Packagechooser outcome / remove LibreOffice l10n
    packages = libcalamares.globalstorage.value("packagechooser_packagechooserq")

    if packages == 'no_office_suite':
        print('Removing LibreOffice')
        libcalamares.utils.target_env_call(
                ['pacman', '-Rns', '--noconfirm', 'libreoffice'])

    if packages == 'calligra':
        print('Installing Calligra')
        libcalamares.utils.target_env_call(
            ['pacman', '-Rns', '--noconfirm', 'libreoffice'])
        libcalamares.utils.target_env_call(
            ['pacman', '-U', '--noconfirm',
                '/opt/kdeos/pkgs/calligra*',
                '/opt/kdeos/pkgs/libspnav'])

    if packages == 'libreoffice':
        print('LibreOffice selected')

    if packages == 'minimal_install':
        print('Minimal Install')
        pkgs = ['plasma-workspace-wallpapers',
                'partitionmanager',
                'gwenview',
                'spectacle',
                'sweeper',
                'plasma-firewall',
                'quassel',
                'smplayer',
                'haruna',
                'oxygen-sounds',
                'elisa',
                'kde-gtk-config',
                'tomoyo-tools',
                'kcp',
                'pacmanlogviewer',
                'seafile-client',
                'kamoso',
                'kget',
                'kompare',
                'simplescreenrecorder',
                'power-profiles-daemon',
                'k3b',
                'system-config-printer',
                'print-manager',
                'hplip',
                'epson-inkjet-printer-escpr',
                'pyqt5-python3',
                'kpat',
                'neochat',
                'libreoffice']
        for pkg in pkgs:
            try:
                libcalamares.utils.target_env_call(
                    ['pacman', '-Rns', '--noconfirm', '{!s}' .format(pkg)])
            except:
                print("Could not remove package " + pkg)

    print('package removal completed')
