<?xml version="1.0" ?><!DOCTYPE TS><TS version="2.1" language="ru">
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
        <translation>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt; для %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/CalamaresAbout.cpp" line="20"/>
        <source>Thanks to &lt;a href=&quot;https://calamares.io/team/&quot;&gt;the Calamares team&lt;/a&gt; and the &lt;a href=&quot;https://www.transifex.com/calamares/calamares/&quot;&gt;Calamares translators team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;&lt;a href=&quot;https://calamares.io/&quot;&gt;Calamares&lt;/a&gt; development is sponsored by &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/CalamaresAbout.cpp" line="38"/>
        <source>Copyright %1-%2 %3 &amp;lt;%4&amp;gt;&lt;br/&gt;</source>
        <extracomment>Copyright year-year Name &lt;email-address&gt;</extracomment>
        <translation>Авторское право %1-%2 %3 &amp;lt;%4&amp;gt;&lt;br/&gt;</translation>
    </message>
</context>
<context>
    <name>AutoMountManagementJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/AutoMountManagementJob.cpp" line="22"/>
        <source>Manage auto-mount settings</source>
        <translation>Управление настройками автомонтирования</translation>
    </message>
</context>
<context>
    <name>BIOS</name>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="41"/>
        <source>GRUB 2, the GRand Unified Bootloader is the reference implementation of the Free Software Foundation&apos;s Multiboot Specification, which provides a user the choice to boot one of multiple operating systems installed on a computer.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="54"/>
        <source>GRUB</source>
        <translation>GRUB</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="108"/>
        <source>No bootloader selected. Selecting no bootloader might result in an un-bootable system, if you don&apos;t already have a bootloader were you can add this install to.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="121"/>
        <source>No bootloader</source>
        <translation>Нет загрузчика</translation>
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
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="62"/>
        <source>The &lt;strong&gt;boot environment&lt;/strong&gt; of this system.&lt;br&gt;&lt;br&gt;Older x86 systems only support &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Modern systems usually use &lt;strong&gt;EFI&lt;/strong&gt;, but may also show up as BIOS if started in compatibility mode.</source>
        <translation>Среда &lt;strong&gt;загрузки&lt;/strong&gt; этой системы.&lt;br&gt;&lt;br&gt;Старые системы x86 поддерживают только&lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Современные обычно  используют &lt;strong&gt;EFI&lt;/strong&gt;, но могут отображаться как BIOS, если запущены в режиме совместимости.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="72"/>
        <source>This system was started with an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from an EFI environment, this installer must deploy a boot loader application, like &lt;strong&gt;GRUB&lt;/strong&gt; or &lt;strong&gt;systemd-boot&lt;/strong&gt; on an &lt;strong&gt;EFI System Partition&lt;/strong&gt;. This is automatic, unless you choose manual partitioning, in which case you must choose it or create it on your own.</source>
        <translation>Эта система стартовала в &lt;strong&gt;EFI&lt;/strong&gt; среде загрузки.&lt;br&gt;&lt;br&gt;Для конфигурации загрузки из среды EFI, этот установщик должен развернуть загрузчик, например &lt;strong&gt;GRUB&lt;/strong&gt; или &lt;strong&gt;systemd-boot&lt;/strong&gt; в &lt;strong&gt;EFI System Partition&lt;/strong&gt;. Это произойдет автоматически, если вы не выбрали ручную разметку, в этом случае вы должны выбрать его или создать самостоятельно.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="84"/>
        <source>This system was started with a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from a BIOS environment, this installer must install a boot loader, like &lt;strong&gt;GRUB&lt;/strong&gt;, either at the beginning of a partition or on the &lt;strong&gt;Master Boot Record&lt;/strong&gt; near the beginning of the partition table (preferred). This is automatic, unless you choose manual partitioning, in which case you must set it up on your own.</source>
        <translation>Эта система стартовала в &lt;strong&gt;BIOS&lt;/strong&gt; среде загрузки.&lt;br&gt;&lt;br&gt;Для конфигурации загрузки из среды BIOS, этот установщик должен установить загрузчик, например &lt;strong&gt;GRUB&lt;/strong&gt;, в начало раздела или в &lt;strong&gt;Master Boot Record&lt;/strong&gt; близкий к началу таблицы разделов (предпочтительно). Это произойдет автоматически, если вы не выбрали ручную разметку, в этом случае вы должны настроить его самостоятельно.</translation>
    </message>
</context>
<context>
    <name>BootLoaderModel</name>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="60"/>
        <source>Master Boot Record of %1</source>
        <translation>Главная загрузочная запись %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="93"/>
        <source>Boot Partition</source>
        <translation>Загрузочный раздел</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="100"/>
        <source>System Partition</source>
        <translation>Системный раздел</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="131"/>
        <source>Do not install a boot loader</source>
        <translation>Не установлен загрузчик</translation>
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
        <translation>Пустая страница</translation>
    </message>
</context>
<context>
    <name>Calamares::DebugWindow</name>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="18"/>
        <source>Form</source>
        <translation>Форма</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="28"/>
        <source>GlobalStorage</source>
        <translation>Хранилище</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="38"/>
        <source>JobQueue</source>
        <translation>Очерёдность</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="48"/>
        <source>Modules</source>
        <translation>Модули</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="61"/>
        <source>Type:</source>
        <translation>Тип:</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="68"/>
        <location filename="../src/calamares/DebugWindow.ui" line="82"/>
        <source>none</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="75"/>
        <source>Interface:</source>
        <translation>Интерфейс:</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="102"/>
        <source>Crashes Calamares, so that Dr. Konqui can look at it.</source>
        <translation type="unfinished"/>
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
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.cpp" line="164"/>
        <source>Debug information</source>
        <translation>Информация отладки</translation>
    </message>
</context>
<context>
    <name>Calamares::ExecutionViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="118"/>
        <source>Set up</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="118"/>
        <source>Install</source>
        <translation>Установка</translation>
    </message>
</context>
<context>
    <name>Calamares::FailJob</name>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="29"/>
        <source>Job failed (%1)</source>
        <translation>Сбой задания (%1)</translation>
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
        <location filename="../src/libcalamares/JobQueue.cpp" line="203"/>
        <source>Done</source>
        <translation>Готово</translation>
    </message>
</context>
<context>
    <name>Calamares::NamedJob</name>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="17"/>
        <source>Example job (%1)</source>
        <translation>Пример задания (%1)</translation>
    </message>
</context>
<context>
    <name>Calamares::ProcessJob</name>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="42"/>
        <source>Run command &apos;%1&apos; in target system.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="42"/>
        <source> Run command &apos;%1&apos;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="49"/>
        <source>Running command %1 %2</source>
        <translation>Выполнение команд %1 %2</translation>
    </message>
</context>
<context>
    <name>Calamares::PythonJob</name>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="233"/>
        <source>Running %1 operation.</source>
        <translation>Выполнение операции %1.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="262"/>
        <source>Bad working directory path</source>
        <translation>Неверный путь рабочей директории</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="263"/>
        <source>Working directory %1 for python job %2 is not readable.</source>
        <translation>Рабочая директория %1 для задачи python %2 не читаема.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="269"/>
        <source>Bad main script file</source>
        <translation>Ошибочный файл сценария</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="270"/>
        <source>Main script file %1 for python job %2 is not readable.</source>
        <translation>Главный файл сценария %1 для задачи python %2 не читаем.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="343"/>
        <source>Boost.Python error in job &quot;%1&quot;.</source>
        <translation>Boost.Python ошибка в задаче &quot;%1&quot;.</translation>
    </message>
</context>
<context>
    <name>Calamares::QmlViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="67"/>
        <source>Loading ...</source>
        <translation>Загрузка...</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="88"/>
        <source>QML Step &lt;i&gt;%1&lt;/i&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="268"/>
        <source>Loading failed.</source>
        <translation>Загрузка не удалась.</translation>
    </message>
