/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2021 Anke Boersma <demm@kaosx.us>
 *   SPDX-License-Identifier: GPL-3.0-or-later
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 */

import QtQuick
import QtQuick.Controls
import QtQuick.Layouts
import org.kde.kirigami 2.7 as Kirigami
//import QtGraphicalEffects 1.0
import QtQuick.Window

Rectangle {
    width: 850
    height: 1600

    TextArea {
        width: parent.width
        font.pointSize: 10
        textFormat: Text.RichText
        antialiasing: true
        activeFocusOnPress: false
        wrapMode: Text.WordWrap
        background: Rectangle {
            anchors.fill: parent
            color: "#FFFFFF"
        }

        text:"<h3>License For Customer Use of NVIDIA Software</h3>

        <p>IMPORTANT NOTICE -- READ CAREFULLY: This License For Customer Use of
        NVIDIA Software ('LICENSE') is the agreement which governs use of
        the software of NVIDIA Corporation and its subsidiaries ('NVIDIA')
        downloadable herefrom, including computer software and associated
        printed materials ('SOFTWARE').  By downloading, installing, copying,
        or otherwise using the SOFTWARE, you agree to be bound by the terms
        of this LICENSE.  If you do not agree to the terms of this LICENSE,
        do not download the SOFTWARE.</p>

        <h4>RECITALS</h4>

        <p>Use of NVIDIA's products requires three elements: the SOFTWARE, the
        hardware on a graphics controller board, and a personal computer. The
        SOFTWARE is protected by copyright laws and international copyright
        treaties, as well as other intellectual property laws and treaties.
        The SOFTWARE is not sold, and instead is only licensed for use,
        strictly in accordance with this document.  The hardware is protected
        by various patents, and is sold, but this agreement does not cover
        that sale, since it may not necessarily be sold as a package with
        the SOFTWARE.  This agreement sets forth the terms and conditions
        of the SOFTWARE LICENSE only.</p>

        <h4>1.  DEFINITIONS</h4>

        <p>1.1  Customer.  Customer means the entity or individual that
        downloads the SOFTWARE.</p>

        <h4>2.  GRANT OF LICENSE</h4>

        <p>2.1  Rights and Limitations of Grant.  NVIDIA hereby grants Customer
        the following non-exclusive, non-transferable right to use the
        SOFTWARE, with the following limitations:</p>

        <p>2.1.1  Rights.  Customer may install and use multiple copies of the
        SOFTWARE on a shared computer or concurrently on different computers,
        and make multiple back-up copies of the SOFTWARE, solely for Customer's
        use within Customer's Enterprise. 'Enterprise' shall mean individual use
        by Customer or any legal entity (such as a corporation or university)
        and the subsidiaries it owns by more than fifty percent (50%).</p>

        <p>2.1.2  Linux/FreeBSD Exception.  Notwithstanding the foregoing terms
        of Section 2.1.1, SOFTWARE designed exclusively for use on the Linux or
        FreeBSD operating systems, or other operating systems derived from the
        source code to these operating systems, may be copied and redistributed,
        provided that the binary files thereof are not modified in any way
        (except for unzipping of compressed files).</p>

        <p>2.1.3  Limitations.</p>

        <p>No Reverse Engineering.  Customer may not reverse engineer,
        decompile, or disassemble the SOFTWARE, nor attempt in any other
        manner to obtain the source code.</p>

        <p>No Separation of Components.  The SOFTWARE is licensed as a
        single product.  Its component parts may not be separated for use
        on more than one computer, nor otherwise used separately from the
        other parts.</p>

        <p>No Rental.  Customer may not rent or lease the SOFTWARE to someone
        else.</p>

        <h4>3.  TERMINATION</h4>

        <p>This LICENSE will automatically terminate if Customer fails to
        comply with any of the terms and conditions hereof.  In such event,
        Customer must destroy all copies of the SOFTWARE and all of its
        component parts.</p>

        <p>Defensive Suspension.  If Customer commences or participates in any legal
        proceeding against NVIDIA, then NVIDIA may, in its sole discretion,
        suspend or terminate all license grants and any other rights provided
        under this LICENSE during the pendency of such legal proceedings.</p>

        <h4>4.  COPYRIGHT</h4>

        <p>All title and copyrights in and to the SOFTWARE (including but
        not limited to all images, photographs, animations, video, audio,
        music, text, and other information incorporated into the SOFTWARE),
        the accompanying printed materials, and any copies of the SOFTWARE,
        are owned by NVIDIA, or its suppliers.  The SOFTWARE is protected
        by copyright laws and international treaty provisions.  Accordingly,
        Customer is required to treat the SOFTWARE like any other copyrighted
        material, except as otherwise allowed pursuant to this LICENSE
        and that it may make one copy of the SOFTWARE solely for backup or
        archive purposes.</p>

        <h4>5.  APPLICABLE LAW</h4>

        <p>This agreement shall be deemed to have been made in, and shall be
        construed pursuant to, the laws of the State of California.</p>

        <h4>6.  DISCLAIMER OF WARRANTIES AND LIMITATION ON LIABILITY</h4>

        <p>6.1  No Warranties.  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE
        LAW, THE SOFTWARE IS PROVIDED 'AS IS' AND NVIDIA AND ITS SUPPLIERS
        DISCLAIM ALL WARRANTIES, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT
        NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
        FOR A PARTICULAR PURPOSE.</p>

        <p>6.2  No Liability for Consequential Damages.  TO THE MAXIMUM
        EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL NVIDIA OR
        ITS SUPPLIERS BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT, OR
        CONSEQUENTIAL DAMAGES WHATSOEVER (INCLUDING, WITHOUT LIMITATION,
        DAMAGES FOR LOSS OF BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS
        OF BUSINESS INFORMATION, OR ANY OTHER PECUNIARY LOSS) ARISING OUT
        OF THE USE OF OR INABILITY TO USE THE SOFTWARE, EVEN IF NVIDIA HAS
        BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>

        <p>6.3  Specific Use.  SOFTWARE is licensed only for use with NVIDIA products.
        Customer's use of NVIDIA products with any other firmware is at its own
        risk and may cause an NVIDIA product to become non-compliant with certain
        of its certification markings.</p>

        <h4>7.  MISCELLANEOUS </h4>

        <p>The United Nations Convention on Contracts for the International
        Sale of Goods is specifically disclaimed.  If any provision of this
        LICENSE is inconsistent with, or cannot be fully enforced under,
        the law, such provision will be construed as limited to the extent
        necessary to be consistent with and fully enforceable under the law.
        This agreement is the final, complete and exclusive agreement between
        the parties relating to the subject matter hereof, and supersedes
        all prior or contemporaneous understandings and agreements relating
        to such subject matter, whether oral or written.  Customer agrees
        that it will not ship, transfer or export the SOFTWARE into any
        country, or use the SOFTWARE in any manner, prohibited by the
        United States Bureau of Export Administration or any export laws,
        restrictions or regulations.  This LICENSE may only be modified in
        writing signed by an authorized officer of NVIDIA.</p>"
    }
}
