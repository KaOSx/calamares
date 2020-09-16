<?xml version="1.0" ?><!DOCTYPE TS><TS language="cs" version="2.1">
<context>
    <name>BootInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="61"/>
        <source>The &lt;strong&gt;boot environment&lt;/strong&gt; of this system.&lt;br&gt;&lt;br&gt;Older x86 systems only support &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Modern systems usually use &lt;strong&gt;EFI&lt;/strong&gt;, but may also show up as BIOS if started in compatibility mode.</source>
        <translation>&lt;strong&gt;Prostředí spuštění&lt;/strong&gt; tohoto systému.&lt;br&gt;&lt;br&gt;Starší systémy x86 podporují jen &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Moderní systémy obvykle používají &lt;strong&gt;EFI&lt;/strong&gt;, ale mohou se představit i jako BIOS, pokud prostředí spuštění pracuje v režimu slučitelnosti.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="71"/>
        <source>This system was started with an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from an EFI environment, this installer must deploy a boot loader application, like &lt;strong&gt;GRUB&lt;/strong&gt; or &lt;strong&gt;systemd-boot&lt;/strong&gt; on an &lt;strong&gt;EFI System Partition&lt;/strong&gt;. This is automatic, unless you choose manual partitioning, in which case you must choose it or create it on your own.</source>
        <translation>Tento systém byl spuštěn v režimu &lt;strong&gt;EFI&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;Aby bylo možné zajistit spuštění systému v režimu EFI, musí tento instalátor uložit spouštěcí aplikaci jako je například &lt;strong&gt;GRUB&lt;/strong&gt; nebo &lt;strong&gt;systemd-boot&lt;/strong&gt; na &lt;strong&gt;systémový oddíl EFI&lt;/strong&gt;. Toto se provede automaticky, pokud nebylo vybráno ruční rozdělní oddílů - v tomto případě je potřeba systémový oddíl EFI vytvořit nebo zvolit.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="83"/>
        <source>This system was started with a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from a BIOS environment, this installer must install a boot loader, like &lt;strong&gt;GRUB&lt;/strong&gt;, either at the beginning of a partition or on the &lt;strong&gt;Master Boot Record&lt;/strong&gt; near the beginning of the partition table (preferred). This is automatic, unless you choose manual partitioning, in which case you must set it up on your own.</source>
        <translation>Tento systém byl spuštěn v režimu &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;Aby bylo možné zajistit spuštění v režimu BIOS, musí tento instalátor uložit spouštěč &lt;strong&gt;GRUB&lt;/strong&gt; buď na začátek oddílu nebo na &lt;strong&gt;Master Boot Record&lt;/strong&gt; blízko začítku tabulky oddílů (preferovaná varianta). Toto se provede automaticky pokud nebylo vybráno ruční rozdělení disku - v tomto případě se musí spouštěč donastavit ručně. </translation>
    </message>
</context>
<context>
    <name>BootLoaderModel</name>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="59"/>
        <source>Master Boot Record of %1</source>
        <translation>Master Boot Record %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="93"/>
        <source>Boot Partition</source>
        <translation>Zaváděcí oddíl</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="100"/>
        <source>System Partition</source>
        <translation>Systémový oddíl</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="130"/>
        <source>Do not install a boot loader</source>
        <translation>Neinstalovat samozaváděcí program</translation>
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
        <translation>Prázdná strana</translation>
    </message>
</context>
<context>
    <name>Calamares::DebugWindow</name>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="18"/>
        <source>Form</source>
        <translation>Formulář</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="28"/>
        <source>GlobalStorage</source>
        <translation>Úložiště</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="38"/>
        <source>JobQueue</source>
        <translation>Řada úloh</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="48"/>
        <source>Modules</source>
        <translation>Moduly</translation>
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
        <translation>žádný</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="75"/>
        <source>Interface:</source>
        <translation>Rozhraní:</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="97"/>
        <source>Tools</source>
        <translation>Nástroje</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="110"/>
        <source>Reload Stylesheet</source>
        <translation>Obnovit šablonu stylů</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="117"/>
        <source>Widget Tree</source>
        <translation>Strom grafických součástí</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.cpp" line="217"/>
        <source>Debug information</source>
        <translation>Informace o ladění</translation>
    </message>
</context>
<context>
    <name>Calamares::ExecutionViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="85"/>
        <source>Set up</source>
        <translation>Nastavit</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="85"/>
        <source>Install</source>
        <translation>Instalovat</translation>
    </message>
</context>
<context>
    <name>Calamares::FailJob</name>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="29"/>
        <source>Job failed (%1)</source>
        <translation>Úloha selhala (%1)</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="30"/>
        <source>Programmed job failure was explicitly requested.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Calamares::JobThread</name>
    <message>
        <location filename="../src/libcalamares/JobQueue.cpp" line="175"/>
        <source>Done</source>
        <translation>Hotovo</translation>
    </message>
</context>
<context>
    <name>Calamares::NamedJob</name>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="17"/>
        <source>Example job (%1)</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Calamares::ProcessJob</name>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="43"/>
        <source>Run command &apos;%1&apos; in target system.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="43"/>
        <source> Run command &apos;%1&apos;.</source>
        <translation>Spustit příkaz &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="50"/>
        <source>Running command %1 %2</source>
        <translation>Spouští se příkaz %1 %2</translation>
    </message>
</context>
<context>
    <name>Calamares::PythonJob</name>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="193"/>
        <source>Running %1 operation.</source>
        <translation>Spouští se %1 operace.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="222"/>
        <source>Bad working directory path</source>
        <translation>Neplatná cesta k pracovnímu adresáři</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="223"/>
        <source>Working directory %1 for python job %2 is not readable.</source>
        <translation>Pracovní adresář %1 pro pythonovskou úlohu %2 není čitelný.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="229"/>
        <source>Bad main script file</source>
        <translation>Špatný soubor s hlavním skriptem</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="230"/>
        <source>Main script file %1 for python job %2 is not readable.</source>
        <translation>Soubor s hlavním skriptem %1 pro pythonovskou úlohu %2 není čitelný.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="298"/>
        <source>Boost.Python error in job &quot;%1&quot;.</source>
        <translation>Chyba Boost.Python v úloze &quot;%1&quot;.</translation>
    </message>
</context>
<context>
    <name>Calamares::QmlViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="67"/>
        <source>Loading ...</source>
        <translation>Nahrává se...</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="88"/>
        <source>QML Step &lt;i&gt;%1&lt;/i&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="268"/>
        <source>Loading failed.</source>
        <translation>Nahrávání selhalo.</translation>
    </message>
</context>
<context>
    <name>Calamares::RequirementsChecker</name>
    <message>
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="94"/>
        <source>Requirements checking for module &lt;i&gt;%1&lt;/i&gt; is complete.</source>
        <translation type="unfinished"/>
    </message>
    <message numerus="yes">
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="115"/>
        <source>Waiting for %n module(s).</source>
        <translation><numerusform>Čeká se na %n modul.</numerusform><numerusform>Čeká se na %n moduly.</numerusform><numerusform>Čeká se na %n modulů.</numerusform><numerusform>Čeká se na %n modulů.</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="116"/>
        <source>(%n second(s))</source>
        <translation><numerusform>(%n sekunda)</numerusform><numerusform>(%n sekundy)</numerusform><numerusform>(%n sekund)</numerusform><numerusform>(%n sekund)</numerusform></translation>
    </message>
    <message>
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="121"/>
        <source>System-requirements checking is complete.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Calamares::ViewManager</name>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="413"/>
        <source>&amp;Back</source>
        <translation>&amp;Zpět</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="408"/>
        <source>&amp;Next</source>
        <translation>&amp;Další</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="438"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Zrušit</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="397"/>
        <source>Cancel setup without changing the system.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="398"/>
        <source>Cancel installation without changing the system.</source>
        <translation>Zrušení instalace beze změny systému.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="150"/>
        <source>Setup Failed</source>
        <translation>Nastavení selhalo</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="151"/>
        <source>Would you like to paste the install log to the web?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="189"/>
        <source>Install Log Paste URL</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="192"/>
        <source>The upload was unsuccessful. No web-paste was done.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="208"/>
        <source>Calamares Initialization Failed</source>
        <translation>Inicializace Calamares se nezdařila</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="209"/>
        <source>%1 can not be installed. Calamares was unable to load all of the configured modules. This is a problem with the way Calamares is being used by the distribution.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="215"/>
        <source>&lt;br/&gt;The following modules could not be loaded:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="327"/>
        <source>Continue with installation?</source>
        <translation>Pokračovat v instalaci?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="329"/>
        <source>The %1 setup program is about to make changes to your disk in order to set up %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="335"/>
        <source>&amp;Set up now</source>
        <translation>&amp;Nastavit nyní</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="392"/>
        <source>&amp;Set up</source>
        <translation>&amp;Nastavit</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="392"/>
        <source>&amp;Install</source>
        <translation>&amp;Instalovat</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="394"/>
        <source>Setup is complete. Close the setup program.</source>
        <translation>Nastavování je hotovo. Zavřete nastavovací program.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="511"/>
        <source>Cancel setup?</source>
        <translation>Zrušit nastavování?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="511"/>
        <source>Cancel installation?</source>
        <translation>Zrušit instalaci?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="512"/>
        <source>Do you really want to cancel the current setup process?
The setup program will quit and all changes will be lost.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="514"/>
        <source>Do you really want to cancel the current install process?
The installer will quit and all changes will be lost.</source>
        <translation>Opravdu chcete ukončit nynější instalační proces?
Instalátor bude ukončen a všechny změny budou ztraceny.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="171"/>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="518"/>
        <source>&amp;Yes</source>
        <translation>&amp;Ano</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="172"/>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="519"/>
        <source>&amp;No</source>
        <translation>&amp;Ne</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="178"/>
        <source>&amp;Close</source>
        <translation>&amp;Zavřít</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="327"/>
        <source>Continue with setup?</source>
        <translation>Pokračovat v nastavování?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="332"/>
        <source>The %1 installer is about to make changes to your disk in order to install %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation>Instalátor %1 se chystá k provedení změn na vašem disku, aby nainstaloval %2.&lt;br/&gt;&lt;strong&gt;Tyto změny nebudete po jejich provedení moci vrátit zpět.&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="335"/>
        <source>&amp;Install now</source>
        <translation>&amp;Instalovat nyní</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="343"/>
        <source>Go &amp;back</source>
        <translation>Jít &amp;zpět</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="419"/>
        <source>&amp;Done</source>
        <translation>&amp;Hotovo</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="395"/>
        <source>The installation is complete. Close the installer.</source>
        <translation>Instalace je hotova. Zavřete instalátor.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="164"/>
        <source>Error</source>
        <translation>Chyba</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="150"/>
        <source>Installation Failed</source>
        <translation>Instalace se nezdařila</translation>
    </message>