</context>
<context>
    <name>Calamares::RequirementsChecker</name>
    <message>
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="94"/>
        <source>Requirements checking for module &apos;%1&apos; is complete.</source>
        <translation type="unfinished"/>
    </message>
    <message numerus="yes">
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="118"/>
        <source>Waiting for %n module(s).</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="119"/>
        <source>(%n second(s))</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message>
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="124"/>
        <source>System-requirements checking is complete.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Calamares::ViewManager</name>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="397"/>
        <source>&amp;Back</source>
        <translation>&amp;Назад</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="392"/>
        <source>&amp;Next</source>
        <translation>&amp;Далее</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="422"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Отмена</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="381"/>
        <source>Cancel setup without changing the system.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="382"/>
        <source>Cancel installation without changing the system.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="160"/>
        <source>Setup Failed</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/Paste.cpp" line="178"/>
        <source>Install log posted to

%1

Link copied to clipboard</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/Paste.cpp" line="184"/>
        <source>Install Log Paste URL</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/Paste.cpp" line="166"/>
        <source>The upload was unsuccessful. No web-paste was done.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="189"/>
        <source>Calamares Initialization Failed</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="190"/>
        <source>%1 can not be installed. Calamares was unable to load all of the configured modules. This is a problem with the way Calamares is being used by the distribution.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="196"/>
        <source>&lt;br/&gt;The following modules could not be loaded:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="310"/>
        <source>Continue with installation?</source>
        <translation>Продолжить установку?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="312"/>
        <source>The %1 setup program is about to make changes to your disk in order to set up %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="318"/>
        <source>&amp;Set up now</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="376"/>
        <source>&amp;Set up</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="376"/>
        <source>&amp;Install</source>
        <translation>&amp;Установить</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="378"/>
        <source>Setup is complete. Close the setup program.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="495"/>
        <source>Cancel setup?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="495"/>
        <source>Cancel installation?</source>
        <translation>Отменить установку?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="496"/>
        <source>Do you really want to cancel the current setup process?
The setup program will quit and all changes will be lost.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="498"/>
        <source>Do you really want to cancel the current install process?
The installer will quit and all changes will be lost.</source>
        <translation>Вы действительно хотите отменить процесс установки?
Установщик будет закрыт а все изменения потеряны.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="90"/>
        <source>&amp;Yes</source>
        <translation>&amp;Да</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="91"/>
        <source>&amp;No</source>
        <translation>&amp;Нет</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="92"/>
        <source>&amp;Close</source>
        <translation>&amp;Закрыть</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="310"/>
        <source>Continue with setup?</source>
        <translation>Продолжить с установкой?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="315"/>
        <source>The %1 installer is about to make changes to your disk in order to install %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation>Установщик %1 собирается внести изменения на диск для установки %2.&lt;br/&gt;&lt;strong&gt;Вы не сможете отменить эти изменения.&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="318"/>
        <source>&amp;Install now</source>
        <translation>&amp;Установить сейчас</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="326"/>
        <source>Go &amp;back</source>
        <translation>&amp;Вернуться</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="403"/>
        <source>&amp;Done</source>
        <translation>&amp;Готово</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="379"/>
        <source>The installation is complete. Close the installer.</source>
        <translation>Установка завершена. Закройте программу установки.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="163"/>
        <source>Error</source>
        <translation>Ошибка</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="160"/>
        <source>Installation Failed</source>
        <translation>Установка неудачна</translation>
    </message>
</context>
<context>
    <name>CalamaresPython::Helper</name>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="302"/>
        <source>Unknown exception type</source>
        <translation>Неизвестный тип исключения</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="320"/>
        <source>unparseable Python error</source>
        <translation>необрабатываемая ошибка Python</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="364"/>
        <source>unparseable Python traceback</source>
        <translation>необрабатываемый traceback Python</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="371"/>
        <source>Unfetchable Python error.</source>
        <translation>Неизвестная ошибка Python</translation>
    </message>
</context>
<context>
    <name>CalamaresWindow</name>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="396"/>
        <source>%1 Setup Program</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="397"/>
        <source>%1 Installer</source>
        <translation>%1 Установщик</translation>
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
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ChoicePage</name>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="140"/>
        <source>After:</source>
        <translation>После:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1041"/>
        <source>%1 will be shrunk to %2MiB and a new %3MiB partition will be created for %4.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1322"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1359"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1381"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1406"/>
        <source>&lt;strong&gt;Erase disk&lt;/strong&gt;&lt;br/&gt;This will &lt;font color=&quot;red&quot;&gt;delete&lt;/font&gt; all data currently present on the selected storage device.</source>
        <translation>&lt;strong&gt;Стереть диск&lt;/strong&gt;&lt;br/&gt;Будут &lt;font color=&quot;red&quot;&gt;удалены&lt;/font&gt; все данные, имеющиеся на на выбранном устройстве хранения.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1326"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1355"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1377"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1402"/>
        <source>&lt;strong&gt;Install alongside&lt;/strong&gt;&lt;br/&gt;The installer will shrink a partition to make room for %1.</source>
        <translation>&lt;strong&gt;Установить рядом&lt;/strong&gt;&lt;br/&gt;Установщик будет сжимать раздел, освобождая место для %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1330"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1364"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1385"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1410"/>
        <source>&lt;strong&gt;Replace a partition&lt;/strong&gt;&lt;br/&gt;Replaces a partition with %1.</source>
        <translation>&lt;strong&gt;Поменять раздел&lt;/strong&gt;&lt;br/&gt;Поменять раздел с %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1678"/>
        <source>Boot loader location:</source>
        <translation>Расположение загрузчика:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="138"/>
        <source>Select storage de&amp;vice:</source>
        <translation>Выбрать устройство &amp;хранения:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="139"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1016"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1067"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1120"/>
        <source>Current:</source>
        <translation>Сейчас:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="881"/>
        <source>Reuse %1 as home partition for %2.</source>
        <translation>Вновь использовать %1 как раздел home для %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1017"/>
        <source>&lt;strong&gt;Select a partition to shrink, then drag the bottom bar to resize&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Выберите раздел для сжатия, затем передвиньте ползунок снизу, чтобы изменить размер&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1111"/>
        <source>&lt;strong&gt;Select a partition to install on&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Выберите раздел для установки на&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1172"/>
        <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>Системный раздел EFI не обнаружен в данной системе. Вернитесь и воспользуйтесь ручной разметкой чтобы установить %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1180"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>Системный раздел EFI %1 будет использоваться для старта %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1188"/>
        <source>EFI system partition:</source>
        <translation>EFI раздел системы:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1317"/>
        <source>This storage device does not seem to have an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Кажется это устройство хранения не содержит операционной системы. Что вы желаете сделать?&lt;br/&gt;Вы сможете просмотреть и подтвердить свой выбор, прежде чем любые изменения произойдут на устройстве хранения.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1349"/>
        <source>This storage device has %1 on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Это устройство хранения содержит %1. Что вы желаете сделать?&lt;br/&gt;Вы сможете просмотреть и подтвердить свой выбор, прежде чем любые изменения произойдут на устройстве хранения.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1372"/>
        <source>This storage device already has an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Это устройство хранения уже содержит операционную систему. Что вы желаете сделать?&lt;br/&gt;Вы сможете просмотреть и подтвердить свой выбор, прежде чем любые изменения произойдут на устройстве хранения.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1397"/>
        <source>This storage device has multiple operating systems on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Это устройство хранения содержит несколько операционных систем. Что вы желаете сделать?&lt;br/&gt;Вы сможете просмотреть и подтвердить свой выбор, прежде чем любые изменения произойдут на устройстве хранения.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1469"/>
        <source>This storage device already has an operating system on it, but the partition table &lt;strong&gt;%1&lt;/strong&gt; is different from the needed &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1492"/>
        <source>This storage device has one of its partitions &lt;strong&gt;mounted&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1497"/>
        <source>This storage device is a part of an &lt;strong&gt;inactive RAID&lt;/strong&gt; device.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1616"/>
        <source>No Swap</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1625"/>
        <source>Reuse Swap</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1628"/>
        <source>Swap (no Hibernate)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1631"/>
        <source>Swap (with Hibernate)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1634"/>
        <source>Swap to file</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1647"/>
        <source>&lt;strong&gt;Manual partitioning&lt;/strong&gt;&lt;br/&gt;You can create or resize partitions yourself.&lt;br/&gt;Having a GPT partition table and &lt;strong&gt;fat32 512Mb /boot partition is a must for UEFI installs&lt;/strong&gt;,&lt;br/&gt;either use an existing without formatting or create one.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.ui" line="18"/>
        <source>Form</source>
        <translation>Форма</translation>
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
        <translation>Очистить монтирование для работы с разделами %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="377"/>
        <source>Clearing mounts for partitioning operations on %1.</source>
        <translation>Очистка монтирования для работы с разделами %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="396"/>
        <source>Cleared all mounts for %1</source>
        <translation>Очистить всё смонтированное %1</translation>
    </message>
