/* === This file is part of Calamares - <https://github.com/calamares> ===
 *
 *   Copyright 2021, Anke Boersma <demm@kaosx.us>
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 */
import io.calamares.core 1.0
import io.calamares.ui 1.0

import QtQuick
import QtQuick.Controls
import QtQuick.Window
import QtQuick.Layouts
import QtQuick.Controls.Material
import org.kde.kirigami as Kirigami

Kirigami.ScrollablePage {
    width: 850
    height: 580
    Material.primary : Material.DeepPurple

    header: ToolBar {
        RowLayout {
            anchors.fill: parent
            Label {
                text: qsTr("<h1>License Agreement</h1>
                    <p>In case non-free was selected, this installer will install proprietary packages that have<br />
                    additional End User License Agreements (EULAs) attached to them.<br />
                    Please review the End User License Agreements (EULAs).</p>")
                font.pointSize: 10
                elide: Label.ElideRight
                horizontalAlignment: Qt.AlignHCenter
                verticalAlignment: Qt.AlignVCenter
                Layout.fillWidth: true
            }
        }
    }

    Loader {
        anchors.centerIn: parent
        source: "Nvidia.qml"
    }

    footer: ToolBar {
        RowLayout {
            anchors.fill: parent
            CheckBox {
                id: check
                checked: false
                onCheckedChanged: {
                    if ( ! checked ) {
                        config.packageChoice = "disagree"
                        print("license declined")
                    }
                    else {
                        config.packageChoice = "agree"
                        print( config.packageChoice )
                    }
                }
                //onCheckedChanged: config.updateGlobalStorage(checked)
                text: qsTr("I accept the terms and conditions above")
                Layout.alignment: Qt.AlignCenter
                font.pointSize: 11
            }
            ToolTip {
                visible: check.hovered
                text: "If you do not agree with the terms, proprietary software will not be installed, and open source alternatives will be used instead."
            }
        }
    }
}