</context>
<context>
    <name>CalamaresPython::Helper</name>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="288"/>
        <source>Unknown exception type</source>
        <translation>Neznámý typ výjimky</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="306"/>
        <source>unparseable Python error</source>
        <translation>Nezpracovatelná chyba Pythonu</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="350"/>
        <source>unparseable Python traceback</source>
        <translation>Nezpracovatelné vyznačení Pythonu</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="357"/>
        <source>Unfetchable Python error.</source>
        <translation>Nezapočitatelná chaby Pythonu.</translation>
    </message>
</context>
<context>
    <name>CalamaresUtils</name>
    <message>
        <location filename="../src/libcalamaresui/utils/Paste.cpp" line="25"/>
        <source>Install log posted to:
%1</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>CalamaresWindow</name>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="155"/>
        <source>&amp;Back</source>
        <translation>&amp;Zpět</translation>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="167"/>
        <source>&amp;Next</source>
        <translation>&amp;Další</translation>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="180"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Zrušit</translation>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="304"/>
        <source>%1 Setup Program</source>
        <translation>%1 nastavovací program</translation>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="305"/>
        <source>%1 Installer</source>
        <translation>Instalátor %1</translation>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="101"/>
        <source>Show debug information</source>
        <translation>Ukázat informace o ladění</translation>
    </message>
</context>
<context>
    <name>CheckerContainer</name>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerContainer.cpp" line="37"/>
        <source>Gathering system information...</source>
        <translation>Sbírají se informace o systému...</translation>
    </message>
</context>
<context>
    <name>ChoicePage</name>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="132"/>
        <source>After:</source>
        <translation>Po:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="958"/>
        <source>%1 will be shrunk to %2MiB and a new %3MiB partition will be created for %4.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1267"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1304"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1326"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1351"/>
        <source>&lt;strong&gt;Erase disk&lt;/strong&gt;&lt;br/&gt;This will &lt;font color=&quot;red&quot;&gt;delete&lt;/font&gt; all data currently present on the selected storage device.</source>
        <translation>&lt;strong&gt;Vymazat disk&lt;/strong&gt;&lt;br/&gt;Toto &lt;font color=&quot;red&quot;&gt;smaže&lt;/font&gt; všechna data nyní přítomná na vybraném ukládacím zařízení.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1271"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1300"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1322"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1347"/>
        <source>&lt;strong&gt;Install alongside&lt;/strong&gt;&lt;br/&gt;The installer will shrink a partition to make room for %1.</source>
        <translation>&lt;strong&gt;Nainstalovat vedle&lt;/strong&gt;&lt;br/&gt;Instalátor zmenší diskový oddíl, aby udělal místo pro %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1275"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1309"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1330"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1355"/>
        <source>&lt;strong&gt;Replace a partition&lt;/strong&gt;&lt;br/&gt;Replaces a partition with %1.</source>
        <translation>&lt;strong&gt;Nahradit oddíl&lt;/strong&gt;&lt;br/&gt;Nahradí diskový oddíl %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1014"/>
        <source>Boot loader location:</source>
        <translation>Umístění samozaváděcího programu:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="130"/>
        <source>Select storage de&amp;vice:</source>
        <translation>Vybrat ukládací &amp;zařízení:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="131"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="940"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="985"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1075"/>
        <source>Current:</source>
        <translation>Nynější:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="305"/>
        <source>&lt;strong&gt;Manual partitioning&lt;/strong&gt;&lt;br/&gt;You can create or resize partitions yourself. Having a GPT partition table and &lt;strong&gt;fat32 512Mb /boot partition is a must for UEFI installs&lt;/strong&gt;, either use an existing without formatting or create one.</source>
        <translation>&lt;strong&gt;Ruční rozdělení disku&lt;/strong&gt;&lt;br/&gt;Můžete vytvořit nebo změnit velikost oddílů sami. UEFI instalace vyžaduje GPT oddíl a &lt;strong&gt;fat32 /boot oddíl o velikosti 512MB&lt;/strong&gt;. Buď jeden vytvořte nebo použijte stávající.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="808"/>
        <source>Reuse %1 as home partition for %2.</source>
        <translation>Znovu použít %1 jako domovský oddíl pro %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="941"/>
        <source>&lt;strong&gt;Select a partition to shrink, then drag the bottom bar to resize&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Vyberte oddíl pro zmenšení, a potom posuňte spodní úchyt pro změnu velikosti&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1066"/>
        <source>&lt;strong&gt;Select a partition to install on&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Vyberte oddíl, na který se má instalovat&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1121"/>
        <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>Nikde na tomto systému nelze najít systémový oddíl EFI. Jděte, prosím, zpět a použijte ruční rozdělení k nastavení %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1129"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>Systémový oddíl EFI na %1 se bude používat ke spouštění %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1137"/>
        <source>EFI system partition:</source>
        <translation>Systémový oddíl EFI:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1262"/>
        <source>This storage device does not seem to have an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Zdá se, že na tomto ukládacím zařízení není operační systém. Co chcete dělat?&lt;br/&gt;Budete moci přezkoumat a potvrdit svoje volby, předtím než bude na ukládacím zařízení provedena jakákoli změna.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1294"/>
        <source>This storage device has %1 on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Na tomto ukládacím zařízení je %1. Co chcete dělat?&lt;br/&gt;Budete moci přezkoumat a potvrdit svoje volby, předtím než bude na ukládacím zařízení provedena jakákoli změna.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1317"/>
        <source>This storage device already has an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Na tomto ukládacím zařízení již je operační systém. Co chcete dělat?&lt;br/&gt;Budete moci přezkoumat a potvrdit svoje volby, předtím než bude na ukládacím zařízení provedena jakákoli změna.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1342"/>
        <source>This storage device has multiple operating systems on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Na tomto ukládacím zařízení je více operačních systémů. Co chcete dělat?&lt;br/&gt;Budete moci přezkoumat a potvrdit svoje volby, předtím než bude na ukládacím zařízení provedena jakákoli změna.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1534"/>
        <source>No Swap</source>
        <translation>Žádné odkládací místo (swap)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1542"/>
        <source>Reuse Swap</source>
        <translation>Znovupoužití odkládacího místa (swap)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1545"/>
        <source>Swap (no Hibernate)</source>
        <translation>Odkládací místo - swap (bez hibernace)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1548"/>
        <source>Swap (with Hibernate)</source>
        <translation>Odkládací místo - swap (s hibernací)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1551"/>
        <source>Swap to file</source>
        <translation>Odkládací místo - swap do souboru</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.ui" line="18"/>
        <source>Form</source>
        <translation>Formulář</translation>
    </message>
</context>
<context>
    <name>ClearMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="42"/>
        <source>Clear mounts for partitioning operations on %1</source>
        <translation>Uklidit připojení pro operace rozdělení disku na %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="49"/>
        <source>Clearing mounts for partitioning operations on %1.</source>
        <translation>Uklízí se připojení pro operace rozdělení disku na %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="224"/>
        <source>Cleared all mounts for %1</source>
        <translation>Uklizena všechna připojení pro %1</translation>
    </message>
</context>
<context>
    <name>ClearTempMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="32"/>
        <source>Clear all temporary mounts.</source>
        <translation>Uklidit všechna dočasná připojení.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="39"/>
        <source>Clearing all temporary mounts.</source>
        <translation>Uklízí se všechna dočasná připojení.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="51"/>
        <source>Cannot get list of temporary mounts.</source>
        <translation>Nelze získat seznam dočasných připojení.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="92"/>
        <source>Cleared all temporary mounts.</source>
        <translation>Uklizena všechna dočasná připojení.</translation>
    </message>
