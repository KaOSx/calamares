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
import re
import subprocess

import libcalamares


def run():
    """ Create Distribution specific settings for users """
    install_path = libcalamares.globalstorage.value("rootMountPoint")
    user = libcalamares.globalstorage.value("username")

    print('create common dirs')
    common_dirs = [
        'Desktop',
        '.config',
        '.local/share/applications/',
        '.local/share/konqueror',
        '.local/share/konsole',
        '.config/autostart',
        '.config/plasma-workspace/env',
        '.config/Kvantum'
    ]
    for d in common_dirs:
        libcalamares.utils.target_env_call(
            ['/usr/bin/mkdir', '-p', '/home/%s/%s' % (user,  d)])

    print('setup distribution specific settings')
    distro_settings = [
        ('kwinrc', '.config/'),
        ('plasma-org.kde.plasma.desktop-appletsrc', '.config/'),
        ('bookmarks.xml', '.local/share/konqueror/'),
        ('kdeglobals', '.config/'),
        ('kscreenlockerrc', '.config/'),
        ('konsolerc', '.config/'),
        ('breezerc', '.config/'),
        ('.bashrc', ''),
        ('.xinitrc.debug', ''),
        ('mimeapps.list', '.local/share/applications/'),
        ('xdg-user-dirs-update.desktop', '.config/autostart/'),
        ('octopi-notifier.desktop', '.config/autostart/'),
        ('croeso.desktop', '.config/autostart/'),
        ('kvantum.kvconfig', '.config/Kvantum/'),
        ('dolphinrc', '.config/'),
        ('katerc', '.config/'),
        ('plasmarc', '.config/'),
        ('plasmashellrc', '.config/'),
        ('startupconfig', '.config/'),
        ('startupconfigkeys', '.config/'),
        ('Linux.colorscheme', '.local/share/konsole/'),
        ('Shell.profile', '.local/share/konsole/')
    ]

    for f,  d in distro_settings:
        shutil.copy2('/etc/skel/%s' % f, '%s/home/%s/%s%s' %
                     (install_path,  user,  d,  f))

    libcalamares.utils.target_env_call(
        ['chown', '-R', '%s:users' % user, "/home/%s" % user])

    # Packagechooser@audio outcome set to Pipewire or Pulseaudio
    audio = libcalamares.globalstorage.value("packagechooser_audio")
    if audio == 'pipewire':
        print('Pipewire selected')

    if audio == 'pulseaudio':
        print('Pulseaudio selected')
        libcalamares.utils.target_env_call(['systemctl', '--global',
                                            'disable','pipewire'])
        libcalamares.utils.target_env_call(['systemctl', '--global',
                                            'disable','pipewire-pulse'])
        libcalamares.utils.target_env_call(['systemctl', '--global',
                                            'disable','wireplumber'])

    # switch to wayland session if plasmawayland found in Live mode
    if 'plasmawayland' in open('/etc/sddm.conf').read():
        print('Wayland session')
        sddm_conf_path = os.path.join(install_path, "etc/sddm.conf")
        text = []
        with open(sddm_conf_path, "r") as sddm_conf:
            text = sddm_conf.readlines()
            with open(sddm_conf_path, "w") as sddm_conf:
                for line in text:
                    if 'Session=plasma.desktop' in line:
                        line = 'Session=plasmawayland.desktop\n'
                    sddm_conf.write(line)
        sddm_conf.close()

    # fix SUID to capable permissions on iputils
    libcalamares.utils.target_env_call(
        ['setcap', 'cap_net_raw=ep', '/usr/bin/ping'])

    # set pacman.conf for kf5 needed repos
    #shutil.copy2('/etc/skel/pacman.conf', '%s/etc/pacman.conf' % install_path)

    # aquire ISO version for sysinfo call
    label = ""
    path = os.path.join(install_path, "etc/KaOS-release")
    p = subprocess.Popen('blkid', shell=True, stdout=subprocess.PIPE)
    for line in p.stdout.readlines():
        s = line.decode('ascii')
        s = s.rstrip('\n')
        label +=s

    print(label)
    if 'plasmawayland' in open('/etc/sddm.conf').read():
        m = re.search("KAOS6_\d{8}", label);
        print (m.group(0))
        lines = (m.group(0))
    else:
        m = re.search("KAOS6_\d{8}", label);
        print (m.group(0))
        lines = (m.group(0))

    if os.path.exists(path):
        with open(path, 'w') as f:
            for l in lines:
                f.write(l)
    f.close()


    print('configure users settings done')

    return None
