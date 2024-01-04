<?xml version="1.0" ?><!DOCTYPE TS><TS version="2.1" language="de">
<context>
    <name>About</name>
    <message>
        <location filename="../src/modules/welcomeq/About.qml" line="30"/>
        <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;
            &lt;strong&gt;%2&lt;br/&gt;
            for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;
            Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;
            Copyright 2017-2022 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;
            Thanks to &lt;a href='https://calamares.io/team/'&gt;the Calamares team&lt;/a&gt;
            and the &lt;a href='https://www.transifex.com/kaos/kaos/'&gt;KaOS
            translators team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;
            &lt;a href='https://calamares.io/'&gt;Calamares&lt;/a&gt;
            development is sponsored by &lt;br/&gt;
            &lt;a href='http://www.blue-systems.com/'&gt;Blue Systems&lt;/a&gt; -
            Liberating Software.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>AboutData</name>
    <message>
        <location filename="../src/libcalamares/CalamaresAbout.cpp" line="17"/>
        <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt; for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/CalamaresAbout.cpp" line="20"/>
        <source>Thanks to &lt;a href=&quot;https://calamares.io/team/&quot;&gt;the Calamares team&lt;/a&gt; and the &lt;a href=&quot;https://app.transifex.com/calamares/calamares/&quot;&gt;Calamares translators team&lt;/a&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/CalamaresAbout.cpp" line="25"/>
        <source>&lt;a href=&quot;https://calamares.io/&quot;&gt;Calamares&lt;/a&gt; development is sponsored by &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/CalamaresAbout.cpp" line="40"/>
        <source>Copyright %1-%2 %3 &amp;lt;%4&amp;gt;&lt;br/&gt;</source>
        <extracomment>Copyright year-year Name &lt;email-address&gt;</extracomment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>AutoMountManagementJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/AutoMountManagementJob.cpp" line="22"/>
        <source>Manage auto-mount settings</source>
        <translation>Einstellungen für automatisches Einhängen bearbeiten</translation>
    </message>
</context>
<context>
    <name>BIOS</name>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="41"/>
        <source>GRUB 2, the GRand Unified Bootloader is the reference implementation of the Free Software Foundation&apos;s Multiboot Specification, which provides a user the choice to boot one of multiple operating systems installed on a computer.</source>
        <translation>GRUB 2, der GRand Unified Bootloader, ist die Referenzimplementierung der Multiboot-Spezifikation der Free Software Foundation. Er bietet Benutzern die Möglichkeit, eines von mehreren auf einem Computer installierten Betriebssystemen zu booten.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="54"/>
        <source>GRUB</source>
        <translation>GRUB</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="108"/>
        <source>No bootloader selected. Selecting no bootloader might result in an un-bootable system, if you don&apos;t already have a bootloader were you can add this install to.</source>
        <translation>Kein Bootloader ausgewählt. Wenn Sie keinen Bootloader auswählen, kann das zu einem nicht bootfähigen System führen - vorausgesetzt, Sie haben noch keinen Bootloader, zu dem Sie diese Installation hinzufügen können.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="121"/>
        <source>No bootloader</source>
        <translation>Kein Bootloader</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="173"/>
        <source>Please select a bootloader option for your install, or leave the default option, &lt;strong&gt;GRUB 2&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>BootInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="60"/>
        <source>The &lt;strong&gt;boot environment&lt;/strong&gt; of this system.&lt;br&gt;&lt;br&gt;Older x86 systems only support &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Modern systems usually use &lt;strong&gt;EFI&lt;/strong&gt;, but may also show up as BIOS if started in compatibility mode.</source>
        <translation>Die&lt;strong&gt;Boot-Umgebung&lt;/strong&gt; dieses Systems.&lt;br&gt;Ältere x86 Systeme unterstüzen&lt;strong&gt;lediglich BIOS&lt;/strong&gt;.&lt;br&gt;Moderne Systeme verwenden normalerweise &lt;strong&gt;EFI&lt;/strong&gt;, aber sie können auch als BIOS emuliert werden, wenn im Kompatibilitäts-Modus gebootet wird.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="70"/>
        <source>This system was started with an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from an EFI environment, this installer must deploy a boot loader application, like &lt;strong&gt;GRUB&lt;/strong&gt; or &lt;strong&gt;systemd-boot&lt;/strong&gt; on an &lt;strong&gt;EFI System Partition&lt;/strong&gt;. This is automatic, unless you choose manual partitioning, in which case you must choose it or create it on your own.</source>
        <translation>Dieses System wurde mit einer &lt;strong&gt;EFI&lt;/strong&gt; Boot-Umgebung gestartet.&lt;br&gt;&lt;br&gt;Um einen Start von einer EFI Umgebung zu konfigurieren, muss dieses Installationsprogramm ein Bootloaderprogramm wie &lt;strong&gt;GRUB&lt;/strong&gt; oder &lt;strong&gt;systemd-boot&lt;/strong&gt; auf einer &lt;strong&gt;EFI-Systempartition&lt;/strong&gt; einsetzen. Dies passiert automatisch, außer es wird manuelle Partitionierung gewählt, in diesem Fall müssen Sie Ihn auswählen oder selbst erstellen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="82"/>
        <source>This system was started with a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from a BIOS environment, this installer must install a boot loader, like &lt;strong&gt;GRUB&lt;/strong&gt;, either at the beginning of a partition or on the &lt;strong&gt;Master Boot Record&lt;/strong&gt; near the beginning of the partition table (preferred). This is automatic, unless you choose manual partitioning, in which case you must set it up on your own.</source>
        <translation>Dieses System wurde mit einer &lt;strong&gt;BIOS&lt;/strong&gt; Boot-Umgebung gestartet.&lt;br&gt;&lt;br&gt;Um einen Start von einer BIOS Umgebung zu konfigurieren, muss dieses Installationsprogramm ein Bootloaderprogramm wie &lt;strong&gt;GRUB&lt;/strong&gt; entweder am Anfang einer Partition oder am einfach einer Partitionstabelle (bevorzugt) installieren. Dies passiert automatisch, außer es wird manuelle Partitionierung gewählt, in diesem Fall müssen Sie Ihn auswählen oder selbst erstellen.</translation>
    </message>
</context>
<context>
    <name>BootLoaderModel</name>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="60"/>
        <source>Master Boot Record of %1</source>
        <translation>Master Boot Record von %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="93"/>
        <source>Boot Partition</source>
        <translation>Boot Partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="100"/>
        <source>System Partition</source>
        <translation>System Partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="131"/>
        <source>Do not install a boot loader</source>
        <translation>Keinen Bootloader installieren</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="148"/>
        <source>%1 (%2)</source>
        <translation>%1 (%2)</translation>
    </message>
</context>
<context>
    <name>Calamares::BlankViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/BlankViewStep.cpp" line="61"/>
        <source>Blank Page</source>
        <translation>Leere Seite</translation>
    </message>
</context>
<context>
    <name>Calamares::DebugWindow</name>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="28"/>
        <source>GlobalStorage</source>
        <translation>Hauptspeicher</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="38"/>
        <source>JobQueue</source>
        <translation>Job Queue</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="48"/>
        <source>Modules</source>
        <translation>Bausteine</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="61"/>
        <source>Type:</source>
        <translation>Typ:</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="68"/>
        <location filename="../src/calamares/DebugWindow.ui" line="82"/>
        <source>none</source>
        <translation>keine</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="75"/>
        <source>Interface:</source>
        <translation>Schnittstelle:</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="115"/>
        <source>Reloads the stylesheet from the branding directory.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="141"/>
        <source>Uploads the session log to the configured pastebin.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="144"/>
        <source>Send Session Log</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="118"/>
        <source>Reload Stylesheet</source>
        <translation>Stylesheet neu laden</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="102"/>
        <source>Crashes Calamares, so that Dr. Konqi can look at it.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="128"/>
        <source>Displays the tree of widget names in the log (for stylesheet debugging).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="131"/>
        <source>Widget Tree</source>
        <translation>Steuerelementstil</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.cpp" line="164"/>
        <source>Debug Information</source>
        <comment>@title</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Calamares::ExecutionViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="76"/>
        <source>%p%</source>
        <comment>Progress percentage indicator: %p is where the number 0..100 is placed</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="116"/>
        <source>Set Up</source>
        <comment>@label</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="116"/>
        <source>Install</source>
        <comment>@label</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Calamares::FailJob</name>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="29"/>
        <source>Job failed (%1)</source>
        <translation>Prozess fehlgeschlagen (%1)</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="30"/>
        <source>Programmed job failure was explicitly requested.</source>
        <translation>Programmed job failure was explicitly requested.</translation>
    </message>
</context>
<context>
    <name>Calamares::JobThread</name>
    <message>
        <location filename="../src/libcalamares/JobQueue.cpp" line="203"/>
        <source>Done</source>
        <translation>Abgeschlossen</translation>
    </message>
</context>
<context>
    <name>Calamares::NamedJob</name>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="17"/>
        <source>Example job (%1)</source>
        <translation>Beispielhafter Prozess (%1)</translation>
    </message>
</context>
<context>
    <name>Calamares::ProcessJob</name>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="49"/>
        <source>Running command %1 in target system…</source>
        <comment>@status</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="53"/>
        <source>Running command %1…</source>
        <comment>@status</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Calamares::Python::Job</name>
    <message>
        <location filename="../src/libcalamares/python/PythonJob.cpp" line="214"/>
        <source>Running %1 operation.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/python/PythonJob.cpp" line="229"/>
        <source>Bad working directory path</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/python/PythonJob.cpp" line="230"/>
        <source>Working directory %1 for python job %2 is not readable.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/python/PythonJob.cpp" line="238"/>
        <location filename="../src/libcalamares/python/PythonJob.cpp" line="314"/>
        <location filename="../src/libcalamares/python/PythonJob.cpp" line="340"/>
        <location filename="../src/libcalamares/python/PythonJob.cpp" line="357"/>
        <location filename="../src/libcalamares/python/PythonJob.cpp" line="365"/>
        <location filename="../src/libcalamares/python/PythonJob.cpp" line="373"/>
        <source>Bad main script file</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/python/PythonJob.cpp" line="239"/>
        <source>Main script file %1 for python job %2 is not readable.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/python/PythonJob.cpp" line="300"/>
        <source>Bad internal script</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/python/PythonJob.cpp" line="301"/>
        <source>Internal script for python job %1 raised an exception.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/python/PythonJob.cpp" line="315"/>
        <source>Main script file %1 for python job %2 could not be loaded because it raised an  exception.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/python/PythonJob.cpp" line="341"/>
        <source>Main script file %1 for python job %2 raised an exception.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/python/PythonJob.cpp" line="358"/>
        <location filename="../src/libcalamares/python/PythonJob.cpp" line="366"/>
        <source>Main script file %1 for python job %2 returned invalid results.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/python/PythonJob.cpp" line="374"/>
        <source>Main script file %1 for python job %2 does not contain a run() function.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Calamares::PythonJob</name>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="233"/>
        <source>Running %1 operation…</source>
        <comment>@status</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="261"/>
        <source>Bad working directory path</source>
        <comment>@error</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="262"/>
        <source>Working directory %1 for python job %2 is not readable.</source>
        <comment>@error</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="270"/>
        <source>Bad main script file</source>
        <comment>@error</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="271"/>
        <source>Main script file %1 for python job %2 is not readable.</source>
        <comment>@error</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="343"/>
        <source>Boost.Python error in job &quot;%1&quot;</source>
        <comment>@error</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Calamares::QmlViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="73"/>
        <source>Loading…</source>
        <comment>@status</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="100"/>
        <source>QML step &lt;i&gt;%1&lt;/i&gt;.</source>
        <comment>@label</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="286"/>
        <source>Loading failed.</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Calamares::RequirementsChecker</name>
    <message>
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="99"/>
        <source>Requirements checking for module &apos;%1&apos; is complete.</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
    <message numerus="yes">
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="123"/>
        <source>Waiting for %n module(s)…</source>
        <comment>@status</comment>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="124"/>
        <source>(%n second(s))</source>
        <comment>@status</comment>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message>
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="129"/>
        <source>System-requirements checking is complete.</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Calamares::ViewManager</name>
    <message>
        <location filename="../src/libcalamaresui/utils/Paste.cpp" line="177"/>
        <source>Install log posted to

%1

Link copied to clipboard</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/Paste.cpp" line="183"/>
        <source>Install Log Paste URL</source>
        <translation>URL des kopierten Installations-Protokolls</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/Paste.cpp" line="165"/>
        <source>The upload was unsuccessful. No web-paste was done.</source>
        <translation>Der Upload war nicht erfolgreich. Es wurde nichts ins Internet gestellt.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="514"/>
        <source>Do you really want to cancel the current setup process?
The setup program will quit and all changes will be lost.</source>
        <translation>Wollen Sie die Installation wirklich abbrechen ?
