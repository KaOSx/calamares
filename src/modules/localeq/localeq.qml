/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2020 Adriaan de Groot <groot@kde.org>
 *   SPDX-FileCopyrightText: 2020 Anke Boersma <demm@kaosx.us>
 *   SPDX-License-Identifier: GPL-3.0-or-later
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 */

import io.calamares.core 1.0
import io.calamares.ui 1.0

import QtQuick 2.10
import QtQuick.Controls 2.10
import QtQuick.Layouts 1.3
import org.kde.kirigami 2.7 as Kirigami

Page {
    width: 800 // parent.width
    height: 550 //parent.height

    property var hasInternet: true
    function getInt(format) {
        var requestURL = "https://example.org/";
        var xhr = new XMLHttpRequest;

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {

                if (xhr.status !== 200) {
                    console.log("Disconnected!!");
                    var connected = false
                    hasInternet = connected
                    return;
                }

                else {
                    console.log("Connected!!");
                }
            }
        }
        xhr.open("GET", requestURL, true);
        xhr.send();
    }
    Component.onCompleted: {
        getInt();
    }

    /*function onActivate() {
        /* If you want the map to follow Calamares's GeoIP
         * lookup or configuration, call the update function
         * here, and disable the one at onCompleted in Map.qml.

        if (Network.hasInternet) { image.item.getIpOffline() }
    }*/

    Loader {
        id: image
        anchors.horizontalCenter: parent.horizontalCenter
        width: parent.width
        height: parent.height / 1.28
        // Network is in io.calamares.core
        //source: Network.hasInternet ? "Map.qml" : "Offline.qml"
        source: hasInternet ? "Map.qml" : "Offline.qml"
        //source: "Map.qml"
    }

    RowLayout {
        anchors.bottom: parent.bottom
        anchors.bottomMargin : 20
        width: parent.width

        Kirigami.FormLayout {
            id: lang

            GridLayout {
                anchors {
                    left: parent.left
                    top: parent.top
                    right: parent.right
                }
                rowSpacing: Kirigami.Units.largeSpacing
                columnSpacing: Kirigami.Units.largeSpacing

                Image {
                    source: "img/locale.svg"
                    Layout.fillHeight: true
                    Layout.maximumHeight: Kirigami.Units.iconSizes.medium
                    Layout.preferredWidth: height
                }
                ColumnLayout {
                    Label {
                        Layout.fillWidth: true
                        wrapMode: Text.WordWrap
                        text: config.currentLanguageStatus
                    }
                    Kirigami.Separator {
                        Layout.fillWidth: true
                    }
                    Label {
                        Layout.fillWidth: true
                        wrapMode: Text.WordWrap
                        text: config.currentLCStatus
                    }
                }
                Button {
                    Layout.alignment: Qt.AlignRight|Qt.AlignVCenter
                    Layout.columnSpan: 2
                    text: qsTr("Change")
                    //onClicked: console.log("Adjust Language clicked");
                    onClicked: {
                        onClicked: load.source = "i18n.qml"
                    }
                }
            }
        }

    }
    Loader {
        id:load
        anchors.fill: parent
    }
}