</context>
<context>
    <name>ClearTempMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="33"/>
        <source>Clear all temporary mounts.</source>
        <translation>Очистить все временные монтирования.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="40"/>
        <source>Clearing all temporary mounts.</source>
        <translation>Очистить все временно примонтированное.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="70"/>
        <source>Cleared all temporary mounts.</source>
        <translation>Очистить все временные монтирования.</translation>
    </message>
</context>
<context>
    <name>CommandList</name>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="165"/>
        <source>Could not run command.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="166"/>
        <source>The commands use variables that are not defined. Missing variables are: %1.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Config</name>
    <message>
        <location filename="../src/modules/keyboard/Config.cpp" line="361"/>
        <source>Set keyboard model to %1.&lt;br/&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboard/Config.cpp" line="368"/>
        <source>Set keyboard layout to %1/%2.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/locale/Config.cpp" line="373"/>
        <source>Set timezone to %1/%2.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/locale/Config.cpp" line="411"/>
        <source>The system language will be set to %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/locale/Config.cpp" line="418"/>
        <source>The numbers and dates locale will be set to %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="56"/>
        <source>This computer does not satisfy the minimum requirements for setting up %1.&lt;br/&gt;Setup cannot continue.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="59"/>
        <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="65"/>
        <source>This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;Setup can continue, but some features might be disabled.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="69"/>
        <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="79"/>
        <source>This program will ask you some questions and set up %2 on your computer.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="266"/>
        <source>&lt;h1&gt;Welcome to the Calamares setup program for %1&lt;/h1&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="267"/>
        <source>&lt;h1&gt;Welcome to %1 setup&lt;/h1&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="271"/>
        <source>&lt;h1&gt;Welcome to the Calamares installer for %1&lt;/h1&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="272"/>
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
        <location filename="../src/modules/users/Config.cpp" line="584"/>
        <source>Your passwords do not match!</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="598"/>
        <source>OK!</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="145"/>
        <source>Setup Failed</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="145"/>
        <source>Installation Failed</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="147"/>
        <source>The setup of %1 did not complete successfully.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="148"/>
        <source>The installation of %1 did not complete successfully.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="152"/>
        <source>Setup Complete</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="153"/>
        <source>Installation Complete</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="154"/>
        <source>The setup of %1 is complete.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="155"/>
        <source>The installation of %1 is complete.</source>
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
        <location filename="../src/modules/packagechooser/Config.cpp" line="243"/>
        <source>Install option: &lt;strong&gt;%1&lt;/strong&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/Config.cpp" line="243"/>
        <source>None</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>CreatePartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="18"/>
        <source>Create a Partition</source>
        <translation>Создать раздел</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="52"/>
        <source> MiB</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="59"/>
        <source>Partition &amp;Type:</source>
        <translation>Тип &amp; раздела:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="71"/>
        <source>Primar&amp;y</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="81"/>
        <source>E&amp;xtended</source>
        <translation>&amp;Расширенный</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="123"/>
        <source>Fi&amp;le System:</source>
        <translation>&amp;Файловая система:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="155"/>
        <source>LVM LV name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="191"/>
        <source>Flags:</source>
        <translation>Флаги:</translation>
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
        <translation>Точка &amp;монтирования</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="42"/>
        <source>Si&amp;ze:</source>
        <translation>&amp;Размер:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="66"/>
        <source>En&amp;crypt</source>
        <translation>&amp;Шифровать</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="194"/>
        <source>Logical</source>
        <translation>Логический</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="199"/>
        <source>Primary</source>
        <translation>Основной</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="218"/>
        <source>GPT</source>
        <translation>GPT</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="91"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation type="unfinished"/>
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
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="183"/>
        <source>Create new %1MiB partition on %3 (%2) with entries %4.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="191"/>
        <source>Create new %1MiB partition on %3 (%2).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="198"/>
        <source>Create new %2MiB partition on %4 (%3) with file system %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="215"/>
        <source>Create new &lt;strong&gt;%1MiB&lt;/strong&gt; partition on &lt;strong&gt;%3&lt;/strong&gt; (%2) with entries &lt;em&gt;%4&lt;/em&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="224"/>
        <source>Create new &lt;strong&gt;%1MiB&lt;/strong&gt; partition on &lt;strong&gt;%3&lt;/strong&gt; (%2).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="231"/>
        <source>Create new &lt;strong&gt;%2MiB&lt;/strong&gt; partition on &lt;strong&gt;%4&lt;/strong&gt; (%3) with file system &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="256"/>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="259"/>
        <source>Creating new %1 partition on %2.</source>
        <translation>Создание нового %1 раздела на %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="276"/>
        <source>The installer failed to create partition on disk &apos;%1&apos;.</source>
        <translation>Установщик не создал раздел на диске &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="24"/>
        <source>Create Partition Table</source>
        <translation>Создать таблицу разделов</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="43"/>
        <source>Creating a new partition table will delete all existing data on the disk.</source>
        <translation>Создание новой таблицы разделов удалит все имеющиеся данные на диске.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="69"/>
        <source>What kind of partition table do you want to create?</source>
        <translation>Какой тип таблицы разделов Вы желаете создать?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="76"/>
        <source>Master Boot Record (MBR)</source>
        <translation>Главная загрузочная запись (MBR)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="86"/>
        <source>GUID Partition Table (GPT)</source>
        <translation>Таблица Разделов GUID (GPT)</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="41"/>
        <source>Create new %1 partition table on %2.</source>
        <translation>Создать новую %1 таблицу разделов на %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="49"/>
        <source>Create new &lt;strong&gt;%1&lt;/strong&gt; partition table on &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>Создать новую &lt;strong&gt;%1&lt;/strong&gt; таблицу разделов &lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="59"/>
        <source>Creating new %1 partition table on %2.</source>
        <translation>Создание новой %1 таблицы разделов на %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="88"/>
        <source>The installer failed to create a partition table on %1.</source>
        <translation>Установщик не смог создать таблицу разделов на %1.</translation>
    </message>
</context>
<context>
    <name>CreateUserJob</name>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="35"/>
        <source>Create user %1</source>
        <translation>Создать пользователя %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="42"/>
        <source>Create user &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Создать пользователя &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="49"/>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="142"/>
        <source>Creating user %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="125"/>
        <source>Preserving home directory</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="150"/>
        <source>Configuring user %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="158"/>
        <source>Setting file permissions</source>
        <translation type="unfinished"/>
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
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="32"/>
        <source>Create new volume group named %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="38"/>
        <source>Create new volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="44"/>
        <source>Creating new volume group named %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="51"/>
        <source>The installer failed to create a volume group named &apos;%1&apos;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>DeactivateVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="26"/>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="38"/>
        <source>Deactivate volume group named %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="32"/>
        <source>Deactivate volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="46"/>
        <source>The installer failed to deactivate a volume group named %1.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>DeletePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="73"/>
        <source>Delete partition %1.</source>
        <translation>Удалить раздел %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="80"/>
        <source>Delete partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Удалить раздел &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="87"/>
        <source>Deleting partition %1.</source>
        <translation>Удаление раздела %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="102"/>
        <source>The installer failed to delete partition %1.</source>
        <translation>Установщик не смог удалить раздел %1.</translation>
    </message>
