/* Sample of QML progress tree.

   SPDX-FileCopyrightText: 2020 Adriaan de Groot <groot@kde.org>
   SPDX-FileCopyrightText: 2021 - 2022 Anke Boersma <demm@kaosx.us>
   SPDX-License-Identifier: GPL-3.0-or-later


   The progress tree (actually a list) is generally "vertical" in layout,
   with the steps going "down", but it could also be a more compact
   horizontal layout with suitable branding settings.

   This example emulates the layout and size of the widgets progress tree.
*/
import io.calamares.ui 1.0
import io.calamares.core 1.0

import QtQuick 2.3
import QtQuick.Layouts 1.3
import QtQuick.Controls 2.15

Rectangle {
    id: sideBar;
    color: Branding.styleString( Branding.SidebarBackground );
    height: 48;
    width: parent.width

    //Needs to come from /calamares/src/calamares/CalamaresWindow.cpp ?
    //property var debugModel: true

    RowLayout {
        anchors.fill: parent;
        spacing: 0;

        Item {
            Layout.fillHeight: true;
        }

        Repeater {
            model: ViewManager
            Rectangle {
                Layout.leftMargin: 0;
                Layout.fillWidth: true;
                Layout.alignment: Qt.AlignTop;
                height: 42;
                radius: 0;
                color: Branding.styleString( index == ViewManager.currentStepIndex ? Branding.SidebarBackgroundCurrent : Branding.SidebarBackground );

                Text {
                    anchors.verticalCenter: parent.verticalCenter;
                    anchors.horizontalCenter: parent.horizontalCenter
                    x: parent.x + 12;
                    color: Branding.styleString( index == ViewManager.currentStepIndex ? Branding.SidebarTextCurrent : Branding.SidebarText );
                    text: qsTr(display);
                    font.pointSize : index == ViewManager.currentStepIndex ? 10 : 9
                }

                Rectangle {
                    height: 2
                    width: 800
                    anchors.bottom: parent.bottom;
                    border.color: Branding.styleString(ViewManager.currentStepIndex === index ? Branding.SidebarTextCurrent : (ViewManager.currentStepIndex >= index ? Branding.SidebarTextCurrent : Branding.SidebarBackgroundCurrent))
                    border.width: 3

                    Image {
                        source: "pan-up-symbolic.svg"
                        id: image
                        anchors.verticalCenter: parent.verticalCenter;
                        anchors.verticalCenterOffset : -3
                        x: parent.x + 35;
                        fillMode: Image.PreserveAspectFit
                        height: 32
                        visible: index == ViewManager.currentStepIndex ? true : false
                    }
                }
            }
        }
    }
}