Das Installationsprogramm wird beendet und alle Eingaben werden verworfen.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="516"/>
        <source>Do you really want to cancel the current install process?
The installer will quit and all changes will be lost.</source>
        <translation>Wollen Sie die Installation wirklich abbrechen ?
Das Installationsprogramm wird beendet und alle Eingaben werden verworfen.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="90"/>
        <source>&amp;Yes</source>
        <translation>&amp;Ja</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="91"/>
        <source>&amp;No</source>
        <translation>&amp;Nein</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="92"/>
        <source>&amp;Close</source>
        <translation>&amp;Schließen</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="156"/>
        <source>Setup Failed</source>
        <comment>@title</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="156"/>
        <source>Installation Failed</source>
        <comment>@title</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="159"/>
        <source>Error</source>
        <comment>@title</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="184"/>
        <source>Calamares Initialization Failed</source>
        <comment>@title</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="185"/>
        <source>%1 can not be installed. Calamares was unable to load all of the configured modules. This is a problem with the way Calamares is being used by the distribution.</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="191"/>
        <source>&lt;br/&gt;The following modules could not be loaded:</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="333"/>
        <source>Continue with Setup?</source>
        <comment>@title</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="333"/>
        <source>Continue with Installation?</source>
        <comment>@title</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="335"/>
        <source>The %1 setup program is about to make changes to your disk in order to set up %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <comment>%1 is short product name, %2 is short product name with version</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="338"/>
        <source>The %1 installer is about to make changes to your disk in order to install %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <comment>%1 is short product name, %2 is short product name with version</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="341"/>
        <source>&amp;Set Up Now</source>
        <comment>@button</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="341"/>
        <source>&amp;Install Now</source>
        <comment>@button</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="348"/>
        <source>Go &amp;Back</source>
        <comment>@button</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="395"/>
        <source>&amp;Set Up</source>
        <comment>@button</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="395"/>
        <source>&amp;Install</source>
        <comment>@button</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="397"/>
        <source>Setup is complete. Close the setup program.</source>
        <comment>@tooltip</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="398"/>
        <source>The installation is complete. Close the installer.</source>
        <comment>@tooltip</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="400"/>
        <source>Cancel the setup process without changing the system.</source>
        <comment>@tooltip</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="401"/>
        <source>Cancel the installation process without changing the system.</source>
        <comment>@tooltip</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="411"/>
        <source>&amp;Next</source>
        <comment>@button</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="416"/>
        <source>&amp;Back</source>
        <comment>@button</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="422"/>
        <source>&amp;Done</source>
        <comment>@button</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="441"/>
        <source>&amp;Cancel</source>
        <comment>@button</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="513"/>
        <source>Cancel Setup?</source>
        <comment>@title</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="513"/>
        <source>Cancel Installation?</source>
        <comment>@title</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>CalamaresPython::Helper</name>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="307"/>
        <source>Unknown exception type</source>
        <comment>@error</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="325"/>
        <source>Unparseable Python error</source>
        <comment>@error</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="369"/>
        <source>Unparseable Python traceback</source>
        <comment>@error</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="376"/>
        <source>Unfetchable Python error</source>
        <comment>@error</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>CalamaresWindow</name>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="405"/>
        <source>%1 Setup Program</source>
        <translation>%1 Installationsprogramm</translation>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="406"/>
        <source>%1 Installer</source>
        <translation>%1 Installationsprogramm</translation>
    </message>
</context>
<context>
    <name>ChangeFilesystemLabelJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="34"/>
        <source>Set filesystem label on %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="41"/>
        <source>Set filesystem label &lt;strong&gt;%1&lt;/strong&gt; to partition &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="71"/>
        <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="83"/>
        <source>The installer failed to update partition table on disk &apos;%1&apos;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>CheckerContainer</name>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerContainer.cpp" line="38"/>
        <source>Gathering system information...</source>
        <translation>Systeminformationen werden gesammelt...</translation>
    </message>
</context>
<context>
    <name>ChoicePage</name>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="139"/>
        <source>After:</source>
        <translation>Danach:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1059"/>
        <source>%1 will be shrunk to %2MiB and a new %3MiB partition will be created for %4.</source>
        <translation>%1 wird auf %2MiB verkleinert und eine neue %3MiB Partition wird für %4 erstellt.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1339"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1376"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1397"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1422"/>
        <source>&lt;strong&gt;Erase disk&lt;/strong&gt;&lt;br/&gt;This will &lt;font color=&quot;red&quot;&gt;delete&lt;/font&gt; all data currently present on the selected storage device.</source>
        <translation>&lt;strong&gt;Festplatte löschen&lt;/strong&gt;&lt;br/&gt;Dies wird alle momentan auf dem ausgewählten Speichergerät vorhandenen Daten &lt;font color=&quot;red&quot;&gt;löschen&lt;/font&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1343"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1372"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1393"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1418"/>
        <source>&lt;strong&gt;Install alongside&lt;/strong&gt;&lt;br/&gt;The installer will shrink a partition to make room for %1.</source>
        <translation>&lt;strong&gt;Nebenher installieren&lt;/strong&gt;&lt;br/&gt;Das Installationsprogramm wird eine Partition verkleinern, um Platz für %1 zu schaffen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1347"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1380"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1401"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1426"/>
        <source>&lt;strong&gt;Replace a partition&lt;/strong&gt;&lt;br/&gt;Replaces a partition with %1.</source>
        <translation>&lt;strong&gt;Partition ersetzen&lt;/strong&gt;&lt;br/&gt;Ersetzt eine Partition mit %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1690"/>
        <source>Boot loader location:</source>
        <translation>Installiere Bootloader hier:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="137"/>
        <source>Select storage de&amp;vice:</source>
        <translation>Speicherge&amp;rät auswählen:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="138"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1034"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1085"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1138"/>
        <source>Current:</source>
        <translation>Aktuell:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="896"/>
        <source>Reuse %1 as home partition for %2.</source>
        <translation>%1 als Home-Partition für %2 wiederverwenden.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1035"/>
        <source>&lt;strong&gt;Select a partition to shrink, then drag the bottom bar to resize&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Wählen Sie eine Partition aus, die verkleinert werden soll und ziehe dann die untere Leiste in die passende Größe&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1129"/>
        <source>&lt;strong&gt;Select a partition to install on&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Wählen Sie eine Partition aus, auf die installiert werden soll&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1189"/>
        <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>Auf diesem System kann keine EFI-Systempartition gefunden werden. Bitte gehen Sie zurück und wählen Sie manuelle Partitionierung, um %1 einzurichten.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1197"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>Die EFI-Systempartition auf %1 wird zum Starten von %2 verwendet.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1205"/>
        <source>EFI system partition:</source>
        <translation>EFI-Systempartition:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1334"/>
        <source>This storage device does not seem to have an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Diese Festplatte scheint noch kein Betriebssystem zu beinhalten. Was möchtest du tun? &lt;br/&gt; Du wirst noch einmal um eine Bestätiguung dieser Entscheidung gefragt, bevor die Veränderungen wirklich angewendet werden. </translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1366"/>
        <source>This storage device has %1 on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Auf dieser Festplatte ist %1. Was möchtest du tun? Du wirst noch einmal um eine Bestätiguung dieser Entscheidung gefragt, bevor die Veränderungen wirklich angewendet werden.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1388"/>
        <source>This storage device already has an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Diese Festplatte scheint schon ein Betrebssystem zu beinhalten. Was möchtest du tun?&lt;br/&gt; Du wirst noch einmal um eine Bestätiguung dieser Entscheidung gefragt, bevor die Veränderungen wirklich angewendet werden.​</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1413"/>
        <source>This storage device has multiple operating systems on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Diese Festplatte scheint mehrere Betrebssysteme zu beinhalten. Was möchtest du tun?&lt;br/&gt; Du wirst noch einmal um eine Bestätiguung dieser Entscheidung gefragt, bevor die Veränderungen wirklich angewendet werden.​</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1485"/>
        <source>This storage device already has an operating system on it, but the partition table &lt;strong&gt;%1&lt;/strong&gt; is different from the needed &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1508"/>
        <source>This storage device has one of its partitions &lt;strong&gt;mounted&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1513"/>
        <source>This storage device is a part of an &lt;strong&gt;inactive RAID&lt;/strong&gt; device.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1628"/>
        <source>No Swap</source>
        <translation>Keine Auslagerung</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1637"/>
        <source>Reuse Swap</source>
        <translation>Auslagerung wiederverwenden</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1640"/>
        <source>Swap (no Hibernate)</source>
        <translation>Auslagerung (kein Ruhezustand)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1643"/>
        <source>Swap (with Hibernate)</source>
        <translation>Auslagerung (mit Ruhezustand)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1646"/>
        <source>Swap to file</source>
        <translation>Auslagerung in Datei</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1659"/>
        <source>&lt;strong&gt;Manual partitioning&lt;/strong&gt;&lt;br/&gt;You can create or resize partitions yourself.&lt;br/&gt;Having a GPT partition table and &lt;strong&gt;fat32 512Mb /boot partition is a must for UEFI installs&lt;/strong&gt;,&lt;br/&gt;either use an existing without formatting or create one.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ChoicePageQml</name>
    <message>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="157"/>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="191"/>
        <source>No swap</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="163"/>
        <source>Reuse swap</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="169"/>
        <source>Swap (no Hibernate)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="175"/>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="194"/>
        <source>Swap (with Hibernate)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="181"/>
        <source>Swap to file</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="548"/>
        <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="556"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="564"/>
        <source>EFI system partition:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="698"/>
        <source>This storage device does not seem to have an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="703"/>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="737"/>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="761"/>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="788"/>
        <source>&lt;strong&gt;Erase disk&lt;/strong&gt;&lt;br/&gt;This will &lt;font color=&quot;red&quot;&gt;delete&lt;/font&gt; all data currently present on the selected storage device.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="707"/>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="733"/>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="757"/>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="784"/>
        <source>&lt;strong&gt;Install alongside&lt;/strong&gt;&lt;br/&gt;The installer will shrink a partition to make room for %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="711"/>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="742"/>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="765"/>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="792"/>
        <source>&lt;strong&gt;Replace a partition&lt;/strong&gt;&lt;br/&gt;Replaces a partition with %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="727"/>
        <source>This storage device has %1 on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="752"/>
        <source>This storage device already has an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="779"/>
        <source>This storage device has multiple operating systems on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="853"/>
        <source>This storage device already has an operating system on it, but the partition table &lt;strong&gt;%1&lt;/strong&gt; is different from the needed &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="874"/>
        <source>This storage device has one of its partitions &lt;strong&gt;mounted&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="879"/>
        <source>This storage device is a part of an &lt;strong&gt;inactive RAID&lt;/strong&gt; device.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/ChoicePageQml.cpp" line="889"/>
        <source>&lt;strong&gt;Manual partitioning&lt;/strong&gt;&lt;br/&gt;You can create or resize partitions yourself.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ClearMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="272"/>
        <source>Successfully unmounted %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="279"/>
        <source>Successfully disabled swap %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="305"/>
        <source>Successfully cleared swap %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="319"/>
        <source>Successfully closed mapper device %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="332"/>
        <source>Successfully disabled volume group %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="371"/>
        <source>Clear mounts for partitioning operations on %1</source>
        <translation>Kläre eingehängte Partitionen für Operationen auf %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="377"/>
        <source>Clearing mounts for partitioning operations on %1.</source>
        <translation>Löse eingehängte Partitionen für Operationen auf %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="396"/>
        <source>Cleared all mounts for %1</source>
        <translation>Kläre alle eingehängten Partitionen für %1</translation>
    </message>
</context>
<context>
    <name>ClearTempMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="33"/>
        <source>Clear all temporary mounts.</source>
        <translation>Löse alle temporär eingehängten Partitionen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="40"/>
        <source>Clearing all temporary mounts.</source>
        <translation>Alle temporären Einbindungen werden gelöst.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="70"/>
        <source>Cleared all temporary mounts.</source>
        <translation>Alle temporär eingehängten Partitionen sind jetzt entbunden.</translation>
    </message>
