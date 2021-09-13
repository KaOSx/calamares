/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2021 Anke Boersma <demm@kaosx.us>
 *   SPDX-License-Identifier: GPL-3.0-or-later
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 */

import io.calamares.core 1.0
import io.calamares.ui 1.0

import QtQuick 2.15
import QtQuick.Controls 2.15
import QtQuick.Layouts 1.3

Item {
    width:  parent.width
    height: parent.height

    //property var config.PackageChoice: Global.value("firmwareType") === "efi" ? "systemd-bot" : "grub"
    //property var grubEntry: (Global.value("firmwareType") === "bios") ?

    Rectangle {
        anchors.fill: parent
        color: "#f2f2f2"

        ButtonGroup {
            id: switchGroup
        }

        Loader {
            //id: image
            anchors.centerIn: parent
            source: Global.value("firmwareType") === "efi" ? "UEFI.qml" : "BIOS.qml"
            //source: "BIOS.qml"
        }
    }

}