</context>
<context>
    <name>DeviceInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="149"/>
        <source>The type of &lt;strong&gt;partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The only way to change the partition table type is to erase and recreate the partition table from scratch, which destroys all data on the storage device.&lt;br&gt;This installer will keep the current partition table unless you explicitly choose otherwise.&lt;br&gt;If unsure, on modern systems GPT is preferred.</source>
        <translation>Тип &lt;strong&gt;таблицы разделов&lt;/strong&gt; на выбранном устройстве хранения.&lt;br&gt;&lt;br&gt;Единственный способ изменить тип таблицы, состоит в том чтобы стереть и создать таблицу разделов с нуля, что уничтожит все данные на устройстве хранения.&lt;br&gt;Этот установщик сохранит текущую таблицу разделов, если вы явно не вберете иное.&lt;br&gt;Если не уверены, для современных систем предпочтительней GPT.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="141"/>
        <source>This device has a &lt;strong&gt;%1&lt;/strong&gt; partition table.</source>
        <translation>Это устройство имеет &lt;strong&gt;%1&lt;/strong&gt; таблицу разделов.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="97"/>
        <source>This is a &lt;strong&gt;loop&lt;/strong&gt; device.&lt;br&gt;&lt;br&gt;It is a pseudo-device with no partition table that makes a file accessible as a block device. This kind of setup usually only contains a single filesystem.</source>
        <translation>Это &lt;strong&gt;loop&lt;/strong&gt; устройство.&lt;br&gt;&lt;br&gt;Это псевдо-устройство без таблицы разделов, которое делает файл доступным как блочное устройство. Этот вид установки, обычно содержит одну файловую систему.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="106"/>
        <source>This installer &lt;strong&gt;cannot detect a partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The device either has no partition table, or the partition table is corrupted or of an unknown type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</source>
        <translation>Этот установщик &lt;strong&gt;не может обнаружить таблицу разделов&lt;/strong&gt; на выбранном устройстве хранения.&lt;br&gt;&lt;br&gt;Устройство либо не имеет таблицы разделов, либо она повреждена или имеет неизвестны тип&lt;br&gt;Этот установщик может создать для вас новую таблицу, автоматически, либо вручную через страницу создания разделов.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="91"/>
        <source>&lt;br&gt;&lt;br&gt;This is the recommended partition table type for modern systems which start from an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.</source>
        <translation>&lt;br&gt;&lt;br&gt;Это рекомендуемый тип таблицы разделов для современных систем, стартующих из &lt;strong&gt;EFI&lt;/strong&gt; среды загрузки.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="80"/>
        <source>&lt;br&gt;&lt;br&gt;This partition table type is only advisable on older systems which start from a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment. GPT is recommended in most other cases.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Warning:&lt;/strong&gt; the MBR partition table is an obsolete MS-DOS era standard.&lt;br&gt;Only 4 &lt;em&gt;primary&lt;/em&gt; partitions may be created, and of those 4, one can be an &lt;em&gt;extended&lt;/em&gt; partition, which may in turn contain many &lt;em&gt;logical&lt;/em&gt; partitions.</source>
        <translation>&lt;br&gt;&lt;br&gt;Этот тип таблицы разделов рекомендуется только для устаревших систем, стартующих из &lt;strong&gt;BIOS&lt;/strong&gt; среды загрузки. В большинстве других случаев, рекомендуется GPT.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Внимание:&lt;/strong&gt; MBR таблица разделов это устаревший стандарт эпохи MS-DOS.&lt;br&gt;Только 4 &lt;em&gt;основных&lt;/em&gt; раздела могут быть созданы, и из них 4 могут быть &lt;em&gt;расширенным&lt;/em&gt; разделом, который может в свою очередь содержать множество &lt;em&gt;логических&lt;/em&gt; разделов.</translation>
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
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>DracutLuksCfgJob</name>
    <message>
        <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="117"/>
        <source>Write LUKS configuration for Dracut to %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="121"/>
        <source>Skip writing LUKS configuration for Dracut: &quot;/&quot; partition is not encrypted</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="138"/>
        <source>Failed to open %1</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>EditExistingPartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="24"/>
        <source>Edit Existing Partition</source>
        <translation>Править существующий раздел</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="54"/>
        <source>Con&amp;tent:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="64"/>
        <source>&amp;Keep</source>
        <translation>&amp;Оставить</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="74"/>
        <source>Format</source>
        <translation>Форматировать</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="93"/>
        <source>Warning: Formatting the partition will erase all existing data.</source>
        <translation>Внимание: Форматирование раздела уничтожит все имеющиеся данные.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="103"/>
        <source>&amp;Mount Point:</source>
        <translation>&amp;Точка монтирования:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="129"/>
        <source>Si&amp;ze:</source>
        <translation>&amp;Размер:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="139"/>
        <source> MiB</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="146"/>
        <source>Fi&amp;le System:</source>
        <translation>&amp;Файловая система:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="159"/>
        <source>Flags:</source>
        <translation>Флаги:</translation>
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
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="18"/>
        <source>Form</source>
        <translation>Форма</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="36"/>
        <source>En&amp;crypt system</source>
        <translation>&amp;Система шифрования</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="43"/>
        <source>Your system does not seem to support encryption well enough to encrypt the entire system. You may enable encryption, but performance may suffer.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="59"/>
        <source>Passphrase</source>
        <translation>Пароль</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="69"/>
        <source>Confirm passphrase</source>
        <translation>Подтвердить пароль</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="156"/>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="166"/>
        <source>Please enter the same passphrase in both boxes.</source>
        <translation>Введите одинаковый пароль в обоих полях.</translation>
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
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="170"/>
        <source>Set partition information</source>
        <translation>Установить информацию о разделе</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="199"/>
        <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition with features &lt;em&gt;%3&lt;/em&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="207"/>
        <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition.</source>
        <translation>Установить %1 на &lt;strong&gt;новый&lt;/strong&gt; %2 системный раздел.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="216"/>
        <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt; and features &lt;em&gt;%3&lt;/em&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="224"/>
        <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt;%3.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="238"/>
        <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt; with features &lt;em&gt;%4&lt;/em&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="257"/>
        <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt; and features &lt;em&gt;%4&lt;/em&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="266"/>
        <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt;%4.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="247"/>
        <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Установить %2 на %3 системный раздел &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="281"/>
        <source>Install boot loader on &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Установить загрузчик на &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="290"/>
        <source>Setting up mount points.</source>
        <translation>Настройка точек монтирования.</translation>
    </message>
</context>
<context>
    <name>FinishedPage</name>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="18"/>
        <source>Form</source>
        <translation>Форма</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="102"/>
        <source>&amp;Restart now</source>
        <translation>&amp;Перезагрузка</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="75"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been set up on your computer.&lt;br/&gt;You may now start using your new system.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="79"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot;font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the setup program.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="87"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been installed on your computer.&lt;br/&gt;You may now restart into your new system, or continue using the %2 Live environment.</source>
        <translation>&lt;h1&gt;Всё готово.&lt;/h1&gt;&lt;br/&gt;%1 был установлен на ваш компьютер.&lt;br/&gt;Теперь Вы можете перезагрузиться в вашу новую систему или продолжить использовать %2 Live.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="92"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot;font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the installer.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="105"/>
        <source>&lt;h1&gt;Setup Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been set up on your computer.&lt;br/&gt;The error message was: %2.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="113"/>
        <source>&lt;h1&gt;Installation Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been installed on your computer.&lt;br/&gt;The error message was: %2.</source>
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
        <translation>Завершить</translation>
    </message>
</context>
<context>
    <name>FormatPartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="39"/>
        <source>Format partition %1 (file system: %2, size: %3 MiB) on %4.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="50"/>
        <source>Format &lt;strong&gt;%3MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; with file system &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="63"/>
        <source>%1 (%2)</source>
        <comment>partition label %1 (device path %2)</comment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="65"/>
        <source>Formatting partition %1 with file system %2.</source>
        <translation>Форматирование раздела %1 с файловой системой %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="76"/>
        <source>The installer failed to format partition %1 on disk &apos;%2&apos;.</source>
        <translation>Установщик не смог отформатировать раздел %1 на диске &apos;%2&apos;.</translation>
    </message>