</context>
<context>
    <name>CommandList</name>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="164"/>
        <source>Could not run command.</source>
        <translation>Konnte Kommando nicht ausführen. </translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="165"/>
        <source>The commands use variables that are not defined. Missing variables are: %1.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Config</name>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="57"/>
        <source>This computer does not satisfy the minimum requirements for setting up %1.&lt;br/&gt;Setup cannot continue.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="60"/>
        <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="66"/>
        <source>This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;Setup can continue, but some features might be disabled.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="70"/>
        <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="80"/>
        <source>This program will ask you some questions and set up %2 on your computer.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="264"/>
        <source>&lt;h1&gt;Welcome to the Calamares setup program for %1&lt;/h1&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="265"/>
        <source>&lt;h1&gt;Welcome to %1 setup&lt;/h1&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="269"/>
        <source>&lt;h1&gt;Welcome to the Calamares installer for %1&lt;/h1&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="270"/>
        <source>&lt;h1&gt;Welcome to the %1 installer&lt;/h1&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/summary/Config.cpp" line="94"/>
        <source>Summary</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/summary/Config.cpp" line="98"/>
        <source>This is an overview of what will happen once you start the setup procedure.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/summary/Config.cpp" line="103"/>
        <source>This is an overview of what will happen once you start the install procedure.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="235"/>
        <source>Your username is too long.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="251"/>
        <source>&apos;%1&apos; is not allowed as username.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="241"/>
        <source>Your username must start with a lowercase letter or underscore.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="245"/>
        <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="300"/>
        <source>Your hostname is too short.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="304"/>
        <source>Your hostname is too long.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="310"/>
        <source>&apos;%1&apos; is not allowed as hostname.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="315"/>
        <source>Only letters, numbers, underscore and hyphen are allowed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="598"/>
        <source>Your passwords do not match!</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="612"/>
        <source>OK!</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/Config.cpp" line="111"/>
        <source>Package Selection</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/Config.cpp" line="113"/>
        <source>Please pick a product from the list. The selected product will be installed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/Config.cpp" line="242"/>
        <source>Install option: &lt;strong&gt;%1&lt;/strong&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/Config.cpp" line="242"/>
        <source>None</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="142"/>
        <source>Setup Failed</source>
        <comment>@title</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="142"/>
        <source>Installation Failed</source>
        <comment>@title</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="144"/>
        <source>The setup of %1 did not complete successfully.</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="145"/>
        <source>The installation of %1 did not complete successfully.</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="149"/>
        <source>Setup Complete</source>
        <comment>@title</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="150"/>
        <source>Installation Complete</source>
        <comment>@title</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="151"/>
        <source>The setup of %1 is complete.</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="152"/>
        <source>The installation of %1 is complete.</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboard/Config.cpp" line="505"/>
        <source>Keyboard model has been set to %1&lt;br/&gt;.</source>
        <comment>@label, %1 is keyboard model, as in Apple Magic Keyboard</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboard/Config.cpp" line="512"/>
        <source>Keyboard layout has been set to %1/%2.</source>
        <comment>@label, %1 is layout, %2 is layout variant</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/locale/Config.cpp" line="373"/>
        <source>Set timezone to %1/%2</source>
        <comment>@action</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/locale/Config.cpp" line="410"/>
        <source>The system language will be set to %1</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/locale/Config.cpp" line="417"/>
        <source>The numbers and dates locale will be set to %1</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>CreatePartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="18"/>
        <source>Create a Partition</source>
        <translation>Partition erstellen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="52"/>
        <source> MiB</source>
        <translation> MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="59"/>
        <source>Partition &amp;Type:</source>
        <translation>Partitions&amp;typ:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="71"/>
        <source>Primar&amp;y</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="81"/>
        <source>E&amp;xtended</source>
        <translation>Er&amp;weitert</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="123"/>
        <source>Fi&amp;le System:</source>
        <translation>Da&amp;teisystem:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="155"/>
        <source>LVM LV name</source>
        <translation>LVM LV Name</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="191"/>
        <source>Flags:</source>
        <translation>Markierungen:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="224"/>
        <source>Label for the filesystem</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="234"/>
        <source>FS Label:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="165"/>
        <source>&amp;Mount Point:</source>
        <translation>Ein&amp;hängepunkt:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="42"/>
        <source>Si&amp;ze:</source>
        <translation>Gr&amp;öße:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="67"/>
        <source>En&amp;crypt</source>
        <translation>Vers&amp;chlüsseln</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="195"/>
        <source>Logical</source>
        <translation>Logisch</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="200"/>
        <source>Primary</source>
        <translation>Primär</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="219"/>
        <source>GPT</source>
        <translation>GPT</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="91"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation>Einhängepunkt wird bereits besetzt. Bitte wählen Sie einen anderen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="96"/>
        <source>Mountpoint must start with a &lt;tt&gt;/&lt;/tt&gt;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>CreatePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="181"/>
        <source>Create new %1MiB partition on %3 (%2) with entries %4.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="189"/>
        <source>Create new %1MiB partition on %3 (%2).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="196"/>
        <source>Create new %2MiB partition on %4 (%3) with file system %1.</source>
        <translation>Neue %2MiB Partition auf %4 (%3) mit dem Dateisystem %1 erstellen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="212"/>
        <source>Create new &lt;strong&gt;%1MiB&lt;/strong&gt; partition on &lt;strong&gt;%3&lt;/strong&gt; (%2) with entries &lt;em&gt;%4&lt;/em&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="221"/>
        <source>Create new &lt;strong&gt;%1MiB&lt;/strong&gt; partition on &lt;strong&gt;%3&lt;/strong&gt; (%2).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="228"/>
        <source>Create new &lt;strong&gt;%2MiB&lt;/strong&gt; partition on &lt;strong&gt;%4&lt;/strong&gt; (%3) with file system &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Neue &lt;strong&gt;%2MiB&lt;/strong&gt; Partition auf &lt;strong&gt;%4&lt;/strong&gt; (%3) mit Dateisystem &lt;strong&gt;%1&lt;/strong&gt; erstellen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="252"/>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="255"/>
        <source>Creating new %1 partition on %2.</source>
        <translation>Neue %1 Partition wird auf %2 erstellt.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="272"/>
        <source>The installer failed to create partition on disk &apos;%1&apos;.</source>
        <translation>Das Installationsprogramm konnte die Partition auf Datenträger &apos;%1&apos; nicht erstellen.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="24"/>
        <source>Create Partition Table</source>
        <translation>Partitionstabelle erstellen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="43"/>
        <source>Creating a new partition table will delete all existing data on the disk.</source>
        <translation>Beim Erstellen einer neuen Partitionstabelle werden alle Daten auf dem Datenträger gelöscht.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="69"/>
        <source>What kind of partition table do you want to create?</source>
        <translation>Welchen Partitionstabellen-Typ möchten Sie erstellen?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="76"/>
        <source>Master Boot Record (MBR)</source>
        <translation>Master Boot Record (MBR)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="86"/>
        <source>GUID Partition Table (GPT)</source>
        <translation>GUID Partitions-Tabelle (GPT)</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="41"/>
        <source>Create new %1 partition table on %2.</source>
        <translation>Neue %1 Partitionstabelle erstellen auf %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="49"/>
        <source>Create new &lt;strong&gt;%1&lt;/strong&gt; partition table on &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>Neue &lt;strong&gt;%1&lt;/strong&gt; Partitionstabelle erstellen auf &lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="58"/>
        <source>Creating new %1 partition table on %2.</source>
        <translation>Neue %1 Partitionstabelle wird auf %2 erstellt.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="86"/>
        <source>The installer failed to create a partition table on %1.</source>
        <translation>Das Installationsprogramm konnte die Partitionstabelle auf %1 nicht erstellen.</translation>
    </message>
</context>
<context>
    <name>CreateUserJob</name>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="33"/>
        <source>Create user %1</source>
        <translation>Erstelle Benutzer %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="39"/>
        <source>Create user &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Benutzer &lt;strong&gt;%1&lt;/strong&gt; erstellen.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="45"/>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="137"/>
        <source>Creating user %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="120"/>
        <source>Preserving home directory</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="145"/>
        <source>Configuring user %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="153"/>
        <source>Setting file permissions</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>CreateVolumeGroupDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreateVolumeGroupDialog.cpp" line="28"/>
        <source>Create Volume Group</source>
        <translation>Erstelle Volumegruppe</translation>
    </message>
</context>
<context>
    <name>CreateVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="32"/>
        <source>Create new volume group named %1.</source>
        <translation>Erstelle eine neue Volumegruppe mit dem Namen %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="38"/>
        <source>Create new volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Erstelle eine neue Volumegruppe mit dem Namen &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="44"/>
        <source>Creating new volume group named %1.</source>
        <translation>Erstelle neue Volumegruppe mit dem Namen %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="51"/>
        <source>The installer failed to create a volume group named &apos;%1&apos;.</source>
        <translation>Das Installationsprogramm konnte keine Volumegruppe mit dem Namen &apos;%1&apos; erstellen.</translation>
    </message>
</context>
<context>
    <name>DeactivateVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="26"/>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="38"/>
        <source>Deactivate volume group named %1.</source>
        <translation>Volumegruppe namens %1 deaktivieren.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="32"/>
        <source>Deactivate volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Volumegruppe namens &lt;strong&gt;%1&lt;/strong&gt; deaktivieren.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="46"/>
        <source>The installer failed to deactivate a volume group named %1.</source>
        <translation>Das Installationsprogramm konnte die Volumegruppe mit Namen %1 nicht deaktivieren.</translation>
    </message>
</context>
<context>
    <name>DeletePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="73"/>
        <source>Delete partition %1.</source>
        <translation>Partition %1 löschen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="79"/>
        <source>Delete partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Partition &lt;strong&gt;%1&lt;/strong&gt; löschen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="85"/>
        <source>Deleting partition %1.</source>
        <translation>Partition %1 wird gelöscht.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="99"/>
        <source>The installer failed to delete partition %1.</source>
        <translation>Das Installationsprogramm konnte Partition %1 nicht löschen.</translation>
    </message>
</context>
<context>
    <name>DeviceInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="147"/>
        <source>The type of &lt;strong&gt;partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The only way to change the partition table type is to erase and recreate the partition table from scratch, which destroys all data on the storage device.&lt;br&gt;This installer will keep the current partition table unless you explicitly choose otherwise.&lt;br&gt;If unsure, on modern systems GPT is preferred.</source>
        <translation>Der Typ der &lt;strong&gt;Partitionstabelle&lt;/strong&gt; auf dem ausgewählten Speichermedium.&lt;br&gt;&lt;br&gt;Die einzige Möglichkeit, den Typ der Partitionstabelle zu ändern, besteht darin, die Partitionstabelle von Grund auf zu löschen und neu zu erstellen, wodurch alle Daten auf dem Speichermedium zerstört werden.&lt;br&gt;Dieser Installer behält die aktuelle Partitionstabelle, sofern Sie nicht ausdrücklich etwas anderes wählen.&lt;br&gt;Im Zweifelsfall wird auf modernen Systemen GPT bevorzugt.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="139"/>
        <source>This device has a &lt;strong&gt;%1&lt;/strong&gt; partition table.</source>
        <translation>Dieses Gerät hat eine &lt;strong&gt;%1&lt;/strong&gt; Partitionstabelle.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="95"/>
        <source>This is a &lt;strong&gt;loop&lt;/strong&gt; device.&lt;br&gt;&lt;br&gt;It is a pseudo-device with no partition table that makes a file accessible as a block device. This kind of setup usually only contains a single filesystem.</source>
        <translation>Dies ist ein &lt;strong&gt;Loop&lt;/strong&gt; Device.&lt;br&gt;&lt;br&gt; Es ist ein Pseudo-Gerät ohne Partitionstabelle, das eine Datei als Block Device zugänglich macht. Diese Art von Setup enthält in der Regel nur ein einziges Dateisystem.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="104"/>
        <source>This installer &lt;strong&gt;cannot detect a partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The device either has no partition table, or the partition table is corrupted or of an unknown type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</source>
        <translation>Dieses Installationsprogramm &lt;strong&gt;kann keine Partitionstabelle&lt;/strong&gt; auf dem ausgewählten Speichermedium erkennen.&lt;br&gt;&lt;br&gt;Entweder hat es keine Partitionstabelle, die Partitionstabelle ist beschädigt oder von unbekanntem Typ.&lt;br&gt;Dieses Installationsprogramm kann entweder automatisch oder über die manuelle Partitionierungsseite eine neue Partitionstabelle für Sie erstellen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="89"/>
        <source>&lt;br&gt;&lt;br&gt;This is the recommended partition table type for modern systems which start from an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.</source>
        <translation>&lt;br&gt;&lt;br&gt;Dies ist der empfohlene Partitionstabellentyp für moderne Systeme, die von einer &lt;strong&gt;EFI&lt;/strong&gt; Bootumgebung aus starten.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="78"/>
        <source>&lt;br&gt;&lt;br&gt;This partition table type is only advisable on older systems which start from a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment. GPT is recommended in most other cases.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Warning:&lt;/strong&gt; the MBR partition table is an obsolete MS-DOS era standard.&lt;br&gt;Only 4 &lt;em&gt;primary&lt;/em&gt; partitions may be created, and of those 4, one can be an &lt;em&gt;extended&lt;/em&gt; partition, which may in turn contain many &lt;em&gt;logical&lt;/em&gt; partitions.</source>
        <translation>&lt;br&gt;&lt;br&gt;Dieser Partitionstabellentyp ist nur auf älteren Systemen sinnvoll, die von einer &lt;strong&gt;BIOS&lt;/strong&gt; Bootumgebung aus starten. In den meisten anderen Fällen wird GPT empfohlen.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Achtung:&lt;/strong&gt; Die MBR-Partitionstabelle ist ein veralteter MS-DOS-Ära-Standard.&lt;br&gt; Es können nur vier &lt;em&gt;primäre&lt;/em&gt; Partitionen erstellt werden und eine von diesen vier kann eine &lt;em&gt;erweiterte&lt;/em&gt; Partition sein, die wiederum viele &lt;em&gt;logische&lt;/em&gt; Partitionen enthalten kann.</translation>
    </message>
