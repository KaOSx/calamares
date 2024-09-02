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
        font.weight: Font.Medium
        font.pointSize: 12
        text: "Please select an audio option for your install, or leave the default, Pipewire"

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
                name: "Pipewire"
                configName: "pipewire"
                desc: "Pipewire is a multimedia framework designed from scratch that aims to provide:  
 * Graph based processing with support for feedback loops and atomic graph updates.
 * Flexible and extensible media format negotiation and buffer allocation.
 * Support for out-of-process processing graphs with minimal overhead.
 * Hard real-time capable plugins.
 * Achieve very low-latency for both audio and video processing.

The framework is used to build a modular daemon that can be configured to:
 * Be a low-latency audio server with features like PulseAudio and/or JACK
 * A video capture server that can manage hardware video capture devices.
 * A central hub where video can be made available for other applications."
                iconProp: "musique"
            }
            ListElement {
                name: "PulseAudio"
                configName: "pulsaudio"
                desc: "PulseAudio is a sound server, originally created to overcome the limitations of the Enlightened Sound Daemon (EsounD).  
It performs advanced operations on sound data as it passes between your application and hardware. Things like transferring audio to a different machine, changing the sample format or channel count, or mixing several sounds into one input/output, are easily achieved using PulseAudio"
                iconProp: "musicbrainz"
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
                        checked: delegate.name == "Pipewire" ? true : false
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