</context>
<context>
    <name>GeneralRequirements</name>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="159"/>
        <source>Please ensure the system has at least %1 GiB available drive space.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="161"/>
        <source>Available drive space is all of the hard disks and SSDs connected to the system.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="164"/>
        <source>There is not enough drive space. At least %1 GiB is required.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="172"/>
        <source>has at least %1 GiB working memory</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="174"/>
        <source>The system does not have enough working memory. At least %1 GiB is required.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="183"/>
        <source>is plugged in to a power source</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="184"/>
        <source>The system is not plugged in to a power source.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="191"/>
        <source>is connected to the Internet</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="192"/>
        <source>The system is not connected to the Internet.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="199"/>
        <source>is running the installer as an administrator (root)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="203"/>
        <source>The setup program is not running with administrator rights.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="204"/>
        <source>The installer is not running with administrator rights.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="212"/>
        <source>has a screen large enough to show the whole installer</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="216"/>
        <source>The screen is too small to display the setup program.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="217"/>
        <source>The screen is too small to display the installer.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="226"/>
        <source>is always false</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="227"/>
        <source>The computer says no.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="235"/>
        <source>is always false (slowly)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="236"/>
        <source>The computer says no (slowly).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="243"/>
        <source>is always true</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="244"/>
        <source>The computer says yes.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="252"/>
        <source>is always true (slowly)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="253"/>
        <source>The computer says yes (slowly).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="261"/>
        <source>is checked three times.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="264"/>
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
    <name>InitcpioJob</name>
    <message>
        <location filename="../src/modules/initcpio/InitcpioJob.cpp" line="32"/>
        <source>Creating initramfs with mkinitcpio.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>KeyboardQmlViewStep</name>
    <message>
        <location filename="../src/modules/keyboardq/KeyboardQmlViewStep.cpp" line="32"/>
        <source>Keyboard</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>KeyboardViewStep</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardViewStep.cpp" line="42"/>
        <source>Keyboard</source>
        <translation>Клавиатура</translation>
    </message>
</context>
<context>
    <name>LCLocaleDialog</name>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="23"/>
        <source>System locale setting</source>
        <translation>Настройка местоположения</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="30"/>
        <source>The system locale setting affects the language and character set for some command line user interface elements.&lt;br/&gt;The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Настройки языка системы влияют на язык и набор символов для некоторых элементов пользовательского интерфейса командной строки.&lt;br/&gt;Текущие настройки &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="54"/>
        <source>&amp;Cancel</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="55"/>
        <source>&amp;OK</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>LOSHJob</name>
    <message>
        <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="36"/>
        <source>Configuring encrypted swap.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="88"/>
        <source>No target system available.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="96"/>
        <source>No rootMountPoint is set.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="101"/>
        <source>No configFilePath is set.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>LicensePage</name>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="18"/>
        <source>Form</source>
        <translation>Форма</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="26"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="143"/>
        <source>I accept the terms and conditions above.</source>
        <translation>Я принимаю условия изложенные выше.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="145"/>
        <source>Please review the End User License Agreements (EULAs).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="150"/>
        <source>This setup procedure will install proprietary software that is subject to licensing terms.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="153"/>
        <source>If you do not agree with the terms, the setup procedure cannot continue.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="158"/>
        <source>This setup procedure can install proprietary software that is subject to licensing terms in order to provide additional features and enhance the user experience.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="163"/>
        <source>If you do not agree with the terms, proprietary software will not be installed, and open source alternatives will be used instead.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>LicenseViewStep</name>
    <message>
        <location filename="../src/modules/license/LicenseViewStep.cpp" line="43"/>
        <source>License</source>
        <translation>Лицензия</translation>
    </message>
</context>
<context>
    <name>LicenseWidget</name>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="88"/>
        <source>URL: %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="109"/>
        <source>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;by %2</source>
        <extracomment>%1 is an untranslatable product name, example: Creative Audigy driver</extracomment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="116"/>
        <source>&lt;strong&gt;%1 graphics driver&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <extracomment>%1 is usually a vendor name, example: Nvidia graphics driver</extracomment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="122"/>
        <source>&lt;strong&gt;%1 browser plugin&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="128"/>
        <source>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="134"/>
        <source>&lt;strong&gt;%1 package&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="140"/>
        <source>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="163"/>
        <source>File: %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="186"/>
        <source>Hide license text</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="186"/>
        <source>Show the license text</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="190"/>
        <source>Open license agreement in browser.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>LocalePage</name>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="130"/>
        <source>Region:</source>
        <translation>Регион:</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="131"/>
        <source>Zone:</source>
        <translation>Зона:</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="132"/>
        <location filename="../src/modules/locale/LocalePage.cpp" line="133"/>
        <source>&amp;Change...</source>
        <translation>&amp;Изменение...</translation>
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
    <name>LocaleTests</name>
    <message>
        <location filename="../src/libcalamares/locale/Tests.cpp" line="272"/>
        <source>Quit</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>LocaleViewStep</name>
    <message>
        <location filename="../src/modules/locale/LocaleViewStep.cpp" line="75"/>
        <source>Location</source>
        <translation>Местоположение</translation>
    </message>
</context>
<context>
    <name>LuksBootKeyFileJob</name>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="33"/>
        <source>Configuring LUKS key file.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="235"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="243"/>
        <source>No partitions are defined.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="279"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="286"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="300"/>
        <source>Encrypted rootfs setup error</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="280"/>
        <source>Root partition %1 is LUKS but no passphrase has been set.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="287"/>
        <source>Could not create LUKS key file for root partition %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="301"/>
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
        <location filename="../src/modules/localeq/Map.qml" line="68"/>
        <source>Timezone: </source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/Map.qml" line="232"/>
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
        <location filename="../src/modules/localeq/Offline.qml" line="47"/>
        <source>Select your preferred Region, or use the default settings.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="103"/>
        <location filename="../src/modules/localeq/Offline.qml" line="180"/>
        <location filename="../src/modules/localeq/Offline.qml" line="224"/>
        <source>Timezone: %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="120"/>
        <source>Select your preferred Zone within your Region.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="193"/>
        <source>Zones</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="240"/>
        <source>You can fine-tune Language and Locale settings below.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>PWQ</name>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="51"/>
        <source>Password is too short</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="67"/>
        <source>Password is too long</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="188"/>
        <source>Password is too weak</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="196"/>
        <source>Memory allocation error when setting &apos;%1&apos;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="199"/>
        <source>Memory allocation error</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="201"/>
        <source>The password is the same as the old one</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="203"/>
        <source>The password is a palindrome</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="205"/>
        <source>The password differs with case changes only</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="207"/>
        <source>The password is too similar to the old one</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="209"/>
        <source>The password contains the user name in some form</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="211"/>
        <source>The password contains words from the real name of the user in some form</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="214"/>
        <source>The password contains forbidden words in some form</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="221"/>
        <source>The password contains too few digits</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="228"/>
        <source>The password contains too few uppercase letters</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="235"/>
        <source>The password contains too few lowercase letters</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="242"/>
        <source>The password contains too few non-alphanumeric characters</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="249"/>
        <source>The password is too short</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="258"/>
        <source>The password does not contain enough character classes</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="265"/>
        <source>The password contains too many same characters consecutively</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="275"/>
        <source>The password contains too many characters of the same class consecutively</source>
        <translation type="unfinished"/>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="218"/>
        <source>The password contains fewer than %n digits</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="225"/>
        <source>The password contains fewer than %n uppercase letters</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="232"/>
        <source>The password contains fewer than %n lowercase letters</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="239"/>
        <source>The password contains fewer than %n non-alphanumeric characters</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="246"/>
        <source>The password is shorter than %n characters</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="251"/>
        <source>The password is a rotated version of the previous one</source>
        <translation type="unfinished"/>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="255"/>
        <source>The password contains fewer than %n character classes</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="262"/>
        <source>The password contains more than %n same characters consecutively</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="269"/>
        <source>The password contains more than %n characters of the same class consecutively</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="280"/>
        <source>The password contains monotonic sequence longer than %n characters</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="286"/>
        <source>The password contains too long of a monotonic character sequence</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="289"/>
        <source>No password supplied</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="291"/>
        <source>Cannot obtain random numbers from the RNG device</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="293"/>
        <source>Password generation failed - required entropy too low for settings</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="298"/>
        <source>The password fails the dictionary check - %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="301"/>
        <source>The password fails the dictionary check</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="305"/>
        <source>Unknown setting - %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="307"/>
        <source>Unknown setting</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="311"/>
        <source>Bad integer value of setting - %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="313"/>
        <source>Bad integer value</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="317"/>
        <source>Setting %1 is not of integer type</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="319"/>
        <source>Setting is not of integer type</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="323"/>
        <source>Setting %1 is not of string type</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="325"/>
        <source>Setting is not of string type</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="327"/>
        <source>Opening the configuration file failed</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="329"/>
        <source>The configuration file is malformed</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="331"/>
        <source>Fatal failure</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="333"/>
        <source>Unknown error</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="829"/>
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
        <location filename="../src/modules/packagechooser/page_package.ui" line="50"/>
        <source>Product Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="63"/>
        <source>TextLabel</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="79"/>
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
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Page_Keyboard</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="18"/>
        <source>Form</source>
        <translation>Форма</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="74"/>
        <source>Keyboard Model:</source>
        <translation>Тип клавиатуры:</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="135"/>
        <source>Type here to test your keyboard</source>
        <translation>Печатайте тут, для проверки вашей клавиатуры</translation>
    </message>