</context>
<context>
    <name>CommandList</name>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="142"/>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="155"/>
        <source>Could not run command.</source>
        <translation>Nelze spustit příkaz.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="143"/>
        <source>The command runs in the host environment and needs to know the root path, but no rootMountPoint is defined.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="156"/>
        <source>The command needs to know the user&apos;s name, but no username is defined.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Config</name>
    <message>
        <location filename="../src/modules/keyboard/Config.cpp" line="340"/>
        <source>Set keyboard model to %1.&lt;br/&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboard/Config.cpp" line="347"/>
        <source>Set keyboard layout to %1/%2.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/locale/Config.cpp" line="334"/>
        <source>Set timezone to %1/%2.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/locale/Config.cpp" line="372"/>
        <source>The system language will be set to %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/locale/Config.cpp" line="379"/>
        <source>The numbers and dates locale will be set to %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="50"/>
        <source>This computer does not satisfy the minimum requirements for setting up %1.&lt;br/&gt;Setup cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="54"/>
        <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="61"/>
        <source>This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;Setup can continue, but some features might be disabled.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="65"/>
        <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="75"/>
        <source>This program will ask you some questions and set up %2 on your computer.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="244"/>
        <source>&lt;h1&gt;Welcome to the Calamares setup program for %1&lt;/h1&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="245"/>
        <source>&lt;h1&gt;Welcome to %1 setup&lt;/h1&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="250"/>
        <source>&lt;h1&gt;Welcome to the Calamares installer for %1&lt;/h1&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="251"/>
        <source>&lt;h1&gt;Welcome to the %1 installer&lt;/h1&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/summaryq/Config.cpp" line="65"/>
        <source>This is an overview of what will happen once you start the setup procedure.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/summaryq/Config.cpp" line="68"/>
        <source>This is an overview of what will happen once you start the install procedure.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="164"/>
        <source>Your username is too long.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="170"/>
        <source>&apos;%1&apos; is not allowed as username.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="177"/>
        <source>Your username must start with a lowercase letter or underscore.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="181"/>
        <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="227"/>
        <source>Your hostname is too short.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="231"/>
        <source>Your hostname is too long.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="237"/>
        <source>&apos;%1&apos; is not allowed as hostname.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="243"/>
        <source>Only letters, numbers, underscore and hyphen are allowed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="446"/>
        <source>Your passwords do not match!</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>CreatePartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="18"/>
        <source>Create a Partition</source>
        <translation>Vytvořit oddíl</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="52"/>
        <source> MiB</source>
        <translation>MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="59"/>
        <source>Partition &amp;Type:</source>
        <translation>Typ &amp;oddílu:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="71"/>
        <source>&amp;Primary</source>
        <translation>&amp;Hlavní</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="81"/>
        <source>E&amp;xtended</source>
        <translation>&amp;Rozšířený</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="123"/>
        <source>Fi&amp;le System:</source>
        <translation>&amp;Souborový systém:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="155"/>
        <source>LVM LV name</source>
        <translation>Název LV LVM</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="192"/>
        <source>Flags:</source>
        <translation>Příznaky:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="165"/>
        <source>&amp;Mount Point:</source>
        <translation>&amp;Přípojný bod:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="42"/>
        <source>Si&amp;ze:</source>
        <translation>V&amp;elikost:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="66"/>
        <source>En&amp;crypt</source>
        <translation>&amp;Zašifrovat</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="161"/>
        <source>Logical</source>
        <translation>Logický</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="166"/>
        <source>Primary</source>
        <translation>Hlavní</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="185"/>
        <source>GPT</source>
        <translation>GPT</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="265"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation>Bod připojení je používán. Prosím vyberte jiný.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="38"/>
        <source>Create new %2MiB partition on %4 (%3) with file system %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="49"/>
        <source>Create new &lt;strong&gt;%2MiB&lt;/strong&gt; partition on &lt;strong&gt;%4&lt;/strong&gt; (%3) with file system &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="61"/>
        <source>Creating new %1 partition on %2.</source>
        <translation>Vytváří se nový diskový oddíl %1 na %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="73"/>
        <source>The installer failed to create partition on disk &apos;%1&apos;.</source>
        <translation>Instalátoru se nepodařilo vytvořit oddíl na disku &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="24"/>
        <source>Create Partition Table</source>
        <translation>Vytvořit tabulku oddílů</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="43"/>
        <source>Creating a new partition table will delete all existing data on the disk.</source>
        <translation>Vytvoření nové tabulky oddílů smaže všechna stávající data na disku.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="69"/>
        <source>What kind of partition table do you want to create?</source>
        <translation>Jaký druh tabulky oddílů chcete vytvořit?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="76"/>
        <source>Master Boot Record (MBR)</source>
        <translation>Master Boot Record (MBR)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="86"/>
        <source>GUID Partition Table (GPT)</source>
        <translation>Tabulku oddílů GUID (GPT)</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="39"/>
        <source>Create new %1 partition table on %2.</source>
        <translation>Vytvořit nový diskový oddíl %1 na %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="47"/>
        <source>Create new &lt;strong&gt;%1&lt;/strong&gt; partition table on &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>Vytvořit novou &lt;strong&gt;%1&lt;/strong&gt; tabulku oddílů na &lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="57"/>
        <source>Creating new %1 partition table on %2.</source>
        <translation>Vytváří se nová tabulka oddílů %1 na %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="75"/>
        <source>The installer failed to create a partition table on %1.</source>
        <translation>Instalátoru se nepodařilo vytvořit tabulku oddílů na disku &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>CreateUserJob</name>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="40"/>
        <source>Create user %1</source>
        <translation>Vytvořit uživatele %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="47"/>
        <source>Create user &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Vytvořit uživatele &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="54"/>
        <source>Creating user %1.</source>
        <translation>Vytváří se uživatel %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="186"/>
        <source>Cannot create sudoers file for writing.</source>
        <translation>Nelze vytvořit soubor správce (su) pro zápis.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="181"/>
        <source>Cannot chmod sudoers file.</source>
        <translation>Nelze spustit chmod na souboru správce (su).</translation>
    </message>
</context>
<context>
    <name>CreateVolumeGroupDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreateVolumeGroupDialog.cpp" line="28"/>
        <source>Create Volume Group</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>CreateVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="28"/>
        <source>Create new volume group named %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="34"/>
        <source>Create new volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="40"/>
        <source>Creating new volume group named %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="52"/>
        <source>The installer failed to create a volume group named &apos;%1&apos;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>DeactivateVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="24"/>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="36"/>
        <source>Deactivate volume group named %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="30"/>
        <source>Deactivate volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="48"/>
        <source>The installer failed to deactivate a volume group named %1.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>DeletePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="31"/>
        <source>Delete partition %1.</source>
        <translation>Smazat diskový oddíl %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="38"/>
        <source>Delete partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Smazat diskový oddíl &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="45"/>
        <source>Deleting partition %1.</source>
        <translation>Maže se diskový oddíl %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="56"/>
        <source>The installer failed to delete partition %1.</source>
        <translation>Instalátoru se nepodařilo smazat oddíl %1.</translation>
    </message>
</context>
<context>
    <name>DeviceInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="140"/>
        <source>The type of &lt;strong&gt;partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The only way to change the partition table type is to erase and recreate the partition table from scratch, which destroys all data on the storage device.&lt;br&gt;This installer will keep the current partition table unless you explicitly choose otherwise.&lt;br&gt;If unsure, on modern systems GPT is preferred.</source>
        <translation>Typ &lt;strong&gt;tabulky rozdělení oddílů&lt;/strong&gt; na vybraném ukládacím zařízení.&lt;br&gt;&lt;br&gt;Jediný způsob, jak změnit typ tabulky rozdělení, je vymazat ji a znovuvytvořit, což smaže všechna data na ukládacím zařízení.&lt;br&gt;Tento instalátor zachová současnou tabulku, pokud nevyberete jinou možnost.&lt;br&gt;Pokud si nejste jistý, tak na moderních systémech je upřednostňována varianta s GPT.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="97"/>
        <source>This device has a &lt;strong&gt;%1&lt;/strong&gt; partition table.</source>
        <translation>Toto zařízení má &lt;strong&gt;%1&lt;/strong&gt; tabulku rozdělení oddílů.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="104"/>
        <source>This is a &lt;strong&gt;loop&lt;/strong&gt; device.&lt;br&gt;&lt;br&gt;It is a pseudo-device with no partition table that makes a file accessible as a block device. This kind of setup usually only contains a single filesystem.</source>
        <translation>Toto je &lt;strong&gt;loop&lt;/strong&gt; zařízení.&lt;br&gt;&lt;br&gt;Jde o pseudozařízení, které nemá žádnou tabulku rozdělení oddílů pro zpřístupnění souborů, jako je tomu na blokovém zařízení. V tomto druhu nastavení se obvykle používá jeden typ souborového systému.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="111"/>
        <source>This installer &lt;strong&gt;cannot detect a partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The device either has no partition table, or the partition table is corrupted or of an unknown type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</source>
        <translation>Tento instalátor &lt;strong&gt;nemůže zjistit tabulku rozdělení oddílů&lt;/strong&gt; na vybraném úložném zařízení.&lt;br&gt;&lt;br&gt;Zařízení buď neobsahuje tabulku rozdělení do oddílů nebo je tabulka poškozená a nebo jde o neznámý typ.&lt;br&gt;Tento instalátor může vytvořit novou tabulku rozdělení a to buď automaticky, nebo skrze volbu manuálního rozdělení.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="121"/>
        <source>&lt;br&gt;&lt;br&gt;This is the recommended partition table type for modern systems which start from an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.</source>
        <translation>&lt;br&gt;&lt;br&gt;Toto je doporučený typ tabulky oddílů pro moderní systémy, které se spouští ze spouštěcího prostředí &lt;strong&gt;EFI&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="127"/>
        <source>&lt;br&gt;&lt;br&gt;This partition table type is only advisable on older systems which start from a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment. GPT is recommended in most other cases.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Warning:&lt;/strong&gt; the MBR partition table is an obsolete MS-DOS era standard.&lt;br&gt;Only 4 &lt;em&gt;primary&lt;/em&gt; partitions may be created, and of those 4, one can be an &lt;em&gt;extended&lt;/em&gt; partition, which may in turn contain many &lt;em&gt;logical&lt;/em&gt; partitions.</source>
        <translation>&lt;br&gt;&lt;br&gt;Tento typ tabulky rozdělení oddílů je doporučený pouze pro starší systémy, které startují v režimu BIOS. GPT je vhodnější volba ve většině případů.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Varování:&lt;/strong&gt; zastaralá tabulka rozdělení oddílů MBR z éry MS-DOS.&lt;br&gt;Pouze 4 &lt;em&gt;primární&lt;/em&gt; oddíly mohou být vytvořeny a z nich pouze jeden může být &lt;em&gt;rozšířený&lt;/em&gt; oddíl, který může obsahovat mnoho &lt;em&gt;logických&lt;/em&gt; oddílů.</translation>
    </message>
</context>
<context>
    <name>DeviceModel</name>
    <message>
        <location filename="../src/modules/partition/core/DeviceModel.cpp" line="84"/>
        <source>%1 - %2 (%3)</source>
        <extracomment>device[name] - size[number] (device-node[name])</extracomment>
        <translation>%1 - %2 (%3)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/DeviceModel.cpp" line="95"/>
        <source>%1 - (%2)</source>
        <extracomment>device[name] - (device-node[name])</extracomment>
        <translation>%1 - (%2)</translation>
    </message>
</context>
<context>
    <name>EditExistingPartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="24"/>
        <source>Edit Existing Partition</source>
        <translation>Upravit stávající oddíl</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="54"/>
        <source>Content:</source>
        <translation>Obsah:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="64"/>
        <source>&amp;Keep</source>
        <translation>&amp;Zachovat</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="74"/>
        <source>Format</source>
        <translation>Formátovat</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="93"/>
        <source>Warning: Formatting the partition will erase all existing data.</source>
        <translation>Varování: Formátování oddílu smaže všechna stávající data na disku.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="103"/>
        <source>&amp;Mount Point:</source>
        <translation>&amp;Přípojný bod:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="123"/>
        <source>Si&amp;ze:</source>
        <translation>Ve&amp;likost:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="133"/>
        <source> MiB</source>
        <translation>MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="140"/>
        <source>Fi&amp;le System:</source>
        <translation>&amp;Souborový systém:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="153"/>
        <source>Flags:</source>
        <translation>Příznaky:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.cpp" line="272"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation>Bod připojení je používán. Prosím vyberte jiný.</translation>
    </message>
</context>
<context>
    <name>EncryptWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="18"/>
        <source>Form</source>
        <translation>Formulář</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="36"/>
        <source>En&amp;crypt system</source>
        <translation>&amp;Zašifrovat systém</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="46"/>
        <source>Passphrase</source>
        <translation>Heslo</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="56"/>
        <source>Confirm passphrase</source>
        <translation>Potvrdit heslo</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="104"/>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="114"/>
        <source>Please enter the same passphrase in both boxes.</source>
        <translation>Vložte, prosím, stejné přístupové údaje do obou polí. </translation>
    </message>
