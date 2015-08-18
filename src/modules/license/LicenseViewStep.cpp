/* === This file is part of Calamares - <http://github.com/calamares> ===
 *
 *   Copyright 2014-2015, Teo Mrnjavac <teo@kde.org>
 *   Copyright 2015, Anke Boersma <demm@kaosx.us>
 *
 *   Calamares is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   Calamares is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with Calamares. If not, see <http://www.gnu.org/licenses/>.
 */

#include "LicenseViewStep.h"

#include "LicensePage.h"

#include <QVariant>

LicenseViewStep::LicenseViewStep( QObject* parent )
    : Calamares::ViewStep( parent )
{
    emit nextStatusChanged( true );
    m_widget = new LicensePage;
}


LicenseViewStep::~LicenseViewStep()
{
    if ( m_widget && m_widget->parent() == nullptr )
        m_widget->deleteLater();
}


QString
LicenseViewStep::prettyName() const
{
    return tr( "License" );
}


QWidget*
LicenseViewStep::widget()
{
    return m_widget;
}


void
LicenseViewStep::next()
{
    emit done();
}


void
LicenseViewStep::back()
{}


bool
LicenseViewStep::isNextEnabled() const
{
    return true;
}


bool
LicenseViewStep::isBackEnabled() const
{
    return true;
}


bool
LicenseViewStep::isAtBeginning() const
{
    return true;
}


bool
LicenseViewStep::isAtEnd() const
{
    return true;
}


QList< Calamares::job_ptr >
LicenseViewStep::jobs() const
{
    return QList< Calamares::job_ptr >();
}

void
LicenseViewStep::setConfigurationMap( const QVariantMap& configurationMap )
{
    //m_config = configurationMap;
    bool showNvidiaUrl =
        configurationMap.contains( "showNvidiaUrl" ) &&
        configurationMap.value( "showNvidiaUrl" ).type() == QVariant::Bool &&
        configurationMap.value( "showNvidiaUrl" ).toBool();
    bool showCatalystUrl =
        configurationMap.contains( "showCatalystUrl" ) &&
        configurationMap.value( "showCatalystUrl" ).type() == QVariant::Bool &&
        configurationMap.value( "showCatalystUrl" ).toBool();
    bool showFlashUrl =
        configurationMap.contains( "showFlashUrl" ) &&
        configurationMap.value( "showFlashUrl" ).type() == QVariant::Bool &&
        configurationMap.value( "showFlashUrl" ).toBool();
    bool showLicenseUrl =
        configurationMap.contains( "showLicenseUrl" ) &&
        configurationMap.value( "showLicenseUrl" ).type() == QVariant::Bool &&
        configurationMap.value( "showLicenseUrl" ).toBool(); 

    m_widget->showNvidiaUrl( showNvidiaUrl );
    m_widget->showCatalystUrl( showCatalystUrl );
    m_widget->showFlashUrl( showFlashUrl );
    m_widget->showLicenseUrl( showLicenseUrl );
                          
    //m_widget->setUpLinks( m_config ); */
}