</context>
<context>
    <name>Page_UserSetup</name>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="18"/>
        <source>Form</source>
        <translation>Форма</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="40"/>
        <source>What is your name?</source>
        <translation>Как Вас зовут?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="124"/>
        <source>What name do you want to use to log in?</source>
        <translation>Какое имя Вы хотите использовать для входа?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="325"/>
        <source>Choose a password to keep your account safe.</source>
        <translation>Выберите пароль для защиты вашей учетной записи.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="349"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="374"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Введите одинаковый пароль дважды, это необходимо для исключения ошибок. Хороший пароль состоит из смеси букв, цифр и знаков пунктуации; должен иметь длину от 8 знаков и его стоит периодически изменять.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="223"/>
        <source>What is the name of this computer?</source>
        <translation>Как называть этот компьютер?</translation>
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
        <translation>&lt;small&gt;Это имя будет использовано, если Вы сделаете этот компьютер видимым в сети.&lt;/small&gt;</translation>
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
        <translation>Входить автоматически, без запроса пароля.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="472"/>
        <source>Use the same password for the administrator account.</source>
        <translation>Использовать тот же пароль для аккаунта администратора.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="495"/>
        <source>Choose a password for the administrator account.</source>
        <translation>Выберите пароль администратора</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="519"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="544"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Введите пароль дважды, чтобы исключить ошибки ввода.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>PartitionLabelsView</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="189"/>
        <source>Root</source>
        <translation>Root</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="193"/>
        <source>Home</source>
        <translation>Home</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="197"/>
        <source>Boot</source>
        <translation>Boot</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="202"/>
        <source>EFI system</source>
        <translation>EFI system</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="206"/>
        <source>Swap</source>
        <translation>Swap</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="210"/>
        <source>New partition for %1</source>
        <translation>Новый раздел для %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="214"/>
        <source>New partition</source>
        <translation>Новый раздел</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="238"/>
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
        <translation>Свободное место</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="161"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="205"/>
        <source>New partition</source>
        <translation>Новый раздел</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="298"/>
        <source>Name</source>
        <translation>Имя</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="300"/>
        <source>File System</source>
        <translation>Файловая система</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="302"/>
        <source>File System Label</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="304"/>
        <source>Mount Point</source>
        <translation>Точка монтирования</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="306"/>
        <source>Size</source>
        <translation>Размер</translation>
    </message>
</context>
<context>
    <name>PartitionPage</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="18"/>
        <source>Form</source>
        <translation>Форма</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="26"/>
        <source>Storage de&amp;vice:</source>
        <translation>Устройство &amp;хранения:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="55"/>
        <source>&amp;Revert All Changes</source>
        <translation>&amp;Отменить все изменения</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="91"/>
        <source>New Partition &amp;Table</source>
        <translation>Новая таблица &amp;разделов</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="111"/>
        <source>Cre&amp;ate</source>
        <translation type="unfinished"/>
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
        <translation>&amp;Править</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="125"/>
        <source>&amp;Delete</source>
        <translation>&amp;Удалить</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="224"/>
        <source>Are you sure you want to create a new partition table on %1?</source>
        <translation>Вы уверены, что хотите создать новую таблицу разделов на %1?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="259"/>
        <source>Can not create new partition</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="260"/>
        <source>The partition table on %1 already has %2 primary partitions, and no more can be added. Please remove one primary partition and add an extended partition, instead.</source>
        <translation type="unfinished"/>
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
        <translation>Сбор информации о системе...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="111"/>
        <source>Partitions</source>
        <translation>Разделы</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="254"/>
        <source>Unsafe partition actions are enabled.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="257"/>
        <source>Partitioning is configured to &lt;b&gt;always&lt;/b&gt; fail.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="260"/>
        <source>No partitions will be changed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="300"/>
        <source>Current:</source>
        <translation>Сейчас:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="318"/>
        <source>After:</source>
        <translation>После:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="524"/>
        <source>No EFI system partition configured</source>
        <translation>Не настроен системный раздел EFI</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="528"/>
        <source>EFI system partition configured incorrectly</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="533"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;To configure an EFI system partition, go back and select or create a suitable filesystem.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="544"/>
        <source>The filesystem must be mounted on &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="550"/>
        <source>The filesystem must have type FAT32.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="558"/>
        <source>The filesystem must be at least %1 MiB in size.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="564"/>
        <source>The filesystem must have flag &lt;strong&gt;%1&lt;/strong&gt; set.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="570"/>
        <source>You can continue without setting up an EFI system partition but your system may fail to start.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="588"/>
        <source>Option to use GPT on BIOS</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="714"/>
        <source>There are no partitions to install on.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="621"/>
        <source>Boot partition not encrypted</source>
        <translation>Загрузочный раздел не зашифрован</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="589"/>
        <source>A GPT partition table is the best option for all systems. This installer supports such a setup for BIOS systems too.&lt;br/&gt;&lt;br/&gt;To configure a GPT partition table on BIOS, (if not done so already) go back and set the partition table to GPT, next create a 8 MB unformatted partition with the &lt;strong&gt;%2&lt;/strong&gt; flag enabled.&lt;br/&gt;&lt;br/&gt;An unformatted 8 MB partition is necessary to start %1 on a BIOS system with GPT.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="622"/>
        <source>A separate boot partition was set up together with an encrypted root partition, but the boot partition is not encrypted.&lt;br/&gt;&lt;br/&gt;There are security concerns with this kind of setup, because important system files are kept on an unencrypted partition.&lt;br/&gt;You may continue if you wish, but filesystem unlocking will happen later during system startup.&lt;br/&gt;To encrypt the boot partition, go back and recreate it, selecting &lt;strong&gt;Encrypt&lt;/strong&gt; in the partition creation window.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="713"/>
        <source>has at least one disk device available.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>PreserveFiles</name>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="53"/>
        <source>Saving files for later ...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="61"/>
        <source>No files configured to save for later.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="85"/>
        <source>Not all of the configured files could be preserved.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ProcessResult</name>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="309"/>
        <source>
There was no output from the command.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="310"/>
        <source>