</context>
<context>
    <name>DeviceModel</name>
    <message>
        <location filename="../src/modules/partition/core/DeviceModel.cpp" line="82"/>
        <source>%1 - %2 (%3)</source>
        <extracomment>device[name] - size[number] (device-node[name])</extracomment>
        <translation>%1 - %2 (%3)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/DeviceModel.cpp" line="93"/>
        <source>%1 - (%2)</source>
        <extracomment>device[name] - (device-node[name])</extracomment>
        <translation>%1 - (%2)</translation>
    </message>
</context>
<context>
    <name>DracutLuksCfgJob</name>
    <message>
        <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="117"/>
        <source>Writing LUKS configuration for Dracut to %1…</source>
        <comment>@status</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="121"/>
        <source>Skipping writing LUKS configuration for Dracut: &quot;/&quot; partition is not encrypted</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="138"/>
        <source>Failed to open %1</source>
        <comment>@error</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>EditExistingPartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="24"/>
        <source>Edit Existing Partition</source>
        <translation>Editiere bestehende Partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="54"/>
        <source>Con&amp;tent:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="64"/>
        <source>&amp;Keep</source>
        <translation>&amp;Beibehalten</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="74"/>
        <source>Format</source>
        <translation>Formatieren</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="93"/>
        <source>Warning: Formatting the partition will erase all existing data.</source>
        <translation>Warnung: Beim Formatieren der Partition werden alle Daten gelöscht.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="103"/>
        <source>&amp;Mount Point:</source>
        <translation>Einhängepun&amp;kt:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="129"/>
        <source>Si&amp;ze:</source>
        <translation>Gr&amp;öße:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="139"/>
        <source> MiB</source>
        <translation> MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="146"/>
        <source>Fi&amp;le System:</source>
        <translation>Da&amp;teisystem:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="159"/>
        <source>Flags:</source>
        <translation>Markierungen:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="179"/>
        <source>Label for the filesystem</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="189"/>
        <source>FS Label:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.cpp" line="259"/>
        <source>Passphrase for existing partition</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.cpp" line="260"/>
        <source>Partition %1 could not be decrypted with the given passphrase.&lt;br/&gt;&lt;br/&gt;Edit the partition again and give the correct passphrase or delete and create a new encrypted partition.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>EncryptWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="36"/>
        <source>En&amp;crypt system</source>
        <translation>System vers&amp;chlüsseln</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="43"/>
        <source>Your system does not seem to support encryption well enough to encrypt the entire system. You may enable encryption, but performance may suffer.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="59"/>
        <source>Passphrase</source>
        <translation>Passphrase</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="69"/>
        <source>Confirm passphrase</source>
        <translation>Passphrase bestätigen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="153"/>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="168"/>
        <source>Please enter the same passphrase in both boxes.</source>
        <translation>Bitte geben Sie einen beiden Kästen die gleiche Passphrase ein.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="158"/>
        <source>Password must be a minimum of %1 characters</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ErrorDialog</name>
    <message>
        <location filename="../src/libcalamaresui/widgets/ErrorDialog.ui" line="40"/>
        <source>Details:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/ErrorDialog.ui" line="56"/>
        <source>Would you like to paste the install log to the web?</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>FillGlobalStorageJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="179"/>
        <source>Set partition information</source>
        <translation>Setze Partitionsinformationen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="208"/>
        <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition with features &lt;em&gt;%3&lt;/em&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="216"/>
        <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition.</source>
        <translation>%1 auf &lt;strong&gt;neuer&lt;/strong&gt; %2 Systempartition installieren.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="225"/>
        <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt; and features &lt;em&gt;%3&lt;/em&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="233"/>
        <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt;%3.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="247"/>
        <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt; with features &lt;em&gt;%4&lt;/em&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="266"/>
        <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt; and features &lt;em&gt;%4&lt;/em&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="275"/>
        <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt;%4.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="256"/>
        <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>%2 auf %3 Systempartition &lt;strong&gt;%1&lt;/strong&gt; installieren.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="290"/>
        <source>Install boot loader on &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Installiere Bootloader auf &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="299"/>
        <source>Setting up mount points.</source>
        <translation>Einhängepunkte werden eingerichtet.</translation>
    </message>
</context>
<context>
    <name>FinishedPage</name>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="102"/>
        <source>&amp;Restart now</source>
        <translation>&amp;Neustart</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="75"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been set up on your computer.&lt;br/&gt;You may now start using your new system.</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="79"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot;font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the setup program.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <comment>@tooltip</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="87"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been installed on your computer.&lt;br/&gt;You may now restart into your new system, or continue using the %2 Live environment.</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="92"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot;font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the installer.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <comment>@tooltip</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="105"/>
        <source>&lt;h1&gt;Setup Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been set up on your computer.&lt;br/&gt;The error message was: %2.</source>
        <comment>@info, %1 is product name with version</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="113"/>
        <source>&lt;h1&gt;Installation Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been installed on your computer.&lt;br/&gt;The error message was: %2.</source>
        <comment>@info, %1 is product name with version</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>FinishedQmlViewStep</name>
    <message>
        <location filename="../src/modules/finishedq/FinishedQmlViewStep.cpp" line="35"/>
        <source>Finish</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>FinishedViewStep</name>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="46"/>
        <source>Finish</source>
        <comment>@label</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>FormatPartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="39"/>
        <source>Format partition %1 (file system: %2, size: %3 MiB) on %4.</source>
        <translation>Partition %1 formatieren (Dateisystem: %2, Größe: %3 MB) auf %4.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="49"/>
        <source>Format &lt;strong&gt;%3MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; with file system &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%3MB&lt;/strong&gt; Partition &lt;strong&gt;%1&lt;/strong&gt; mit Dateisystem &lt;strong&gt;%2&lt;/strong&gt; formatieren.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="61"/>
        <source>%1 (%2)</source>
        <comment>partition label %1 (device path %2)</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="63"/>
        <source>Formatting partition %1 with file system %2.</source>
        <translation>Formatiere Partition %1  mit dem Dateisystem %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="73"/>
        <source>The installer failed to format partition %1 on disk &apos;%2&apos;.</source>
        <translation>Das Installationsprogramm konnte die Partition %1 auf Datenträger &apos;%2&apos; nicht formatieren.</translation>
    </message>
</context>
<context>
    <name>GeneralRequirements</name>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="160"/>
        <source>Please ensure the system has at least %1 GiB available drive space.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="162"/>
        <source>Available drive space is all of the hard disks and SSDs connected to the system.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="165"/>
        <source>There is not enough drive space. At least %1 GiB is required.</source>
        <translation>Es ist nicht genügend Speicherplatz vorhanden, zumindest %1 GB freimachen.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="173"/>
        <source>has at least %1 GiB working memory</source>
        <translation>hat mindestens %1 GB Arbeitsspeicher</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="175"/>
        <source>The system does not have enough working memory. At least %1 GiB is required.</source>
        <translation>Dieser Computer hat nicht genügend Arbeitsspeicher verfügbar: Zumindest %1 GB sind empfohlen.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="184"/>
        <source>is plugged in to a power source</source>
        <translation>ist an eine Stromquelle angeschlossen</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="185"/>
        <source>The system is not plugged in to a power source.</source>
        <translation>Das System ist noch nicht an eine Stromquelle angeschlossen.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="192"/>
        <source>is connected to the Internet</source>
        <translation>ist mit dem Internet verbunden</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="193"/>
        <source>The system is not connected to the Internet.</source>
        <translation>Das System ist nicht mit dem Internet verbunden.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="200"/>
        <source>is running the installer as an administrator (root)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="204"/>
        <source>The setup program is not running with administrator rights.</source>
        <translation>Führen sie dieses Installationsprogramm mit Administratorrechten aus. </translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="205"/>
        <source>The installer is not running with administrator rights.</source>
        <translation>Führen sie dieses Installationsprogramm mit Administratorrechten aus. </translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="213"/>
        <source>has a screen large enough to show the whole installer</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="217"/>
        <source>The screen is too small to display the setup program.</source>
        <translation>Der Bildschirm ist zu klein, um das Installationsprogramm anzuzeigen.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="218"/>
        <source>The screen is too small to display the installer.</source>
        <translation>Der Bildschirm ist zu klein, um das Installationsprogramm anzuzeigen.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="227"/>
        <source>is always false</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="228"/>
        <source>The computer says no.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="236"/>
        <source>is always false (slowly)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="237"/>
        <source>The computer says no (slowly).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="244"/>
        <source>is always true</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="245"/>
        <source>The computer says yes.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="253"/>
        <source>is always true (slowly)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="254"/>
        <source>The computer says yes (slowly).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="262"/>
        <source>is checked three times.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="265"/>
        <source>The snark has not been checked three times.</source>
        <comment>The (some mythological beast) has not been checked three times.</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>IDJob</name>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="30"/>
        <location filename="../src/modules/oemid/IDJob.cpp" line="39"/>
        <location filename="../src/modules/oemid/IDJob.cpp" line="52"/>
        <location filename="../src/modules/oemid/IDJob.cpp" line="59"/>
        <source>OEM Batch Identifier</source>
        <translation>OEM Batch Identifier</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="40"/>
        <source>Could not create directories &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>Konnte Verzeichnisse &lt;code&gt;%1&lt;/code&gt;nicht erstellen.</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="53"/>
        <source>Could not open file &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>Konnte die Datei &lt;code&gt;%1&lt;/code&gt;nicht öffnen. </translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="60"/>
        <source>Could not write to file &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>Konnte die Datei &lt;code&gt;%1&lt;/code&gt;nicht beschreiben.</translation>
    </message>
</context>
<context>
    <name>InitcpioJob</name>
    <message>
        <location filename="../src/modules/initcpio/InitcpioJob.cpp" line="31"/>
        <source>Creating initramfs with mkinitcpio…</source>
        <comment>@status</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>KeyboardQmlViewStep</name>
    <message>
        <location filename="../src/modules/keyboardq/KeyboardQmlViewStep.cpp" line="32"/>
        <source>Keyboard</source>
        <comment>@label</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>KeyboardViewStep</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardViewStep.cpp" line="41"/>
        <source>Keyboard</source>
        <comment>@label</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>LCLocaleDialog</name>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="23"/>
        <source>System Locale Setting</source>
        <comment>@title</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="30"/>
        <source>The system locale setting affects the language and character set for some command line user interface elements.&lt;br/&gt;The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="54"/>
        <source>&amp;Cancel</source>
        <comment>@button</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="55"/>
        <source>&amp;OK</source>
        <comment>@button</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>LOSHJob</name>
    <message>
        <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="35"/>
        <source>Configuring encrypted swap.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="87"/>
        <source>No target system available.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="95"/>
        <source>No rootMountPoint is set.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="100"/>
        <source>No configFilePath is set.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>LicensePage</name>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="26"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Lizenzvereinbarung&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="142"/>
        <source>I accept the terms and conditions above.</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="144"/>
        <source>Please review the End User License Agreements (EULAs).</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="149"/>
        <source>This setup procedure will install proprietary software that is subject to licensing terms.</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="152"/>
        <source>If you do not agree with the terms, the setup procedure cannot continue.</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="157"/>
        <source>This setup procedure can install proprietary software that is subject to licensing terms in order to provide additional features and enhance the user experience.</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="162"/>
        <source>If you do not agree with the terms, proprietary software will not be installed, and open source alternatives will be used instead.</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>LicenseViewStep</name>
    <message>
        <location filename="../src/modules/license/LicenseViewStep.cpp" line="45"/>
        <source>License</source>
        <comment>@label</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>LicenseWidget</name>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="88"/>
        <source>URL: %1</source>
        <comment>@label</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="109"/>
        <source>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;by %2</source>
        <comment>@label, %1 is product name, %2 is product vendor</comment>
        <extracomment>%1 is an untranslatable product name, example: Creative Audigy driver</extracomment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="116"/>
        <source>&lt;strong&gt;%1 graphics driver&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <comment>@label, %1 is product name, %2 is product vendor</comment>
        <extracomment>%1 is usually a vendor name, example: Nvidia graphics driver</extracomment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="122"/>
        <source>&lt;strong&gt;%1 browser plugin&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <comment>@label, %1 is product name, %2 is product vendor</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="128"/>
        <source>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <comment>@label, %1 is product name, %2 is product vendor</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="134"/>
        <source>&lt;strong&gt;%1 package&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <comment>@label, %1 is product name, %2 is product vendor</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="140"/>
        <source>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <comment>@label, %1 is product name, %2 is product vendor</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="163"/>
        <source>File: %1</source>
        <comment>@label</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="186"/>
        <source>Hide the license text</source>
        <comment>@tooltip</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="186"/>
        <source>Show the license text</source>
        <comment>@tooltip</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="190"/>
        <source>Open the license agreement in browser</source>
        <comment>@tooltip</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>LocalePage</name>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="130"/>
        <source>Region:</source>
        <comment>@label</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="131"/>
        <source>Zone:</source>
        <comment>@label</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="132"/>
        <location filename="../src/modules/locale/LocalePage.cpp" line="133"/>
        <source>&amp;Change…</source>
        <comment>@button</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>LocaleQmlViewStep</name>
    <message>
        <location filename="../src/modules/localeq/LocaleQmlViewStep.cpp" line="32"/>
        <source>Location</source>
        <comment>@label</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>LocaleTests</name>
    <message>
        <location filename="../src/libcalamares/locale/Tests.cpp" line="271"/>
        <source>Quit</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>LocaleViewStep</name>
    <message>
        <location filename="../src/modules/locale/LocaleViewStep.cpp" line="71"/>
        <source>Location</source>
        <comment>@label</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>LuksBootKeyFileJob</name>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="33"/>
        <source>Configuring LUKS key file.</source>
        <translation>LUKS-Schlüsseldatei wird konfiguriert.</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="254"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="262"/>
        <source>No partitions are defined.</source>
        <translation>Es wurden keine Partitionen festgelegt.</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="297"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="304"/>
        <source>Encrypted rootfs setup error</source>
        <translation>Fehler beim Einrichten des verschlüsselten rootfs</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="298"/>
        <source>Root partition %1 is LUKS but no passphrase has been set.</source>
        <translation>Die Root-Partition %1 ist LUKS, aber es wurde keine Passphrase gesetzt.</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="305"/>
        <source>Could not create LUKS key file for root partition %1.</source>
        <translation>Konnte keine LUKS-Schlüsseldatei für die Root-Partition %1 erstellen.</translation>
    </message>
