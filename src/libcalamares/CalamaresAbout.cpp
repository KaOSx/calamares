/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2022 Adriaan de Groot <groot@kde.org>
 *   SPDX-License-Identifier: GPL-3.0-or-later
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 */

#include "CalamaresAbout.h"

#include "CalamaresVersionX.h"

#include <QCoreApplication>

static const char s_header[]
    = QT_TRANSLATE_NOOP( "AboutData", "<h1>%1</h1><br/><strong>%2<br/> for %3</strong><br/><br/>" );

static const char s_footer[]
    = QT_TRANSLATE_NOOP( "AboutData",
                         "Thanks to <a href=\"https://calamares.io/team/\">the Calamares team</a> "
                         "and the <a href=\"https://app.transifex.com/calamares/calamares/\">Calamares "
                         "translators team</a>." );

struct Maintainer
{
    unsigned int start;
    unsigned int end;
    const char* name;
    const char* email;
    QString text() const
    {
        //: Copyright year-year Name <email-address>
        return QCoreApplication::translate( "AboutData", "Copyright %1-%2 %3 &lt;%4&gt;<br/>" )
            .arg( start )
            .arg( end )
            .arg( name )
            .arg( email );
    }
};

static constexpr const Maintainer maintainers[] = {
    { 2014, 2017, "Teo Mrnjavac", "teo@kde.org" },
    { 2017, 2022, "Adriaan de Groot", "groot@kde.org" },
    { 2022, 2024, "Adriaan de Groot (community)", "groot@kde.org" },
};

static QString
aboutMaintainers()
{
    QStringList s;
    for ( const auto& m : maintainers )
    {
        s.append( m.text() );
    }
    return s.join( QString() );
}

static QString
substituteVersions( const QString& s )
{
    return s.arg( CALAMARES_APPLICATION_NAME ).arg( CALAMARES_VERSION );
}

const QString
Calamares::aboutString()
{
    return substituteVersions( QCoreApplication::translate( "AboutData", s_header ) ) + aboutMaintainers()
        + QCoreApplication::translate( "AboutData", s_footer );
}

const QString
Calamares::aboutStringUntranslated()
{
    return substituteVersions( QString( s_header ) ) + aboutMaintainers() + QString( s_footer );
}
