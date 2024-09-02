/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2021 - 2024 Anke Boersma <demm@kaosx.us>
 *   SPDX-License-Identifier: GPL-3.0-or-later
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 */

import io.calamares.core 1.0
import io.calamares.ui 1.0

import QtQuick
import QtQuick.Controls
import QtQuick.Controls as QQC2
import QtQuick.Layouts
import org.kde.kirigami as Kirigami

Kirigami.ScrollablePage {

    width: 860 //parent.width
    height: 640 //parent.height

    Kirigami.Theme.backgroundColor: "#EFF0F1"
    //Kirigami.Theme.textColor: "#1F1F1F"

    header: Kirigami.Heading {
        Layout.fillWidth: true
        height: 60
        horizontalAlignment: Qt.AlignHCenter
        verticalAlignment: Qt.AlignVCenter
        color: Kirigami.Theme.textColor
        level: 2
        text: "Please select a bootloader option for your install, or leave the default, systemd-boot"

    }

    ButtonGroup {
        id: radioGroup
    }

    Kirigami.CardsListView {
        id: view
        //model: ["Calligra", "LibreOffice", "No", "Minimal"]
        model: installModel

        ListModel {
            id: installModel

            ListElement {
                name: "Systemd Boot"
                configName: "systemd-boot"
                desc: "Systemd-boot is a UEFI boot manager which executes configured EFI images. The default entry is selected by a configured pattern (glob) or an on-screen menu and is simple to configure.."
                iconProp: "amd"
            }
            ListElement {
                name: "rEFInd"
                configName: "refind"
                desc: "rEFInd is a fork of the earlier rEFIt boot manager. It is designed to be platform-neutral and to simplify booting multiple operating systems."
                iconProp: "asunder"
            }
            ListElement {
                name: "No Bootloader"
                configName: "no_bootloader"
                desc: "No bootloader selected. Selecting no bootloader might result in an un-bootable system if you don't already have a bootloader were you can add this install to."
                iconProp: "applications-graphics"
            }
        }

        delegate: Kirigami.AbstractCard {
            id: delegate
        required property string name
        required property string configName
        required property string desc
        required property string iconProp
            //NOTE: never put a Layout as contentItem as it will cause binding loops
            //SEE: https://bugreports.qt.io/browse/QTBUG-66826
            contentItem: Item {
                implicitWidth: delegateLayout.implicitWidth
                implicitHeight: delegateLayout.implicitHeight
                GridLayout {
                    id: delegateLayout
                    anchors {
                        left: parent.left
                        top: parent.top
                        right: parent.right
                        //IMPORTANT: never put the bottom margin
                    }
                    rowSpacing: Kirigami.Units.largeSpacing
                    columnSpacing: Kirigami.Units.largeSpacing
                    columns: width > Kirigami.Units.gridUnit * 20 ? 4 : 2
                    Kirigami.Icon {
                        source: delegate.iconProp
                        Layout.fillHeight: true
                        Layout.maximumHeight: Kirigami.Units.iconSizes.huge
                        Layout.preferredWidth: height
                    }
                    ColumnLayout {
                        Kirigami.Heading {
                            level: 2
                            Text{
                                text: qsTr("Option: ")+ delegate.name
                                font.pointSize: 14
                                textFormat: Text.MarkdownText
                            }
                        }
                        Kirigami.Separator {
                            Layout.fillWidth: true
                        }
                        QQC2.Label {
                            Layout.fillWidth: true
                            wrapMode: Text.WordWrap
                            text: qsTr(delegate.desc)
                        }
                    }
                    QQC2.RadioButton {
                        Layout.alignment: Qt.AlignRight|Qt.AlignVCenter
                        Layout.columnSpan: 2
                        text: qsTr("Select")
                        ButtonGroup.group: radioGroup
                        checked: delegate.name == "Systemd Boot" ? true : false
                        onCheckedChanged: {
                            config.packageChoice = delegate.configName
                            print( config.packageChoice )}
                            //print( delegate.configName )}
                    }
                }
            }
        }
    }
}
