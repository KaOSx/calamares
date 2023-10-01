/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2020 Adriaan de Groot <groot@kde.org>
 *   SPDX-FileCopyrightText: 2020 - 2022 Anke Boersma <demm@kaosx.us>
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
import QtQuick.Window

Page
{
    id: welcome
    width: parent.width
    height: parent.height

    Item {
        width: parent.width
        height: parent.height

        Text {
            id: welcomeTopText
            anchors.horizontalCenter: parent.horizontalCenter
            anchors.top: parent.top
            horizontalAlignment: Text.AlignHCenter
            padding: 20
            // In QML, QString::arg() only takes one argument
            text: qsTr("<h3>Welcome to the %1 <quote>%2</quote> installer</h3>
            <p>This program will ask you some questions and set up %1 on your computer.</p>").arg(Branding.string(Branding.ProductName)).arg(Branding.string(Branding.Version))
        }
        Image {
            id: welcomeImage
            anchors.centerIn: parent
            // imagePath() returns a full pathname, so make it refer to the filesystem
            // .. otherwise the path is interpreted relative to the "call site", which
            // .. might be the QRC file.
            source: "file:/" + Branding.imagePath(Branding.ProductWelcome)
            sourceSize.width: width
            sourceSize.height: height
            fillMode: Image.PreserveAspectFit
        }

        Requirements {
            visible: !config.requirementsModel.satisfiedRequirements
        }

        Drawer {
            id: drawer
            width: 0.4 * welcome.width
            height: welcome.height
            edge: Qt.RightEdge

            ScrollView {
                id: scroll1
                anchors.fill: parent
                contentHeight: 800
                ScrollBar.horizontal.policy: ScrollBar.AlwaysOff

                ListView {
                    id: list1
                    focus: true
                    clip: true
                    width: parent.width

                    model: config.languagesModel
                    currentIndex: config.localeIndex
                    delegate: ItemDelegate {

                        property variant currentLanguage: model
                        hoverEnabled: true
                        width: parent.width
                        implicitHeight: 24
                        highlighted: ListView.isCurrentItem
                        Label {
                            Layout.fillHeight: true
                            Layout.fillWidth: true
                            horizontalAlignment: Text.AlignHCenter
                            width: parent.width
                            height: 24
                            color: highlighted ? "#eff0f1" : "#1F1F1F"
                            text: model.label + ' - <font size="-1" color="#808080">' + model.englishLabel + '</font>'
                            background: Rectangle {

                                color: highlighted || hovered ? "#3498DB" : "#ffffff"
                                opacity: highlighted || hovered ? 0.5 : 0.9
                            }

                            MouseArea {
                                hoverEnabled: true
                                anchors.fill: parent
                                cursorShape: Qt.PointingHandCursor
                                onClicked: {
                                    list1.currentIndex = index
                                    drawer.close()
                                }
                            }
                        }
                    }
                    onCurrentIndexChanged: config.localeIndex = currentIndex
                }
            }
        }

        Rectangle {
            id: languageBox
            anchors.bottom: parent.bottom
            anchors.horizontalCenter: parent.horizontalCenter
            anchors.bottomMargin: parent.height / 12
            width: parent.width / 2
            height: 36
            color: "transparent"

            Text {
                id: languageText
                anchors.horizontalCenter: parent.horizontalCenter
                horizontalAlignment: Text.AlignHCenter
                anchors.centerIn: parent
                leftPadding: 5
                text: qsTr("Current Language:&nbsp;") + "<b>" + list1.currentItem.currentLanguage.label + "</b>"
            }
            Image {
                source: "img/locale.svg"
                anchors.verticalCenter: parent.verticalCenter
                anchors.right: languageText.left
                fillMode: Image.PreserveAspectFit
                height: 32
            }
        }

        Rectangle {
            id: languageBar
            anchors.top: languageBox.bottom
            anchors.horizontalCenter: parent.horizontalCenter
            //anchors.bottomMargin: parent.height / 30
            width: parent.width / 5
            height: 36
            color: mouseBar.containsMouse ? "#eff0f1" : "#e6e9ea";

            MouseArea {
                id: mouseBar
                anchors.fill: parent;
                cursorShape: Qt.PointingHandCursor
                hoverEnabled: true

                Text {
                    anchors.centerIn: parent
                    text: qsTr("Select Language")
                    font.pointSize : 10
                }
                Image {
                    source: "img/pan-end-symbolic.svg"
                    anchors.centerIn: parent
                    anchors.horizontalCenterOffset : parent.width / 2.5
                    fillMode: Image.PreserveAspectFit
                    height: 22
                }

                onClicked: {
                    drawer.open()
                }
            }
        }

        ColumnLayout {
            id: buttonBar
            anchors.left: parent.left;
            anchors.verticalCenter: parent.verticalCenter
            width: 32
            height: 400
            spacing: 1

            Rectangle {
                Layout.fillWidth: true;
                Layout.preferredHeight: parent.height / 2.4;
                color: mouseOne.containsMouse ? "#e6e9ea" : "#d9dcde";
                visible: config.knownIssueUrl !== ""

                MouseArea {
                    id: mouseOne
                    anchors.fill: parent;
                    cursorShape: Qt.PointingHandCursor
                    hoverEnabled: true

                    Text {
                        anchors.centerIn: parent
                        text: qsTr("Known Issues")
                        font.pointSize : 8
                        rotation : 270
                    }

                    onClicked: Qt.openUrlExternally(config.knownIssuesUrl)
                }
            }

            Rectangle {
                Layout.preferredHeight: parent.height / 2.8;
                Layout.fillWidth: true
                color: mouseTwo.containsMouse ? "#f4f5f6" : "#e6e9ea";
                visible: config.ReleaseNotesUrl !== ""

                MouseArea {
                    id: mouseTwo
                    anchors.fill: parent;
                    cursorShape: Qt.PointingHandCursor
                    hoverEnabled: true
                    Text {
                        anchors.centerIn: parent
                        text: qsTr("Release Notes")
                        font.pointSize : 8
                        rotation : 270
                    }

                    onClicked: {
                        notesDrawer.open()
                    }
                }
            }

            Rectangle {
                height: parent.height / 3.5;
                Layout.fillWidth: true;
                color: mouseThree.containsMouse ? "#e6e9ea" : "#d9dcde";
                visible: config.donateUrl !== ""

                MouseArea {
                    id: mouseThree
                    anchors.fill: parent;
                    cursorShape: Qt.PointingHandCursor
                    hoverEnabled: true
                    Text {
                        anchors.centerIn: parent
                        text: qsTr("Donate")
                        font.pointSize : 8
                        rotation : 270
                    }

                    onClicked: Qt.openUrlExternally(config.donateUrl)
                }
            }
        }

        RowLayout {
            id: about
            anchors.right: parent.right;
            anchors.top: parent.top
            width: 48
            height: 32
            spacing: 1

            Rectangle {
                Layout.fillHeight: true;
                Layout.preferredWidth: parent.width;
                color: mouseAbout.containsMouse ? "#e6e9ea" : "transparent";
                //enabled: true
                visible: true

                MouseArea {
                    id: mouseAbout
                    anchors.fill: parent;
                    cursorShape: Qt.PointingHandCursor
                    hoverEnabled: true

                    Image {
                        source: "img/about.svg"
                        anchors.centerIn: parent
                        fillMode: Image.PreserveAspectFit
                        height: 28
                    }

                    onClicked: aboutDrawer.open()
                }
            }
        }

        Drawer {
            id: aboutDrawer
            width: 0.4 * welcome.width
            height: welcome.height
            edge: Qt.LeftEdge

            About {
                anchors.fill: parent
            }
        }
        Drawer {
            id: notesDrawer
            width: 0.85 * welcome.width
            height: welcome.height
            edge: Qt.RightEdge

            ScrollView {
                id: notes
                anchors.fill: parent
                contentHeight: 4200
                ScrollBar.horizontal.policy: ScrollBar.AlwaysOff

                Loader {
                    //id: image
                    anchors.horizontalCenter: parent.horizontalCenter
                    width: parent.width
                    //height: parent.height / 1.28
                    source: "file:/usr/share/calamares/release_notes_welcomeq.qml"
                }
            }
        }
    }
}