</context>
<context>
    <name>MachineIdJob</name>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="55"/>
        <source>Generate machine-id.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="71"/>
        <source>Configuration Error</source>
        <translation>Konfigurationsfehler</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="72"/>
        <source>No root mount point is set for MachineId.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Map</name>
    <message>
        <location filename="../src/modules/localeq/Map.qml" line="44"/>
        <location filename="../src/modules/localeq/Map.qml" line="68"/>
        <source>Timezone: </source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/Map.qml" line="232"/>
        <source>Please select your preferred location on the map so the installer can suggest the locale
            and timezone settings for you. You can fine-tune the suggested settings below. Search the map by dragging
            to move and using the +/- buttons to zoom in/out or use mouse scrolling for zooming.</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>NotesQmlViewStep</name>
    <message>
        <location filename="../src/modules/notesqml/NotesQmlViewStep.cpp" line="23"/>
        <source>Notes</source>
        <translation>Hinweise</translation>
    </message>
</context>
<context>
    <name>OEMPage</name>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="32"/>
        <source>Ba&amp;tch:</source>
        <translation>Ba&amp;tch:</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="42"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter a batch-identifier here. This will be stored in the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Sie können hier eine Chargenkennung eingeben. Diese wird im Zielsystem gespeichert. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="52"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEM Configuration&lt;/h1&gt;&lt;p&gt;Calamares will use OEM settings while configuring the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEM Configuration&lt;/h1&gt;&lt;p&gt;Calamares will use OEM settings while configuring the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>OEMViewStep</name>
    <message>
        <location filename="../src/modules/oemid/OEMViewStep.cpp" line="118"/>
        <source>OEM Configuration</source>
        <translation>OEM Configuration</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMViewStep.cpp" line="124"/>
        <source>Set the OEM Batch Identifier to &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>Set the OEM Batch Identifier to &lt;code&gt;%1&lt;/code&gt;.</translation>
    </message>
</context>
<context>
    <name>Offline</name>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="47"/>
        <source>Select your preferred Region, or use the default settings.</source>
        <comment>@label</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="103"/>
        <location filename="../src/modules/localeq/Offline.qml" line="180"/>
        <location filename="../src/modules/localeq/Offline.qml" line="224"/>
        <source>Timezone: %1</source>
        <comment>@label</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="120"/>
        <source>Select your preferred Zone within your Region.</source>
        <comment>@label</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="193"/>
        <source>Zones</source>
        <comment>@button</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="240"/>
        <source>You can fine-tune Language and Locale settings below.</source>
        <comment>@label</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>PWQ</name>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="52"/>
        <source>Password is too short</source>
        <translation>Passwort ist zu kurz</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="68"/>
        <source>Password is too long</source>
        <translation>Passwort ist zu lang</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="189"/>
        <source>Password is too weak</source>
        <translation>Passwort ist zu schwach</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="197"/>
        <source>Memory allocation error when setting &apos;%1&apos;</source>
        <translation>Speicherzuweisung fehlgeschlagen beim Setzen von &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="200"/>
        <source>Memory allocation error</source>
        <translation>Fehler bei der Speicherzuweisung</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="202"/>
        <source>The password is the same as the old one</source>
        <translation>Das Passwort ist identisch zum alten</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="204"/>
        <source>The password is a palindrome</source>
        <translation>Das Passwort ist ein Palindrom</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="206"/>
        <source>The password differs with case changes only</source>
        <translation>Das Passwort unterscheidet sich nur in Groß- und Kleinschreibung</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="208"/>
        <source>The password is too similar to the old one</source>
        <translation>Das Passwort ist dem alten zu ähnlich</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="210"/>
        <source>The password contains the user name in some form</source>
        <translation>Das Passwort enthält den Benutzernamen in irgendeiner Form</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="212"/>
        <source>The password contains words from the real name of the user in some form</source>
        <translation>Das Passwort enthält Teile des echten oder des Benutzernamens in irgendeiner Form</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="215"/>
        <source>The password contains forbidden words in some form</source>
        <translation>Das Passwort enthält unzulässige Wörter in irgendeiner Form</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="222"/>
        <source>The password contains too few digits</source>
        <translation>Das Passwort enthält zu wenige Zahlen</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="229"/>
        <source>The password contains too few uppercase letters</source>
        <translation>Das Passwort enthält zu wenig Großbuchstaben</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="236"/>
        <source>The password contains too few lowercase letters</source>
        <translation>Das Passwort enthält zu wenig Kleinbuchstaben</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="243"/>
        <source>The password contains too few non-alphanumeric characters</source>
        <translation>Das Passwort enthält zu wenige nicht-alphanumerische Zeichen</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="250"/>
        <source>The password is too short</source>
        <translation>Das Passwort ist zu kurz</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="259"/>
        <source>The password does not contain enough character classes</source>
        <translation>Das Passwort enthält nicht genügend Zeichenklassen</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="266"/>
        <source>The password contains too many same characters consecutively</source>
        <translation>Das Passwort enthält zu viele gleiche Zeichen hintereinander</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="276"/>
        <source>The password contains too many characters of the same class consecutively</source>
        <translation>Das Passwort enthält zu viele Zeichen der gleichen Klasse hintereinander</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="219"/>
        <source>The password contains fewer than %n digits</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="226"/>
        <source>The password contains fewer than %n uppercase letters</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="233"/>
        <source>The password contains fewer than %n lowercase letters</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="240"/>
        <source>The password contains fewer than %n non-alphanumeric characters</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="247"/>
        <source>The password is shorter than %n characters</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="252"/>
        <source>The password is a rotated version of the previous one</source>
        <translation type="unfinished"/>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="256"/>
        <source>The password contains fewer than %n character classes</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="263"/>
        <source>The password contains more than %n same characters consecutively</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="270"/>
        <source>The password contains more than %n characters of the same class consecutively</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="281"/>
        <source>The password contains monotonic sequence longer than %n characters</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="287"/>
        <source>The password contains too long of a monotonic character sequence</source>
        <translation>Das Passwort enthält eine zu lange gleichbleibende Zeichenfolge</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="290"/>
        <source>No password supplied</source>
        <translation>Kein Passwort angegeben</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="292"/>
        <source>Cannot obtain random numbers from the RNG device</source>
        <translation>Zufallszahlen können nicht aus dem RNG-Device abgerufen werden</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="294"/>
        <source>Password generation failed - required entropy too low for settings</source>
        <translation>Passwortgenerierung fehlgeschlagen - erforderliche Entropie zu niedrig für Einstellungen</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="299"/>
        <source>The password fails the dictionary check - %1</source>
        <translation>Das Passwort fällt bei der Wörterbuchprüfung durch - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="302"/>
        <source>The password fails the dictionary check</source>
        <translation>Das Passwort fällt bei der Wörterbuchprüfung durch</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="306"/>
        <source>Unknown setting - %1</source>
        <translation>Unbekannte Einstellung - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="308"/>
        <source>Unknown setting</source>
        <translation>Unbekannte Einstellung</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="312"/>
        <source>Bad integer value of setting - %1</source>
        <translation>Fehlerhafter ganzzahliger Wert der Einstellung - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="314"/>
        <source>Bad integer value</source>
        <translation>Fehlerhafter ganzzahliger Wert</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="318"/>
        <source>Setting %1 is not of integer type</source>
        <translation>Die Einstellung %1 ist nicht vom Typ Ganzzahl</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="320"/>
        <source>Setting is not of integer type</source>
        <translation>Die Einstellung ist nicht vom Typ Ganzzahl</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="324"/>
        <source>Setting %1 is not of string type</source>
        <translation>Die Einstellung %1 ist nicht vom Typ Zeichenkette</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="326"/>
        <source>Setting is not of string type</source>
        <translation>Die Einstellung ist nicht vom Typ Zeichenkette</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="328"/>
        <source>Opening the configuration file failed</source>
        <translation>Öffnen der Konfigurationsdatei fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="330"/>
        <source>The configuration file is malformed</source>
        <translation>Die Konfigurationsdatei ist fehlerhaft</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="332"/>
        <source>Fatal failure</source>
        <translation>Fataler Fehler</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="334"/>
        <source>Unknown error</source>
        <translation>Unbekannter Fehler</translation>
    </message>
</context>
<context>
    <name>PackageChooserPage</name>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="50"/>
        <source>Product Name</source>
        <translation>Produktname</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="63"/>
        <source>TextLabel</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="79"/>
        <source>Long Product Description</source>
        <translation>Lange Produktbeschreibung</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="25"/>
        <source>Package Selection</source>
        <translation>Paketauswahl</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="26"/>
        <source>Please pick a product from the list. The selected product will be installed.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>PackageChooserQmlViewStep</name>
    <message>
        <location filename="../src/modules/packagechooserq/PackageChooserQmlViewStep.cpp" line="32"/>
        <source>Packages</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>PackageChooserViewStep</name>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserViewStep.cpp" line="51"/>
        <source>Packages</source>
        <translation>Pakete</translation>
    </message>
</context>
<context>
    <name>Page_Keyboard</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="74"/>
        <source>Keyboard model:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="146"/>
        <source>Type here to test your keyboard</source>
        <translation>Tippen Sie hier, um die Tastaturbelegung zu testen</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="153"/>
        <source>Switch Keyboard:</source>
        <extracomment>shortcut for switching between keyboard layouts</extracomment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Page_UserSetup</name>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="40"/>
        <source>What is your name?</source>
        <translation>Wie ist Ihr Vor- und Nachname?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="124"/>
        <source>What name do you want to use to log in?</source>
        <translation>Welchen Namen möchten Sie zum Anmelden benutzen?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="325"/>
        <source>Choose a password to keep your account safe.</source>
        <translation>Wählen Sie ein Passwort, um Ihr Konto zu sichern.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="349"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="374"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Bitte geben Sie Ihr Passwort zweimal ein, um Tippfehler auszuschliessen. Ein gutes Passwort enthält Buchstaben, Zahlen und Sonderzeichen. Ferner sollte es mindestens acht Zeichen umfassen und regelmässig geändert werden.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="223"/>
        <source>What is the name of this computer?</source>
        <translation>Wie ist der Name dieses Computers?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="55"/>
        <source>Your Full Name</source>
        <translation>Ihr voller Name</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="148"/>
        <source>login</source>
        <translation>Anmelden</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="247"/>
        <source>&lt;small&gt;This name will be used if you make the computer visible to others on a network.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Dieser Name wird benutzt, wenn Sie den Computer im Netzwerk sichtbar machen.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="250"/>
        <source>Computer Name</source>
        <translation>Computername</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="355"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="525"/>
        <source>Password</source>
        <translation>Passwort</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="380"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="550"/>
        <source>Repeat Password</source>
        <translation>Passwort wiederholen</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="455"/>
        <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="458"/>
        <source>Require strong passwords.</source>
        <translation>Starke Passwörter verlangen.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="465"/>
        <source>Log in automatically without asking for the password.</source>
        <translation>Automatisch anmelden ohne nach dem Passwort zu fragen.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="472"/>
        <source>Use the same password for the administrator account.</source>
        <translation>Das gleiche Passwort für das Administratorkonto verwenden.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="495"/>
        <source>Choose a password for the administrator account.</source>
        <translation>Wählen Sie ein Passwort für das Administratorkonto aus.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="519"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="544"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Geben Sie das Passwort zweimal ein, um es auf Tippfehler zu prüfen.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>PartitionLabelsView</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="178"/>
        <source>Root</source>
        <translation>Wurzelverzeichnis</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="182"/>
        <source>Home</source>
        <translation>Heimatverzeichnis</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="186"/>
        <source>Boot</source>
        <translation>Boot</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="191"/>
        <source>EFI system</source>
        <translation>EFI-System</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="195"/>
        <source>Swap</source>
        <translation>Auslagerung</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="199"/>
        <source>New partition for %1</source>
        <translation>Neue Partition für %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="203"/>
        <source>New partition</source>
        <translation>Neue Partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="228"/>
        <source>%1  %2</source>
        <extracomment>size[number] filesystem[name]</extracomment>
        <translation>%1  %2</translation>
    </message>
