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

    header: Kirigami.Heading {
        Layout.fillWidth: true
        height: 60
        horizontalAlignment: Qt.AlignHCenter
        verticalAlignment: Qt.AlignVCenter
        color: Kirigami.Theme.textColor
        font.weight: Font.Medium
        font.pointSize: 12
        text: "Please select an option for your install, or leave the default, Calligra"

    }

    ButtonGroup {
        id: radioGroup
    }

    Kirigami.CardsListView {
        id: view
        model: installModel

        ListModel {
            id: installModel

            ListElement {
                name: "Calligra"
                configName: "calligra"
                desc: "Calligra Suite is an office and graphic art suite by KDE. It contains applications for word processing, spreadsheets, presentation, vector graphics, and editing databases. <b>Default</b>"
                iconProp: "calligragemini"
            }
            ListElement {
                name: "LibreOffice"
                configName: "libreoffice"
                desc: "LibreOffice is a powerful and free office suite, used by millions of people around the world. It includes several applications that make it the most versatile Free and Open Source office suite on the market."
                iconProp: "libreoffice-starcenter"
            }
            ListElement {
                name: "No Office Suite"
                configName: "no_office_suite"
                desc: "If you don't want to install an office suite, just select No Office Suite. You can always add one (or more) later on your installed system as the need arrives."
                iconProp: "applications-graphics"
            }
            ListElement {
                name: "Minimal Install"
                configName: "minimal_install"
                desc: "Create a minimal Plasma Desktop install, remove all extra applications and decide later on what you would like to add to your system. Examples of what won't be on such an install, there will be no Office Suite, no media players, no image viewer or print support.  It will be just a desktop, file browser, package manager, text editor and simple web-browser."
                iconProp: "preferences-desktop"
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
                        checked: delegate.name == "Calligra" ? true : false
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
