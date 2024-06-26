#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# === This file is part of Calamares - <http://github.com/calamares> ===
#
#   Copyright 2014, Philip Müller <philm@manjaro.org>
#   Copyright 2014, Teo Mrnjavac <teo@kde.org>
#   Copyright 2014-2022, Anke Boersma <demm@kaosx.us>
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
import collections
import re
import libcalamares
import subprocess


DesktopEnvironment = collections.namedtuple('DesktopEnvironment', ['executable', 'desktop_file'])

desktop_environments = [
    DesktopEnvironment('/usr/bin/startplasma-x11', 'plasma'), # Plasma 5 with X
    DesktopEnvironment('/usr/bin/startkde-wayland', 'plasmawayland'), # Plasma 5 with Wayland
]

def find_desktop_environment(root_mount_point):
    for desktop_environment in desktop_environments:
        if os.path.exists('%s%s' % (root_mount_point, desktop_environment.executable)) \
           and os.path.exists('%s/usr/share/xsessions/%s.desktop' % (root_mount_point, desktop_environment.desktop_file)):
            return desktop_environment
    return None

def set_autologin(username, displaymanagers, root_mount_point):
    """ Enables automatic login for the installed desktop managers """

    if "sddm" in displaymanagers:
        # Systems with Sddm as Desktop Manager
        sddm_conf_path = os.path.join(root_mount_point, "etc/sddm.conf")
        if os.path.isfile(sddm_conf_path):
            print('SDDM config file exists')
        else:
            libcalamares.utils.check_target_env_call(["sh", "-c", "sddm --example-config > /etc/sddm.conf"])
        text = []
        with open(sddm_conf_path, 'r') as sddm_conf:
            text = sddm_conf.readlines()
        with open(sddm_conf_path, 'w') as sddm_conf:
            for line in text:
                # User= line, possibly commented out
                if re.match('\\s*(?:#\\s*)?User=', line):
                    line = 'User={}\n'.format(username)
                # Session= line, commented out or with empty value
                if re.match('\\s*#\\s*Session=|\\s*Session=$', line):
                    default_desktop_environment = find_desktop_environment(root_mount_point)
                    if default_desktop_environment != None:
                        line = 'Session={}.desktop\n'.format(default_desktop_environment.desktop_file)
                sddm_conf.write(line)

    return None

def run():
    """ Configure display managers """
    # This module will try to set up (including autologin) a displaymanager.
    # Most distros will probably only ship one displaymanager.
    # If a displaymanager is in the list but not installed, this module quits with error.

    if "displaymanagers" in libcalamares.job.configuration:
        displaymanagers = libcalamares.job.configuration["displaymanagers"]

    if libcalamares.globalstorage.contains("displaymanagers"):
        displaymanagers = libcalamares.globalstorage.value("displaymanagers")

    if displaymanagers is None:
        return "No display managers selected for the displaymanager module.",\
               "The displaymanagers list is empty or undefined in both globalstorage and displaymanager.conf."

    username = libcalamares.globalstorage.value("autoLoginUser")
    root_mount_point = libcalamares.globalstorage.value("rootMountPoint")

    # Setup sddm
    if "sddm" in displaymanagers:
        if not os.path.exists("%s/usr/bin/sddm" % root_mount_point):
            return "sddm selected but not installed", ""

    if username != None:
        libcalamares.utils.debug(
            "Setting up autologin for user %s." % username)
        return set_autologin(username, displaymanagers, root_mount_point)

    return None