</context>
<context>
    <name>PartitionModel</name>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="157"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="201"/>
        <source>Free Space</source>
        <translation>Freier Platz</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="161"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="205"/>
        <source>New partition</source>
        <translation>Neue Partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="307"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="309"/>
        <source>File System</source>
        <translation>Dateisystem</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="311"/>
        <source>File System Label</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="313"/>
        <source>Mount Point</source>
        <translation>Einhängepunkt</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="315"/>
        <source>Size</source>
        <translation>Größe</translation>
    </message>
</context>
<context>
    <name>PartitionPage</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="26"/>
        <source>Storage de&amp;vice:</source>
        <translation>Speicherge&amp;rät:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="55"/>
        <source>&amp;Revert All Changes</source>
        <translation>Alle Änderungen &amp;rückgängig machen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="91"/>
        <source>New Partition &amp;Table</source>
        <translation>Neue Partitions&amp;tabelle</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="111"/>
        <source>Cre&amp;ate</source>
        <translation>Erst&amp;ellen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="136"/>
        <source>New Volume Group</source>
        <translation>Neue Volumegruppe</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="143"/>
        <source>Resize Volume Group</source>
        <translation>Größe der Volumegruppe verändern</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="150"/>
        <source>Deactivate Volume Group</source>
        <translation>Volumegruppe deaktivieren</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="157"/>
        <source>Remove Volume Group</source>
        <translation>Volumegruppe entfernen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="184"/>
        <source>I&amp;nstall boot loader on:</source>
        <translation>I&amp;nstalliere Bootloader hier:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="118"/>
        <source>&amp;Edit</source>
        <translation>Ä&amp;ndern</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="125"/>
        <source>&amp;Delete</source>
        <translation>Lösc&amp;hen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="224"/>
        <source>Are you sure you want to create a new partition table on %1?</source>
        <translation>Sind Sie sicher, dass Sie eine neue Partitionstabelle auf %1 erstellen möchten?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="259"/>
        <source>Can not create new partition</source>
        <translation>Neue Partition konnte nicht erstellt werden</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="260"/>
        <source>The partition table on %1 already has %2 primary partitions, and no more can be added. Please remove one primary partition and add an extended partition, instead.</source>
        <translation>Die Partitionstabelle auf %1 hat bereits %2 primäre Partitionen und es können keine weiteren hinzugefügt werden. Bitte entfernen Sie eine primäre Partition und fügen Sie stattdessen eine erweiterte Partition hinzu.</translation>
    </message>
</context>
<context>
    <name>PartitionQmlViewStep</name>
    <message>
        <location filename="../src/modules/partitionq/PartitionQmlViewStep.cpp" line="39"/>
        <source>Partition</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>PartitionViewStep</name>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="56"/>
        <source>Gathering system information...</source>
        <translation>Systeminformationen werden gesammelt...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="107"/>
        <source>Partitions</source>
        <translation>Partitionen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="250"/>
        <source>Unsafe partition actions are enabled.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="253"/>
        <source>Partitioning is configured to &lt;b&gt;always&lt;/b&gt; fail.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="256"/>
        <source>No partitions will be changed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="296"/>
        <source>Current:</source>
        <translation>Aktuell:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="314"/>
        <source>After:</source>
        <translation>Danach:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="542"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;The EFI system partition does not meet recommendations. It is recommended to go back and select or create a suitable filesystem.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="564"/>
        <source>The minimum recommended size for the filesystem is %1 MiB.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="568"/>
        <source>You can continue with this EFI system partition configuration but your system may fail to start.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="580"/>
        <source>No EFI system partition configured</source>
        <translation>Keine EFI-Systempartition konfiguriert</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="588"/>
        <source>EFI system partition configured incorrectly</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="536"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;To configure an EFI system partition, go back and select or create a suitable filesystem.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="550"/>
        <source>The filesystem must be mounted on &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="551"/>
        <source>The filesystem must have type FAT32.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="560"/>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="562"/>
        <source>The filesystem must be at least %1 MiB in size.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="552"/>
        <source>The filesystem must have flag &lt;strong&gt;%1&lt;/strong&gt; set.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="566"/>
        <source>You can continue without setting up an EFI system partition but your system may fail to start.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="608"/>
        <source>EFI system partition recommendation</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="627"/>
        <source>Option to use GPT on BIOS</source>
        <translation>Option um GPT im BIOS zu nutzen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="744"/>
        <source>There are no partitions to install on.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="650"/>
        <source>Boot partition not encrypted</source>
        <translation>Boot-Partition nicht verschlüsselt</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="628"/>
        <source>A GPT partition table is the best option for all systems. This installer supports such a setup for BIOS systems too.&lt;br/&gt;&lt;br/&gt;To configure a GPT partition table on BIOS, (if not done so already) go back and set the partition table to GPT, next create a 8 MB unformatted partition with the &lt;strong&gt;%2&lt;/strong&gt; flag enabled.&lt;br/&gt;&lt;br/&gt;An unformatted 8 MB partition is necessary to start %1 on a BIOS system with GPT.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="651"/>
        <source>A separate boot partition was set up together with an encrypted root partition, but the boot partition is not encrypted.&lt;br/&gt;&lt;br/&gt;There are security concerns with this kind of setup, because important system files are kept on an unencrypted partition.&lt;br/&gt;You may continue if you wish, but filesystem unlocking will happen later during system startup.&lt;br/&gt;To encrypt the boot partition, go back and recreate it, selecting &lt;strong&gt;Encrypt&lt;/strong&gt; in the partition creation window.</source>
        <translation>Eine separate Bootpartition wurde zusammen mit einer verschlüsselten Rootpartition eingerichtet, aber die Bootpartition ist nicht verschlüsselt.&lt;br/&gt;&lt;br/&gt;Es gibt Sicherheitsbedenken bei dieser Art von Einrichtung, da wichtige Systemdateien auf einer unverschlüsselten Partition gespeichert werden.&lt;br/&gt;Sie können fortfahren wenn Sie möchten, aber der Zugriff auf das Dateisystem erfolgt später beim Systemstart.&lt;br/&gt;Um die Bootpartition zu verschlüsseln, gehen Sie zurück und erstellen Sie diese neu, indem Sie im Fenster zum Erstellen der Partition &lt;strong&gt;Verschlüsseln&lt;/strong&gt; wählen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="743"/>
        <source>has at least one disk device available.</source>
        <translation>hat zumindest eine Festplatte frei. </translation>
    </message>
</context>
<context>
    <name>PreserveFiles</name>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="56"/>
        <source>Saving files for later ...</source>
        <translation>Speichere Dateien für später...</translation>
    </message>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="64"/>
        <source>No files configured to save for later.</source>
        <translation>Keine Dateien zur Speicherung für später konfiguriert.</translation>
    </message>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="88"/>
        <source>Not all of the configured files could be preserved.</source>
        <translation>Nicht alle konfigurierten Dateien konnten beibehalten werden.</translation>
    </message>
</context>
<context>
    <name>ProcessResult</name>
    <message>
        <location filename="../src/libcalamares/utils/System.cpp" line="305"/>
        <source>
There was no output from the command.</source>
        <translation>
Es gab keine Ausgabe des Befehls.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/System.cpp" line="306"/>
        <source>
Output:
</source>
        <translation>