Output:
</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="314"/>
        <source>External command crashed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="315"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; crashed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="320"/>
        <source>External command failed to start.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="321"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to start.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="325"/>
        <source>Internal error when starting command.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="326"/>
        <source>Bad parameters for process job call.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="330"/>
        <source>External command failed to finish.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="331"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to finish in %2 seconds.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="338"/>
        <source>External command finished with errors.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="339"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; finished with exit code %2.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="130"/>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="167"/>
        <source>Default</source>
        <translation>По умолчанию</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="40"/>
        <source>Unpartitioned space or unknown partition table</source>
        <translation>Неразмеченное пространство или неизвестная таблица разделов</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="33"/>
        <source>unknown</source>
        <translation>неизвестно</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="35"/>
        <source>extended</source>
        <translation>расширенный</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="37"/>
        <source>unformatted</source>
        <translation>не форматированный</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="39"/>
        <source>swap</source>
        <translation>раздел подкачки</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="44"/>
        <source>(no mount point)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/locale/Translation.cpp" line="151"/>
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
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="83"/>
        <source>Directory not found</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="84"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="94"/>
        <source>Could not create new random file &lt;pre&gt;%1&lt;/pre&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageModel.cpp" line="74"/>
        <source>No product</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageModel.cpp" line="82"/>
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
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="26"/>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="38"/>
        <source>Remove Volume Group named %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="32"/>
        <source>Remove Volume Group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="46"/>
        <source>The installer failed to remove a volume group named &apos;%1&apos;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ReplaceWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.ui" line="18"/>
        <source>Form</source>
        <translation>Форма</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="128"/>
        <source>Select where to install %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;this will delete all files on the selected partition.</source>
        <translation>Выберите место для установки %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Внимание: &lt;/font&gt;это удаоит все файлы на выбранном разделе.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="150"/>
        <source>The selected item does not appear to be a valid partition.</source>
        <translation>Выбранный элемент не является допустимым разделом.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="158"/>
        <source>%1 cannot be installed on empty space. Please select an existing partition.</source>
        <translation>%1 не может быть установлен на пустое пространство. Выберите существующий раздел.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="168"/>
        <source>%1 cannot be installed on an extended partition. Please select an existing primary or logical partition.</source>
        <translation>%1 не может быть установлен на расширенный раздел. Выберите имеющийся первичный или логический раздел.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="178"/>
        <source>%1 cannot be installed on this partition.</source>
        <translation>%1 не может быть установлен на этот раздел.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="184"/>
        <source>Data partition (%1)</source>
        <translation>Раздел данных (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="204"/>
        <source>Unknown system partition (%1)</source>
        <translation>Неизвестный системный раздел (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="208"/>
        <source>%1 system partition (%2)</source>
        <translation>%1 системный раздел (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="220"/>
        <source>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;The partition %1 is too small for %2. Please select a partition with capacity at least %3 GiB.</source>
        <translation>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Раздел %1 слишком мал для %2. Выберите раздел объёмом не менее %3 GiB.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="242"/>
        <source>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Системный раздел EFI не обнаружен в данной системе. Вернитесь и воспользуйтесь ручной разметкой чтобы установить %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="253"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="269"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="294"/>
        <source>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 will be installed on %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;all data on partition %2 will be lost.</source>
        <translation>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 будет установлен на %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Внимание: &lt;/font&gt;все данные раздела %2 будут утрачены.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="261"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>Системный раздел EFI %1 будет использоваться для старта %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="277"/>
        <source>EFI system partition:</source>
        <translation>EFI раздел системы:</translation>
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
        <translation>Изменить размер раздела %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="48"/>
        <source>Resize &lt;strong&gt;%2MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%3MiB&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="59"/>
        <source>Resizing %2MiB partition %1 to %3MiB.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="77"/>
        <source>The installer failed to resize partition %1 on disk &apos;%2&apos;.</source>
        <translation>Установщик не смог изменить размер раздела %1 на диске &apos;%2&apos;.</translation>
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
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="28"/>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="46"/>
        <source>Resize volume group named %1 from %2 to %3.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="37"/>
        <source>Resize volume group named &lt;strong&gt;%1&lt;/strong&gt; from &lt;strong&gt;%2&lt;/strong&gt; to &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="57"/>
        <source>The installer failed to resize a volume group named &apos;%1&apos;.</source>
        <translation type="unfinished"/>
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
        <translation>Поиск устройств хранения...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="68"/>
        <source>Partitioning</source>
        <translation>Разметка диска</translation>
    </message>
</context>
<context>
    <name>SetHostNameJob</name>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="36"/>
        <source>Set hostname %1</source>
        <translation>Задать hostname %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="43"/>
        <source>Set hostname &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Задать hostname &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="50"/>
        <source>Setting hostname %1.</source>
        <translation>Установка hostname %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="124"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="131"/>
        <source>Internal Error</source>
        <translation>Внутренняя ошибка</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="142"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="159"/>
        <source>Cannot write hostname to target system</source>
        <translation>Не возможно записать hostname в целевую систему</translation>
    </message>
</context>
<context>
    <name>SetKeyboardLayoutJob</name>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="55"/>
        <source>Set keyboard model to %1, layout to %2-%3</source>
        <translation>Установить модель клавиатуры %1, раскладки %2-%3</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="368"/>
        <source>Failed to write keyboard configuration for the virtual console.</source>
        <translation>Неудача записи конфигурации клавиатуры для виртуальной консоли.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="369"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="397"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="414"/>
        <source>Failed to write to %1</source>
        <translation>Ошибка чтения %1</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="396"/>
        <source>Failed to write keyboard configuration for X11.</source>
        <translation>Неудача записи конфигурации клавиатуры для X11.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="413"/>
        <source>Failed to write keyboard configuration to existing /etc/default directory.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>SetPartFlagsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="45"/>
        <source>Set flags on partition %1.</source>
        <translation>Установить флаги на раздел %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="51"/>
        <source>Set flags on %1MiB %2 partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="55"/>
        <source>Set flags on new partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="67"/>
        <source>Clear flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Очистить от флагов радел &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="73"/>
        <source>Clear flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="91"/>
        <source>Flag %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition as &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="116"/>
        <source>Clearing flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="135"/>
        <source>Setting flags &lt;strong&gt;%3&lt;/strong&gt; on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="77"/>
        <source>Clear flags on new partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="82"/>
        <source>Flag partition &lt;strong&gt;%1&lt;/strong&gt; as &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Флаг радела &lt;strong&gt;%1&lt;/strong&gt; как &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="98"/>
        <source>Flag new partition as &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="110"/>
        <source>Clearing flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Очистка от флагов раздела &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="121"/>
        <source>Clearing flags on new partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="126"/>
        <source>Setting flags &lt;strong&gt;%2&lt;/strong&gt; on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Установка флагов &lt;strong&gt;%2&lt;/strong&gt; на раздел &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="142"/>
        <source>Setting flags &lt;strong&gt;%1&lt;/strong&gt; on new partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="156"/>
        <source>The installer failed to set flags on partition %1.</source>
        <translation>Установщику не удалось установить флаги на раздел %1.</translation>
    </message>
</context>
<context>
    <name>SetPasswordJob</name>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="40"/>
        <source>Set password for user %1</source>
        <translation>Задать пароль для пользователя %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="47"/>
        <source>Setting password for user %1.</source>
        <translation>Установка пароля для пользователя %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="81"/>
        <source>Bad destination system path.</source>
        <translation>Плохой путь целевой системы.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="82"/>
        <source>rootMountPoint is %1</source>
        <translation>Точка монтирования root %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="88"/>
        <source>Cannot disable root account.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="89"/>
        <source>passwd terminated with error code %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="97"/>
        <source>Cannot set password for user %1.</source>
        <translation>Невозможно задать пароль для пользователя %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="98"/>
        <source>usermod terminated with error code %1.</source>
        <translation>Команда usermod прервана с кодом ошибки %1.</translation>
    </message>
</context>
<context>
    <name>SetTimezoneJob</name>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="34"/>
        <source>Set timezone to %1/%2</source>
        <translation>Установить часовой пояс на %1/%2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="62"/>
        <source>Cannot access selected timezone path.</source>
        <translation>Нет доступа к указанному часовому поясу.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="63"/>
        <source>Bad path: %1</source>
        <translation>Плохой путь: %1</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="71"/>
        <source>Cannot set timezone.</source>
        <translation>Невозможно установить часовой пояс.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="72"/>
        <source>Link creation failed, target: %1; link name: %2</source>
        <translation>Не удалось создать ссылку, цель: %1; имя ссылки: %2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="77"/>
        <source>Cannot set timezone,</source>
        <translation>Не установлен часовой пояс,</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="78"/>
        <source>Cannot open /etc/timezone for writing</source>
        <translation>Невозможно открыть /etc/timezone для записи</translation>
    </message>
</context>
<context>
    <name>SetupGroupsJob</name>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="182"/>
        <source>Preparing groups.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="194"/>
        <location filename="../src/modules/users/MiscJobs.cpp" line="199"/>
        <source>Could not create groups in target system</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="200"/>
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
        <location filename="../src/modules/users/MiscJobs.cpp" line="71"/>
        <source>Cannot chmod sudoers file.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="76"/>
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
        <translation type="unfinished"/>
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
        <location filename="../src/modules/usersq/UserInput.qml" line="53"/>
        <source>Pick your user name and credentials to login and perform admin tasks</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="67"/>
        <source>Virtual Keyboard</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="108"/>
        <source>What is your name?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="127"/>
        <source>Your Full Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="140"/>
        <source>What name do you want to use to log in?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="165"/>
        <source>Login Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="182"/>
        <source>If more than one person will use this computer, you can create multiple accounts after installation.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="197"/>
        <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="208"/>
        <source>root is not allowed as username.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="217"/>
        <source>What is the name of this computer?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="241"/>
        <source>Computer Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="256"/>
        <source>This name will be used if you make the computer visible to others on a network.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="271"/>
        <source>Only letters, numbers, underscore and hyphen are allowed, minimal of two characters.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="282"/>
        <source>localhost is not allowed as hostname.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="291"/>
        <source>Choose a password to keep your account safe.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="315"/>
        <source>Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="329"/>
        <source>Repeat Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="347"/>
        <source>Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="386"/>
        <source>Reuse user password as root password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="394"/>
        <source>Use the same password for the administrator account.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="407"/>
        <source>Choose a root password to keep your account safe.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="432"/>
        <source>Root Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="445"/>
        <source>Repeat Root Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="463"/>
        <source>Enter the same password twice, so that it can be checked for typing errors.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="500"/>
        <source>Log in automatically without asking for the password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="508"/>
        <source>Validate passwords quality</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="518"/>
        <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>UsersPage</name>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="190"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after setup.&lt;/small&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="196"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after installation.&lt;/small&gt;</source>
        <translation type="unfinished"/>
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
        <translation>Пользователи</translation>
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
        <translation>Форма</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="79"/>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="98"/>
        <source>Select application and system language</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="140"/>
        <source>Open donations website</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="143"/>
        <source>&amp;Donate</source>
        <translation>&amp;Пожертвовать</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="153"/>
        <source>Open help and support website</source>
        <translation type="unfinished"/>
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
        <translation>&amp;Примечания к выпуску</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="169"/>
        <source>&amp;Known issues</source>
        <translation>&amp;Известные проблемы</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="156"/>
        <source>&amp;Support</source>
        <translation>&amp;Поддержка</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.cpp" line="239"/>
        <source>About %1 setup</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.cpp" line="240"/>
        <source>About %1 installer</source>
        <translation>Об установщике %1</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="212"/>
        <source>%1 support</source>
        <translation>%1 поддержка</translation>
    </message>
</context>
<context>
    <name>WelcomeQmlViewStep</name>
    <message>
        <location filename="../src/modules/welcomeq/WelcomeQmlViewStep.cpp" line="40"/>
        <source>Welcome</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>WelcomeViewStep</name>
    <message>
        <location filename="../src/modules/welcome/WelcomeViewStep.cpp" line="46"/>
        <source>Welcome</source>
        <translation>Добро пожаловать</translation>
    </message>
</context>
<context>
    <name>ZfsJob</name>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="101"/>
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
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="257"/>
        <source>Failed to create zpool</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="329"/>
        <source>Failed to create dataset</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="330"/>
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
        <location filename="../src/calamares/CalamaresWindow.cpp" line="165"/>
        <source>Show debug information</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/calamares-sidebar.qml" line="89"/>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="148"/>
        <source>About</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="149"/>
        <source>Show information about Calamares</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/calamares-sidebar.qml" line="115"/>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="163"/>
        <source>Debug</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>finishedq</name>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="38"/>
        <source>Installation Completed</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="45"/>
        <source>%1 has been installed on your computer.&lt;br/&gt;
            You may now restart into your new system, or continue using the Live environment.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="67"/>
        <source>Close Installer</source>
        <translation>Закрыть установщик</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="74"/>
        <source>Restart System</source>
        <translation>Перезапустить систему</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="95"/>
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
        <translation>Установка завершена</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="43"/>
        <source>%1 has been installed on your computer.&lt;br/&gt;
            You may now restart your device.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="65"/>
        <source>Close</source>
        <translation>Закрыть</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="71"/>
        <source>Restart</source>
        <translation>Перезапустить</translation>
    </message>
</context>
<context>
    <name>keyboardq</name>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="61"/>
        <source>To activate keyboard preview, select a layout.</source>
        <translation>Чтобы активировать предпросмотр клавиатуры, выберите раскладку.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="144"/>
        <source>&lt;b&gt;Keyboard Model:&amp;nbsp;&amp;nbsp;&lt;/b&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="185"/>
        <source>Layout</source>
        <translation>Раскладка</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="258"/>
        <source>Variant</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="311"/>
        <source>Type here to test your keyboard</source>
        <translation>Печатайте тут для проверки клавиатуры</translation>
    </message>
</context>
<context>
    <name>localeq</name>
    <message>
        <location filename="../src/modules/localeq/localeq.qml" line="105"/>
        <location filename="../src/modules/localeq/localeq.qml" line="135"/>
        <source>Change</source>
        <translation>Изменить</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/localeq.qml" line="171"/>
        <source>&lt;h3&gt;Languages&lt;/h3&gt; &lt;/br&gt;
                            The system locale setting affects the language and character set for some command line user interface elements. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/localeq.qml" line="242"/>
        <source>&lt;h3&gt;Locales&lt;/h3&gt; &lt;/br&gt;
                                The system locale setting affects the numbers and dates format. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
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
        <translation>Назад</translation>
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
        <translation>LibreOffice</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="112"/>
        <source>If you don&apos;t want to install an office suite, just select No Office Suite. You can always add one (or more) later on your installed system as the need arrives.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="125"/>
        <source>No Office Suite</source>
        <translation>Без офисного пакета</translation>
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
        <translation>Pipewire</translation>
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
        <translation>Pulseaudio</translation>
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
        <location filename="../src/modules/packagechooserq/packagechooserq@licenseq.qml" line="26"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;
                    &lt;p&gt;In case non-free was selected, this installer will install proprietary packages that have&lt;br /&gt;
                    additional End User License Agreements (EULAs) attached to them.&lt;br /&gt;
                    Please review the End User License Agreements (EULAs).&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq@licenseq.qml" line="61"/>
        <source>I accept the terms and conditions above</source>
        <translation>Я принимаю условия и положения, описанные выше</translation>
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
        <translation>EFI</translation>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="85"/>
        <source>Select storage device</source>
        <translation>Выберите устройство хранения</translation>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="135"/>
        <source>GPT</source>
        <translation>GPT</translation>
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
        <translation>Параметры загрузчика:</translation>
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
        <translation>Назад</translation>
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
        <source>Qt/KDE specific internet applications include the Falkon web-browser, KDE Connect for device Synchronization, Kaidan for chat  and NeoChat, the Matrix client.</source>
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
        <translation>Возможно использование KaOS, будет для Вас приятным опытом.</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="96"/>
        <source>Don&apos;t hesitate to give your opinion about KaOS in the Forum</source>
        <translation type="unfinished"/>
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
    <name>welcomeq</name>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="36"/>
        <source>&lt;h3&gt;Welcome to the %1 &lt;quote&gt;%2&lt;/quote&gt; installer&lt;/h3&gt;
            &lt;p&gt;This program will ask you some questions and set up %1 on your computer.&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="127"/>
        <source>Current Language:&amp;nbsp;</source>
        <translation>Текущий язык:&amp;nbsp;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="155"/>
        <source>Select Language</source>
        <translation>Выберите язык</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="194"/>
        <source>Known Issues</source>
        <translation>Известные проблемы</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="216"/>
        <source>Release Notes</source>
        <translation>Примечания к выпуску</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="240"/>
        <source>Donate</source>
        <translation>Пожертвовать</translation>
    </message>
</context>
</TS>