</context>
<context>
    <name>FillGlobalStorageJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="138"/>
        <source>Set partition information</source>
        <translation>Nastavit informace o oddílu</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="164"/>
        <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition.</source>
        <translation>Instalovat %1 na &lt;strong&gt;novém&lt;/strong&gt; %2 systémový diskový oddílu.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="170"/>
        <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Zřídit &lt;strong&gt;nový&lt;/strong&gt; %2 diskový oddíl s bodem připojení &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="180"/>
        <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Instalovat %2 na %3 systémový diskový oddíl &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="187"/>
        <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Zřídit %3 partition &lt;strong&gt;%1&lt;/strong&gt; diskový oddíl s bodem připojení &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="200"/>
        <source>Install boot loader on &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Instalovat samozaváděcí program na &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="209"/>
        <source>Setting up mount points.</source>
        <translation>Nastavují se přípojné body.</translation>
    </message>
</context>
<context>
    <name>FinishedPage</name>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="18"/>
        <source>Form</source>
        <translation>Formulář</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="102"/>
        <source>&amp;Restart now</source>
        <translation>&amp;Restartovat nyní</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="44"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been set up on your computer.&lt;br/&gt;You may now start using your new system.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="48"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot;font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the setup program.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="54"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been installed on your computer.&lt;br/&gt;You may now restart into your new system, or continue using the %2 Live environment.</source>
        <translation>&lt;h1&gt;Vše je hotovo.&lt;/h1&gt;&lt;br/&gt;%1 byl nainstalován na váš počítač.&lt;br/&gt;Nyní proveďte restart do nového systému, nebo pokračujte naživo s prostředím  %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="59"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot;font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the installer.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="116"/>
        <source>&lt;h1&gt;Setup Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been set up on your computer.&lt;br/&gt;The error message was: %2.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="122"/>
        <source>&lt;h1&gt;Installation Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been installed on your computer.&lt;br/&gt;The error message was: %2.</source>
        <translation>&lt;h1&gt;Instalace selhala&lt;/h1&gt;&lt;br/&gt;%1 nebyl nainstalován na váš počítač.&lt;br/&gt;Chybová hláška byla: %2.</translation>
    </message>
</context>
<context>
    <name>FinishedViewStep</name>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="67"/>
        <source>Finish</source>
        <translation>Dokončit</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="125"/>
        <source>Setup Complete</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="125"/>
        <source>Installation Complete</source>
        <translation>Instalace dokončena</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="127"/>
        <source>The setup of %1 is complete.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="128"/>
        <source>The installation of %1 is complete.</source>
        <translation>Instalace %1 je hotova.</translation>
    </message>
</context>
<context>
    <name>FormatPartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="36"/>
        <source>Format partition %1 (file system: %2, size: %3 MiB) on %4.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="47"/>
        <source>Format &lt;strong&gt;%3MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; with file system &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="58"/>
        <source>Formatting partition %1 with file system %2.</source>
        <translation>Formátuje seoddíl %1 se souborovým systémem %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="72"/>
        <source>The installer failed to format partition %1 on disk &apos;%2&apos;.</source>
        <translation>Instalátoru se nepodařilo zormátovat oddíl %1 na disku &apos;%2&apos;.</translation>
    </message>
</context>
<context>
    <name>GeneralRequirements</name>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="149"/>
        <source>has at least %1 GiB available drive space</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="151"/>
        <source>There is not enough drive space. At least %1 GiB is required.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="160"/>
        <source>has at least %1 GiB working memory</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="162"/>
        <source>The system does not have enough working memory. At least %1 GiB is required.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="171"/>
        <source>is plugged in to a power source</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="172"/>
        <source>The system is not plugged in to a power source.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="179"/>
        <source>is connected to the Internet</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="180"/>
        <source>The system is not connected to the Internet.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="187"/>
        <source>is running the installer as an administrator (root)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="190"/>
        <source>The setup program is not running with administrator rights.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="191"/>
        <source>The installer is not running with administrator rights.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="199"/>
        <source>has a screen large enough to show the whole installer</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="202"/>
        <source>The screen is too small to display the setup program.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="203"/>
        <source>The screen is too small to display the installer.</source>
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
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="40"/>
        <source>Could not create directories &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="53"/>
        <source>Could not open file &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="60"/>
        <source>Could not write to file &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>KeyboardPage</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.cpp" line="206"/>
        <source>Set keyboard model to %1.&lt;br/&gt;</source>
        <translation>Nastavit model klávesnice na %1.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.cpp" line="210"/>
        <source>Set keyboard layout to %1/%2.</source>
        <translation>Nastavit rozvržení klávesnice na %1/%2.</translation>
    </message>
</context>
<context>
    <name>KeyboardQmlViewStep</name>
    <message>
        <location filename="../src/modules/keyboardq/KeyboardQmlViewStep.cpp" line="33"/>
        <source>Keyboard</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>KeyboardViewStep</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardViewStep.cpp" line="45"/>
        <source>Keyboard</source>
        <translation>Klávesnice</translation>
    </message>
</context>
<context>
    <name>LCLocaleDialog</name>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="23"/>
        <source>System locale setting</source>
        <translation>Nastavení jazyka systému</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="30"/>
        <source>The system locale setting affects the language and character set for some command line user interface elements.&lt;br/&gt;The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Nastavení zemských parametrů ovlivní jazyk a znakovou sadu pro některé prvky uživatelského rozhraní v příkazovém řádku.&lt;br/&gt;Nynější nastavení je &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="54"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Zrušit</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="55"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
</context>
<context>
    <name>LicensePage</name>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="18"/>
        <source>Form</source>
        <translation>Formulář</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="26"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="136"/>
        <source>I accept the terms and conditions above.</source>
        <translation>Přijímám smluvní podmínky a podmínky řečené výše.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="138"/>
        <source>Please review the End User License Agreements (EULAs).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="143"/>
        <source>This setup procedure will install proprietary software that is subject to licensing terms.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="146"/>
        <source>If you do not agree with the terms, the setup procedure cannot continue.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="151"/>
        <source>In case non-free was selected, this installer will install proprietary packages &lt;br/&gt;that have additional End User License Agreements (EULAs) attached to them.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="154"/>
        <source>If you do not agree with the terms, proprietary software will not be installed, and open source alternatives will be used instead.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>LicenseViewStep</name>
    <message>
        <location filename="../src/modules/license/LicenseViewStep.cpp" line="43"/>
        <source>License</source>
        <translation>Licence</translation>
    </message>
</context>
<context>
    <name>LicenseWidget</name>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="87"/>
        <source>URL: %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="108"/>
        <source>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;by %2</source>
        <extracomment>%1 is an untranslatable product name, example: Creative Audigy driver</extracomment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="115"/>
        <source>&lt;strong&gt;%1 graphics driver&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <extracomment>%1 is usually a vendor name, example: Nvidia graphics driver</extracomment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="121"/>
        <source>&lt;strong&gt;%1 browser plugin&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="127"/>
        <source>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="133"/>
        <source>&lt;strong&gt;%1 package&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="139"/>
        <source>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="162"/>
        <source>File: %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="185"/>
        <source>Hide license text</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="185"/>
        <source>Show the license text</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="189"/>
        <source>Open license agreement in browser.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>LocalePage</name>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="124"/>
        <source>Region:</source>
        <translation>Oblast:</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="125"/>
        <source>Zone:</source>
        <translation>Pásmo:</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="126"/>
        <location filename="../src/modules/locale/LocalePage.cpp" line="127"/>
        <source>&amp;Change...</source>
        <translation>&amp;Změnit...</translation>
    </message>
</context>
<context>
    <name>LocaleQmlViewStep</name>
    <message>
        <location filename="../src/modules/localeq/LocaleQmlViewStep.cpp" line="32"/>
        <source>Location</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>LocaleViewStep</name>
    <message>
        <location filename="../src/modules/locale/LocaleViewStep.cpp" line="76"/>
        <source>Location</source>
        <translation>Poloha</translation>
    </message>
