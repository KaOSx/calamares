/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2020 - 2022 Anke Boersma <demm@kaosx.us>
 *   SPDX-License-Identifier: GPL-3.0-or-later
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 */

import io.calamares.core 1.0
import io.calamares.ui 1.0

import QtQuick 2.5
import QtQuick.Controls
import QtQml 2.14
import QtQuick.Window 2.2
import QtQuick.VirtualKeyboard
import QtQuick.VirtualKeyboard.Settings
import "content"

Item {
    //width: 800
    //height: 600
    width: parent.width
    height: parent.height

    Item {
        id: appContainer
        width: parent.width
        height: parent.height
        anchors.centerIn: parent
        UserInput {
            id: virtualKeyboard
            anchors.left: parent.left
            anchors.top: parent.top
            anchors.right: parent.right
            anchors.bottom: parent.bottom
        }

        /*  Keyboard input panel.

            The keyboard is anchored to the bottom of the application.
        */
        InputPanel {
            id: inputPanel
            z: 89
            y: yPositionWhenHidden
            x: 0 //(parent.width-parent.height) / 15
            width: parent.width

            property real yPositionWhenHidden: parent.height
            //property bool activated: false
            active: false //activated && Qt.inputMethod.visible

            states: State {
                name: "visible"
                when: inputPanel.active
                PropertyChanges {
                    target: inputPanel
                    y: inputPanel.yPositionWhenHidden - inputPanel.height
                }
            }
            transitions: Transition {
                id: inputPanelTransition
                from: ""
                to: "visible"
                reversible: true
                enabled: !VirtualKeyboardSettings.fullScreenMode
                ParallelAnimation {
                    NumberAnimation {
                        properties: "y"
                        duration: 250
                        easing.type: Easing.InOutQuad
                    }
                }
            }
            Binding {
                target: InputContext
                property: "animating"
                value: inputPanelTransition.running
                restoreMode: Binding.RestoreBinding
            }
        }

    }
}
