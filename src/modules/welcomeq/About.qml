/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2020 - 2024 Anke Boersma <demm@kaosx.us>
 *   SPDX-License-Identifier: GPL-3.0-or-later
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 */

import io.calamares.core 1.0
import io.calamares.ui 1.0

import QtQuick
import QtQuick.Controls
import QtQuick.Layouts

Item {
    width: parent.width
    height: parent.height

    property var appName: "Calamares"
    property var appVersion: "3.3"

    Text {
        width: parent.width
        anchors.centerIn: parent
        horizontalAlignment: Text.AlignHCenter
        font.pointSize: 10
        wrapMode: Text.WordWrap
        textFormat: Text.MarkdownText
        text: qsTr("# %1
**%2**

for **%3**

Copyright 2014-2017 Teo Mrnjavac, teo@kde.org

Copyright 2017-2022 Adriaan de Groot, groot@kde.org

Copyright 2014-2024 Anke Boersma, demm@kaosx.us

Thanks to [the Calamares team](href='https://calamares.io/team/)

and the [KaOS translators team](href='https://www.transifex.com/kaos/kaos/)." )
            .arg(appName)
            .arg(appVersion)
            .arg(Branding.string(Branding.VersionedName))

            onLinkActivated: Qt.openUrlExternally(link)

            MouseArea {
                anchors.fill: parent
                acceptedButtons: Qt.NoButton
                cursorShape: parent.hoveredLink ? Qt.PointingHandCursor : Qt.ArrowCursor
            }
    }

    Image {
        anchors.horizontalCenter: parent.horizontalCenter
        anchors.top: parent.top
        anchors.topMargin: 10
        height: 100
        fillMode: Image.PreserveAspectFit
        source: "img/squid.png"
    }

}
