/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2014 Teo Mrnjavac <teo@kde.org>
 *   SPDX-FileCopyrightText: 2020 Adriaan de Groot <groot@kde.org>
 *   SPDX-License-Identifier: GPL-3.0-or-later
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 */

#ifndef DLLMACRO_H
#define DLLMACRO_H

#ifndef CALAMARES_EXPORT
#define CALAMARES_EXPORT __attribute__( ( visibility( "default" ) ) )
#endif

/*
 * Mark symbols exported from Calamares non-GUI library with DLLEXPORT.
 * These are the public API of libcalamares.
 */
#ifndef DLLEXPORT
#if defined( DLLEXPORT_PRO )
#define DLLEXPORT CALAMARES_EXPORT
#else
#define DLLEXPORT
#endif
#endif

/*
 * Mark symbols exported from Calamares GUI library with DLLEXPORT.
 * These are the public API of libcalamaresui.
 */
#ifndef UIDLLEXPORT
#if defined( UIDLLEXPORT_PRO )
#define UIDLLEXPORT CALAMARES_EXPORT
#else
#define UIDLLEXPORT
#endif
#endif

/*
 * Mark symbols exported from Calamares C++ plugins with PLUGINDLLEXPORT.
 * These are the public API of the libraries (generally, the plugin
 * entry point)
 */
#ifndef PLUGINDLLEXPORT
#if defined( PLUGINDLLEXPORT_PRO )
#define PLUGINDLLEXPORT CALAMARES_EXPORT
#else
#define PLUGINDLLEXPORT
#endif
#endif

/*
 * For functions that should be static in production but also need to
 * be tested, use STATICTEST as linkage specifier. When built as part
 * of a test, the function will be given normal linkage.
 */
#ifndef STATICTEST
#if defined( BUILD_AS_TEST )
#define STATICTEST
#else
#define STATICTEST static
#endif
#endif

#endif
