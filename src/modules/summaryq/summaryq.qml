/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2021 - 2022 Anke Boersma <demm@kaosx.us>
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
import org.kde.kirigami 2.7 as Kirigami
import QtQuick.Window

Kirigami.ScrollablePage {
    width: 860 //parent.width
    height: 640 //parent.height

    Kirigami.Theme.backgroundColor: "#EFF0F1"
    Kirigami.Theme.textColor: "#1F1F1F"

    header: Kirigami.Heading {
        Layout.fillWidth: true
        height: 100
        horizontalAlignment: Qt.AlignHCenter
        color: Kirigami.Theme.textColor
        font.weight: Font.Medium
        font.pointSize: 12
        text: config.message

    }

    RowLayout {
        width: parent.width

        Component {
            id: _delegate

            Rectangle {
                id: rect
                border.color: "#BDC3C7"
                width: parent.width - 80
                implicitHeight: message.implicitHeight + title.implicitHeight + 20
                anchors.horizontalCenter: parent.horizontalCenter

                Item {
                    width: parent.width - 80
                    implicitHeight: message.implicitHeight + title.implicitHeight + 20

                    Kirigami.FormLayout {

                        GridLayout {
                            anchors {
                                //left: parent.left
                                top: parent.top
                                right: parent.right
                            }
                            rowSpacing: Kirigami.Units.largeSpacing
                            columnSpacing: Kirigami.Units.largeSpacing
                            columns: width > Kirigami.Units.gridUnit * 20 ? 4 : 2

                            Image {
                                id: image
                                Layout.maximumHeight: Kirigami.Units.iconSizes.huge
                                Layout.preferredWidth: height
                                Layout.alignment: Qt.AlignTop
                                fillMode: Image.PreserveAspectFit
                                source: summary.count === 7 ?
                                    ( index === 0 ? "img/license.svg"
                                    : ( index === 1 ? "img/lokalize.svg"
                                    : ( index === 2 ? "img/keyboard.svg"
                                    : ( index === 3 ? "qrc:/data/images/partition-manual.svg"
                                    : ( index === 4 ? "img/audio.svg"
                                    : ( index === 5 ? "qrc:/data/images/partition-partition.svg"
                                    : ( index === 6 ? "img/bootloader.svg"
                                    : "qrc:/data/images/partition-partition.svg" ) ) ) ) ) ) )
                                    : ( index === 0 ? "img/lokalize.svg"
                                    : ( index === 1 ? "img/keyboard.svg"
                                    : ( index === 2 ? "qrc:/data/images/partition-manual.svg"
                                    : ( index === 3 ? "img/audio.svg"
                                    : ( index === 4 ? "qrc:/data/images/partition-partition.svg"
                                    : ( index === 5 ? "img/bootloader.svg"
                                    : "qrc:/data/images/partition-partition.svg" ) ) ) ) ) )
                            }
                            ColumnLayout {

                                Label {
                                    id: title
                                    Layout.fillWidth: true
                                    wrapMode: Text.WordWrap
                                    text: model.title
                                    font.weight: Font.Medium
                                    font.pointSize: 16
                                }
                                Rectangle {
                                    height: 2
                                    width: 200
                                    border.color: "#BDC3C7"
                                }
                                Label {
                                    id: message
                                    Layout.fillWidth: true
                                    text: model.message
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    ListView {
        id: summary
        anchors.fill: parent
        spacing: 20
        model: config.summaryModel
        delegate: _delegate
    }
}