</context>
<context>
    <name>LuksBootKeyFileJob</name>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="28"/>
        <source>Configuring LUKS key file.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="145"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="153"/>
        <source>No partitions are defined.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="181"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="188"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="196"/>
        <source>Encrypted rootfs setup error</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="182"/>
        <source>Root partition %1 is LUKS but no passphrase has been set.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="189"/>
        <source>Could not create LUKS key file for root partition %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="197"/>
        <source>Could not configure LUKS key file on partition %1.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>MachineIdJob</name>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="37"/>
        <source>Generate machine-id.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="53"/>
        <source>Configuration Error</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="54"/>
        <source>No root mount point is set for MachineId.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Map</name>
    <message>
        <location filename="../src/modules/localeq/Map.qml" line="44"/>
        <location filename="../src/modules/localeq/Map.qml" line="66"/>
        <source>Timezone: </source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/Map.qml" line="229"/>
        <source>Please select your preferred location on the map so the installer can suggest the locale
            and timezone settings for you. You can fine-tune the suggested settings below. Search the map by dragging
            to move and using the +/- buttons to zoom in/out or use mouse scrolling for zooming.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>NotesQmlViewStep</name>
    <message>
        <location filename="../src/modules/notesqml/NotesQmlViewStep.cpp" line="23"/>
        <source>Notes</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>OEMPage</name>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="32"/>
        <source>Ba&amp;tch:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="42"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter a batch-identifier here. This will be stored in the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="52"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEM Configuration&lt;/h1&gt;&lt;p&gt;Calamares will use OEM settings while configuring the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>OEMViewStep</name>
    <message>
        <location filename="../src/modules/oemid/OEMViewStep.cpp" line="122"/>
        <source>OEM Configuration</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMViewStep.cpp" line="128"/>
        <source>Set the OEM Batch Identifier to &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Offline</name>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="37"/>
        <source>Select your preferred Region, or use the default one based on your current location.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="94"/>
        <location filename="../src/modules/localeq/Offline.qml" line="169"/>
        <location filename="../src/modules/localeq/Offline.qml" line="213"/>
        <source>Timezone: %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="111"/>
        <source>Select your preferred Zone within your Region.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="182"/>
        <source>Zones</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="229"/>
        <source>You can fine-tune Language and Locale settings below.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Offline2</name>
    <message>
        <location filename="../src/modules/localeq/Offline2.qml" line="54"/>
        <source>Timezone: %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline2.qml" line="69"/>
        <source>Select a timezone. You can fine-tune Language and Locale settings below.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Offline3</name>
    <message>
        <location filename="../src/modules/localeq/Offline3.qml" line="51"/>
        <source>Select your preferred Region, or use the default one based on your current location.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline3.qml" line="109"/>
        <location filename="../src/modules/localeq/Offline3.qml" line="184"/>
        <location filename="../src/modules/localeq/Offline3.qml" line="230"/>
        <source>Timezone: %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline3.qml" line="126"/>
        <source>Select your preferred Zone within your Region.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline3.qml" line="198"/>
        <source>Zones</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline3.qml" line="246"/>
        <source>You can fine-tune Language and Locale settings below.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Offline_orig</name>
    <message>
        <location filename="../src/modules/localeq/Offline_orig.qml" line="63"/>
        <source>Timezone: %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline_orig.qml" line="78"/>
        <source>To be able to select a timezone, make sure you are connected to the internet. Restart the installer after connecting. You can fine-tune Language and Locale settings below.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>PWQ</name>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="51"/>
        <source>Password is too short</source>
        <translation>Heslo je příliš krátké</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="67"/>
        <source>Password is too long</source>
        <translation>Heslo je příliš dlouhé</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="143"/>
        <source>Password is too weak</source>
        <translation>Heslo je příliš jednoduché</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="151"/>
        <source>Memory allocation error when setting &apos;%1&apos;</source>
        <translation>Chyba v přidělení paměti při nastavování &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="156"/>
        <source>Memory allocation error</source>
        <translation>Chyba v přidělení paměti</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="158"/>
        <source>The password is the same as the old one</source>
        <translation>Heslo je stejné jako to staré</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="160"/>
        <source>The password is a palindrome</source>
        <translation>Heslo lze se stejným významem číst v libovolném směru</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="162"/>
        <source>The password differs with case changes only</source>
        <translation>Heslo se liší poze v použité velikosti písmen</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="164"/>
        <source>The password is too similar to the old one</source>
        <translation>Heslo je příliš podobné tomu starému</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="166"/>
        <source>The password contains the user name in some form</source>
        <translation>Heslo obsahuje v nějaké formě jméno uživatele</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="168"/>
        <source>The password contains words from the real name of the user in some form</source>
        <translation>Heslo obsahuje slova ze jména uživatele</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="171"/>
        <source>The password contains forbidden words in some form</source>
        <translation>Heslo obsahuje zakázaná slova</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="175"/>
        <source>The password contains less than %1 digits</source>
        <translation>Heslo má méně než %1 číslic</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="178"/>
        <source>The password contains too few digits</source>
        <translation>Heslo obsahuje příliš málo číslic</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="182"/>
        <source>The password contains less than %1 uppercase letters</source>
        <translation>Heslo obsahuje méně než %1 velkých písmen</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="185"/>
        <source>The password contains too few uppercase letters</source>
        <translation>Heslo obsahuje příliš málo velkých písmen</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="189"/>
        <source>The password contains less than %1 lowercase letters</source>
        <translation>Heslo obsahuje méně než %1 malých písmen</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="192"/>
        <source>The password contains too few lowercase letters</source>
        <translation>Heslo obsahuje přiliš málo malých písmen</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="196"/>
        <source>The password contains less than %1 non-alphanumeric characters</source>
        <translation>Heslo obsahuje méně než %1 ne-alfanumerických znaků</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="200"/>
        <source>The password contains too few non-alphanumeric characters</source>
        <translation>Heslo obsahuje příliš málo ne-alfanumerický znaků</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="204"/>
        <source>The password is shorter than %1 characters</source>
        <translation>Heslo je kratší než %1 znaků</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="207"/>
        <source>The password is too short</source>
        <translation>Heslo je příliš krátké</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="209"/>
        <source>The password is just rotated old one</source>
        <translation>Heslo je pouze vystřídané staré heslo</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="213"/>
        <source>The password contains less than %1 character classes</source>
        <translation>Heslo obsahuje méně než %1 znakových tříd</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="216"/>
        <source>The password does not contain enough character classes</source>
        <translation>Heslo neobsahuje dostatek znakových tříd</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="220"/>
        <source>The password contains more than %1 same characters consecutively</source>
        <translation>Heslo obsahuje více než %1 stejných znaků za sebou </translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="224"/>
        <source>The password contains too many same characters consecutively</source>
        <translation>Heslo obsahuje příliš mnoho stejných znaků za sebou</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="228"/>
        <source>The password contains more than %1 characters of the same class consecutively</source>
        <translation>Heslo obsahuje více než %1 znaků stejné třídy za sebou</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="232"/>
        <source>The password contains too many characters of the same class consecutively</source>
        <translation>Heslo obsahuje příliš mnoho znaků stejné třídy za sebou</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="237"/>
        <source>The password contains monotonic sequence longer than %1 characters</source>
        <translation>Heslo obsahuje jednotvárnou řadu znaků delší než %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="241"/>
        <source>The password contains too long of a monotonic character sequence</source>
        <translation>Heslo obsahuje příliš dlouhou jednotvárnou řadu znaků </translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="244"/>
        <source>No password supplied</source>
        <translation>Nebylo vloženo heslo</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="246"/>
        <source>Cannot obtain random numbers from the RNG device</source>
        <translation>Nelze získat náhodné číslo ze zařízení RNG</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="248"/>
        <source>Password generation failed - required entropy too low for settings</source>
        <translation>Chyba při vytváření hesla - požadovaná míra neurčitosti systému byla přiliš nízká</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="254"/>
        <source>The password fails the dictionary check - %1</source>
        <translation>Heslo neprošlo slovníkovou zkouškou - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="257"/>
        <source>The password fails the dictionary check</source>
        <translation>Heslo neprošlo slovníkovou zkouškou</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="261"/>
        <source>Unknown setting - %1</source>
        <translation>Neznámé nastavení - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="265"/>
        <source>Unknown setting</source>
        <translation>Neznámé nastavení</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="269"/>
        <source>Bad integer value of setting - %1</source>
        <translation>Špatná hodnota celého čísla v nastavení - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="274"/>
        <source>Bad integer value</source>
        <translation>Špatná hodnota celého čísla</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="278"/>
        <source>Setting %1 is not of integer type</source>
        <translation>Nastavní %1 není celým číslem</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="283"/>
        <source>Setting is not of integer type</source>
        <translation>Nastavení není celým číslem</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="287"/>
        <source>Setting %1 is not of string type</source>
        <translation>Nastavení %1 není řetězcem</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="292"/>
        <source>Setting is not of string type</source>
        <translation>Nastavení není řetězcem</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="294"/>
        <source>Opening the configuration file failed</source>
        <translation>Chyba při otevírání souboru s nastavením</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="296"/>
        <source>The configuration file is malformed</source>
        <translation>Konfigurační soubor je poškozený</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="298"/>
        <source>Fatal failure</source>
        <translation>Fatální selhání</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="300"/>
        <source>Unknown error</source>
        <translation>Neznámá chyba</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="651"/>
        <source>Password is empty</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>PackageChooserPage</name>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="24"/>
        <source>Form</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="44"/>
        <source>Product Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="57"/>
        <source>TextLabel</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="73"/>
        <source>Long Product Description</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="25"/>
        <source>Package Selection</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="26"/>
        <source>Please pick a product from the list. The selected product will be installed.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>PackageChooserViewStep</name>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserViewStep.cpp" line="61"/>
        <source>Packages</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Page_Keyboard</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="18"/>
        <source>Form</source>
        <translation>Formulář</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="74"/>
        <source>Keyboard Model:</source>
        <translation>Model klávesnice:</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="135"/>
        <source>Type here to test your keyboard</source>
        <translation>Zde pište pro vyzkoušení vaší klávesnice</translation>
    </message>
</context>
<context>
    <name>Page_UserSetup</name>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="18"/>
        <source>Form</source>
        <translation>Formulář</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="40"/>
        <source>What is your name?</source>
        <translation>Jak se jmenujete?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="124"/>
        <source>What name do you want to use to log in?</source>
        <translation>Jaké jméno chcete používat při přihlašování?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="325"/>
        <source>Choose a password to keep your account safe.</source>
        <translation>Zvolte heslo pro uchování vašeho účtu v bezpečí.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="349"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="374"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Zadejte totéž heslo dvakrát, aby mohlo proběhnout jeho ověření na chyby při psaní. Dobré heslo je směsí písmen, čísel a interpunkce, má být alespoň osm znaků dlouhé, a mělo by se pravidelně měnit.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="223"/>
        <source>What is the name of this computer?</source>
        <translation>Jaký je název tohoto počítače?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="55"/>
        <source>Your Full Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="148"/>
        <source>login</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="247"/>
        <source>&lt;small&gt;This name will be used if you make the computer visible to others on a network.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Tento název se použije, jestliže počítač zviditelníte pro ostatní v síti.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="250"/>
        <source>Computer Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="355"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="525"/>
        <source>Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="380"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="550"/>
        <source>Repeat Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="455"/>
        <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="458"/>
        <source>Require strong passwords.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="465"/>
        <source>Log in automatically without asking for the password.</source>
        <translation>Přihlásit se automaticky bez žádání hesla.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="472"/>
        <source>Use the same password for the administrator account.</source>
        <translation>Použít stejné heslo pro účet správce (superuživatel).</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="495"/>
        <source>Choose a password for the administrator account.</source>
        <translation>Zvolte heslo pro účet správce.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="519"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="544"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Zadejte totéž heslo dvakrát, aby mohlo proběhnout jeho ověření na chyby při psaní.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>PartitionLabelsView</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="190"/>
        <source>Root</source>
        <translation>Kořen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="194"/>
        <source>Home</source>
        <translation>Domovská složka</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="198"/>
        <source>Boot</source>
        <translation>Boot</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="203"/>
        <source>EFI system</source>
        <translation>Systém EFI</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="207"/>
        <source>Swap</source>
        <translation>Odkládací místo</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="211"/>
        <source>New partition for %1</source>
        <translation>Nový oddíl pro %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="215"/>
        <source>New partition</source>
        <translation>Nový oddíl</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="239"/>
        <source>%1  %2</source>
        <extracomment>size[number] filesystem[name]</extracomment>
        <translation>%1 %2</translation>
    </message>
</context>
<context>
    <name>PartitionModel</name>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="159"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="199"/>
        <source>Free Space</source>
        <translation>Volné místo</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="163"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="203"/>
        <source>New partition</source>
        <translation>Nový oddíl</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="296"/>
        <source>Name</source>
        <translation>Název</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="298"/>
        <source>File System</source>
        <translation>Souborový systém</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="300"/>
        <source>Mount Point</source>
        <translation>Přípojný bod</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="302"/>
        <source>Size</source>
        <translation>Velikost</translation>
    </message>
