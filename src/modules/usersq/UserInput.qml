/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2020 - 2022 Anke Boersma <demm@kaosx.us>
 *   SPDX-FileCopyrightText: 2021 Adriaan de Groot <groot@kde.org>
 *   SPDX-License-Identifier: GPL-3.0-or-later
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 */

import io.calamares.core 1.0
import io.calamares.ui 1.0

import QtQuick 2.15
import QtQuick.Controls 2.15
import QtQuick.Controls 2.15 as QQC2
import QtQuick.Layouts 1.3

import Qt5Compat.GraphicalEffects
import QtQuick.Window 2.3
import QtQuick.VirtualKeyboard
import "content"

import org.kde.kirigami 2.7 as Kirigami

Item {
    // You can hard-code a color here, or bind to a Kirigami theme color,
    // or use a color from Calamares branding, or ..
    readonly property color unfilledFieldColor: "#FBFBFB" //Kirigami.Theme.backgroundColor
    readonly property color positiveFieldColor: "#F0FFF0" //Kirigami.Theme.positiveBackgroundColor
    readonly property color negativeFieldColor: "#EBCED1" //Kirigami.Theme.negativeBackgroundColor
    readonly property color unfilledFieldOutlineColor: "#F1F1F1"
    readonly property color positiveFieldOutlineColor: "#DCFFDC"
    readonly property color negativeFieldOutlineColor: "#BE5F68"
    readonly property color headerTextColor: "#1F1F1F"
    readonly property color commentsColor: "#6D6D6D"

    width: parent.width
    height: parent.height

    Label {
        id: header
        z: 999
        width: parent.width
        height: 60
        horizontalAlignment: Qt.AlignHCenter
        color: headerTextColor
        background: Rectangle {
            color: Kirigami.Theme.backgroundColor
        }
        font.weight: Font.Medium
        font.pointSize: 12
        text: qsTr("Pick your user name and credentials to login and perform admin tasks")
    }

    QQC2.Button {
        id: virtualKeyboardButton
        z: 999
        anchors.top: parent.top
        anchors.right: parent.right
        anchors.margins: 10
        icon.width: 32
        icon.height: 32
        ToolTip.delay: 500
        ToolTip.timeout: 5000
        ToolTip.visible: hovered
        ToolTip.text: qsTr("Virtual Keyboard")
        icon.name: inputPanel.active ? "input-keyboard-virtual-on" : "input-keyboard-virtual-off"
        onClicked: {
            inputPanel.active = !inputPanel.active
            _userNameField.focus = true
        }
    }

    Flickable {
        id: scroll
        width: parent.width
        height: parent.height
        topMargin: 80
        contentHeight: 800

        ScrollBar.vertical: ScrollBar {
            id: fscrollbar
            width: 5
            policy: ScrollBar.AlwaysOn
        }

        function scrollToY(y) {
            scrollAnimation.to = y
            scrollAnimation.start()
        }
        NumberAnimation on contentY {
            id: scrollAnimation
            duration: 350
        }

        ColumnLayout {
            id: _formLayout
            width: parent.width / 1.2
            spacing: Kirigami.Units.smallSpacing
            anchors.horizontalCenter: parent.horizontalCenter

            Column {
                Layout.fillWidth: true
                spacing: Kirigami.Units.smallSpacing

                Label {
                    text: qsTr("What is your name?")
                }

                RowLayout {
                    width: parent.width
                    spacing: 10

                    Image {
                        source: _userNameField.text.length ? "content/users_g.svg" : "content/users.svg"
                        fillMode: Image.PreserveAspectFit
                        sourceSize.height: 28
                    }

                    TextField {
                        id: _userNameField
                        Layout.fillWidth: true
                        enterKeyAction: EnterKeyAction.Next
                        onAccepted: _userLoginField.focus = true
                        enabled: config.isEditable("fullName")
                        placeholderText: qsTr("Your Full Name")
                        text: config.fullName
                        onTextChanged: config.setFullName(text)
                    }
                }
            }

            Column {
                Layout.fillWidth: true
                spacing: Kirigami.Units.smallSpacing

                Label {
                    width: parent.width
                    text: qsTr("What name do you want to use to log in?")
                }

                RowLayout {
                    width: parent.width
                    spacing: 10

                    Image {
                        source: _userLoginField.text.length
                            ? ( _userLoginField.acceptableInput
                            ? ( _userLoginField.text === "root"
                            ? "content/users_r.svg"
                            : "content/users_g.svg" )
                            : "content/users_r.svg" )
                            : "content/users.svg"
                        fillMode: Image.PreserveAspectFit
                        sourceSize.height: 28
                    }

                    TextField {
                        id: _userLoginField
                        enterKeyAction: EnterKeyAction.Next
                        onAccepted: _hostName.focus = true
                        Layout.fillWidth: true
                        enabled: config.isEditable("loginName")
                        placeholderText: qsTr("Login Name")
                        text: config.loginName
                        inputMethodHints: Qt.ImhNoAutoUppercase | Qt.ImhPreferLowercase
                        validator: RegularExpressionValidator { regularExpression: /[a-z_][a-z0-9_-]*[$]?$/ }

                        //onTextChanged: config.setLoginName(text)
                        onTextChanged: acceptableInput
                            ? ( _userLoginField.text === "root"
                            ? forbiddenMessage.visible=true
                            : ( config.setLoginName(text),
                            userMessage.visible = false,forbiddenMessage.visible=false ) )
                            : ( userMessage.visible = true,console.log("Invalid") )
                    }
                }

                Label {
                    width: parent.width
                    text: qsTr("If more than one person will use this computer, you can create multiple accounts after installation.")
                    font.pointSize: 8
                    color: commentsColor
                }
            }

            Kirigami.InlineMessage {
                id: userMessage
                Layout.fillWidth: true
                implicitHeight: 28
                showCloseButton: true
                icon.source: "tools-report-bug"
                visible: false
                type: Kirigami.MessageType.Error
                text: qsTr("Only lowercase letters, numbers, underscore and hyphen are allowed.")
            }

            Kirigami.InlineMessage {
                id: forbiddenMessage
                Layout.fillWidth: true
                implicitHeight: 28
                showCloseButton: true
                icon.source: "tools-report-bug"
                visible: false
                type: Kirigami.MessageType.Error
                text: qsTr("root is not allowed as username.")
            }

            Column {
                Layout.fillWidth: true
                spacing: Kirigami.Units.smallSpacing

                Label {
                    width: parent.width
                    text: qsTr("What is the name of this computer?")
                }

                RowLayout {
                    width: parent.width
                    spacing: 10

                    Image {
                        source: _hostName.text.length
                            ? ( _hostName.acceptableInput
                            ? ( _hostName.text === "localhost"
                            ? "content/users_r.svg"
                            : "content/users_g.svg" )
                            : "content/users_r.svg" )
                            : "content/users.svg"
                        fillMode: Image.PreserveAspectFit
                        sourceSize.height: 28
                    }

                    TextField {
                        id: _hostName
                        enterKeyAction: EnterKeyAction.Next
                        onAccepted: _passwordField.focus = true
                        Layout.fillWidth: true
                        placeholderText: qsTr("Computer Name")
                        text: config.hostname
                        validator: RegularExpressionValidator { regularExpression: /[a-zA-Z0-9][-a-zA-Z0-9_]+/ }

                        onTextChanged: acceptableInput
                            ? ( _hostName.text === "localhost"
                            ? forbiddenHost.visible=true
                            : ( config.setHostName(text),
                            hostMessage.visible = false,forbiddenHost.visible = false ) )
                            : hostMessage.visible = true
                    }
                }

                Label {
                    width: parent.width
                    text: qsTr("This name will be used if you make the computer visible to others on a network.")
                    font.pointSize: 8
                    color: commentsColor
                }
            }

            Kirigami.InlineMessage {
                id: hostMessage
                Layout.fillWidth: true
                implicitHeight: 28
                showCloseButton: true
                icon.source: "tools-report-bug"
                visible: false
                type: Kirigami.MessageType.Error
                text: qsTr("Only letters, numbers, underscore and hyphen are allowed, minimal of two characters.")
            }

            Kirigami.InlineMessage {
                id: forbiddenHost
                Layout.fillWidth: true
                implicitHeight: 28
                showCloseButton: true
                icon.source: "tools-report-bug"
                visible: false
                type: Kirigami.MessageType.Error
                text: qsTr("localhost is not allowed as hostname.")
            }

            Column {
                Layout.fillWidth: true
                spacing: Kirigami.Units.smallSpacing

                Label {
                    width: parent.width
                    text: qsTr("Choose a password to keep your account safe.")
                }

                RowLayout {
                    width: parent.width
                    spacing: 10

                    Image {
                        source: _verificationPasswordField.text.length
                            ? ( _passwordField.text === _verificationPasswordField.text
                            ? "content/users_g.svg" : "content/users_r.svg" )
                            : "content/users.svg"
                        fillMode: Image.PreserveAspectFit
                        sourceSize.height: 28
                    }

                    TextField {
                        id: _passwordField
                        enterKeyAction: EnterKeyAction.Next
                        onFocusChanged: if(focus && inputPanel.active) {
                            scroll.scrollToY(scroll.contentY + 150);
                        }
                        onAccepted: _verificationPasswordField.focus = true
                        Layout.fillWidth: true
                        placeholderText: qsTr("Password")
                        text: config.userPassword
                        onTextChanged: config.setUserPassword(text)

                        echoMode: TextInput.Password
                        passwordMaskDelay: 300
                        inputMethodHints: Qt.ImhNoAutoUppercase
                    }

                    TextField {
                        id: _verificationPasswordField
                        enterKeyAction: EnterKeyAction.Next
                        onAccepted: _rootPasswordField.focus = true
                        Layout.fillWidth: true
                        placeholderText: qsTr("Repeat Password")
                        text: config.userPasswordSecondary

                        onTextChanged: _passwordField.text === _verificationPasswordField.text
                            ? ( config.setUserPasswordSecondary(text),
                            passMessage.visible = false,
                            validityMessage.visible = true )
                            : ( passMessage.visible = true,
                            validityMessage.visible = false )

                        echoMode: TextInput.Password
                        passwordMaskDelay: 300
                        inputMethodHints: Qt.ImhNoAutoUppercase
                    }
                }

                Label {
                    width: parent.width
                    text: qsTr("Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.")
                    font.pointSize: 8
                    wrapMode: Text.WordWrap
                    color: commentsColor
                }
            }

            Kirigami.InlineMessage {
                id: passMessage
                Layout.fillWidth: true
                implicitHeight: 28
                showCloseButton: true
                icon.source: "tools-report-bug"
                visible: false
                type: Kirigami.MessageType.Error
                text: config.userPasswordMessage
            }

            Kirigami.InlineMessage {
                id: validityMessage
                Layout.fillWidth: true
                implicitHeight: 28
                showCloseButton: true
                icon.source: config.userPasswordValidity
                    ? ( config.requireStrongPasswords
                    ? "tools-report-bug" : "dialog-warning" )
                    : "dialog-ok"
                visible: false
                type:  config.userPasswordValidity
                    ? ( config.requireStrongPasswords
                    ? Kirigami.MessageType.Error : Kirigami.MessageType.Warning )
                    : Kirigami.MessageType.Positive
                text: config.userPasswordMessage
            }

            CheckBox {
                id: root
                visible: config.writeRootPassword
                text: qsTr("Reuse user password as root password")
                checked: config.reuseUserPasswordForRoot
                onCheckedChanged: config.setReuseUserPasswordForRoot(checked)
            }

            Label {
                visible: root.checked
                width: parent.width
                text: qsTr("Use the same password for the administrator account.")
                font.weight: Font.Thin
                font.pointSize: 8
                color: commentsColor
            }

            Column {
                visible: ! root.checked
                Layout.fillWidth: true
                spacing: Kirigami.Units.smallSpacing

                Label {
                    width: parent.width
                    text: qsTr("Choose a root password to keep your account safe.")
                }

                RowLayout {
                    width: parent.width
                    spacing: 10

                    Image {
                        source: _verificationRootPasswordField.text.length
                            ? ( _rootPasswordField.text === _verificationRootPasswordField.text
                            ? "content/users_g.svg"
                            : "content/users_r.svg" )
                            : "content/users.svg"
                        fillMode: Image.PreserveAspectFit
                        sourceSize.height: 28
                    }

                    TextField {
                        id: _rootPasswordField
                        enterKeyAction: EnterKeyAction.Next
                        onFocusChanged: if(focus && inputPanel.active) {
                            scroll.scrollToY(scroll.contentY + 150);
                        }
                        onAccepted: _verificationRootPasswordField.focus = true
                        Layout.fillWidth: true
                        placeholderText: qsTr("Root Password")
                        text: config.rootPassword

                        onTextChanged: config.setRootPassword(text)

                        echoMode: TextInput.Password
                        passwordMaskDelay: 300
                        inputMethodHints: Qt.ImhNoAutoUppercase
                    }

                    TextField {
                        id: _verificationRootPasswordField
                        Layout.fillWidth: true
                        placeholderText: qsTr("Repeat Root Password")
                        text: config.rootPasswordSecondary

                        //onTextChanged: config.setRootPasswordSecondary(text)
                        onTextChanged: _rootPasswordField.text === _verificationRootPasswordField.text
                            ? ( config.setRootPasswordSecondary(text),
                            rootPassMessage.visible = false,rootValidityMessage.visible = true )
                            : ( rootPassMessage.visible = true,rootValidityMessage.visible = false )

                        echoMode: TextInput.Password
                        passwordMaskDelay: 300
                        inputMethodHints: Qt.ImhNoAutoUppercase
                    }
                }

                Label {
                    visible: ! root.checked
                    width: parent.width
                    text: qsTr("Enter the same password twice, so that it can be checked for typing errors.")
                    font.pointSize: 8
                    color: commentsColor
                }
            }

            Kirigami.InlineMessage {
                id: rootPassMessage
                Layout.fillWidth: true
                implicitHeight: 28
                showCloseButton: true
                icon.source: "tools-report-bug"
                visible: false
                type: Kirigami.MessageType.Error
                text: config.rootPasswordMessage
            }

            Kirigami.InlineMessage {
                id: rootValidityMessage
                Layout.fillWidth: true
                implicitHeight: 28
                showCloseButton: true
                icon.source: config.rootPasswordValidity
                    ? ( config.requireStrongPasswords
                    ? "tools-report-bug" : "dialog-warning" )
                    : "dialog-ok"
                visible: false
                type:  config.rootPasswordValidity
                    ? ( config.requireStrongPasswords
                    ? Kirigami.MessageType.Error : Kirigami.MessageType.Warning )
                    : Kirigami.MessageType.Positive
                text: config.rootPasswordMessage
            }

            CheckBox {
                Layout.alignment: Qt.AlignCenter
                text: qsTr("Log in automatically without asking for the password")
                checked: config.doAutoLogin
                onCheckedChanged: config.setAutoLogin(checked)
            }

            CheckBox {
                visible: config.permitWeakPasswords
                Layout.alignment: Qt.AlignCenter
                text: qsTr("Validate passwords quality")
                checked: config.requireStrongPasswords
                onCheckedChanged: config.setRequireStrongPasswords(checked),
                    rootPassMessage.visible = false
            }

            Label {
                visible: config.permitWeakPasswords
                width: parent.width
                Layout.alignment: Qt.AlignCenter
                text: qsTr("When this box is checked, password-strength checking is done and you will not be able to use a weak password.")
                font.pointSize: 8
                color: commentsColor
            }
        }
    }
}
