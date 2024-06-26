/*
 *   Copyright 2018 Camilo Higuita <milo.h@aol.com>
 *
 *   This program is free software; you can redistribute it and/or modify
 *   it under the terms of the GNU Library General Public License as
 *   published by the Free Software Foundation; either version 2, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details
 *
 *   You should have received a copy of the GNU Library General Public
 *   License along with this program; if not, write to the
 *   Free Software Foundation, Inc.,
 *   51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */

import QtQuick 2.14
import QtQuick.Controls 2.14
import QtQuick.Layouts 1.3
import org.kde.kirigami 2.9 as Kirigami

/**
 * ListBrowser
 * A global sidebar for the application window that can be collapsed.
 *
 *
 *
 *
 *
 *
 */
Item
{
    id: control
    focus: true
    clip: true
    
    implicitHeight: contentHeight + topPadding + bottomPadding
    implicitWidth: contentWidth + leftPadding + rightPadding    
    
    /**
     * model : var
     */
    property alias model : _listView.model
    
    /**
     * delegate : Component
     */
    property alias delegate : _listView.delegate
    
    /**
     * section : ListView.section
     */
    property alias section : _listView.section
    
    /**
     * contentY : int
     */
    property alias contentY: _listView.contentY
    
    /**
     * currentIndex : int
     */
    property alias currentIndex : _listView.currentIndex
    
    /**
     * currentItem : Item
     */
    property alias currentItem : _listView.currentItem
    
    /**
     * count : int
     */
    property alias count : _listView.count
    
    /**
     * cacheBuffer : int
     */
    property alias cacheBuffer : _listView.cacheBuffer
    
    /**
     * orientation : ListView.orientation
     */
    property alias orientation: _listView.orientation
    
    /**
     * snapMode : ListView.snapMode
     */
    property alias snapMode: _listView.snapMode
    
    /**
     * spacing : int
     */
    property alias spacing: _listView.spacing
    
    /**
     * flickable : Flickable
     */
    property alias flickable : _listView
    
    /**
     * scrollView : ScrollView
     */
    property alias scrollView : _scrollView
    
    /**
     * contentHeight : int
     */
    property alias contentHeight : _listView.contentHeight
    
    /**
     * contentWidth : int
     */
    property alias contentWidth : _listView.contentWidth
    
    /**
     * atYEnd : bool
     */
    property alias atYEnd : _listView.atYEnd
    
    /**
     * atYBeginning : bool
     */
    property alias atYBeginning : _listView.atYBeginning
    
    /**
     * topPadding : int
     */
    property alias topPadding: _scrollView.topPadding
    
    /**
     * bottomPadding : int
     */
    property alias bottomPadding: _scrollView.bottomPadding
    
    /**
     * rightPadding : int
     */
    property alias rightPadding: _scrollView.rightPadding
    
    /**
     * leftPadding : int
     */
    property alias leftPadding: _scrollView.leftPadding
    
    /**
     * padding : int
     */
    property alias padding: _scrollView.padding
    
    /**
     * leftMargin : int
     */
    property int verticalScrollBarPolicy:  ScrollBar.AlwaysOff
    
    /**
     * horizontalScrollBarPolicy : ScrollBar.policy
     */
    property int horizontalScrollBarPolicy:  _listView.orientation === Qt.Horizontal ? ScrollBar.AsNeeded : ScrollBar.AlwaysOff
    
    /**
     * holder : Holder
     */
    //property alias holder : _holder
    
    /**
     * enableLassoSelection : bool
     */
    property bool enableLassoSelection : false
    
    /**
     * selectionMode : bool
     */
    property bool selectionMode: false
    
    /**
     * lassoRec : Rectangle
     */
    property alias lassoRec : selectLayer
    
    /**
     * itemsSelected :
     */
    signal itemsSelected(var indexes)
    
    /**
     * areaClicked :
     */
    signal areaClicked(var mouse)
    
    /**
     * areaRightClicked :
     */
    signal areaRightClicked()
    
    /**
     * keyPress :
     */
    signal keyPress(var event)    
    
    Keys.enabled : true
    Keys.forwardTo : _listView
    
    QtObject {
        id: internal
        
        readonly property real verticalScrollBarWidth: _scrollView.ScrollBar.vertical.visible && !Kirigami.Settings.tabletMode ? _scrollView.ScrollBar.vertical.width : 0
        readonly property real horizontalScrollBarHeight: _scrollView.ScrollBar.horizontal.visible && !Kirigami.Settings.tabletMode ? _scrollView.ScrollBar.horizontal.height : 0
    }
    
    ScrollView
    {
        id: _scrollView
        anchors.fill: parent
        clip: control.clip
        
        focus: true
        padding: control.enableLassoSelection ?  Kirigami.Units.largeSpacing : Kirigami.Units.smallSpacing*2
        horizontalPadding: padding
        verticalPadding: padding
        rightPadding: padding + internal.verticalScrollBarWidth
        leftPadding: padding
        topPadding: padding
        bottomPadding: padding + internal.horizontalScrollBarHeight
        
        ScrollBar.horizontal.policy: control.horizontalScrollBarPolicy
        ScrollBar.vertical.policy: control.verticalScrollBarPolicy
        
        ListView
        {
            id: _listView
            focus: true
            
            property alias position : _hoverHandler.point.position
            property var selectedIndexes : []            
            
            clip: control.clip
            
            spacing: control.enableLassoSelection ? Kirigami.Units.largeSpacing : Kirigami.Units.smallSpacing*2
            snapMode: ListView.NoSnap
            
            boundsBehavior: Flickable.StopAtBounds
            boundsMovement :Flickable.StopAtBounds
            
            interactive: Kirigami.Settings.hasTransientTouchInput /*&& (control.selectionMode ? _listView.position.x > 84 : true)*/
            highlightFollowsCurrentItem: true
            highlightMoveDuration: 0
            highlightResizeDuration : 0
            
            keyNavigationEnabled : true
            keyNavigationWraps : true
            Keys.onPressed: control.keyPress(event)
            
            onPositionChanged:
            {
                if(_hoverHandler.hovered && position.x < 84 &&  _hoverHandler.point.pressPosition.y != position.y)
                {
                    const index = _listView.indexAt(position.x, position.y)
                    if(!selectedIndexes.includes(index) && index > -1 && index < _listView.count)
                    {
                        selectedIndexes.push(index)
                        control.itemsSelected([index])
                    }
                }
            }
            
            HoverHandler
            {
                id: _hoverHandler
                margin: Kirigami.Units.largeSpacing*2
                //                 enabled: control.enableLassoSelection && control.selectionMode && !_listView.draggingVertically
                enabled: false
                acceptedDevices: PointerDevice.TouchScreen
                acceptedPointerTypes : PointerDevice.Finger
                grabPermissions : PointerHandler.CanTakeOverFromAnything
                
                onHoveredChanged:
                {
                    if(!hovered)
                    {
                        _listView.selectedIndexes = []
                    }
                }
            }

            MouseArea
            {
                id: _mouseArea
                z: -1
                anchors.fill: parent
                propagateComposedEvents: true
                //             preventStealing: true
                acceptedButtons:  Qt.RightButton | Qt.LeftButton
                
                onClicked:
                {
                    control.areaClicked(mouse)
                    control.forceActiveFocus()
                    
                    if(mouse.button === Qt.RightButton)
                    {
                        control.areaRightClicked()
                        return
                    }
                }
                
                onPositionChanged:
                {
                    if(_mouseArea.pressed && control.enableLassoSelection && selectLayer.visible)
                    {
                        if(mouseX >= selectLayer.newX)
                        {
                            selectLayer.width = (mouseX + 10) < (control.x + control.width) ? (mouseX - selectLayer.x) : selectLayer.width;
                        } else {
                            selectLayer.x = mouseX < control.x ? control.x : mouseX;
                            selectLayer.width = selectLayer.newX - selectLayer.x;
                        }
                        
                        if(mouseY >= selectLayer.newY) {
                            selectLayer.height = (mouseY + 10) < (control.y + control.height) ? (mouseY - selectLayer.y) : selectLayer.height;
                            if(!_listView.atYEnd &&  mouseY > (control.y + control.height))
                                _listView.contentY += 10
                        } else {
                            selectLayer.y = mouseY < control.y ? control.y : mouseY;
                            selectLayer.height = selectLayer.newY - selectLayer.y;
                            
                            if(!_listView.atYBeginning && selectLayer.y === 0)
                                _listView.contentY -= 10
                        }
                    }
                }
                
                onPressed:
                {
                    if (mouse.source === Qt.MouseEventNotSynthesized && control.enableLassoSelection && mouse.button === Qt.LeftButton && !Kirigami.Settings.hasTransientTouchInput)
                    {
                        selectLayer.visible = true;
                        selectLayer.x = mouseX;
                        selectLayer.y = mouseY;
                        selectLayer.newX = mouseX;
                        selectLayer.newY = mouseY;
                        selectLayer.width = 0
                        selectLayer.height = 0;
                    }                    
                }
                
                onPressAndHold:
                {
                    if ( mouse.source !== Qt.MouseEventNotSynthesized && control.enableLassoSelection && !selectLayer.visible && !Kirigami.Settings.hasTransientTouchInput)
                    {
                        selectLayer.visible = true;
                        selectLayer.x = mouseX;
                        selectLayer.y = mouseY;
                        selectLayer.newX = mouseX;
                        selectLayer.newY = mouseY;
                        selectLayer.width = 0
                        selectLayer.height = 0;
                        mouse.accepted = true
                    }else
                    {
                        mouse.accepted = false
                    }
                }
                
                onReleased:
                {
                    if(mouse.button !== Qt.LeftButton || !control.enableLassoSelection || !selectLayer.visible)
                    {
                        mouse.accepted = false
                        return;
                    }
                    
                    if(selectLayer.y > _listView.contentHeight)
                    {
                        return selectLayer.reset();
                    }
                    
                    var lassoIndexes = []
                    var limitY =  mouse.y === lassoRec.y ?  lassoRec.y+lassoRec.height : mouse.y
                    
                    for(var y = lassoRec.y; y < limitY; y+=10)
                    {
                        const index = _listView.indexAt(_listView.width/2,y+_listView.contentY)
                        if(!lassoIndexes.includes(index) && index>-1 && index< _listView.count)
                            lassoIndexes.push(index)
                    }
                    
                    control.itemsSelected(lassoIndexes)
                    selectLayer.reset()
                }
            }
            
            Rectangle
            {
                id: selectLayer
                property int newX: 0
                property int newY: 0
                height: 0
                width: 0
                x: 0
                y: 0
                visible: false
                color: Qt.rgba(control.Kirigami.Theme.highlightColor.r,control.Kirigami.Theme.highlightColor.g, control.Kirigami.Theme.highlightColor.b, 0.2)
                opacity: 0.7
                
                //borderColor: control.Kirigami.Theme.highlightColor
                //borderWidth: 2
                //solidBorder: false
                
                function reset()
                {
                    selectLayer.x = 0;
                    selectLayer.y = 0;
                    selectLayer.newX = 0;
                    selectLayer.newY = 0;
                    selectLayer.visible = false;
                    selectLayer.width = 0;
                    selectLayer.height = 0;
                }
            }
        }
    }
}