</context>
<context>
    <name>PartitionPage</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="18"/>
        <source>Form</source>
        <translation>Formulář</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="26"/>
        <source>Storage de&amp;vice:</source>
        <translation>Ukládací &amp;zařízení:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="55"/>
        <source>&amp;Revert All Changes</source>
        <translation>&amp;Vrátit všechny změny</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="91"/>
        <source>New Partition &amp;Table</source>
        <translation>Nová &amp;tabulka oddílů</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="111"/>
        <source>Cre&amp;ate</source>
        <translation>&amp;Vytvořit</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="136"/>
        <source>New Volume Group</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="143"/>
        <source>Resize Volume Group</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="150"/>
        <source>Deactivate Volume Group</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="157"/>
        <source>Remove Volume Group</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="184"/>
        <source>I&amp;nstall boot loader on:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="118"/>
        <source>&amp;Edit</source>
        <translation>&amp;Upravit</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="125"/>
        <source>&amp;Delete</source>
        <translation>&amp;Smazat</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="219"/>
        <source>Are you sure you want to create a new partition table on %1?</source>
        <translation>Opravdu chcete vytvořit novou tabulku oddílů na %1?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="254"/>
        <source>Can not create new partition</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="255"/>
        <source>The partition table on %1 already has %2 primary partitions, and no more can be added. Please remove one primary partition and add an extended partition, instead.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>PartitionQmlViewStep</name>
    <message>
        <location filename="../src/modules/partitionq/PartitionQmlViewStep.cpp" line="117"/>
        <source>Partition</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>PartitionViewStep</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="69"/>
        <source>Gathering system information...</source>
        <translation>Sbírají se informace o oddílu...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="124"/>
        <source>Partitions</source>
        <translation>Oddíly</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="162"/>
        <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system.</source>
        <translation>Nainstalovat %1 &lt;strong&gt;vedle&lt;/strong&gt; jiného operačního systému.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="166"/>
        <source>&lt;strong&gt;Erase&lt;/strong&gt; disk and install %1.</source>
        <translation>&lt;strong&gt;Vymazat&lt;/strong&gt; disk a instalovat %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="169"/>
        <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition with %1.</source>
        <translation>&lt;strong&gt;Nahradit&lt;/strong&gt; diskový oddíl %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="173"/>
        <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning.</source>
        <translation>&lt;strong&gt;Ruční&lt;/strong&gt; vytváření diskových oddílů.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="186"/>
        <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system on disk &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>Nainstalovat %1 &lt;strong&gt;vedle&lt;/strong&gt; jiného operačního systému na disku &lt;strong&gt;%2&lt;/strong&gt; (%3).&lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="193"/>
        <source>&lt;strong&gt;Erase&lt;/strong&gt; disk &lt;strong&gt;%2&lt;/strong&gt; (%3) and install %1.</source>
        <translation>&lt;strong&gt;Vymazat&lt;/strong&gt; disk &lt;strong&gt;%2&lt;/strong&gt; (%3) a instalovat %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="199"/>
        <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition on disk &lt;strong&gt;%2&lt;/strong&gt; (%3) with %1.</source>
        <translation>&lt;strong&gt;Nahradit&lt;/strong&gt; diskový oddíl na disku &lt;strong&gt;%2&lt;/strong&gt; (%3) %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="206"/>
        <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning on disk &lt;strong&gt;%1&lt;/strong&gt; (%2).</source>
        <translation>&lt;strong&gt;Ruční&lt;/strong&gt; vytváření diskových oddílů na disku &lt;strong&gt;%1&lt;/strong&gt; (%2).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="215"/>
        <source>Disk &lt;strong&gt;%1&lt;/strong&gt; (%2)</source>
        <translation>Disk &lt;strong&gt;%1&lt;/strong&gt; (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="241"/>
        <source>Current:</source>
        <translation>Nynější:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="259"/>
        <source>After:</source>
        <translation>Po:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="427"/>
        <source>No EFI system partition configured</source>
        <translation>Není nastaven žádný oddíl EFI</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="441"/>
        <source>EFI system partition flag not set</source>
        <translation>Příznak systémoho oddílu EFI není nastaven</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="468"/>
        <source>Option to use GPT on BIOS</source>
        <translation>Možnost použít GPT v BIOSu</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="469"/>
        <source>A GPT partition table is the best option for all systems. This installer supports such a setup for BIOS systems too.&lt;br/&gt;&lt;br/&gt;To configure a GPT partition table on BIOS, (if not done so already) go back and set the partition table to GPT, next create a 8 MB unformatted partition with the &lt;strong&gt;bios_grub&lt;/strong&gt; flag enabled.&lt;br/&gt;&lt;br/&gt;An unformatted 8 MB partition is necessary to start %1 on a BIOS system with GPT.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="627"/>
        <source>There are no partitions to install on.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="497"/>
        <source>Boot partition not encrypted</source>
        <translation>Zaváděcí oddíl nezašifrován</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="428"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;To configure an EFI system partition, go back and select or create a FAT32 filesystem with the &lt;strong&gt;%3&lt;/strong&gt; flag enabled and mount point &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;&lt;br/&gt;You can continue without setting up an EFI system partition but your system may fail to start.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="442"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;A partition was configured with mount point &lt;strong&gt;%2&lt;/strong&gt; but its &lt;strong&gt;%3&lt;/strong&gt; flag is not set.&lt;br/&gt;To set the flag, go back and edit the partition.&lt;br/&gt;&lt;br/&gt;You can continue without setting the flag but your system may fail to start.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="498"/>
        <source>A separate boot partition was set up together with an encrypted root partition, but the boot partition is not encrypted.&lt;br/&gt;&lt;br/&gt;There are security concerns with this kind of setup, because important system files are kept on an unencrypted partition.&lt;br/&gt;You may continue if you wish, but filesystem unlocking will happen later during system startup.&lt;br/&gt;To encrypt the boot partition, go back and recreate it, selecting &lt;strong&gt;Encrypt&lt;/strong&gt; in the partition creation window.</source>
        <translation>Zaváděcí oddíl byl nastaven spolu se zašifrovaným kořenovým oddílem, ale zaváděcí oddíl šifrován není.&lt;br/&gt;&lt;br/&gt;Toto není považováno za bezpečné nastavení, protože důležité systémové soubory jsou uloženy na nešifrovaném oddílu.&lt;br/&gt;Můžete pokračovat, pokud si to přejete, ale k odemčení systému souborů dojde později během spouštění systému.&lt;br/&gt;Zašifrovat zaváděcí oddíl můžete, pokud se vrátíte o krok zpět a znovu ho vytvoříte, a pokud současně vyberete &lt;strong&gt;Zašifrovat&lt;/strong&gt; v okně vytváření oddílu.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="626"/>
        <source>has at least one disk device available.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>PreserveFiles</name>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="79"/>
        <source>Saving files for later ...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="118"/>
        <source>No files configured to save for later.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="172"/>
        <source>Not all of the configured files could be preserved.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ProcessResult</name>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="412"/>
        <source>
There was no output from the command.</source>
        <translation>
Příkaz nemá žádný výstup.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="413"/>
        <source>
Output:
</source>
        <translation>
Výstup:
</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="417"/>
        <source>External command crashed.</source>
        <translation>Vnější příkaz zhavaroval.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="418"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; crashed.</source>
        <translation>Příkaz &lt;i&gt;%1&lt;/i&gt; zhavaroval.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="423"/>
        <source>External command failed to start.</source>
        <translation>Vnější příkaz se nepodařilo spustit.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="424"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to start.</source>
        <translation>Příkaz %1 se nepodařilo spustit.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="428"/>
        <source>Internal error when starting command.</source>
        <translation>Vnitřní chyba při spouštění příkazu.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="429"/>
        <source>Bad parameters for process job call.</source>
        <translation>Špatné parametry pro volání úlohy procesu.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="433"/>
        <source>External command failed to finish.</source>
        <translation>Vnější příkaz se nepodařilo dokončit.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="434"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to finish in %2 seconds.</source>
        <translation>Příkaz %1 se nepodařilo dokončit za %2 sekundy.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="441"/>
        <source>External command finished with errors.</source>
        <translation>Vnější příkaz skončil s chybami.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="442"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; finished with exit code %2.</source>
        <translation>Příkaz %1 skončil s hodnotou %2.</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="90"/>
        <source>Default Keyboard Model</source>
        <translation>Výchozí model klávesnice</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="136"/>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="173"/>
        <source>Default</source>
        <translation>Výchozí</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="41"/>
        <source>Unpartitioned space or unknown partition table</source>
        <translation>Místo nerozdělené do oddílů nebo neznámá tabulka oddílů</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="28"/>
        <source>unknown</source>
        <translation>neznámý</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="30"/>
        <source>extended</source>
        <translation>rozšířený</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="32"/>
        <source>unformatted</source>
        <translation>neformátovaný</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="34"/>
        <source>swap</source>
        <translation>Odkládací místo</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="40"/>
        <source>(no mount point)</source>
        <translation>(žádný přípojný bod)</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/locale/Label.cpp" line="29"/>
        <source>%1 (%2)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/machineid/Workers.cpp" line="64"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="72"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="76"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="93"/>
        <source>File not found</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/machineid/Workers.cpp" line="65"/>
        <source>Path &lt;pre&gt;%1&lt;/pre&gt; must be an absolute path.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/machineid/Workers.cpp" line="94"/>
        <source>Could not create new random file &lt;pre&gt;%1&lt;/pre&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageModel.cpp" line="70"/>
        <source>No product</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageModel.cpp" line="78"/>
        <source>No description provided.</source>
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
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="24"/>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="36"/>
        <source>Remove Volume Group named %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="30"/>
        <source>Remove Volume Group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="48"/>
        <source>The installer failed to remove a volume group named &apos;%1&apos;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ReplaceWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.ui" line="18"/>
        <source>Form</source>
        <translation>Formulář</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="123"/>
        <source>Select where to install %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;this will delete all files on the selected partition.</source>
        <translation>Vyberte, kam se má nainstalovat %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Varování: &lt;/font&gt; Toto smaže všechny soubory na vybraném diskovém oddílu.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="145"/>
        <source>The selected item does not appear to be a valid partition.</source>
        <translation>Zdá se, že vybraná položka není platný oddíl.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="153"/>
        <source>%1 cannot be installed on empty space. Please select an existing partition.</source>
        <translation>%1 nelze nainstalovat na prázdné místo. Vyberte, prosím, existující oddíl.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="163"/>
        <source>%1 cannot be installed on an extended partition. Please select an existing primary or logical partition.</source>
        <translation>%1 nelze nainstalovat na rozšířený oddíl. Vyberte, prosím, existující hlavní nebo logický oddíl.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="173"/>
        <source>%1 cannot be installed on this partition.</source>
        <translation>%1 nelze nainstalovat na tento oddíl.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="179"/>
        <source>Data partition (%1)</source>
        <translation>Oddíl s daty (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="199"/>
        <source>Unknown system partition (%1)</source>
        <translation>Neznámý systémový oddíl (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="203"/>
        <source>%1 system partition (%2)</source>
        <translation>Systémový oddíl %1 (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="214"/>
        <source>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;The partition %1 is too small for %2. Please select a partition with capacity at least %3 GiB.</source>
        <translation>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Oddíl %1 je pro %2 příliš malý. Vyberte, prosím, oddíl o velikosti alespoň %3 GiB.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="236"/>
        <source>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Nikde na tomto systému nelze najít systémový oddíl EFI. Jděte, prosím, zpět a použijte k nastavení %1 ruční vytváření oddílů.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="247"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="263"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="288"/>
        <source>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 will be installed on %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;all data on partition %2 will be lost.</source>
        <translation>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 bude nainstalován na %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Varování: &lt;/font&gt;všechna data na diskovém oddílu %2 budou ztracena.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="255"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>Systémový oddíl EFI na %1 se bude používat ke spouštění %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="271"/>
        <source>EFI system partition:</source>
        <translation>Systémový oddíl EFI:</translation>
    </message>
</context>
<context>
    <name>Requirements</name>
    <message>
        <location filename="../src/modules/welcomeq/Requirements.qml" line="38"/>
        <source>&lt;p&gt;This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;
        Installation cannot continue.&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/Requirements.qml" line="40"/>
        <source>&lt;p&gt;This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;
        Setup can continue, but some features might be disabled.&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Requirements2</name>
    <message>
        <location filename="../src/modules/welcomeq/Requirements2.qml" line="48"/>
        <source>&lt;p&gt;This computer does not satisfy the minimum requirements for installing KaOS.&lt;br/&gt;
        Installation cannot continue.&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Requirements_orig</name>
    <message>
        <location filename="../src/modules/welcomeq/Requirements_orig.qml" line="48"/>
        <source>&lt;p&gt;This computer does not satisfy the minimum requirements for setting up %1.&lt;/p&gt;
        &lt;p&gt;Setup cannot continue.&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ResizePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="40"/>
        <source>Resize partition %1.</source>
        <translation>Změnit velikost oddílu %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="47"/>
        <source>Resize &lt;strong&gt;%2MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%3MiB&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="58"/>
        <source>Resizing %2MiB partition %1 to %3MiB.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="77"/>
        <source>The installer failed to resize partition %1 on disk &apos;%2&apos;.</source>
        <translation>Instalátoru se nepodařilo změnit velikost oddílu %1 na disku &apos;%2&apos;.</translation>
    </message>
</context>
<context>
    <name>ResizeVolumeGroupDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ResizeVolumeGroupDialog.cpp" line="30"/>
        <source>Resize Volume Group</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ResizeVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="27"/>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="45"/>
        <source>Resize volume group named %1 from %2 to %3.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="36"/>
        <source>Resize volume group named &lt;strong&gt;%1&lt;/strong&gt; from &lt;strong&gt;%2&lt;/strong&gt; to &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="60"/>
        <source>The installer failed to resize a volume group named &apos;%1&apos;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ResultsListDialog</name>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="133"/>
        <source>For best results, please ensure that this computer:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="134"/>
        <source>System requirements</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ResultsListWidget</name>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="256"/>
        <source>This computer does not satisfy the minimum requirements for setting up %1.&lt;br/&gt;Setup cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="260"/>
        <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="267"/>
        <source>This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;Setup can continue, but some features might be disabled.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="271"/>
        <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="280"/>
        <source>This program will ask you some questions and set up %2 on your computer.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ScanningDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="64"/>
        <source>Scanning storage devices...</source>
        <translation>Prohledávání úložného zařízení...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="64"/>
        <source>Partitioning</source>
        <translation>Zpracování oddílů</translation>
    </message>
</context>
<context>
    <name>SetHostNameJob</name>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="37"/>
        <source>Set hostname %1</source>
        <translation>Nastavit jméno hostitele %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="44"/>
        <source>Set hostname &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Nastavit název hostitelského počítače &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="51"/>
        <source>Setting hostname %1.</source>
        <translation>Nastavuje se název hostitelského počítače %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="122"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="129"/>
        <source>Internal Error</source>
        <translation>Vnitřní chyba</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="137"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="146"/>
        <source>Cannot write hostname to target system</source>
        <translation>Nelze zapsat jméno hostitele na cílový systém</translation>
    </message>
</context>
<context>
    <name>SetKeyboardLayoutJob</name>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="53"/>
        <source>Set keyboard model to %1, layout to %2-%3</source>
        <translation>Nastavit model klávesnice na %1, rozvržení na %2-%3</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="345"/>
        <source>Failed to write keyboard configuration for the virtual console.</source>
        <translation>Nastavení klávesnice se nepodařilo zapsat pro virtuální konsoli.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="346"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="350"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="357"/>
        <source>Failed to write to %1</source>
        <translation>Nepodařilo se zapisovat do %1</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="349"/>
        <source>Failed to write keyboard configuration for X11.</source>
        <translation>Nepodařilo se zapsat astavení klávesnice pro X11.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="356"/>
        <source>Failed to write keyboard configuration to existing /etc/default directory.</source>
        <translation>Nastavení klávesnice se nepodařilo zapsat do stávajícího adresáře /etc/default.</translation>
    </message>
</context>
<context>
    <name>SetPartFlagsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="43"/>
        <source>Set flags on partition %1.</source>
        <translation>Nastavit příznaky na oddílu %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="49"/>
        <source>Set flags on %1MiB %2 partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="53"/>
        <source>Set flags on new partition.</source>
        <translation>Nastavit příznaky na novém oddílu.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="65"/>
        <source>Clear flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Smazat příznaky na oddílu &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="71"/>
        <source>Clear flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="89"/>
        <source>Flag %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition as &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="114"/>
        <source>Clearing flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="133"/>
        <source>Setting flags &lt;strong&gt;%3&lt;/strong&gt; on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="75"/>
        <source>Clear flags on new partition.</source>
        <translation>Smazat příznaky na novém oddílu.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="80"/>
        <source>Flag partition &lt;strong&gt;%1&lt;/strong&gt; as &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Příznak oddílu &lt;strong&gt;%1&lt;/strong&gt; stejný jako &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="96"/>
        <source>Flag new partition as &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Označit příznakem nový oddíl jako &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="108"/>
        <source>Clearing flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Čištění příznaků na oddílu &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="119"/>
        <source>Clearing flags on new partition.</source>
        <translation>Smazání příznaků na novém oddílu.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="124"/>
        <source>Setting flags &lt;strong&gt;%2&lt;/strong&gt; on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Nastavení příznaků &lt;strong&gt;%2&lt;/strong&gt; na oddílu &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="140"/>
        <source>Setting flags &lt;strong&gt;%1&lt;/strong&gt; on new partition.</source>
        <translation>Nastavení příznaků &lt;strong&gt;%1&lt;/strong&gt; na novém oddílu.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="156"/>
        <source>The installer failed to set flags on partition %1.</source>
        <translation>Instalátor nemohl nastavit příznaky na oddílu %1.</translation>
    </message>
</context>
<context>
    <name>SetPasswordJob</name>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="40"/>
        <source>Set password for user %1</source>
        <translation>Nastavit heslo pro uživatele %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="47"/>
        <source>Setting password for user %1.</source>
        <translation>Nastavuje se heslo pro uživatele %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="81"/>
        <source>Bad destination system path.</source>
        <translation>Špatný cíl pro systémovou cestu.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="82"/>
        <source>rootMountPoint is %1</source>
        <translation>Přípojný bod pro root je %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="88"/>
        <source>Cannot disable root account.</source>
        <translation>Nelze zakázat účet superuživatele (root).</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="89"/>
        <source>passwd terminated with error code %1.</source>
        <translation>passwd zastaveno s chybovým kódem %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="97"/>
        <source>Cannot set password for user %1.</source>
        <translation>Nelze nastavit heslo pro uživatele %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="98"/>
        <source>usermod terminated with error code %1.</source>
        <translation>usermod je ukončen s kódem chyby %1.</translation>
    </message>
</context>
<context>
    <name>SetTimezoneJob</name>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="34"/>
        <source>Set timezone to %1/%2</source>
        <translation>Nastavit časové pásmo na %1/%2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="62"/>
        <source>Cannot access selected timezone path.</source>
        <translation>Nelze přistoupit k cestě vybraného časového pásma.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="63"/>
        <source>Bad path: %1</source>
        <translation>Špatná cesta: %1</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="71"/>
        <source>Cannot set timezone.</source>
        <translation>Nelze nastavit časové pásmo.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="72"/>
        <source>Link creation failed, target: %1; link name: %2</source>
        <translation>Nepodařilo se vytvořit odkaz: %1; název odkazu: %2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="77"/>
        <source>Cannot set timezone,</source>
        <translation>Nelze nastavit časové pásmo,</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="78"/>
        <source>Cannot open /etc/timezone for writing</source>
        <translation>Nelze vytvořit /etc/timezone pro zápis.</translation>
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
    <name>SummaryPage</name>
    <message>
        <location filename="../src/modules/summary/SummaryPage.cpp" line="47"/>
        <source>This is an overview of what will happen once you start the setup procedure.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/summary/SummaryPage.cpp" line="49"/>
        <source>This is an overview of what will happen once you start the install procedure.</source>
        <translation>Toto je přehled toho, co se stane, když spustíte postup instalace.</translation>
    </message>
</context>
<context>
    <name>SummaryQmlViewStep</name>
    <message>
        <location filename="../src/modules/summaryq/SummaryQmlViewStep.cpp" line="39"/>
        <source>Summary</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>SummaryViewStep</name>
    <message>
        <location filename="../src/modules/summary/SummaryViewStep.cpp" line="36"/>
        <source>Summary</source>
        <translation>Shrnutí</translation>
    </message>
</context>
<context>
    <name>UsersPage</name>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="156"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after setup.&lt;/small&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="162"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after installation.&lt;/small&gt;</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>UsersQmlViewStep</name>
    <message>
        <location filename="../src/modules/usersq/UsersQmlViewStep.cpp" line="39"/>
        <source>Users</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>UsersViewStep</name>
    <message>
        <location filename="../src/modules/users/UsersViewStep.cpp" line="48"/>
        <source>Users</source>
        <translation>Uživatelé</translation>
    </message>
</context>
<context>
    <name>VariantModel</name>
    <message>
        <location filename="../src/calamares/VariantModel.cpp" line="232"/>
        <source>Key</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/VariantModel.cpp" line="236"/>
        <source>Value</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>VolumeGroupBaseDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="18"/>
        <source>Create Volume Group</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="24"/>
        <source>List of Physical Volumes</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="34"/>
        <source>Volume Group Name:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="47"/>
        <source>Volume Group Type:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="60"/>
        <source>Physical Extent Size:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="70"/>
        <source> MiB</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="86"/>
        <source>Total Size:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="106"/>
        <source>Used Size:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="126"/>
        <source>Total Sectors:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="146"/>
        <source>Quantity of LVs:</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>WelcomePage</name>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="18"/>
        <source>Form</source>
        <translation>Formulář</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="79"/>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="98"/>
        <source>Select application and system language</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="187"/>
        <source>Open donations website</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="227"/>
        <source>&amp;Donate</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="237"/>
        <source>Open help and support website</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="297"/>
        <source>&amp;Release notes</source>
        <translation>Poznámky k &amp;vydání</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="287"/>
        <source>&amp;Known issues</source>
        <translation>Známé &amp;potíže</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="240"/>
        <source>&amp;Support</source>
        <translation>P&amp;odpora</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="177"/>
        <source>&amp;About</source>
        <translation>O &amp;programu</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="223"/>
        <source>&lt;h1&gt;Welcome to the %1 installer.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Vítejte v instalátoru %1.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="222"/>
        <source>&lt;h1&gt;Welcome to the Calamares installer for %1.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Vítejte v instalátoru Calamares pro %1.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="216"/>
        <source>&lt;h1&gt;Welcome to the Calamares setup program for %1.&lt;/h1&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="217"/>
        <source>&lt;h1&gt;Welcome to %1 setup.&lt;/h1&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="235"/>
        <source>About %1 setup</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="235"/>
        <source>About %1 installer</source>
        <translation>O %1 instalátoru</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="238"/>
        <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Copyright 2017-2020 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;Thanks to &lt;a href=&quot;https://calamares.io/team/&quot;&gt;the Calamares team&lt;/a&gt; and the &lt;a href=&quot;https://www.transifex.com/kaos/kaos/&quot;&gt;KaOS translators team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;&lt;a href=&quot;https://calamares.io/&quot;&gt;Calamares&lt;/a&gt; development is sponsored by &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="228"/>
        <source>%1 support</source>
        <translation>%1 podpora</translation>
    </message>
</context>
<context>
    <name>WelcomeQmlViewStep</name>
    <message>
        <location filename="../src/modules/welcomeq/WelcomeQmlViewStep.cpp" line="41"/>
        <source>Welcome</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>WelcomeViewStep</name>
    <message>
        <location filename="../src/modules/welcome/WelcomeViewStep.cpp" line="48"/>
        <source>Welcome</source>
        <translation>Vítejte</translation>
    </message>
</context>
<context>
    <name>about</name>
    <message>
        <location filename="../src/modules/welcomeq/about.qml" line="47"/>
        <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;
                        &lt;strong&gt;%2&lt;br/&gt;
                        for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;
                        Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;
                        Copyright 2017-2020 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;
                        Thanks to &lt;a href='https://calamares.io/team/'&gt;the Calamares team&lt;/a&gt; 
                        and the &lt;a href=&quot;https://www.transifex.com/kaos/kaos/&quot;&gt;KaOS 
                        translators team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;
                        &lt;a href='https://calamares.io/'&gt;Calamares&lt;/a&gt; 
                        development is sponsored by &lt;br/&gt;
                        &lt;a href='http://www.blue-systems.com/'&gt;Blue Systems&lt;/a&gt; - 
                        Liberating Software.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/about.qml" line="96"/>
        <source>Back</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>calamares-sidebar</name>
    <message>
        <location filename="../src/branding/kaos_branding/calamares-sidebar.qml" line="68"/>
        <source>Show debug information</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>i18n</name>
    <message>
        <location filename="../src/modules/localeq/i18n.qml" line="46"/>
        <source>&lt;h1&gt;Languages&lt;/h1&gt; &lt;/br&gt;
                    The system locale setting affects the language and character set for some command line user interface elements. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/i18n.qml" line="106"/>
        <source>&lt;h1&gt;Locales&lt;/h1&gt; &lt;/br&gt;
                    The system locale setting affects the numbers and dates format. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/i18n.qml" line="158"/>
        <source>Back</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>keyboardq</name>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="45"/>
        <source>Keyboard Model</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="377"/>
        <source>Layouts</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="148"/>
        <source>Keyboard Layout</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="60"/>
        <source>Click your preferred keyboard model to select layout and variant, or use the default one based on the detected hardware.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="253"/>
        <source>Models</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="260"/>
        <source>Variants</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="276"/>
        <source>Keyboard Variant</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="386"/>
        <source>Test your keyboard</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>keyboardq_orig</name>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="20"/>
        <source>Keyboard Model</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="21"/>
        <source>Pick your preferred keyboard model or use the default one based on the detected hardware</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="56"/>
        <source>Refresh</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="62"/>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="169"/>
        <source>Layouts</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="75"/>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="134"/>
        <source>Keyboard Layout</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="113"/>
        <source>Models</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="121"/>
        <source>Variants</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="180"/>
        <source>Test your keyboard</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>layout</name>
    <message>
        <location filename="../src/modules/localeq/layout.qml" line="32"/>
        <source>Region: </source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/layout.qml" line="43"/>
        <source>Adjust Language</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/layout.qml" line="53"/>
        <source>Zone: </source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/layout.qml" line="63"/>
        <source>Adjust Locale</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>localeq</name>
    <message>
        <location filename="../src/modules/localeq/localeq.qml" line="82"/>
        <source>Change</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>localeq2</name>
    <message>
        <location filename="../src/modules/localeq/localeq2.qml" line="40"/>
        <source>Region: </source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/localeq2.qml" line="55"/>
        <source>Zone: </source>
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
    <name>partitionq</name>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="43"/>
        <source>&lt;h3&gt;Full disk encryption&lt;/h3&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="50"/>
        <source>Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="66"/>
        <source>Password (repeat)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="92"/>
        <source>Continue</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="95"/>
        <source/>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="95"/>
        <source/>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="99"/>
        <source>Passwords do not match</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="101"/>
        <source>Password too short</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="103"/>
        <source>Please wait...</source>
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
        <location filename="../src/branding/kaos_branding/show.qml" line="48"/>
        <source>Here the actual install of KaOS will start.&lt;br/&gt;Use the left &lt;b&gt;mouse button&lt;/b&gt; to go to the next slide, right for previous.&lt;br/&gt;After creating your chosen disk setup in the first 10 % &lt;br/&gt;the full copying of the ISO will take the longest of this install phase &lt;br/&gt;and will run until approximately 30%.&lt;br/&gt;</source>
        <translation>Zde začne skutečná instalace KaOS.&lt;br/&gt;Použijte levé &lt;b&gt;tlačítko myši&lt;/b&gt; pro přechod na další snímek, pravé tlačítko &lt;br/&gt;pro návrat na předchozí. &lt;br/&gt;Po vytvoření nastavení vybraného disku v prvních 10 % &lt;br/&gt;zabere nejvíce času tohoto úseku instalace plné zkopírování obrazu ISO &lt;br/&gt;a poběží až do přibližně 30 %.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="74"/>
        <source>After the ISO is copied some 25 post-install modules will run.&lt;br/&gt;This includes setting user specific options, &lt;br/&gt;removing Live Session only packages&lt;br/&gt;and adjusting hardware setup.&lt;br/&gt;</source>
        <translation>Po zkopírování obrazu ISO poběží 25 poinstalačních modulů.&lt;br/&gt;To zahrnuje nastavení určitých uživatelských voleb, &lt;br/&gt;odstranění balíčků používaných jedině při živém sezení&lt;br/&gt;a upravení nastavení technického vybavení.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="99"/>
        <source>The default Office Suite is LibreOffice.&lt;br/&gt;Calligra is available in the repositories. &lt;br/&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="122"/>
        <source>Qt/KDE specific internet applications include the &lt;br/&gt;Falkon web-browser and kde-telepathy for &lt;br/&gt;chat and Instant Messaging. &lt;br/&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="146"/>
        <source>For package management Octopi is the GUI application.&lt;br/&gt;</source>
        <translation>Obrazovým rozhraním ku správě balíčků je Octopi.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="168"/>
        <source>May using KaOS be a pleasant experience for you.</source>
        <translation>Ať je pro vás používání KaOS příjemným zážitkem.</translation>
    </message>
    <message>
        <location filename="../src/branding/default/show.qml" line="55"/>
        <source>This is a second Slide element.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/default/show.qml" line="59"/>
        <source>This is a third Slide element.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>test</name>
    <message>
        <location filename="../src/modules/welcomeq/test.qml" line="26"/>
        <source>&lt;h3&gt;Welcome to the KaOS &lt;quote&gt;2020.06&lt;/quote&gt; installer&lt;/h3&gt;
            &lt;p&gt;This program will ask you some questions and set up KaOS on your computer.&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/test.qml" line="71"/>
        <source>About</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/test.qml" line="84"/>
        <source>Known issues</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/test.qml" line="95"/>
        <source>Release notes</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/test.qml" line="106"/>
        <source>Donate</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>usersq</name>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="36"/>
        <source>Pick your user name and credentials to login and perform admin tasks</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="52"/>
        <source>What is your name?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="59"/>
        <source>Your Full Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="80"/>
        <source>What name do you want to use to log in?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="87"/>
        <source>Login Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="103"/>
        <source>If more than one person will use this computer, you can create multiple accounts after installation.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="118"/>
        <source>What is the name of this computer?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="125"/>
        <source>Computer Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="140"/>
        <source>This name will be used if you make the computer visible to others on a network.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="155"/>
        <source>Choose a password to keep your account safe.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="166"/>
        <source>Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="185"/>
        <source>Repeat Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="204"/>
        <source>Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="216"/>
        <source>Validate passwords quality</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="226"/>
        <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password..</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="234"/>
        <source>Log in automatically without asking for the password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="243"/>
        <source>Reuse user password as root password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="253"/>
        <source>Use the same password for the administrator account.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="268"/>
        <source>Choose a root password to keep your account safe.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="279"/>
        <source>Root Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="298"/>
        <source>Repeat Root Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="318"/>
        <source>Enter the same password twice, so that it can be checked for typing errors.</source>
        <translation type="unfinished"/>
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
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="66"/>
        <source>About</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="79"/>
        <source>Support</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="90"/>
        <source>Known issues</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="101"/>
        <source>Release notes</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="113"/>
        <source>Donate</source>
        <translation type="unfinished"/>
    </message>
</context>
</TS>