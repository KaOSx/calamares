#!/usr/bin/env python3
# encoding: utf-8
# === This file is part of Calamares - <http://github.com/calamares> ===
#
#   Copyright 2014, Anke Boersma <demm@kaosx.us>
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
from libcalamares.utils import check_chroot_call
 
import subprocess
import os
 
install_path = libcalamares.globalstorage.value("rootMountPoint")
devices = []
distributions = ['linux_os']
osprober = []
 
def run_osprober():
    p = subprocess.Popen('sudo os-prober',
                         shell=True, stdout=subprocess.PIPE)
    global osprober
    global devices
    osprober = p.stdout.read().decode().split('\n')
    for l in osprober:
        if not l:
            continue
        o = l.split(':')
        if o[-1] == 'linux':
            devices.append(o[0])
            break
 
def get_uuid(device):
    p = subprocess.Popen('sudo blkid -s UUID -o value %s' % device,
                         shell=True, stdout=subprocess.PIPE)
    return p.stdout.read().decode().rstrip('\n')
 
def get_title(device):
    for l in osprober:
        print('search title...')
        if device in l:
            return l
    return 'no title found'
 
def write_conf(device, distribution):
    uuid = get_uuid(device)
    print(uuid)
    title = get_title(device)
    print(title)
 
    lines = [
            '## This is just an example config file.\n',
            '## Please edit the paths and kernel parameters according to your system.\n',
            '\n',
            'title   %s\n' % title,
            'linux   /vmlinuz-linux\n',
            'initrd  /initramfs-linux.img\n',
            'options root=UUID=%s quiet rw\n' % uuid,
        ]
 
    path = os.path.join(install_path, "boot", "loader", "entries", "%s.conf" % distribution)
    with open(path, 'w') as f:
        for l in lines:
            f.write(l)
    f.close()
 
def main():
    fw_type = libcalamares.globalstorage.value("firmwareType")
    if fw_type == 'efi':
        run_osprober()
        print(osprober)
        for i, device in enumerate(devices):
            write_conf(device, distributions[i])
 
main()