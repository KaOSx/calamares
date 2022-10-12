#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
# === This file is part of Calamares - <http://github.com/calamares> ===
#
#   Copyright 2014-2021, Anke Boersma <demm@kaosx.us>
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
import shutil
import glob
import subprocess
import re

import libcalamares


def run():
    """ Setup graphics drivers and sound """

    install_path = libcalamares.globalstorage.value("rootMountPoint")
    license = libcalamares.globalstorage.value("packagechooser_licenseq")
    print(license)

    if not license or license == 'disagree':
        print('License declined')
        return None

    # remove any db.lck
    db_lock = os.path.join(install_path, "var/lib/pacman/db.lck")
    if os.path.exists(db_lock):
        with misc.raised_privileges():
            os.remove(db_lock)

    # setup proprietary drivers, if detected
    print('setup proprietary drivers')
    if os.path.exists('/var/log/nvidia'):
        print('nvidia detected')
        print('removing unneeded packages')
        libcalamares.utils.target_env_call(
            ['pacman', '-Rdd', '--noconfirm', 'xf86-video-nouveau'])
        print('installing driver')
        shutil.copytree(
            '/opt/kdeos/pkgs', '%s/opt/kdeos/pkgs' % (install_path))
        for nvidia_utils in glob.glob('/opt/kdeos/pkgs/nvidia-utils-1:52*'):
            libcalamares.utils.target_env_call(
                ['pacman', '-Ud', '--noconfirm', nvidia_utils])
        for nvidia in glob.glob('/opt/kdeos/pkgs/nvidia-1:52*'):
            libcalamares.utils.target_env_call(
                ['pacman', '-Ud', '--noconfirm', nvidia])
        shutil.rmtree('%s/opt/kdeos/pkgs' % (install_path))

        sddm_conf_path = os.path.join(install_path, "etc/sddm.conf")
        text = []
        with open(sddm_conf_path, 'r') as sddm_conf:
            text = sddm_conf.readlines()
        with open(sddm_conf_path, 'w') as sddm_conf:
            for line in text:
                if re.match('Session=plasmawayland.desktop', line):
                    line = 'Session=plasma.desktop'
                sddm_conf.write(line)

    elif os.path.exists('/var/log/nvidia-prime'):
        print('nvidia prime detected')
        print('removing unneeded packages')
        libcalamares.utils.target_env_call(
            ['pacman', '-Rdd', '--noconfirm', 'xf86-video-nouveau'])
        print('installing driver')
        shutil.copytree(
            '/opt/kdeos/pkgs', '%s/opt/kdeos/pkgs' % (install_path))
        for nvidia_utils in glob.glob('/opt/kdeos/pkgs/nvidia-utils-1:52*'):
            libcalamares.utils.target_env_call(
                ['pacman', '-Ud', '--noconfirm', nvidia_utils])
        for nvidia in glob.glob('/opt/kdeos/pkgs/nvidia-1:52*'):
            libcalamares.utils.target_env_call(
                ['pacman', '-Ud', '--noconfirm', nvidia])
        for prime in glob.glob('/opt/kdeos/pkgs/prime*'):
            libcalamares.utils.target_env_call(
                ['pacman', '-Ud', '--noconfirm', prime])
        shutil.rmtree('%s/opt/kdeos/pkgs' % (install_path))

        sddm_conf_path = os.path.join(install_path, "etc/sddm.conf")
        text = []
        with open(sddm_conf_path, 'r') as sddm_conf:
            text = sddm_conf.readlines()
        with open(sddm_conf_path, 'w') as sddm_conf:
            for line in text:
                if re.match('Session=plasmawayland.desktop', line):
                    line = 'Session=plasma.desktop'
                sddm_conf.write(line)

    elif os.path.exists('/var/log/nvidia-390xx'):
        print('nvidia-390xx detected')
        print('removing unneeded packages')
        libcalamares.utils.target_env_call(
            ['pacman', '-Rdd', '--noconfirm', 'xf86-video-nouveau'])
        print('installing driver')
        shutil.copytree(
            '/opt/kdeos/pkgs', '%s/opt/kdeos/pkgs' % (install_path))
        for nvidia_390_utils in glob.glob('/opt/kdeos/pkgs/nvidia-390xx-utils*'):
            libcalamares.utils.target_env_call(
                ['pacman', '-Ud', '--noconfirm', nvidia_390_utils])
        for nvidia_390 in glob.glob('/opt/kdeos/pkgs/nvidia-390xx-39*'):
            libcalamares.utils.target_env_call(
                ['pacman', '-Ud', '--noconfirm', nvidia_390])
        shutil.rmtree('%s/opt/kdeos/pkgs' % (install_path))

        sddm_conf_path = os.path.join(install_path, "etc/sddm.conf")
        text = []
        with open(sddm_conf_path, 'r') as sddm_conf:
            text = sddm_conf.readlines()
        with open(sddm_conf_path, 'w') as sddm_conf:
            for line in text:
                if re.match('Session=plasmawayland.desktop', line):
                    line = 'Session=plasma.desktop'
                sddm_conf.write(line)

    elif os.path.exists('/var/log/nvidia-470xx'):
        print('nvidia-470xx detected')
        print('removing unneeded packages')
        libcalamares.utils.target_env_call(
            ['pacman', '-Rdd', '--noconfirm', 'xf86-video-nouveau'])
        print('installing driver')
        shutil.copytree(
            '/opt/kdeos/pkgs', '%s/opt/kdeos/pkgs' % (install_path))
        for nvidia_470_utils in glob.glob('/opt/kdeos/pkgs/nvidia-470xx-utils*'):
            libcalamares.utils.target_env_call(
                ['pacman', '-Ud', '--noconfirm', nvidia_470_utils])
        for nvidia_470 in glob.glob('/opt/kdeos/pkgs/nvidia-470xx-47*'):
            libcalamares.utils.target_env_call(
                ['pacman', '-Ud', '--noconfirm', nvidia_470])
        shutil.rmtree('%s/opt/kdeos/pkgs' % (install_path))

        sddm_conf_path = os.path.join(install_path, "etc/sddm.conf")
        text = []
        with open(sddm_conf_path, 'r') as sddm_conf:
            text = sddm_conf.readlines()
        with open(sddm_conf_path, 'w') as sddm_conf:
            for line in text:
                if re.match('Session=plasmawayland.desktop', line):
                    line = 'Session=plasma.desktop'
                sddm_conf.write(line)

    print('done setting up hardware')

    return None
