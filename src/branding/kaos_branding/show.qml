/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2015 - 2022 Anke Boersma <demm@kaosx.us>
 *   SPDX-FileCopyrightText: 2015, Teo Mrnjavac <teo@kde.org>
 *   SPDX-FileCopyrightText: 2022 Artem Grinev <agrinev@manjaro.org>
 *   SPDX-License-Identifier: GPL-3.0-or-later
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 */

import QtQuick 2.15;
//import calamares.slideshow 1.0;

Item {
    id: root

    function onActivate(){
        console.log("Slideshow) activated");
        timer.restart();
        slider.reset();
        img.reset();
    }

    function onLeave(){
        console.log("Slideshow) deactivated");
    }

    width: 940
    height: 600

    Timer {
        id: timer
        interval: 10000
        running: true
        repeat: true
        onTriggered: slider.currentSlideIndex++,img.currentSlideIndex++
    }

    MouseArea {
        anchors.fill: parent
        onClicked: {
            timer.restart();
            slider.currentSlideIndex++;
            img.currentSlideIndex++;
        }
    }

    Item {
        anchors.fill: parent
        Image {
            id: background
            anchors {
                fill: parent
                margins: -10
                bottomMargin: 0
            }

            source: "background.jpg"
            sourceSize.width: width
            sourceSize.height: height
        }

    }

    Slider {
        id: slider
        height: 50

        slides: [
            Dia {
                title: qsTr("installation")
                body: qsTr("After creating your chosen disk setup in the first 10 % the full copying of the ISO will take the longest of this install phase and will run until approximately 45%.")
            },
            Dia {
                title: qsTr("modules")
                body: qsTr("Once the ISO is copied some 25 post-install modules will run. This includes setting user specific options, removing Live Session only packages and adjusting hardware setup.")
            },
            Dia {
                title: qsTr("office suites")
                body: qsTr("The default Office Suite is LibreOffice.")
                footer: qsTr("Calligra is available in the repositories")
            },
            Dia {
                title: qsTr("Package Management")
                body: qsTr("For package management Octopi is the GUI application.")
                footer: qsTr("Pacman is the cli application.")
            },
            Dia {
                title: qsTr("internet")
                body: qsTr("Qt/KDE specific internet applications include the Falkon web-browser, KDE Connect for device Synchronization, Kaidan for chat and NeoChat, the Matrix client.")
            },
            Dia {
                title: qsTr("enjoy")
                body: qsTr("May using KaOS be a pleasant experience for you.")
                footer: qsTr("Don't hesitate to give your opinion about KaOS in the Forum")
            }

        ]
        anchors {
            centerIn: parent
            horizontalCenterOffset: 50
            verticalCenterOffset: 10
        }
    }
    Slider {
        id: img
        height: 50

        slides: [
            Dia {
                image: "konqi-base"
            },
            Dia {
                image: "konqi_hardware"
            },
            Dia {
                image: "konqi-business"
            },
            Dia {
                image: "konqi-system"
            },
            Dia {
                image: "konqi-internet"
            },
            Dia {
                image: "konqi"
            }
        ]
        anchors {
            centerIn: parent
            horizontalCenterOffset: -400
            verticalCenterOffset: -100
        }
    }
}