Ausgabe:
</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/System.cpp" line="311"/>
        <source>External command crashed.</source>
        <translation>Externer Befehl abgestürzt.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/System.cpp" line="312"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; crashed.</source>
        <translation>Befehl &lt;i&gt;%1&lt;/i&gt; abgestürzt.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/System.cpp" line="319"/>
        <source>External command failed to start.</source>
        <translation>Externer Befehl konnte nicht gestartet werden.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/System.cpp" line="320"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to start.</source>
        <translation>Befehl &lt;i&gt;%1&lt;/i&gt; konnte nicht gestartet werden.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/System.cpp" line="326"/>
        <source>Internal error when starting command.</source>
        <translation>Interner Fehler beim Ausführen des Befehls.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/System.cpp" line="327"/>
        <source>Bad parameters for process job call.</source>
        <translation>Ungültige Parameter für Prozessaufruf.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/System.cpp" line="333"/>
        <source>External command failed to finish.</source>
        <translation>Externer Befehl konnte nicht abgeschlossen werden.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/System.cpp" line="334"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to finish in %2 seconds.</source>
        <translation>Befehl &lt;i&gt;%1&lt;/i&gt; wurde nicht innerhalb %2 Sekunden abgeschlossen.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/System.cpp" line="342"/>
        <source>External command finished with errors.</source>
        <translation>Externer Befehl mit Fehlern abgeschlossen.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/System.cpp" line="343"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; finished with exit code %2.</source>
        <translation>Befehl &lt;i&gt;%1&lt;/i&gt; mit Ausgabecode %2 beendet.</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="145"/>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="192"/>
        <source>Default</source>
        <translation>Standard</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="39"/>
        <source>Unpartitioned space or unknown partition table</source>
        <translation>Unpartitionierter Bereich oder unbekannte Partitionstabelle</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="44"/>
        <source>(no mount point)</source>
        <translation>(kein Einhängepunkt)</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/locale/Translation.cpp" line="170"/>
        <source>%1 (%2)</source>
        <translation>%1 (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/Workers.cpp" line="64"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="72"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="76"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="93"/>
        <source>File not found</source>
        <translation>Datei nicht gefunden</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/Workers.cpp" line="65"/>
        <source>Path &lt;pre&gt;%1&lt;/pre&gt; must be an absolute path.</source>
        <translation>Pfad &lt;pre&gt;%1&lt;/pre&gt; muss ein absoluter Pfad sein.</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="101"/>
        <source>Directory not found</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="102"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="94"/>
        <source>Could not create new random file &lt;pre&gt;%1&lt;/pre&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageModel.cpp" line="74"/>
        <source>No product</source>
        <translation>Kein Produkt</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageModel.cpp" line="82"/>
        <source>No description provided.</source>
        <translation>Keine Beschreibung angegeben.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="33"/>
        <source>unknown</source>
        <comment>@partition info</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="35"/>
        <source>extended</source>
        <comment>@partition info</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="37"/>
        <source>unformatted</source>
        <comment>@partition info</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="39"/>
        <source>swap</source>
        <comment>@partition info</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Recommended</name>
    <message>
        <location filename="../src/modules/welcomeq/Recommended.qml" line="40"/>
        <source>&lt;p&gt;This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;
        Setup can continue, but some features might be disabled.&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>RemoveVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="26"/>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="38"/>
        <source>Remove Volume Group named %1.</source>
        <translation>Volumegruppe %1 entfernen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="32"/>
        <source>Remove Volume Group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Volumegruppe namens &lt;strong&gt;%1&lt;/strong&gt; entfernen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="46"/>
        <source>The installer failed to remove a volume group named &apos;%1&apos;.</source>
        <translation>Das Installationsprogramm konnte keine Volumegruppe mit dem Namen &apos;%1&apos; entfernen.</translation>
    </message>
</context>
<context>
    <name>Requirements</name>
    <message>
        <location filename="../src/modules/welcomeq/Requirements.qml" line="37"/>
        <source>&lt;p&gt;This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;
        Installation cannot continue.&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/Requirements.qml" line="39"/>
        <source>&lt;p&gt;This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;
        Setup can continue, but some features might be disabled.&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ResizePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="41"/>
        <source>Resize partition %1.</source>
        <translation>Größe von Partition %1 ändern.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="47"/>
        <source>Resize &lt;strong&gt;%2MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%3MiB&lt;/strong&gt;.</source>
        <translation>Größe der &lt;strong&gt;%2MiB&lt;/strong&gt; Partition &lt;strong&gt;%1&lt;/strong&gt; auf &lt;strong&gt;%3MiB&lt;/strong&gt; ändern.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="57"/>
        <source>Resizing %2MiB partition %1 to %3MiB.</source>
        <translation>Größe von %2MiB Partition %1 auf %3MiB ändern.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="74"/>
        <source>The installer failed to resize partition %1 on disk &apos;%2&apos;.</source>
        <translation>Das Installationsprogramm konnte die Größe von Partition %1 auf Datenträger &apos;%2&apos; nicht ändern.</translation>
    </message>
</context>
<context>
    <name>ResizeVolumeGroupDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ResizeVolumeGroupDialog.cpp" line="30"/>
        <source>Resize Volume Group</source>
        <translation>Größe der Volumegruppe verändern</translation>
    </message>
</context>
<context>
    <name>ResizeVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="28"/>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="46"/>
        <source>Resize volume group named %1 from %2 to %3.</source>
        <translation>Größe der Volumegruppe %1 von %2 auf %3 verändern.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="37"/>
        <source>Resize volume group named &lt;strong&gt;%1&lt;/strong&gt; from &lt;strong&gt;%2&lt;/strong&gt; to &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation>Größe der Volumegruppe &lt;strong&gt;%1&lt;/strong&gt; von &lt;strong&gt;%2&lt;/strong&gt; auf &lt;strong&gt;%3&lt;/strong&gt; verändern.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="57"/>
        <source>The installer failed to resize a volume group named &apos;%1&apos;.</source>
        <translation>Das Installationsprogramm konnte die Größer keiner Volumegruppe mit dem Namen &apos;%1&apos; verändern.</translation>
    </message>
</context>
<context>
    <name>ResultsListWidget</name>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="47"/>
        <source>Checking requirements again in a few seconds ...</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ScanningDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="68"/>
        <source>Scanning storage devices...</source>
        <translation>Speicherge&amp;rät werden durchsucht...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="68"/>
        <source>Partitioning</source>
        <translation>Partitionierung</translation>
    </message>
</context>
<context>
    <name>SetHostNameJob</name>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="36"/>
        <source>Set hostname %1</source>
        <translation>Setze Computername auf %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="42"/>
        <source>Set hostname &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Computername &lt;strong&gt;%1&lt;/strong&gt; festlegen.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="48"/>
        <source>Setting hostname %1.</source>
        <translation>Computername %1 wird festgelegt.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="121"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="128"/>
        <source>Internal Error</source>
        <translation>Interner Fehler</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="139"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="156"/>
        <source>Cannot write hostname to target system</source>
        <translation>Kann den Computernamen nicht auf das Zielsystem schreiben</translation>
    </message>
</context>
<context>
    <name>SetKeyboardLayoutJob</name>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="66"/>
        <source>Setting keyboard model to %1, layout as %2-%3…</source>
        <comment>@status, %1 model, %2 layout, %3 variant</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="368"/>
        <source>Failed to write keyboard configuration for the virtual console.</source>
        <comment>@error</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="369"/>
        <source>Failed to write to %1</source>
        <comment>@error, %1 is virtual console configuration path</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="394"/>
        <source>Failed to write keyboard configuration for X11.</source>
        <comment>@error</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="395"/>
        <source>Failed to write to %1</source>
        <comment>@error, %1 is keyboard configuration path</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="411"/>
        <source>Failed to write keyboard configuration to existing /etc/default directory.</source>
        <comment>@error</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="412"/>
        <source>Failed to write to %1</source>
        <comment>@error, %1 is default keyboard path</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>SetPartFlagsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="44"/>
        <source>Set flags on partition %1.</source>
        <translation>Markierungen auf der Partition %1 festlegen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="50"/>
        <source>Set flags on %1MiB %2 partition.</source>
        <translation>Markierungen auf der Partition %1MiB %2 festlegen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="54"/>
        <source>Set flags on new partition.</source>
        <translation>Markierungen auf der neuen Partition festlegen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="65"/>
        <source>Clear flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Markierungen auf der Partition &lt;strong&gt;%1&lt;/strong&gt; löschen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="71"/>
        <source>Clear flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>Markierungen auf der Partition %1MB &lt;strong&gt;%2&lt;/strong&gt; löschen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="89"/>
        <source>Flag %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition as &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation>Partition %1MB &lt;strong&gt;%2&lt;/strong&gt; als &lt;strong&gt;%3&lt;/strong&gt; markieren.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="113"/>
        <source>Clearing flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>Markierungen auf der Partition %1MB &lt;strong&gt;%2&lt;/strong&gt; werden gelöscht.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="132"/>
        <source>Setting flags &lt;strong&gt;%3&lt;/strong&gt; on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>Markierungen &lt;strong&gt;%3&lt;/strong&gt; auf der Partition %1MB &lt;strong&gt;%2&lt;/strong&gt; werden festgelegt.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="75"/>
        <source>Clear flags on new partition.</source>
        <translation>Markierungen auf der neuen Partition löschen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="80"/>
        <source>Flag partition &lt;strong&gt;%1&lt;/strong&gt; as &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Partition &lt;strong&gt;%1&lt;/strong&gt; als &lt;strong&gt;%2&lt;/strong&gt; markieren.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="96"/>
        <source>Flag new partition as &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Neue Partition als &lt;strong&gt;%1&lt;/strong&gt; markieren.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="107"/>
        <source>Clearing flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Markierungen auf der Partition &lt;strong&gt;%1&lt;/strong&gt; werden gelöscht.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="118"/>
        <source>Clearing flags on new partition.</source>
        <translation>Flaggen auf neuer Partition löschen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="123"/>
        <source>Setting flags &lt;strong&gt;%2&lt;/strong&gt; on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Markierungen &lt;strong&gt;%2&lt;/strong&gt; auf der Partition &lt;strong&gt;%1&lt;/strong&gt; werden festgelegt.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="139"/>
        <source>Setting flags &lt;strong&gt;%1&lt;/strong&gt; on new partition.</source>
        <translation>Markierungen &lt;strong&gt;%1&lt;/strong&gt; auf der neuen Partition werden festgelegt.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="152"/>
        <source>The installer failed to set flags on partition %1.</source>
        <translation>Das Installationsprogramm konnte keine Markierungen auf der Partition %1 festlegen.</translation>
    </message>
</context>
<context>
    <name>SetPasswordJob</name>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="38"/>
        <source>Set password for user %1</source>
        <translation>Setze Passwort für Benutzer %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="44"/>
        <source>Setting password for user %1.</source>
        <translation>Passwort für Benutzer %1 wird festgelegt.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="80"/>
        <source>Bad destination system path.</source>
        <translation>Ungültiger System-Zielpfad.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="81"/>
        <source>rootMountPoint is %1</source>
        <translation>root-Einhängepunkt ist %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="89"/>
        <source>Cannot disable root account.</source>
        <translation>root Account kann nicht deaktiviert werden.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="107"/>
        <source>Cannot set password for user %1.</source>
        <translation>Passwort für Benutzer %1 kann nicht gesetzt werden.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="90"/>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="108"/>
        <source>usermod terminated with error code %1.</source>
        <translation>usermod wurde mit Fehlercode %1 beendet.</translation>
    </message>
</context>
<context>
    <name>SetTimezoneJob</name>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="32"/>
        <source>Setting timezone to %1/%2…</source>
        <comment>@status</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="60"/>
        <source>Cannot access selected timezone path.</source>
        <comment>@error</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="61"/>
        <source>Bad path: %1</source>
        <comment>@error</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="71"/>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="79"/>
        <source>Cannot set timezone.</source>
        <comment>@error</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="72"/>
        <source>Link creation failed, target: %1; link name: %2</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="80"/>
        <source>Cannot open /etc/timezone for writing</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>SetupGroupsJob</name>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="181"/>
        <source>Preparing groups.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="193"/>
        <location filename="../src/modules/users/MiscJobs.cpp" line="198"/>
        <source>Could not create groups in target system</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="199"/>
        <source>These groups are missing in the target system: %1</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>SetupSudoJob</name>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="34"/>
        <source>Configure &lt;pre&gt;sudo&lt;/pre&gt; users.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="70"/>
        <source>Cannot chmod sudoers file.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="75"/>
        <source>Cannot create sudoers file for writing.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>SlideCounter</name>
    <message>
        <location filename="../src/qml/calamares/slideshow/SlideCounter.qml" line="27"/>
        <source>%L1 / %L2</source>
        <extracomment>slide counter, %1 of %2 (numeric)</extracomment>
        <translation>%L1 / %L2</translation>
    </message>
</context>
<context>
    <name>StandardButtons</name>
    <message>
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="23"/>
        <source>&amp;OK</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="24"/>
        <source>&amp;Yes</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="25"/>
        <source>&amp;No</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="26"/>
        <source>&amp;Cancel</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="27"/>
        <source>&amp;Close</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>UEFI</name>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="37"/>
        <source>Systemd-boot is a UEFI boot manager which executes configured EFI images. The default entry is selected by a configured pattern (glob) or an on-screen menu and is simple to configure.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="50"/>
        <source>Systemd-boot</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="103"/>
        <source>rEFInd is a fork of the earlier rEFIt boot manager. It is designed to be platform-neutral and to simplify booting multiple operating systems.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="116"/>
        <source>Refind</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="171"/>
        <source>No bootloader selected. Selecting no bootloader might result in an un-bootable system, if you don&apos;t already have a bootloader were you can add this install to.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="184"/>
        <source>No bootloader</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="236"/>
        <source>Please select a bootloader option for your install, or leave the default option, &lt;strong&gt;systemd-boot&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>UserInput</name>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="52"/>
        <source>Pick your user name and credentials to login and perform admin tasks</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="66"/>
        <source>Virtual Keyboard</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="107"/>
        <source>What is your name?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="126"/>
        <source>Your Full Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="139"/>
        <source>What name do you want to use to log in?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="164"/>
        <source>Login Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="181"/>
        <source>If more than one person will use this computer, you can create multiple accounts after installation.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="195"/>
        <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="206"/>
        <source>root is not allowed as username.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="215"/>
        <source>What is the name of this computer?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="239"/>
        <source>Computer Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="254"/>
        <source>This name will be used if you make the computer visible to others on a network.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="268"/>
        <source>Only letters, numbers, underscore and hyphen are allowed, minimal of two characters.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="279"/>
        <source>localhost is not allowed as hostname.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="288"/>
        <source>Choose a password to keep your account safe.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="312"/>
        <source>Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="326"/>
        <source>Repeat Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="344"/>
        <source>Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="382"/>
        <source>Reuse user password as root password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="390"/>
        <source>Use the same password for the administrator account.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="403"/>
        <source>Choose a root password to keep your account safe.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="428"/>
        <source>Root Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="441"/>
        <source>Repeat Root Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="459"/>
        <source>Enter the same password twice, so that it can be checked for typing errors.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="495"/>
        <source>Log in automatically without asking for the password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="503"/>
        <source>Validate passwords quality</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="513"/>
        <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>UsersPage</name>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="189"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after setup.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Falls dieser Computer von mehr als einer Person benutzt werden soll, können weitere Benutzerkonten nach der Installation eingerichtet werden.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="195"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after installation.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Falls dieser Computer von mehr als einer Person benutzt werden soll, können weitere Benutzerkonten nach der Installation eingerichtet werden.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>UsersQmlViewStep</name>
    <message>
        <location filename="../src/modules/usersq/UsersQmlViewStep.cpp" line="35"/>
        <source>Users</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>UsersViewStep</name>
    <message>
        <location filename="../src/modules/users/UsersViewStep.cpp" line="48"/>
        <source>Users</source>
        <translation>Benutzer</translation>
    </message>
</context>
<context>
    <name>VariantModel</name>
    <message>
        <location filename="../src/calamares/VariantModel.cpp" line="232"/>
        <source>Key</source>
        <comment>Column header for key/value</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/VariantModel.cpp" line="236"/>
        <source>Value</source>
        <comment>Column header for key/value</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>VolumeGroupBaseDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="18"/>
        <source>Create Volume Group</source>
        <translation>Erstelle Volumegruppe</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="24"/>
        <source>List of Physical Volumes</source>
        <translation>Liste der Physical Volumes</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="34"/>
        <source>Volume Group Name:</source>
        <translation>Name der Volumegruppe:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="47"/>
        <source>Volume Group Type:</source>
        <translation>Typ der Volumegruppe:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="60"/>
        <source>Physical Extent Size:</source>
        <translation>Größe der Physical Extents:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="70"/>
        <source> MiB</source>
        <translation> MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="86"/>
        <source>Total Size:</source>
        <translation>Gesamtgröße:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="106"/>
        <source>Used Size:</source>
        <translation>Genutzte Größe:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="126"/>
        <source>Total Sectors:</source>
        <translation>Sektoren gesamt:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="146"/>
        <source>Quantity of LVs:</source>
        <translation>Anzahl der LVs:</translation>
    </message>
</context>
<context>
    <name>WelcomePage</name>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="79"/>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="98"/>
        <source>Select application and system language</source>
        <translation>Anwendungs- und Systemsprache wählen</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="140"/>
        <source>Open donations website</source>
        <translation>Spenden-Webseite öffnen</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="143"/>
        <source>&amp;Donate</source>
        <translation>Spen&amp;den</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="153"/>
        <source>Open help and support website</source>
        <translation>Webseite für Hilfe und Unterstützung öffnen</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="166"/>
        <source>Open issues and bug-tracking website</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="179"/>
        <source>Open release notes website</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="182"/>
        <source>&amp;Release notes</source>
        <translation>Ve&amp;rsionshinweise</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="169"/>
        <source>&amp;Known issues</source>
        <translation>Be&amp;kannte Schwierigkeiten:</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="156"/>
        <source>&amp;Support</source>
        <translation>Unter&amp;stützung</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="212"/>
        <source>%1 support</source>
        <translation>%1 Unterstützung</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.cpp" line="235"/>
        <source>About %1 Setup</source>
        <comment>@title</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.cpp" line="236"/>
        <source>About %1 Installer</source>
        <comment>@title</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>WelcomeQmlViewStep</name>
    <message>
        <location filename="../src/modules/welcomeq/WelcomeQmlViewStep.cpp" line="40"/>
        <source>Welcome</source>
        <translation>Willkommen</translation>
    </message>
</context>
<context>
    <name>WelcomeViewStep</name>
    <message>
        <location filename="../src/modules/welcome/WelcomeViewStep.cpp" line="46"/>
        <source>Welcome</source>
        <translation>Willkommen</translation>
    </message>
</context>
<context>
    <name>ZfsJob</name>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="102"/>
        <source>Create ZFS pools and datasets</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="162"/>
        <source>Failed to create zpool on </source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="180"/>
        <source>Configuration Error</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="181"/>
        <source>No partitions are available for ZFS.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="192"/>
        <source>Internal data missing</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="192"/>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="264"/>
        <source>Failed to create zpool</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="336"/>
        <source>Failed to create dataset</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="337"/>
        <source>The output was: </source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>calamares-navigation</name>
    <message>
        <location filename="../src/branding/kaos_branding/calamares-navigation.qml" line="92"/>
        <source>Debug</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/calamares-navigation.qml" line="121"/>
        <source>Back</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/calamares-navigation.qml" line="153"/>
        <source>Next</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/calamares-navigation.qml" line="209"/>
        <source>Cancel</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>calamares-sidebar</name>
    <message>
        <location filename="../src/calamares/calamares-sidebar.qml" line="89"/>
        <source>About</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/calamares-sidebar.qml" line="115"/>
        <source>Debug</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="157"/>
        <source>About</source>
        <comment>@button</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="159"/>
        <source>Show information about Calamares</source>
        <comment>@tooltip</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="173"/>
        <source>Debug</source>
        <comment>@button</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="175"/>
        <source>Show debug information</source>
        <comment>@tooltip</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>finishedq</name>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="37"/>
        <source>Installation Completed</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="44"/>
        <source>%1 has been installed on your computer.&lt;br/&gt;
            You may now restart into your new system, or continue using the Live environment.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="66"/>
        <source>Close Installer</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="73"/>
        <source>Restart System</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="94"/>
        <source>&lt;p&gt;A full log of the install is available as installation.log in the home directory of the Live user.&lt;br/&gt;
            This log is copied to %1 of the target system.&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>finishedq@mobile</name>
    <message>
        <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="36"/>
        <source>Installation Completed</source>
        <comment>@title</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="43"/>
        <source>%1 has been installed on your computer.&lt;br/&gt;
            You may now restart your device.</source>
        <comment>@info, %1 is the product name</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="66"/>
        <source>Close</source>
        <comment>@button</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="72"/>
        <source>Restart</source>
        <comment>@button</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>keyboardq</name>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="61"/>
        <source>To activate keyboard preview, select a layout.</source>
        <comment>@label</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="144"/>
        <source>&lt;b&gt;Keyboard Model:&amp;nbsp;&amp;nbsp;&lt;/b&gt;</source>
        <comment>@label</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="185"/>
        <source>Layout</source>
        <comment>@label</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="258"/>
        <source>Variant</source>
        <comment>@label</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="311"/>
        <source>Type here to test your keyboard</source>
        <comment>@label</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>localeq</name>
    <message>
        <location filename="../src/modules/localeq/localeq.qml" line="105"/>
        <location filename="../src/modules/localeq/localeq.qml" line="135"/>
        <source>Change</source>
        <comment>@button</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/localeq.qml" line="171"/>
        <source>&lt;h3&gt;Languages&lt;/h3&gt; &lt;/br&gt;
                            The system locale setting affects the language and character set for some command line user interface elements. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/localeq.qml" line="242"/>
        <source>&lt;h3&gt;Locales&lt;/h3&gt; &lt;/br&gt;
                                The system locale setting affects the numbers and dates format. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <comment>@info</comment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>manual</name>
    <message>
        <location filename="../src/modules/partitionq/manual.qml" line="44"/>
        <source>&lt;h1&gt;Manual Partitioning Options&lt;/h1&gt;&lt;br/&gt;
                        Placeholder</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/manual.qml" line="80"/>
        <source>Back</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>notesqml</name>
    <message>
        <location filename="../src/modules/notesqml/notesqml.qml" line="50"/>
        <source>&lt;h3&gt;%1&lt;/h3&gt;
            &lt;p&gt;These are example release notes.&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>packagechooserq</name>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="45"/>
        <source>LibreOffice is a powerful and free office suite, used by millions of people around the world. It includes several applications that make it the most versatile Free and Open Source office suite on the market.&lt;br/&gt;
                    Default option.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="59"/>
        <source>LibreOffice</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="112"/>
        <source>If you don&apos;t want to install an office suite, just select No Office Suite. You can always add one (or more) later on your installed system as the need arrives.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="125"/>
        <source>No Office Suite</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="180"/>
        <source>Create a minimal Plasma Desktop install, remove all extra applications and decide later on what you would like to add to your system. Examples of what won&apos;t be on such an install, there will be no Office Suite, no media players, no image viewer or print support.  It will be just a desktop, file browser, package manager, text editor and simple web-browser.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="193"/>
        <source>Minimal Install</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="245"/>
        <source>Please select an option for your install, or use the default: LibreOffice included.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>packagechooserq@audio</name>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq@audio.qml" line="45"/>
        <source>&lt;b&gt;Pipewire&lt;/b&gt; is a multimedia framework designed from scratch that aims to provide:&lt;br/&gt;
                                    - Graph based processing with support for feedback loops and atomic graph updates.&lt;br/&gt;
                                    - Flexible and extensible media format negotiation and buffer allocation.&lt;br/&gt;
                                    - Support for out-of-process processing graphs with minimal overhead.&lt;br/&gt;
                                    - Hard real-time capable plugins.&lt;br/&gt;
                                    - Achieve very low-latency for both audio and video processing.&lt;br/&gt;&lt;br/&gt;
                                The framework is used to build a modular daemon that can be configured to:&lt;br/&gt;
                                    - Be a low-latency audio server with features like PulseAudio and/or JACK&lt;br/&gt;
                                    - A video capture server that can manage hardware video capture devices.&lt;br/&gt;
                                    - A central hub where video can be made available for other applications.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq@audio.qml" line="67"/>
        <source>Pipewire</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq@audio.qml" line="120"/>
        <source>&lt;b&gt;PulseAudio&lt;/b&gt; is a sound server, originally created to overcome the limitations of the Enlightened Sound Daemon (EsounD).&lt;br/&gt;
                    It performs advanced operations on sound data as it passes between your application and hardware. Things like transferring audio to a different machine, changing the sample format or channel count, or mixing several sounds into one input/output, are easily achieved using PulseAudio.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq@audio.qml" line="134"/>
        <source>Pulseaudio</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq@audio.qml" line="187"/>
        <source>Please select an audio option for your install, or leave the default &lt;strong&gt;Pipewire&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>packagechooserq@licenseq</name>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq@licenseq.qml" line="27"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;
                    &lt;p&gt;In case non-free was selected, this installer will install proprietary packages that have&lt;br /&gt;
                    additional End User License Agreements (EULAs) attached to them.&lt;br /&gt;
                    Please review the End User License Agreements (EULAs).&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq@licenseq.qml" line="62"/>
        <source>I accept the terms and conditions above</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>partitionq</name>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="95"/>
        <source/>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="54"/>
        <source>EFI</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="85"/>
        <source>Select storage device</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="135"/>
        <source>GPT</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="444"/>
        <source>Passphrase</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="452"/>
        <source>Confirm Passphrase</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="465"/>
        <source>Bootloader options:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="490"/>
        <source>Current</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="547"/>
        <source>After</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>release_notes</name>
    <message>
        <location filename="../src/modules/welcomeq/release_notes.qml" line="45"/>
        <source>&lt;h3&gt;%1&lt;/h3&gt;
            &lt;p&gt;This an example QML file, showing options in RichText with Flickable content.&lt;/p&gt;

            &lt;p&gt;QML with RichText can use HTML tags, Flickable content is useful for touchscreens.&lt;/p&gt;

            &lt;p&gt;&lt;b&gt;This is bold text&lt;/b&gt;&lt;/p&gt;
            &lt;p&gt;&lt;i&gt;This is italic text&lt;/i&gt;&lt;/p&gt;
            &lt;p&gt;&lt;u&gt;This is underlined text&lt;/u&gt;&lt;/p&gt;
            &lt;p&gt;&lt;center&gt;This text will be center-aligned.&lt;/center&gt;&lt;/p&gt;
            &lt;p&gt;&lt;s&gt;This is strikethrough&lt;/s&gt;&lt;/p&gt;

            &lt;p&gt;Code example:
            &lt;code&gt;ls -l /home&lt;/code&gt;&lt;/p&gt;

            &lt;p&gt;&lt;b&gt;Lists:&lt;/b&gt;&lt;/p&gt;
            &lt;ul&gt;
                &lt;li&gt;Intel CPU systems&lt;/li&gt;
                &lt;li&gt;AMD CPU systems&lt;/li&gt;
            &lt;/ul&gt;

            &lt;p&gt;The vertical scrollbar is adjustable, current width set to 10.&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/release_notes.qml" line="76"/>
        <source>Back</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>show</name>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="72"/>
        <source>installation</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="73"/>
        <source>After creating your chosen disk setup in the first 10 % the full copying of the ISO will take the longest of this install phase and will run until approximately 45%.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="76"/>
        <source>modules</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="77"/>
        <source>Once the ISO is copied some 25 post-install modules will run. This includes setting user specific options, removing Live Session only packages and adjusting hardware setup.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="80"/>
        <source>office suites</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="81"/>
        <source>The default Office Suite is LibreOffice.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="82"/>
        <source>Calligra is available in the repositories</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="85"/>
        <source>Package Management</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="86"/>
        <source>For package management Octopi is the GUI application.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="87"/>
        <source>Pacman is the cli application.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="90"/>
        <source>internet</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="91"/>
        <source>Qt/KDE specific internet applications include the Falkon web-browser, KDE Connect for device Synchronization, Kaidan for chat and NeoChat, the Matrix client.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="94"/>
        <source>enjoy</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="95"/>
        <source>May using KaOS be a pleasant experience for you.</source>
        <translation>Möge KaOS eine angenehme Erfahrung für dich sein.</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="96"/>
        <source>Don&apos;t hesitate to give your opinion about KaOS in the Forum</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/default/show.qml" line="55"/>
        <source>This is a second Slide element.</source>
        <translation>Dies ist ein zweites Präsentations-Element.</translation>
    </message>
    <message>
        <location filename="../src/branding/default/show.qml" line="59"/>
        <source>This is a third Slide element.</source>
        <translation>Dies ist ein drittes Präsentations-Element.</translation>
    </message>
</context>
<context>
    <name>welcomeq</name>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="35"/>
        <source>&lt;h3&gt;Welcome to the %1 &lt;quote&gt;%2&lt;/quote&gt; installer&lt;/h3&gt;
            &lt;p&gt;This program will ask you some questions and set up %1 on your computer.&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="126"/>
        <source>Current Language:&amp;nbsp;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="154"/>
        <source>Select Language</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="193"/>
        <source>Known Issues</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="215"/>
        <source>Release Notes</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="239"/>
        <source>Donate</source>
        <translation>Spenden</translation>
    </message>
</context>
</TS>