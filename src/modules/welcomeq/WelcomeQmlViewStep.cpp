/* === This file is part of Calamares - <https://github.com/calamares> ===
 *
 *   Copyright 2014-2015, Teo Mrnjavac <teo@kde.org>
 *   Copyright 2018,2020 Adriaan de Groot <groot@kde.org>
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

#include "WelcomeQmlViewStep.h"

#include "checker/GeneralRequirements.h"

#include "locale/LabelModel.h"
#include "utils/Logger.h"
#include "utils/Variant.h"
#include "utils/Dirs.h"

#include "Branding.h"
#include "modulesystem/ModuleManager.h"
#include "utils/Yaml.h"

CALAMARES_PLUGIN_FACTORY_DEFINITION( WelcomeQmlViewStepFactory, registerPlugin< WelcomeQmlViewStep >(); )

WelcomeQmlViewStep::WelcomeQmlViewStep( QObject* parent )
: Calamares::QmlViewStep(parent )
	, m_config( new Config( this ) ) // the qml singleton takes ownership and deletes it
//     , m_nextEnabled( false )
    , m_requirementsChecker( new GeneralRequirements( this ) )

{
// 	connect( m_config,
//              &Config::isNextEnabledChanged,
// 			 this,
// 			 &WelcomeQmlViewStep::nextStatusChanged );
//     emit nextStatusChanged(true);
}


QString
WelcomeQmlViewStep::prettyName() const
{
	return tr( "Welcome" );
}

bool
WelcomeQmlViewStep::isNextEnabled() const
{
	// TODO: should return true
//     return m_config->property("isNextEnabled").toBool();
    return true;
}

bool
WelcomeQmlViewStep::isBackEnabled() const
{
	// TODO: should return true (it's weird that you are not allowed to have welcome *after* anything
	return false;
}


bool
WelcomeQmlViewStep::isAtBeginning() const
{
	// TODO: adjust to "pages" in the QML
	return true;
}


bool
WelcomeQmlViewStep::isAtEnd() const
{
	// TODO: adjust to "pages" in the QML
	return true;
}


Calamares::JobList
WelcomeQmlViewStep::jobs() const
{
	return Calamares::JobList();
}

void
WelcomeQmlViewStep::setConfigurationMap( const QVariantMap& configurationMap )
{
    m_config->setConfigurationMap( configurationMap );

	// TODO: figure out how the requirements (held by ModuleManager) should be accessible
	//          to QML as a model. //will be model as a qvariantmap containing a alert level and the message string
	if ( configurationMap.contains( "requirements" )
		 && configurationMap.value( "requirements" ).type() == QVariant::Map )
	{
		m_requirementsChecker->setConfigurationMap( configurationMap.value( "requirements" ).toMap() );

        m_config->requirementsModel().setRequirementsList( checkRequirements() );
	}
	else
		cWarning() << "no valid requirements map found in welcome "
					  "module configuration.";

    Calamares::QmlViewStep::setConfigurationMap( configurationMap ); // call parent implementation last
    setContextProperty( "Welcome", m_config );
}

Calamares::RequirementsList
WelcomeQmlViewStep::checkRequirements()
{
	return m_requirementsChecker->checkRequirements();
}

QObject*
WelcomeQmlViewStep::getConfig()
{
	return m_config;
}

