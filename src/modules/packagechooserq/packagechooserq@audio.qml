/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2022 Anke Boersma <demm@kaosx.us>
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

    Rectangle {
        anchors.fill: parent
        color: "#f2f2f2"

        ButtonGroup {
            id: switchGroup
        }

        Column {
            id: column
            anchors.centerIn: parent
            spacing: 5

            Rectangle {
                //id: rectangle
                width: 800
                height: 260
                color: "#ffffff"
                radius: 10
                border.width: 0
                Text {
                    width: 600
                    height: 250
                    anchors.centerIn: parent
                    text: qsTr("<b>Pipewire</b> is a multimedia framework designed from scratch that aims to provide:<br/>
                                    - Graph based processing with support for feedback loops and atomic graph updates.<br/>
                                    - Flexible and extensible media format negotiation and buffer allocation.<br/>
                                    - Support for out-of-process processing graphs with minimal overhead.<br/>
                                    - Hard real-time capable plugins.<br/>
                                    - Achieve very low-latency for both audio and video processing.<br/><br/>
                                The framework is used to build a modular daemon that can be configured to:<br/>
                                    - Be a low-latency audio server with features like PulseAudio and/or JACK<br/>
                                    - A video capture server that can manage hardware video capture devices.<br/>
                                    - A central hub where video can be made available for other applications.")
                    font.pointSize: 10
                    anchors.verticalCenterOffset: 10
                    anchors.horizontalCenterOffset: 100
                    wrapMode: Text.WordWrap
                }

                Switch {
                    id: element2
                    x: 600
                    y: 230
                    width: 187
                    height: 14
                    text: qsTr("Pipewire")
                    checked: true
                    hoverEnabled: true
                    ButtonGroup.group: switchGroup

                    indicator: Rectangle {
                        implicitWidth: 40
                        implicitHeight: 14
                        radius: 10
                        color: element2.checked ? "#3498db" : "#B9B9B9"
                        border.color: element2.checked ? "#3498db" : "#cccccc"

                        Rectangle {
                            x: element2.checked ? parent.width - width : 0
                            y: (parent.height - height) / 2
                            width: 20
                            height: 20
                            radius: 10
                            color: element2.down ? "#cccccc" : "#ffffff"
                            border.color: element2.checked ? (element2.down ? "#3498db" : "#3498db") : "#999999"
                        }
                    }

                    onCheckedChanged: {
                        if ( ! checked ) {
                            print("Pipewire not used")
                        }
                        else {
                            config.packageChoice = "pipewire"
                            print( config.packageChoice )
                        }
                    }
                }

                Image {
                    id: image2
                    x: 8
                    y: 25
                    height: 150
                    fillMode: Image.PreserveAspectFit
                    source: "images/pipewire.png"
                }
            }

            Rectangle {
                width: 800
                height: 180
                radius: 10
                border.width: 0
                Text {
                    width: 600
                    height: 160
                    anchors.centerIn: parent
                    text: qsTr("<b>PulseAudio</b> is a sound server, originally created to overcome the limitations of the Enlightened Sound Daemon (EsounD).<br/>
                    It performs advanced operations on sound data as it passes between your application and hardware. Things like transferring audio to a different machine, changing the sample format or channel count, or mixing several sounds into one input/output, are easily achieved using PulseAudio.")
                    font.pointSize: 10
                    anchors.verticalCenterOffset: 10
                    anchors.horizontalCenterOffset: 90
                    wrapMode: Text.WordWrap
                }

                Switch {
                    id: element1
                    x: 600
                    y: 150
                    width: 187
                    height: 14
                    text: qsTr("Pulseaudio")
                    checked: false
                    hoverEnabled: true
                    ButtonGroup.group: switchGroup

                    indicator: Rectangle {
                        implicitWidth: 40
                        implicitHeight: 14
                        radius: 10
                        color: element1.checked ? "#3498db" : "#B9B9B9"
                        border.color: element1.checked ? "#3498db" : "#cccccc"

                        Rectangle {
                            x: element1.checked ? parent.width - width : 0
                            y: (parent.height - height) / 2
                            width: 20
                            height: 20
                            radius: 10
                            color: element1.down ? "#cccccc" : "#ffffff"
                            border.color: element1.checked ? (element1.down ? "#3498db" : "#3498db") : "#999999"
                        }
                    }

                    onCheckedChanged: {
                        if ( ! checked ) {
                            print("not used")
                        }
                        else {
                            print("Pulse")
                            config.packageChoice = "pulseaudio"
                        }
                    }
                }

                Image {
                    id: image
                    x: 20
                    y: 25
                    height: 130
                    fillMode: Image.PreserveAspectFit
                    source: "images/pulseaudio.png"
                }

            }

            Rectangle {
                width: 700
                height: 50
                color: "#f2f2f2"
                border.width: 0
                Text {
                    height: 25
                    anchors.centerIn: parent
                    text: qsTr("Please select an audio option for your install, or leave the default <strong>Pipewire</strong>.")
                    font.pointSize: 10
                    wrapMode: Text.WordWrap
                }
            }
        }
    }

}
