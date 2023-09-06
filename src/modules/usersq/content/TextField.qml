// Copyright (C) 2018 The Qt Company Ltd.
// SPDX-License-Identifier: LicenseRef-Qt-Commercial OR GPL-3.0-only

import QtQuick
import QtQuick.Controls as Controls
import QtQuick.VirtualKeyboard

Controls.TextField {
    id: control

    property int enterKeyAction: EnterKeyAction.None
    readonly property bool enterKeyEnabled: enterKeyAction === EnterKeyAction.None || acceptableInput || inputMethodComposing

    EnterKeyAction.actionId: control.enterKeyAction
    EnterKeyAction.enabled: control.enterKeyEnabled
}
