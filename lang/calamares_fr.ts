<?xml version="1.0" ?><!DOCTYPE TS><TS language="fr" version="2.1">
<context>
    <name>BootInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="71"/>
        <source>The &lt;strong&gt;boot environment&lt;/strong&gt; of this system.&lt;br&gt;&lt;br&gt;Older x86 systems only support &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Modern systems usually use &lt;strong&gt;EFI&lt;/strong&gt;, but may also show up as BIOS if started in compatibility mode.</source>
        <translation>L’&lt;strong&gt;environnement de démarrage&lt;/strong&gt; de ce système.&lt;br&gt;&lt;br&gt;Les vieux systèmes x86 supportent uniquement &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Les systèmes modernes utilisent généralement &lt;strong&gt;EFI&lt;/strong&gt; mais peuvent aussi se présenter comme BIOS si l’environnement de démarrage fonctionne en mode compatibilité.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="81"/>
        <source>This system was started with an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from an EFI environment, this installer must deploy a boot loader application, like &lt;strong&gt;GRUB&lt;/strong&gt; or &lt;strong&gt;systemd-boot&lt;/strong&gt; on an &lt;strong&gt;EFI System Partition&lt;/strong&gt;. This is automatic, unless you choose manual partitioning, in which case you must choose it or create it on your own.</source>
        <translation>Ce système a été démarré avec un environnement de démarrage &lt;strong&gt;EFI&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;Pour démarrer depuis une environnement de démarrage EFI, cet installateur doit déployer une application de démarrage, comme &lt;strong&gt;GRUB&lt;/strong&gt; ou &lt;strong&gt;systemd-boot&lt;/strong&gt; sur une &lt;strong&gt;partition système EFI&lt;/strong&gt;. C’est automatique, à moins que vous ne choisissiez le partitionnement manuel, et dans ce cas, vous devez le choisir ou le créer.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="93"/>
        <source>This system was started with a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from a BIOS environment, this installer must install a boot loader, like &lt;strong&gt;GRUB&lt;/strong&gt;, either at the beginning of a partition or on the &lt;strong&gt;Master Boot Record&lt;/strong&gt; near the beginning of the partition table (preferred). This is automatic, unless you choose manual partitioning, in which case you must set it up on your own.</source>
        <translation>Ce système a été démarré avec un environnement de démarrage &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;Pour démarrer depuis un environnement BIOS, cet installateur doit installer un chargeur de démarrage, comme &lt;strong&gt;GRUB&lt;/strong&gt;, soit au début de la partition, soit sur le &lt;strong&gt;Master Boot Record&lt;/strong&gt; au tout début à côté de la table de partitions (préféré). C’est automatique, à moins que vous ne choisissiez le partitionnement manuel, et dans ce cas, vous devez le choisir ou le créer.</translation>
    </message>
</context>
<context>
    <name>BootLoaderModel</name>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="70"/>
        <source>Master Boot Record of %1</source>
        <translation>Master Boot Record de %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="104"/>
        <source>Boot Partition</source>
        <translation>Partition de démarrage</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="109"/>
        <source>System Partition</source>
        <translation>Partition Système</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="139"/>
        <source>Do not install a boot loader</source>
        <translation>Ne pas installer le chargeur de démarrage</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="156"/>
        <source>%1 (%2)</source>
        <translation>%1 (%2)</translation>
    </message>
</context>
<context>
    <name>Calamares::BlankViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/BlankViewStep.cpp" line="70"/>
        <source>Blank Page</source>
        <translation>Page vide</translation>
    </message>
</context>
<context>
    <name>Calamares::DebugWindow</name>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="14"/>
        <source>Form</source>
        <translation>Form</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="24"/>
        <source>GlobalStorage</source>
        <translation>GlobalStorage</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="34"/>
        <source>JobQueue</source>
        <translation>JobQueue</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="44"/>
        <source>Modules</source>
        <translation>Modules</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="57"/>
        <source>Type:</source>
        <translation>Type :</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="64"/>
        <location filename="../src/calamares/DebugWindow.ui" line="78"/>
        <source>none</source>
        <translation>aucun</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="71"/>
        <source>Interface:</source>
        <translation>Interface :</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="93"/>
        <source>Tools</source>
        <translation>Outils</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="106"/>
        <source>Reload Stylesheet</source>
        <translation>Rafraîchir la feuille de styles</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="113"/>
        <source>Widget Tree</source>
        <translation>Arborescence des widgets</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.cpp" line="231"/>
        <source>Debug information</source>
        <translation>Informations de débogage</translation>
    </message>
</context>
<context>
    <name>Calamares::ExecutionViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="92"/>
        <source>Set up</source>
        <translation>Installer</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="92"/>
        <source>Install</source>
        <translation>Installer</translation>
    </message>
</context>
<context>
    <name>Calamares::FailJob</name>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="39"/>
        <source>Job failed (%1)</source>
        <translation>La tâche a échoué (%1)</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="40"/>
        <source>Programmed job failure was explicitly requested.</source>
        <translation>L’échec de la tâche programmée a été explicitement demandée.</translation>
    </message>
</context>
<context>
    <name>Calamares::JobThread</name>
    <message>
        <location filename="../src/libcalamares/JobQueue.cpp" line="118"/>
        <source>Done</source>
        <translation>Fait</translation>
    </message>
</context>
<context>
    <name>Calamares::NamedJob</name>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="27"/>
        <source>Example job (%1)</source>
        <translation>Tâche d’exemple (%1)</translation>
    </message>
</context>
<context>
    <name>Calamares::ProcessJob</name>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="52"/>
        <source>Run command &apos;%1&apos; in target system.</source>
        <translation>Exécuter la commande &apos;%1&apos; sur le système cible.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="52"/>
        <source> Run command &apos;%1&apos;.</source>
        <translation>Exécuter la commande &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="59"/>
        <source>Running command %1 %2</source>
        <translation>Exécution de la commande %1 %2</translation>
    </message>
</context>
<context>
    <name>Calamares::PythonJob</name>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="208"/>
        <source>Running %1 operation.</source>
        <translation>Opération %1 lancée.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="225"/>
        <source>Bad working directory path</source>
        <translation>Chemin du répertoire de travail invalide</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="226"/>
        <source>Working directory %1 for python job %2 is not readable.</source>
        <translation>Le répertoire de travail %1 pour le job python %2 n&apos;est pas accessible en lecture.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="232"/>
        <source>Bad main script file</source>
        <translation>Fichier de script principal invalide</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="233"/>
        <source>Main script file %1 for python job %2 is not readable.</source>
        <translation>Le fichier de script principal %1 pour la tâche python %2 n&apos;est pas accessible en lecture.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="311"/>
        <source>Boost.Python error in job &quot;%1&quot;.</source>
        <translation>Erreur Boost.Python pour le job &quot;%1&quot;.</translation>
    </message>
</context>
<context>
    <name>Calamares::QmlViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="92"/>
        <source>Loading ...</source>
        <translation>Chargement…</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="111"/>
        <source>QML Step &lt;i&gt;%1&lt;/i&gt;.</source>
        <translation>Étape QML&lt;i&gt;%1&lt;/i&gt;.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="319"/>
        <source>Loading failed.</source>
        <translation>Le chargement a échoué.</translation>
    </message>
</context>
<context>
    <name>Calamares::RequirementsChecker</name>
    <message numerus="yes">
        <location filename="../src/libcalamaresui/modulesystem/RequirementsChecker.cpp" line="166"/>
        <source>Waiting for %n module(s).</source>
        <translation><numerusform>En attente de %n module(s).</numerusform><numerusform>En attente de %n module(s).</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/libcalamaresui/modulesystem/RequirementsChecker.cpp" line="167"/>
        <source>(%n second(s))</source>
        <translation><numerusform>(%n seconde(s))</numerusform><numerusform>(%n seconde(s))</numerusform></translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/modulesystem/RequirementsChecker.cpp" line="172"/>
        <source>System-requirements checking is complete.</source>
        <translation>La vérification de la configuration requise est complète.</translation>
    </message>
</context>
<context>
    <name>Calamares::ViewManager</name>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="92"/>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="410"/>
        <source>&amp;Back</source>
        <translation>&amp;Précédent</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="94"/>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="405"/>
        <source>&amp;Next</source>
        <translation>&amp;Suivant</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="96"/>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="430"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuler</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="394"/>
        <source>Cancel setup without changing the system.</source>
        <translation>Annuler la configuration sans changer le système.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="395"/>
        <source>Cancel installation without changing the system.</source>
        <translation>Annuler l’installation sans changer le système.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="199"/>
        <source>Setup Failed</source>
        <translation>L’installation a échoué</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="200"/>
        <source>Would you like to paste the install log to the web?</source>
        <translation>Souhaitez-vous copier le log d’installation sur le Web ?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="238"/>
        <source>Install Log Paste URL</source>
        <translation>URL de la copie du log d’installation</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="241"/>
        <source>The upload was unsuccessful. No web-paste was done.</source>
        <translation>Le téléversement n’a pas réussi. Aucune copie web n’a été effectuée.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="257"/>
        <source>Calamares Initialization Failed</source>
        <translation>L’initialisation de Calamares a échoué</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="258"/>
        <source>%1 can not be installed. Calamares was unable to load all of the configured modules. This is a problem with the way Calamares is being used by the distribution.</source>
        <translation>%1 ne peut être installé. Calamares n’a pu charger tous les modules configurés. Ceci est un problème lié à la façon dont la distribution utilise Calamares.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="264"/>
        <source>&lt;br/&gt;The following modules could not be loaded:</source>
        <translation>&lt;br/&gt;Les modules suivants ne peuvent être chargés :</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="325"/>
        <source>Continue with installation?</source>
        <translation>Poursuivre l’installation ?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="327"/>
        <source>The %1 setup program is about to make changes to your disk in order to set up %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation>L’installateur %1 s’apprête à effectuer des changements sur votre disque pour installer %2.&lt;br/&gt;&lt;strong&gt;Vous ne pourrez pas annuler ces changements.&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="333"/>
        <source>&amp;Set up now</source>
        <translation>&amp;Commencer l’installation maintenant</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="389"/>
        <source>&amp;Set up</source>
        <translation>&amp;Installation</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="389"/>
        <source>&amp;Install</source>
        <translation>&amp;Installer</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="391"/>
        <source>Setup is complete. Close the setup program.</source>
        <translation>L’installation est terminée. Fermer le programme d’installation.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="490"/>
        <source>Cancel setup?</source>
        <translation>Annuler l’installation ?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="490"/>
        <source>Cancel installation?</source>
        <translation>Annuler l&apos;installation ?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="491"/>
        <source>Do you really want to cancel the current setup process?
The setup program will quit and all changes will be lost.</source>
        <translation>Voulez-vous vraiment annuler le processus d’installation en cours ? Le programme d’installation sera fermé et tous vos changements seront perdus.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="493"/>
        <source>Do you really want to cancel the current install process?
The installer will quit and all changes will be lost.</source>
        <translation>Voulez-vous réellement annuler l&apos;installation en cours ?
L&apos;installateur va fermer et tous les changements seront perdus.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="220"/>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="497"/>
        <source>&amp;Yes</source>
        <translation>&amp;Oui</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="221"/>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="498"/>
        <source>&amp;No</source>
        <translation>&amp;Non</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="227"/>
        <source>&amp;Close</source>
        <translation>&amp;Fermer</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="325"/>
        <source>Continue with setup?</source>
        <translation>Continuer avec cette configuration ?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="330"/>
        <source>The %1 installer is about to make changes to your disk in order to install %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation>L’installateur %1 s’apprête à effectuer des changement sur votre disque pour installer %2.&lt;br/&gt;&lt;strong&gt;Vous ne pourrez pas annuler ces changements.&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="333"/>
        <source>&amp;Install now</source>
        <translation>&amp;Installer maintenant</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="340"/>
        <source>Go &amp;back</source>
        <translation>&amp;Revenir en arrière</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="415"/>
        <source>&amp;Done</source>
        <translation>&amp;Terminé</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="392"/>
        <source>The installation is complete. Close the installer.</source>
        <translation>L’installation est complète. Vous pouvez fermer l’installateur.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="213"/>
        <source>Error</source>
        <translation>Erreur</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="199"/>
        <source>Installation Failed</source>
        <translation>Installation échouée</translation>
    </message>
</context>
<context>
    <name>CalamaresPython::Helper</name>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="308"/>
        <source>Unknown exception type</source>
        <translation>Type d&apos;exception inconnu</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="326"/>
        <source>unparseable Python error</source>
        <translation>Erreur Python non analysable</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="370"/>
        <source>unparseable Python traceback</source>
        <translation>Traçage Python non exploitable</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="377"/>
        <source>Unfetchable Python error.</source>
        <translation>Erreur Python non rapportable.</translation>
    </message>
</context>
<context>
    <name>CalamaresUtils</name>
    <message>
        <location filename="../src/libcalamaresui/utils/Paste.cpp" line="34"/>
        <source>Install log posted to:
%1</source>
        <translation>Log d’installation posté sur :
%1</translation>
    </message>
</context>
<context>
    <name>CalamaresWindow</name>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="72"/>
        <source>%1 Setup Program</source>
        <translation>Programme d’installation %1</translation>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="73"/>
        <source>%1 Installer</source>
        <translation>Installateur %1</translation>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="142"/>
        <source>Show debug information</source>
        <translation>Afficher les informations de débogage</translation>
    </message>
</context>
<context>
    <name>CheckerContainer</name>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerContainer.cpp" line="45"/>
        <source>Gathering system information...</source>
        <translation>Récupération des informations système…</translation>
    </message>
</context>
<context>
    <name>ChoicePage</name>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="154"/>
        <source>After:</source>
        <translation>Après :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="969"/>
        <source>%1 will be shrunk to %2MiB and a new %3MiB partition will be created for %4.</source>
        <translation>%1 va être rétrécie à %2Mio et une nouvolle partition de %3Mio sera créée pour %4.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1271"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1309"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1332"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1358"/>
        <source>&lt;strong&gt;Erase disk&lt;/strong&gt;&lt;br/&gt;This will &lt;font color=&quot;red&quot;&gt;delete&lt;/font&gt; all data currently present on the selected storage device.</source>
        <translation>&lt;strong&gt;Effacer le disque&lt;/strong&gt;&lt;br/&gt;Cela va&lt;font color=&quot;red&quot;&gt;supprimer&lt;/font&gt; toutes les données présentes dans le périphérique de stockage.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1275"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1305"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1328"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1354"/>
        <source>&lt;strong&gt;Install alongside&lt;/strong&gt;&lt;br/&gt;The installer will shrink a partition to make room for %1.</source>
        <translation>&lt;strong&gt;Installer à côté&lt;/strong&gt;&lt;br/&gt;L’installateur va rétrécir le volume pour faire de la place pour %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1279"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1314"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1336"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1362"/>
        <source>&lt;strong&gt;Replace a partition&lt;/strong&gt;&lt;br/&gt;Replaces a partition with %1.</source>
        <translation>&lt;strong&gt;Remplacer une partition&lt;/strong&gt;&lt;br/&gt; Remplace une partition avec %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1026"/>
        <source>Boot loader location:</source>
        <translation>Emplacement du chargeur de démarrage :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="152"/>
        <source>Select storage de&amp;vice:</source>
        <translation>Sélectionner le pé&amp;riphérique de stockage :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="153"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="953"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="998"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1084"/>
        <source>Current:</source>
        <translation>Actuel :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="330"/>
        <source>&lt;strong&gt;Manual partitioning&lt;/strong&gt;&lt;br/&gt;You can create or resize partitions yourself. Having a GPT partition table and &lt;strong&gt;fat32 512Mb /boot partition is a must for UEFI installs&lt;/strong&gt;, either use an existing without formatting or create one.</source>
        <translation>&lt;strong&gt;Partitionnement manuel&lt;/strong&gt;&lt;br/&gt;Vous pouvez créer ou redimensionner les partitions vous-même. En ayant une table de partitions GPT et &lt;strong&gt;une partition /boot fat32 512Mo est l’idéal pour les installations UEFI&lt;/strong&gt;, ou bien pour utiliser une partition existante sans formater ou encore en créer une.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="829"/>
        <source>Reuse %1 as home partition for %2.</source>
        <translation>Utiliser %1 comme partition home pour %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="954"/>
        <source>&lt;strong&gt;Select a partition to shrink, then drag the bottom bar to resize&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Sélectionner la partition à rétrécir, puis glisser sur la barre du bas pour modifier la taille&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1075"/>
        <source>&lt;strong&gt;Select a partition to install on&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Sélectionner la partition d’installation&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1131"/>
        <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>Aucune partition système EFI n’a pu être trouvée sur ce système. Veuillez recommencer et utiliser le partitionnement manuel pour configurer %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1140"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>La partition système EFI %1 sera utilisée pour démarrer %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1148"/>
        <source>EFI system partition:</source>
        <translation>Partition système EFI :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1266"/>
        <source>This storage device does not seem to have an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Ce périphérique de stockage ne semble pas avoir de système d’exploitation. Que voulez-vous faire ?&lt;br/&gt;Vous pourrez vérifier et confirmer vos choix avant que les changements soient appliqués sur ce périphérique.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1299"/>
        <source>This storage device has %1 on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Ce périphérique de stockage contient %1. Que voulez-vous faire ?&lt;br/&gt;Vous pourrez vérifier et confirmer vos choix avant que les changements soient appliqués sur ce périphérique.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1323"/>
        <source>This storage device already has an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Ce périphérique de stockage contient un système d’exploitation. Que voulez-vous faire ?&lt;br/&gt;Vous pourrez vérifier et confirmer vos choix avant que les changements soient appliqués sur ce périphérique.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1349"/>
        <source>This storage device has multiple operating systems on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Ce périphérique de stockage a plusieurs systèmes d’exploitation. Que voulez-vous faire ?&lt;br/&gt;Vous pourrez vérifier et confirmer vos choix avant que les changements soient appliqués sur ce périphérique.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1503"/>
        <source>No Swap</source>
        <translation>Pas de Swap</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1508"/>
        <source>Reuse Swap</source>
        <translation>Réutiliser la Swap</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1511"/>
        <source>Swap (no Hibernate)</source>
        <translation>Swap (pas d’hibernation)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1514"/>
        <source>Swap (with Hibernate)</source>
        <translation>Swap (avec hibernation)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1517"/>
        <source>Swap to file</source>
        <translation>Swap dans un fichier</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.ui" line="14"/>
        <source>Form</source>
        <translation>Formulaire</translation>
    </message>
</context>
<context>
    <name>ClearMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="47"/>
        <source>Clear mounts for partitioning operations on %1</source>
        <translation>Effacer les montages pour les opérations de partitionnement sur %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="55"/>
        <source>Clearing mounts for partitioning operations on %1.</source>
        <translation>Effacement des montages pour les opérations de partitionnement sur %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="192"/>
        <source>Cleared all mounts for %1</source>
        <translation>Tous les les partitions sont démontées pour %1</translation>
    </message>
</context>
<context>
    <name>ClearTempMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="42"/>
        <source>Clear all temporary mounts.</source>
        <translation>Effacer tous les montages temporaires.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="49"/>
        <source>Clearing all temporary mounts.</source>
        <translation>Effacement tous les montages temporaires.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="60"/>
        <source>Cannot get list of temporary mounts.</source>
        <translation>Impossible de récupérer la liste des points de montage temporaires.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="99"/>
        <source>Cleared all temporary mounts.</source>
        <translation>Tous les montages temporaires ont été effacés.</translation>
    </message>
</context>
<context>
    <name>CommandList</name>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="150"/>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="163"/>
        <source>Could not run command.</source>
        <translation>Impossible de lancer la commande.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="151"/>
        <source>The command runs in the host environment and needs to know the root path, but no rootMountPoint is defined.</source>
        <translation>La commande s’exécute dans l’environnement hôte et doit connaître le chemin racine, mais aucun point de montage racine n’est défini.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="164"/>
        <source>The command needs to know the user&apos;s name, but no username is defined.</source>
        <translation>La commande doit connaître le nom de l’utilisateur, mais aucun nom d’utilisateur n&apos;est défini.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="14"/>
        <source>Create a Partition</source>
        <translation>Créer une partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="48"/>
        <source> MiB</source>
        <translation>Mio</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="55"/>
        <source>Partition &amp;Type:</source>
        <translation>Type de partition :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="67"/>
        <source>&amp;Primary</source>
        <translation>&amp;Primaire</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="77"/>
        <source>E&amp;xtended</source>
        <translation>É&amp;tendue</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="119"/>
        <source>Fi&amp;le System:</source>
        <translation>Système de Fi&amp;chiers :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="151"/>
        <source>LVM LV name</source>
        <translation>Nom du LVM LV</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="188"/>
        <source>Flags:</source>
        <translation>Drapeaux :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="161"/>
        <source>&amp;Mount Point:</source>
        <translation>Point de &amp;Montage :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="38"/>
        <source>Si&amp;ze:</source>
        <translation>Ta&amp;ille :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="72"/>
        <source>En&amp;crypt</source>
        <translation>En&amp;crypter</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="151"/>
        <source>Logical</source>
        <translation>Logique</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="156"/>
        <source>Primary</source>
        <translation>Primaire</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="173"/>
        <source>GPT</source>
        <translation>GPT</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="262"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation>Le point de montage est déjà utilisé. Veuillez en choisir un autre.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="44"/>
        <source>Create new %2MiB partition on %4 (%3) with file system %1.</source>
        <translation>Créer une nouvelle partition de %2Mio sur %4 (%3) avec un système de fichier %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="55"/>
        <source>Create new &lt;strong&gt;%2MiB&lt;/strong&gt; partition on &lt;strong&gt;%4&lt;/strong&gt; (%3) with file system &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Créer une nouvelle partition de &lt;strong&gt;%2Mio&lt;/strong&gt; sur &lt;strong&gt;%4&lt;/strong&gt; (%3) avec une système de fichier &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="67"/>
        <source>Creating new %1 partition on %2.</source>
        <translation>Création d’une nouvelle table de partitions %1 sur %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="79"/>
        <source>The installer failed to create partition on disk &apos;%1&apos;.</source>
        <translation>Le programme d&apos;installation n&apos;a pu créer la partition sur le disque &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="20"/>
        <source>Create Partition Table</source>
        <translation>Créer une table de partitionnement</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="39"/>
        <source>Creating a new partition table will delete all existing data on the disk.</source>
        <translation>Créer une nouvelle table de partitionnement supprimera toutes les données existantes sur le disque.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="65"/>
        <source>What kind of partition table do you want to create?</source>
        <translation>Quel type de table de partitionnement voulez-vous créer ?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="72"/>
        <source>Master Boot Record (MBR)</source>
        <translation>Master Boot Record (MBR)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="82"/>
        <source>GUID Partition Table (GPT)</source>
        <translation>Table de partitionnement GUID (GPT)</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="47"/>
        <source>Create new %1 partition table on %2.</source>
        <translation>Créer une nouvelle table de partitions %1 sur %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="54"/>
        <source>Create new &lt;strong&gt;%1&lt;/strong&gt; partition table on &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>Créer une nouvelle table de partitions &lt;strong&gt;%1&lt;/strong&gt; sur &lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="64"/>
        <source>Creating new %1 partition table on %2.</source>
        <translation>Création d’une nouvelle table de partitions %1 sur %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="82"/>
        <source>The installer failed to create a partition table on %1.</source>
        <translation>Le programme d&apos;installation n&apos;a pu créer la table de partitionnement sur le disque %1.</translation>
    </message>
</context>
<context>
    <name>CreateUserJob</name>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="51"/>
        <source>Create user %1</source>
        <translation>Créer l&apos;utilisateur %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="58"/>
        <source>Create user &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Créer l’utilisateur &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="65"/>
        <source>Creating user %1.</source>
        <translation>Création de l’utilisateur %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="83"/>
        <source>Sudoers dir is not writable.</source>
        <translation>Le répertoire Superutilisateur n&apos;est pas inscriptible.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="89"/>
        <source>Cannot create sudoers file for writing.</source>
        <translation>Impossible de créer le fichier sudoers en écriture.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="98"/>
        <source>Cannot chmod sudoers file.</source>
        <translation>Impossible d&apos;exécuter chmod sur le fichier sudoers.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="107"/>
        <source>Cannot open groups file for reading.</source>
        <translation>Impossible d&apos;ouvrir le fichier groups en lecture.</translation>
    </message>
</context>
<context>
    <name>CreateVolumeGroupDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreateVolumeGroupDialog.cpp" line="37"/>
        <source>Create Volume Group</source>
        <translation>Créer un groupe de volumes</translation>
    </message>
</context>
<context>
    <name>CreateVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="38"/>
        <source>Create new volume group named %1.</source>
        <translation>Créer un nouveau groupe de volumes nommé %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="45"/>
        <source>Create new volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Créer un nouveau groupe de volumes nommé &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="52"/>
        <source>Creating new volume group named %1.</source>
        <translation>Création d’un nouveau groupe de volumes nommé %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="65"/>
        <source>The installer failed to create a volume group named &apos;%1&apos;.</source>
        <translation>Le programme d’installation n’a pu créer un groupe de volumes nommé &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>DeactivateVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="34"/>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="48"/>
        <source>Deactivate volume group named %1.</source>
        <translation>Désactiver le groupe de volumes nommé %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="41"/>
        <source>Deactivate volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Désactiver le groupe de volumes nommé &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="61"/>
        <source>The installer failed to deactivate a volume group named %1.</source>
        <translation>Le programme d’installation n’a pu désactiver un groupe de volumes nommé &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>DeletePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="40"/>
        <source>Delete partition %1.</source>
        <translation>Effacer la partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="48"/>
        <source>Delete partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Effacer la partition &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="56"/>
        <source>Deleting partition %1.</source>
        <translation>Suppression de la partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="68"/>
        <source>The installer failed to delete partition %1.</source>
        <translation>Le programme d&apos;installation n&apos;a pu supprimer la partition %1.</translation>
    </message>
</context>
<context>
    <name>DeviceInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="151"/>
        <source>The type of &lt;strong&gt;partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The only way to change the partition table type is to erase and recreate the partition table from scratch, which destroys all data on the storage device.&lt;br&gt;This installer will keep the current partition table unless you explicitly choose otherwise.&lt;br&gt;If unsure, on modern systems GPT is preferred.</source>
        <translation>Le type de &lt;strong&gt;table de partitions&lt;/strong&gt; actuellement présent sur le périphérique de stockage sélectionné.&lt;br&gt;&lt;br&gt;La seule façon de changer la table de partitions et de l’écraser et de la recréer de zéro, ce qui va détruire toutes les données du périphérique.&lt;br&gt;Cet installateur va conserver la table de partitions actuelle à moins que vous ne choisissiez autrement.&lt;br&gt;Si vous n’êtes pas sûr, GPT est un bon choix pour les systèmes modernes.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="108"/>
        <source>This device has a &lt;strong&gt;%1&lt;/strong&gt; partition table.</source>
        <translation>Ce périphérique a une table de partitions &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="115"/>
        <source>This is a &lt;strong&gt;loop&lt;/strong&gt; device.&lt;br&gt;&lt;br&gt;It is a pseudo-device with no partition table that makes a file accessible as a block device. This kind of setup usually only contains a single filesystem.</source>
        <translation>Ceci est un périphérique &lt;strong&gt;loop&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;C’est un pseudo-périphérique sans table de partitions qui permet d’accéder à un fichier comme un périphérique physique. Ce type de configuration contient généralement qu’un seul système de fichiers.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="122"/>
        <source>This installer &lt;strong&gt;cannot detect a partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The device either has no partition table, or the partition table is corrupted or of an unknown type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</source>
        <translation>Cet installateur &lt;strong&gt;ne peut détecter de table de partitions&lt;/strong&gt; sur le périphérique de stockage sélectionné.&lt;br&gt;&lt;br&gt;Soit ce périphérique n’a pas de table de partitions, soit la table de partitions est corrompues ou d’un type inconnu.&lt;br&gt;Cet installateur peut créer une nouvelle table de partitions pour vous, soit automatiquement, soit via la page de partitionnement manuel.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="132"/>
        <source>&lt;br&gt;&lt;br&gt;This is the recommended partition table type for modern systems which start from an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.</source>
        <translation>&lt;br&gt;&lt;br&gt;C’est le type de table de partitions recommandé pour les systèmes modernes qui démarrent depuis un environnement de démarrage &lt;strong&gt;EFI&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="138"/>
        <source>&lt;br&gt;&lt;br&gt;This partition table type is only advisable on older systems which start from a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment. GPT is recommended in most other cases.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Warning:&lt;/strong&gt; the MBR partition table is an obsolete MS-DOS era standard.&lt;br&gt;Only 4 &lt;em&gt;primary&lt;/em&gt; partitions may be created, and of those 4, one can be an &lt;em&gt;extended&lt;/em&gt; partition, which may in turn contain many &lt;em&gt;logical&lt;/em&gt; partitions.</source>
        <translation>&lt;br&gt;&lt;br&gt;Ce type de table de partitions est nécessaire uniquement sur les vieux systèmes démarrant depuis un environnement &lt;strong&gt;BIOS&lt;/strong&gt;. Pour la plupart des usages, GPT devrait être préféré.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Attention :&lt;/strong&gt; la table de partitions MBR est un stantard obsolète.&lt;br&gt;Seules 4 partitions &lt;em&gt;primaires&lt;/em&gt; peuvent être créées, et parmi ces 4, une peut être une partition &lt;em&gt;étendue&lt;/em&gt; qui peut elle-même contenir de nombreuses partitions &lt;em&gt;logiques&lt;/em&gt;.</translation>
    </message>
</context>
<context>
    <name>DeviceModel</name>
    <message>
        <location filename="../src/modules/partition/core/DeviceModel.cpp" line="92"/>
        <source>%1 - %2 (%3)</source>
        <extracomment>device[name] - size[number] (device-node[name])</extracomment>
        <translation>%1 - %2 (%3)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/DeviceModel.cpp" line="103"/>
        <source>%1 - (%2)</source>
        <extracomment>device[name] - (device-node[name])</extracomment>
        <translation>%1 - (%2)</translation>
    </message>
</context>
<context>
    <name>EditExistingPartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="20"/>
        <source>Edit Existing Partition</source>
        <translation>Éditer une partition existante</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="50"/>
        <source>Content:</source>
        <translation>Contenu :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="60"/>
        <source>&amp;Keep</source>
        <translation>&amp;Garder</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="70"/>
        <source>Format</source>
        <translation>Formater</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="89"/>
        <source>Warning: Formatting the partition will erase all existing data.</source>
        <translation>Attention : le formatage de cette partition effacera toutes les données existantes.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="99"/>
        <source>&amp;Mount Point:</source>
        <translation>Point de &amp;Montage :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="119"/>
        <source>Si&amp;ze:</source>
        <translation>Ta&amp;ille :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="129"/>
        <source> MiB</source>
        <translation>Mio</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="136"/>
        <source>Fi&amp;le System:</source>
        <translation>Système de Fi&amp;chiers :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="149"/>
        <source>Flags:</source>
        <translation>Drapeaux :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.cpp" line="269"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation>Le point de montage est déjà utilisé. Veuillez en choisir un autre.</translation>
    </message>
</context>
<context>
    <name>EncryptWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="14"/>
        <source>Form</source>
        <translation>Formulaire</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="32"/>
        <source>En&amp;crypt system</source>
        <translation>Enc&amp;rypter le système</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="42"/>
        <source>Passphrase</source>
        <translation>Phrase secrète</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="52"/>
        <source>Confirm passphrase</source>
        <translation>Confirmer la phrase secrète</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="151"/>
        <source>Please enter the same passphrase in both boxes.</source>
        <translation>Veuillez saisir la même phrase secrète dans les deux boîtes.</translation>
    </message>
</context>
<context>
    <name>FillGlobalStorageJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="130"/>
        <source>Set partition information</source>
        <translation>Configurer les informations de la partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="153"/>
        <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition.</source>
        <translation>Installer %1 sur une &lt;strong&gt;nouvelle&lt;/strong&gt; partition système %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="157"/>
        <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Configurer une &lt;strong&gt;nouvelle&lt;/strong&gt; partition %2 avec un point de montage &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="165"/>
        <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Installer %2 sur %3 avec la partition système &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="170"/>
        <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Configurer la partition %3 &lt;strong&gt;%1&lt;/strong&gt; avec le point de montage &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="182"/>
        <source>Install boot loader on &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Installer le chargeur de démarrage sur &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="192"/>
        <source>Setting up mount points.</source>
        <translation>Configuration des points de montage.</translation>
    </message>
</context>
<context>
    <name>FinishedPage</name>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="14"/>
        <source>Form</source>
        <translation>Formulaire</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="95"/>
        <source>&lt;Restart checkbox tooltip&gt;</source>
        <translation>&lt;Restart checkbox tooltip&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="98"/>
        <source>&amp;Restart now</source>
        <translation>&amp;Redémarrer maintenant</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="54"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been set up on your computer.&lt;br/&gt;You may now start using your new system.</source>
        <translation>&lt;h1&gt;Installation terminée&lt;/h1&gt;&lt;br/&gt;%1 a été installé sur votre ordinateur.&lt;br/&gt;Vous pouvez redémarrer maintenant sur votre nouveau système.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="58"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot;font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the setup program.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Si cette case est cochée, votre système redémarrera immédiatement lorsque vous cliquerez sur le bouton &lt;span style=&quot; font-style:italic;&quot;&gt;Terminé&lt;/span&gt; ou que vous fermerez l’installateur.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="66"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been installed on your computer.&lt;br/&gt;You may now restart into your new system, or continue using the %2 Live environment.</source>
        <translation>&lt;h1&gt;Installation terminée&lt;/h1&gt;&lt;br/&gt;%1 a été installé sur votre ordinateur.&lt;br/&gt;Vous pouvez redémarrer maintenant sur votre nouveau système, ou continuer à utiliser l&apos;environnement Livre %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="71"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot;font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the installer.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Si cette case est cochée, votre système redémarrera immédiatement lorsque vous cliquerez sur le bouton &lt;span style=&quot;font-style:italic;&quot;&gt;Terminé&lt;/span&gt; ou que vous fermerez l’installateur.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="133"/>
        <source>&lt;h1&gt;Setup Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been set up on your computer.&lt;br/&gt;The error message was: %2.</source>
        <translation>&lt;h1&gt;L’installation a échoué&lt;/h1&gt;&lt;br/&gt;%1 n’a pas été installé sur votre ordinateur.&lt;br/&gt;Message d’erreur : %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="139"/>
        <source>&lt;h1&gt;Installation Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been installed on your computer.&lt;br/&gt;The error message was: %2.</source>
        <translation>&lt;h1&gt;L’installation a échoué&lt;/h1&gt;&lt;br/&gt;%1 n’a pas été installé sur votre ordinateur.&lt;br/&gt;Message d’erreur : %2.</translation>
    </message>
</context>
<context>
    <name>FinishedViewStep</name>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="78"/>
        <source>Finish</source>
        <translation>Terminer</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="132"/>
        <source>Setup Complete</source>
        <translation>Installation terminée</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="133"/>
        <source>Installation Complete</source>
        <translation>Installation terminée</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="135"/>
        <source>The setup of %1 is complete.</source>
        <translation>L’installation de %1 est terminée.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="136"/>
        <source>The installation of %1 is complete.</source>
        <translation>L’installation de %1 est terminée.</translation>
    </message>
</context>
<context>
    <name>FormatPartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="41"/>
        <source>Format partition %1 (file system: %2, size: %3 MiB) on %4.</source>
        <translation>Formater la partition %1 (système de fichier : %2, taille : %3 Mio) sur %4.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="52"/>
        <source>Format &lt;strong&gt;%3MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; with file system &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Formation la partition &lt;strong&gt;%1&lt;/strong&gt; de &lt;strong&gt;%3Mio&lt;/strong&gt; avec le système de fichier &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="63"/>
        <source>Formatting partition %1 with file system %2.</source>
        <translation>Formatage de la partition %1 avec le système de fichier %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="77"/>
        <source>The installer failed to format partition %1 on disk &apos;%2&apos;.</source>
        <translation>Le programme d&apos;installation n&apos;a pu formater la partition %1 sur le disque &apos;%2&apos;.</translation>
    </message>
</context>
<context>
    <name>GeneralRequirements</name>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="126"/>
        <source>has at least %1 GiB available drive space</source>
        <translation>a au moins %1 Gio de d&apos;espace disque disponible</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="128"/>
        <source>There is not enough drive space. At least %1 GiB is required.</source>
        <translation>Il n’y a pas assez d’espace disque. Au moins %1 Gio sont nécessaires.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="137"/>
        <source>has at least %1 GiB working memory</source>
        <translation>a au moins %1 Gio de mémoire de travail</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="139"/>
        <source>The system does not have enough working memory. At least %1 GiB is required.</source>
        <translation>Le système n’a pas assez de mémoire de travail. Au moins %1 Go sont nécessaires.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="148"/>
        <source>is plugged in to a power source</source>
        <translation>est branché sur le secteur</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="149"/>
        <source>The system is not plugged in to a power source.</source>
        <translation>Le système n’est pas branché sur le secteur.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="156"/>
        <source>is connected to the Internet</source>
        <translation>est connecté à Internet</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="157"/>
        <source>The system is not connected to the Internet.</source>
        <translation>Le système n’est pas connecté à Internet.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="164"/>
        <source>is running the installer as an administrator (root)</source>
        <translation>lance l’installeur en tant qu’administrateur (root)</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="167"/>
        <source>The setup program is not running with administrator rights.</source>
        <translation>L’installeur n’est pas lancé avec les droits administrateur.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="168"/>
        <source>The installer is not running with administrator rights.</source>
        <translation>L’installeur n’est pas lancé avec les droits administrateur.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="176"/>
        <source>has a screen large enough to show the whole installer</source>
        <translation>a un écran suffisamment large pour afficher tout l’installeur</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="179"/>
        <source>The screen is too small to display the setup program.</source>
        <translation>L’écran est trop petit pour afficher l’installateur.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="180"/>
        <source>The screen is too small to display the installer.</source>
        <translation>L’écran est trop petit pour afficher l’installateur.</translation>
    </message>
</context>
<context>
    <name>IDJob</name>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="38"/>
        <location filename="../src/modules/oemid/IDJob.cpp" line="47"/>
        <location filename="../src/modules/oemid/IDJob.cpp" line="59"/>
        <location filename="../src/modules/oemid/IDJob.cpp" line="67"/>
        <source>OEM Batch Identifier</source>
        <translation>OEM Batch Identifier</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="48"/>
        <source>Could not create directories &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>Impossible de créer les répertoires&lt;code&gt;%1&lt;/code&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="60"/>
        <source>Could not open file &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>Impossible d’ouvrir le fichier &lt;code&gt;%1&lt;/code&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="68"/>
        <source>Could not write to file &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>Impossible d’écrire le fichier &lt;code&gt;%1&lt;/code&gt;.</translation>
    </message>
</context>
<context>
    <name>KeyboardPage</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.cpp" line="219"/>
        <source>Set keyboard model to %1.&lt;br/&gt;</source>
        <translation>Configurer le modèle de clavier à %1.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.cpp" line="223"/>
        <source>Set keyboard layout to %1/%2.</source>
        <translation>Configurer l&apos;agencement clavier à %1/%2.</translation>
    </message>
</context>
<context>
    <name>KeyboardViewStep</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardViewStep.cpp" line="50"/>
        <source>Keyboard</source>
        <translation>Clavier</translation>
    </message>
</context>
<context>
    <name>LCLocaleDialog</name>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="32"/>
        <source>System locale setting</source>
        <translation>Configuration des paramètres régionaux</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="39"/>
        <source>The system locale setting affects the language and character set for some command line user interface elements.&lt;br/&gt;The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>La configuration des paramètres régionaux affecte la langue et le jeu de caractère pour les éléments de l&apos;interface utilisateur en ligne de commande.&lt;br/&gt;La configuration actuelle est &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="63"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuler</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="64"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
</context>
<context>
    <name>LicensePage</name>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="14"/>
        <source>Form</source>
        <translation>Formulaire</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="22"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Accord de licence&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="149"/>
        <source>I accept the terms and conditions above.</source>
        <translation>J’accepte les termes et les conditions ci-dessus.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="151"/>
        <source>Please review the End User License Agreements (EULAs).</source>
        <translation>Veuillez consulter les contrats de licence utilisateur final (CLUF).</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="156"/>
        <source>This setup procedure will install proprietary software that is subject to licensing terms.</source>
        <translation>Cette procédure de configuration installe un logiciel propriétaire soumis à des conditions de licence.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="159"/>
        <source>If you do not agree with the terms, the setup procedure cannot continue.</source>
        <translation>Si vous n&apos;êtes pas d&apos;accord avec les termes, la procédure de configuration ne peut pas continuer.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="164"/>
        <source>In case non-free was selected, this installer will install proprietary packages &lt;br/&gt;that have additional End User License Agreements (EULAs) attached to them.</source>
        <translation>Si un pilote non libre a été sélectionné, cet installeur installera des paquets propriétaires &lt;br/&gt; auxquels sont associés des contrats de licence utilisateur final (CLUF) supplémentaires.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="167"/>
        <source>If you do not agree with the terms, proprietary software will not be installed, and open source alternatives will be used instead.</source>
        <translation>Si vous n’êtes pas d&apos;accord avec les termes, aucun logiciel propriétaire ne sera installé et des alternatives Open Source seront utilisées à la place.</translation>
    </message>
</context>
<context>
    <name>LicenseViewStep</name>
    <message>
        <location filename="../src/modules/license/LicenseViewStep.cpp" line="52"/>
        <source>License</source>
        <translation>Licence</translation>
    </message>
</context>
<context>
    <name>LicenseWidget</name>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="96"/>
        <source>URL: %1</source>
        <translation>URL : %1</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="117"/>
        <source>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;by %2</source>
        <extracomment>%1 is an untranslatable product name, example: Creative Audigy driver</extracomment>
        <translation>&lt;strong&gt;Pilote %1&lt;/strong&gt;&lt;br/&gt; par %2</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="124"/>
        <source>&lt;strong&gt;%1 graphics driver&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <extracomment>%1 is usually a vendor name, example: Nvidia graphics driver</extracomment>
        <translation>&lt;strong&gt;Pilote graphique %1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;par %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="130"/>
        <source>&lt;strong&gt;%1 browser plugin&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;Plugin de navigateur %1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;par %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="136"/>
        <source>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;Codec %1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;par %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="142"/>
        <source>&lt;strong&gt;%1 package&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;Paquet %1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;par %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="148"/>
        <source>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;par %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="171"/>
        <source>File: %1</source>
        <translation>Fichier : %1</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="194"/>
        <source>Hide license text</source>
        <translation>Masquer le texte de licence</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="194"/>
        <source>Show the license text</source>
        <translation>Afficher le texte de la licence</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="198"/>
        <source>Open license agreement in browser.</source>
        <translation>Ouvrir le contrat de licence dans le navigateur.</translation>
    </message>
</context>
<context>
    <name>LocalePage</name>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="259"/>
        <source>The system language will be set to %1.</source>
        <translation>La langue du système utilisée sera %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="260"/>
        <source>The numbers and dates locale will be set to %1.</source>
        <translation>Le format local des nombres et des dates utilisé sera %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="124"/>
        <source>Region:</source>
        <translation>Région :</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="125"/>
        <source>Zone:</source>
        <translation>Zone :</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="126"/>
        <location filename="../src/modules/locale/LocalePage.cpp" line="127"/>
        <source>&amp;Change...</source>
        <translation>&amp;Changer…</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="267"/>
        <source>Set timezone to %1/%2.&lt;br/&gt;</source>
        <translation>Configurer la zone de temps à %1/%2.&lt;br/&gt;</translation>
    </message>
</context>
<context>
    <name>LocaleViewStep</name>
    <message>
        <location filename="../src/modules/locale/LocaleViewStep.cpp" line="99"/>
        <source>Location</source>
        <translation>Localisation</translation>
    </message>
</context>
<context>
    <name>LuksBootKeyFileJob</name>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="39"/>
        <source>Configuring LUKS key file.</source>
        <translation>Configuration du fichier de clé de LUKS.</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="156"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="164"/>
        <source>No partitions are defined.</source>
        <translation>Aucune partition n’est définie.</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="192"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="199"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="207"/>
        <source>Encrypted rootfs setup error</source>
        <translation>Erreur de configuration d’un rootfs chiffré</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="193"/>
        <source>Root partition %1 is LUKS but no passphrase has been set.</source>
        <translation>La partition racine %1 est LUKS mais aucune phrase de passe n’a été définie.</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="200"/>
        <source>Could not create LUKS key file for root partition %1.</source>
        <translation>Impossible de créer le fichier de clé LUKS pour la partition racine %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="208"/>
        <source>Could configure LUKS key file on partition %1.</source>
        <translation>Permet de configurer un fichier clé LUKS sur la partition %1.</translation>
    </message>
</context>
<context>
    <name>MachineIdJob</name>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="46"/>
        <source>Generate machine-id.</source>
        <translation>Générer l’ID de la machine.</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="62"/>
        <source>Configuration Error</source>
        <translation>Erreur de configuration</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="63"/>
        <source>No root mount point is set for MachineId.</source>
        <translation>Aucun point de montage racine n’est configuré pour cet ID de machine.</translation>
    </message>
</context>
<context>
    <name>NotesQmlViewStep</name>
    <message>
        <location filename="../src/modules/notesqml/NotesQmlViewStep.cpp" line="34"/>
        <source>Notes</source>
        <translation>Notes</translation>
    </message>
</context>
<context>
    <name>OEMPage</name>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="28"/>
        <source>Ba&amp;tch:</source>
        <translation>Ba&amp;tch:</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="38"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter a batch-identifier here. This will be stored in the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter a batch-identifier here. This will be stored in the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="48"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEM Configuration&lt;/h1&gt;&lt;p&gt;Calamares will use OEM settings while configuring the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEM Configuration&lt;/h1&gt;&lt;p&gt;Calamares will use OEM settings while configuring the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>OEMViewStep</name>
    <message>
        <location filename="../src/modules/oemid/OEMViewStep.cpp" line="121"/>
        <source>OEM Configuration</source>
        <translation>OEM Configuration</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMViewStep.cpp" line="126"/>
        <source>Set the OEM Batch Identifier to &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>Set the OEM Batch Identifier to &lt;code&gt;%1&lt;/code&gt;.</translation>
    </message>
</context>
<context>
    <name>PWQ</name>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="57"/>
        <source>Password is too short</source>
        <translation>Le mot de passe est trop court</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="73"/>
        <source>Password is too long</source>
        <translation>Le mot de passe est trop long</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="149"/>
        <source>Password is too weak</source>
        <translation>Le mot de passe est trop faible</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="157"/>
        <source>Memory allocation error when setting &apos;%1&apos;</source>
        <translation>Erreur d’allocation mémoire à la configuration &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="162"/>
        <source>Memory allocation error</source>
        <translation>Erreur d’allocation mémoire</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="164"/>
        <source>The password is the same as the old one</source>
        <translation>Le mot de passe est identique au mot de passe précédent</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="166"/>
        <source>The password is a palindrome</source>
        <translation>Le mot de passe est un palindrome</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="168"/>
        <source>The password differs with case changes only</source>
        <translation>Le mot de passe diffère de seulement un caractère</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="170"/>
        <source>The password is too similar to the old one</source>
        <translation>Le mot de passe est similaire au mot de passe précédent</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="172"/>
        <source>The password contains the user name in some form</source>
        <translation>Le mot de passe contient le nom d’utilisateur</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="174"/>
        <source>The password contains words from the real name of the user in some form</source>
        <translation>Le mot de passe contient des mots issus du nom réel de l’utilisateur.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="177"/>
        <source>The password contains forbidden words in some form</source>
        <translation>Le mot de passe contient des mots interdits</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="181"/>
        <source>The password contains less than %1 digits</source>
        <translation>Le mot de passe contient moins de %1 chiffres</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="184"/>
        <source>The password contains too few digits</source>
        <translation>Le mot de passe contient trop peu de chiffres</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="188"/>
        <source>The password contains less than %1 uppercase letters</source>
        <translation>Le mot de passe contient moins de %1 majuscules</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="191"/>
        <source>The password contains too few uppercase letters</source>
        <translation>Le mot de passe contient trop peu de majuscules</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="195"/>
        <source>The password contains less than %1 lowercase letters</source>
        <translation>Le mot de passe contient moins de %1 minuscules</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="198"/>
        <source>The password contains too few lowercase letters</source>
        <translation>Le mot de passe contient trop peu de minuscules</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="202"/>
        <source>The password contains less than %1 non-alphanumeric characters</source>
        <translation>Le mot de passe contient moins de %1 caractères non-alphanumériques</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="206"/>
        <source>The password contains too few non-alphanumeric characters</source>
        <translation>Le mot de passe contient trop peu de caractères non-alphanumériques</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="210"/>
        <source>The password is shorter than %1 characters</source>
        <translation>Le mot de passe contient moins de %1 caractères</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="213"/>
        <source>The password is too short</source>
        <translation>Le mot de passe est trop court</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="215"/>
        <source>The password is just rotated old one</source>
        <translation>Le mot de passe est une rotation du mot de passe précédent</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="219"/>
        <source>The password contains less than %1 character classes</source>
        <translation>Le mot de passe contient moins de %1 classes de caractères</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="222"/>
        <source>The password does not contain enough character classes</source>
        <translation>Le mot de passe ne contient pas assez de classes de caractères</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="226"/>
        <source>The password contains more than %1 same characters consecutively</source>
        <translation>Le mot de passe contient plus de %1 caractères identiques à la suite.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="230"/>
        <source>The password contains too many same characters consecutively</source>
        <translation>Le mot de passe contient trop de caractères identiques à la suite.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="234"/>
        <source>The password contains more than %1 characters of the same class consecutively</source>
        <translation>Le mot de passe contient plus de %1 caractères de même classe à la suite.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="238"/>
        <source>The password contains too many characters of the same class consecutively</source>
        <translation>Le mot de passe contient trop de caractères de même classe à la suite.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="243"/>
        <source>The password contains monotonic sequence longer than %1 characters</source>
        <translation>Le mot de passe contient une séquence monotone de plus de %1 caractères</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="247"/>
        <source>The password contains too long of a monotonic character sequence</source>
        <translation>Le mot de passe contient une séquence monotone de caractères trop longue.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="250"/>
        <source>No password supplied</source>
        <translation>Aucun mot de passe requis</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="252"/>
        <source>Cannot obtain random numbers from the RNG device</source>
        <translation>Impossible de récupérer des nombres aléatoires depuis le périphérique RNG</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="254"/>
        <source>Password generation failed - required entropy too low for settings</source>
        <translation>La génération de mot de passe a échoué - l’entropie requise est trop faible pour la configuration</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="260"/>
        <source>The password fails the dictionary check - %1</source>
        <translation>Le mot de passe a été trouvé dans le dictionnaire - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="263"/>
        <source>The password fails the dictionary check</source>
        <translation>Le mot de passe a été trouvé dans le dictionnaire</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="267"/>
        <source>Unknown setting - %1</source>
        <translation>Configuration inconnue - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="271"/>
        <source>Unknown setting</source>
        <translation>Configuration inconnue</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="275"/>
        <source>Bad integer value of setting - %1</source>
        <translation>Mauvaise valeur d’entier pour la configuration - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="280"/>
        <source>Bad integer value</source>
        <translation>Mauvaise valeur d’entier</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="284"/>
        <source>Setting %1 is not of integer type</source>
        <translation>La configuration %1 n’est pas un type entier</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="289"/>
        <source>Setting is not of integer type</source>
        <translation>La configuration n’est pas un type entier</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="293"/>
        <source>Setting %1 is not of string type</source>
        <translation>La configuration %1 n’est pas un type chaîne de caractères</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="298"/>
        <source>Setting is not of string type</source>
        <translation>La configuration %1 n’est pas un type chaîne de caractères</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="300"/>
        <source>Opening the configuration file failed</source>
        <translation>L’ouverture du fichier de configuration a échoué.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="302"/>
        <source>The configuration file is malformed</source>
        <translation>Le fichier de configuration est mal formé.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="304"/>
        <source>Fatal failure</source>
        <translation>Erreur fatale</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="306"/>
        <source>Unknown error</source>
        <translation>Erreur inconnue</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="528"/>
        <source>Password is empty</source>
        <translation>Le mot de passe est vide</translation>
    </message>
</context>
<context>
    <name>PackageChooserPage</name>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="20"/>
        <source>Form</source>
        <translation>Formulaire</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="40"/>
        <source>Product Name</source>
        <translation>Nom du produit</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="53"/>
        <source>TextLabel</source>
        <translation>Étiquette</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="69"/>
        <source>Long Product Description</source>
        <translation>Description longue</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="34"/>
        <source>Package Selection</source>
        <translation>Sélection de paquets</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="35"/>
        <source>Please pick a product from the list. The selected product will be installed.</source>
        <translation>Veuillez choisir un produit dans la liste. Le produit sélectionné sera installé.</translation>
    </message>
</context>
<context>
    <name>PackageChooserViewStep</name>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserViewStep.cpp" line="70"/>
        <source>Packages</source>
        <translation>Paquets</translation>
    </message>
</context>
<context>
    <name>Page_Keyboard</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="14"/>
        <source>Form</source>
        <translation>Formulaire</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="70"/>
        <source>Keyboard Model:</source>
        <translation>Modèle Clavier :</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="131"/>
        <source>Type here to test your keyboard</source>
        <translation>Veuillez saisir ici pour tester votre clavier</translation>
    </message>
</context>
<context>
    <name>Page_UserSetup</name>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="14"/>
        <source>Form</source>
        <translation>Formulaire</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="36"/>
        <source>What is your name?</source>
        <translation>Quel est vote nom ?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="120"/>
        <source>What name do you want to use to log in?</source>
        <translation>Quel nom souhaitez-vous utiliser pour la connexion ?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="321"/>
        <source>Choose a password to keep your account safe.</source>
        <translation>Veuillez saisir le mot de passe pour sécuriser votre compte.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="345"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="370"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Veuillez entrer le même mot de passe deux fois afin de vérifier qu&apos;il n&apos;y ait pas d&apos;erreur de frappe. Un bon mot de passe doit contenir un mélange de lettres, de nombres et de caractères de ponctuation, contenir au moins huit caractères et être changé à des intervalles réguliers.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="219"/>
        <source>What is the name of this computer?</source>
        <translation>Quel est le nom de votre ordinateur ?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="51"/>
        <source>Your Full Name</source>
        <translation>Votre nom complet</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="144"/>
        <source>login</source>
        <translation>nom de connexion</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="243"/>
        <source>&lt;small&gt;This name will be used if you make the computer visible to others on a network.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Ce nom sera utilisé pour rendre l&apos;ordinateur visible des autres sur le réseau.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="246"/>
        <source>Computer Name</source>
        <translation>Nom de l’ordinateur</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="351"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="521"/>
        <source>Password</source>
        <translation>Mot de passe</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="376"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="546"/>
        <source>Repeat Password</source>
        <translation>Répéter le mot de passe</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="451"/>
        <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
        <translation>Lorsque cette case est cochée, la vérification de la force du mot de passe est effectuée et vous ne pourrez pas utiliser un mot de passe faible.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="454"/>
        <source>Require strong passwords.</source>
        <translation>Exiger des mots de passe forts.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="461"/>
        <source>Log in automatically without asking for the password.</source>
        <translation>Se connecter automatiquement sans demander de mot de passe.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="468"/>
        <source>Use the same password for the administrator account.</source>
        <translation>Choisir le même mot de passe pour le compte administrateur.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="491"/>
        <source>Choose a password for the administrator account.</source>
        <translation>Choisir un mot de passe pour le compte administrateur.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="515"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="540"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Veuillez entrer le même mot de passe deux fois, afin de vérifier qu&apos;ils n&apos;y ait pas d&apos;erreur de frappe.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>PartitionLabelsView</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="197"/>
        <source>Root</source>
        <translation>Racine</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="200"/>
        <source>Home</source>
        <translation>Home</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="202"/>
        <source>Boot</source>
        <translation>Boot</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="205"/>
        <source>EFI system</source>
        <translation>Système EFI</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="207"/>
        <source>Swap</source>
        <translation>Swap</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="209"/>
        <source>New partition for %1</source>
        <translation>Nouvelle partition pour %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="211"/>
        <source>New partition</source>
        <translation>Nouvelle partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="230"/>
        <source>%1  %2</source>
        <extracomment>size[number] filesystem[name]</extracomment>
        <translation>%1  %2</translation>
    </message>
</context>
<context>
    <name>PartitionModel</name>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="144"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="176"/>
        <source>Free Space</source>
        <translation>Espace libre</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="148"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="180"/>
        <source>New partition</source>
        <translation>Nouvelle partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="264"/>
        <source>Name</source>
        <translation>Nom</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="266"/>
        <source>File System</source>
        <translation>Système de fichiers</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="268"/>
        <source>Mount Point</source>
        <translation>Point de montage</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="270"/>
        <source>Size</source>
        <translation>Taille</translation>
    </message>
</context>
<context>
    <name>PartitionPage</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="14"/>
        <source>Form</source>
        <translation>Forme</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="22"/>
        <source>Storage de&amp;vice:</source>
        <translation>Pé&amp;riphérique de stockage :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="51"/>
        <source>&amp;Revert All Changes</source>
        <translation>&amp;Annuler tous les changements</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="87"/>
        <source>New Partition &amp;Table</source>
        <translation>Nouvelle &amp;table de partitionnement</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="107"/>
        <source>Cre&amp;ate</source>
        <translation>Cré&amp;er</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="132"/>
        <source>New Volume Group</source>
        <translation>Nouveau groupe de volumes</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="139"/>
        <source>Resize Volume Group</source>
        <translation>Modifier la taille d’un groupe de volumes</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="146"/>
        <source>Deactivate Volume Group</source>
        <translation>Désactiver un groupe de volumes</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="153"/>
        <source>Remove Volume Group</source>
        <translation>Supprimer un groupe de volumes</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="180"/>
        <source>I&amp;nstall boot loader on:</source>
        <translation>I&amp;nstaller le chargeur de démarrage sur :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="114"/>
        <source>&amp;Edit</source>
        <translation>&amp;Modifier</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="121"/>
        <source>&amp;Delete</source>
        <translation>&amp;Supprimer</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="209"/>
        <source>Are you sure you want to create a new partition table on %1?</source>
        <translation>Êtes-vous sûr de vouloir créer une nouvelle table de partitionnement sur %1 ?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="238"/>
        <source>Can not create new partition</source>
        <translation>Impossible de créer une nouvelle partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="239"/>
        <source>The partition table on %1 already has %2 primary partitions, and no more can be added. Please remove one primary partition and add an extended partition, instead.</source>
        <translation>La table de partitions sur %1 contient déjà %2 partitions primaires, et il n’est plus possible d’en ajouter d&apos;autres.</translation>
    </message>
</context>
<context>
    <name>PartitionViewStep</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="78"/>
        <source>Gathering system information...</source>
        <translation>Récupération des informations système…</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="130"/>
        <source>Partitions</source>
        <translation>Partitions</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="167"/>
        <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system.</source>
        <translation>Installer %1 &lt;strong&gt;à côté&lt;/strong&gt; d’un autre système d’exploitation.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="171"/>
        <source>&lt;strong&gt;Erase&lt;/strong&gt; disk and install %1.</source>
        <translation>&lt;strong&gt;Écraser&lt;/strong&gt; le disque et installer %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="175"/>
        <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition with %1.</source>
        <translation>&lt;strong&gt;Remplacer&lt;/strong&gt; un partition avec %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="180"/>
        <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning.</source>
        <translation>Partitionnement &lt;strong&gt;manuel&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="193"/>
        <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system on disk &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>Installer %1 &lt;strong&gt;à côté&lt;/strong&gt; d’un autre système d’exploitation sur le disque &lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="199"/>
        <source>&lt;strong&gt;Erase&lt;/strong&gt; disk &lt;strong&gt;%2&lt;/strong&gt; (%3) and install %1.</source>
        <translation>&lt;strong&gt;Écraser&lt;/strong&gt; le disque &lt;strong&gt;%2&lt;/strong&gt; (%3) et installer %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="205"/>
        <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition on disk &lt;strong&gt;%2&lt;/strong&gt; (%3) with %1.</source>
        <translation>&lt;strong&gt;Remplacer&lt;/strong&gt; une partition sur le disque &lt;strong&gt;%2&lt;/strong&gt; (%3) avec %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="212"/>
        <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning on disk &lt;strong&gt;%1&lt;/strong&gt; (%2).</source>
        <translation>Partitionnement &lt;strong&gt;manuel&lt;/strong&gt; sur le disque &lt;strong&gt;%1&lt;/strong&gt; (%2).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="220"/>
        <source>Disk &lt;strong&gt;%1&lt;/strong&gt; (%2)</source>
        <translation>Disque &lt;strong&gt;%1&lt;/strong&gt; (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="248"/>
        <source>Current:</source>
        <translation>Actuel :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="265"/>
        <source>After:</source>
        <translation>Après :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="419"/>
        <source>No EFI system partition configured</source>
        <translation>Aucune partition système EFI configurée</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="420"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;To configure an EFI system partition, go back and select or create a FAT32 filesystem with the &lt;strong&gt;esp&lt;/strong&gt; flag enabled and mount point &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;&lt;br/&gt;You can continue without setting up an EFI system partition but your system may fail to start.</source>
        <translation>Une partition système EFI est nécessaire pour démarrer %1.&lt;br/&gt;&lt;br/&gt;Pour configurer une partition système EFI, revenez en arrière, sélectionnez ou créez un système de fichier FAT32 avec le flag &lt;strong&gt;esp&lt;/strong&gt; autorisé et le point de montage &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;&lt;br/&gt;Vous pouvez continuer sans configurer une partition système EFI mais votre système ne pourra pas démarrer.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="433"/>
        <source>EFI system partition flag not set</source>
        <translation>Aucun flag sur la partition système EFI n’est configuré</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="434"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;A partition was configured with mount point &lt;strong&gt;%2&lt;/strong&gt; but its &lt;strong&gt;esp&lt;/strong&gt; flag is not set.&lt;br/&gt;To set the flag, go back and edit the partition.&lt;br/&gt;&lt;br/&gt;You can continue without setting the flag but your system may fail to start.</source>
        <translation>Une partition système EFI est nécessaire pour démarrer %1.&lt;br/&gt;&lt;br/&gt; Une partition a été configurée avec le point de montage &lt;strong&gt;%2&lt;/strong&gt; mais le flag &lt;strong&gt;esp&lt;/strong&gt; n’est pas configuré.&lt;br/&gt; Pour 
ajoute le flag, revenez en arrière et éditez la partition.&lt;br/&gt;&lt;br/&gt;Vous pouvez continuer sans cela mais votre système ne pourra pas démarrer.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="465"/>
        <source>Option to use GPT on BIOS</source>
        <translation>Options pour utiliser GPT sur BIOS</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="466"/>
        <source>A GPT partition table is the best option for all systems. This installer supports such a setup for BIOS systems too.&lt;br/&gt;&lt;br/&gt;To configure a GPT partition table on BIOS, (if not done so already) go back and set the partion table to GPT, next create a 8 MB unformatted partition with the &lt;strong&gt;bios_grub&lt;/strong&gt; flag enabled.&lt;br/&gt;&lt;br/&gt;An unformatted 8 MB partition is necessary to start %1 on a BIOS system with GPT.</source>
        <translation>Une table de partitions GPT est la meilleure option pour tous les systèmes. Cet installateur supporte une configuration de ce type pour les systèmes BIOS également.&lt;br/&gt;&lt;br/&gt;Pour configurer une table de partitions GPT sur BIOS (si ce n’est déjà fait), retournez en arrière et sélectionnez la table de partitions GPT, puis créez une partition non formatée de 8 Mo avec le flag &lt;strong&gt;bios_grub&lt;/strong&gt; autorisé.&lt;br/&gt;&lt;br/&gt;Une partition de 8 Mo est nécessaire pour démarrer %1 sur un système BIOS avec GPT.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="501"/>
        <source>Boot partition not encrypted</source>
        <translation>La partition de démarrage n’est pas cryptée</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="502"/>
        <source>A separate boot partition was set up together with an encrypted root partition, but the boot partition is not encrypted.&lt;br/&gt;&lt;br/&gt;There are security concerns with this kind of setup, because important system files are kept on an unencrypted partition.&lt;br/&gt;You may continue if you wish, but filesystem unlocking will happen later during system startup.&lt;br/&gt;To encrypt the boot partition, go back and recreate it, selecting &lt;strong&gt;Encrypt&lt;/strong&gt; in the partition creation window.</source>
        <translation>Une partition de démarrage distincte a été configurée avec une partition racine cryptée, mais elle n’est pas cryptée.&lt;br/&gt;&lt;br/&gt;Ce type d’installation pose des problèmes de sécurité car les fichiers système importants sont conservés sur une partition non cryptée.&lt;br/&gt;Vous pouvez continuer si vous le souhaitez, mais le déverrouillage du système de fichiers se produira plus tard au démarrage du système.&lt;br/&gt;Pour crypter la partition de démarrage, revenez en arrière et recréez-la, en sélectionnant &lt;strong&gt;Crypter&lt;/strong&gt; dans la fenêtre de création de la partition.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="686"/>
        <source>has at least one disk device available.</source>
        <translation>A au moins un disque disponible.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="687"/>
        <source>There are no partitons to install on.</source>
        <translation>Aucune partition n’est disponible pour l’installation.</translation>
    </message>
</context>
<context>
    <name>PreserveFiles</name>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="84"/>
        <source>Saving files for later ...</source>
        <translation>Enregistrer les fichiers pour plus tard...</translation>
    </message>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="122"/>
        <source>No files configured to save for later.</source>
        <translation>Aucun fichier configuré pour être sauvegardé pour plus tard.</translation>
    </message>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="176"/>
        <source>Not all of the configured files could be preserved.</source>
        <translation>Tous les fichiers configurés n’ont pu être préservés.</translation>
    </message>
</context>
<context>
    <name>ProcessResult</name>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="464"/>
        <source>
There was no output from the command.</source>
        <translation>
Il n’y a pas de sortie depuis cette commande.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="465"/>
        <source>
Output:
</source>
        <translation>
Sortie :
</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="469"/>
        <source>External command crashed.</source>
        <translation>La commande externe a échoué.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="470"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; crashed.</source>
        <translation>Commande &lt;i&gt;%1&lt;/i&gt; échouée.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="475"/>
        <source>External command failed to start.</source>
        <translation>La commande externe n&apos;a pu être lancée.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="476"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to start.</source>
        <translation>La commande &lt;i&gt;%1&lt;/i&gt; n&apos;a pu être lancée.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="480"/>
        <source>Internal error when starting command.</source>
        <translation>Erreur interne au lancement de la commande.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="481"/>
        <source>Bad parameters for process job call.</source>
        <translation>Mauvais paramètres pour l&apos;appel au processus de job.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="485"/>
        <source>External command failed to finish.</source>
        <translation>La commande externe ne s&apos;est pas terminée.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="486"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to finish in %2 seconds.</source>
        <translation>La commande &lt;i&gt;%1&lt;/i&gt; ne s&apos;est pas terminée en %2 secondes.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="493"/>
        <source>External command finished with errors.</source>
        <translation>La commande externe s&apos;est terminée avec des erreurs.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="494"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; finished with exit code %2.</source>
        <translation>La commande &lt;i&gt;%1&lt;/i&gt; s&apos;est terminée avec le code de sortie %2.</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="91"/>
        <source>Default Keyboard Model</source>
        <translation>Modèle Clavier par défaut</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="133"/>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="168"/>
        <source>Default</source>
        <translation>Défaut</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="51"/>
        <source>Unpartitioned space or unknown partition table</source>
        <translation>Espace non partitionné ou table de partitions inconnnue</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="207"/>
        <source>unknown</source>
        <translation>inconnu</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="209"/>
        <source>extended</source>
        <translation>étendu</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="211"/>
        <source>unformatted</source>
        <translation>non formaté</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="213"/>
        <source>swap</source>
        <translation>swap</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="47"/>
        <source>(no mount point)</source>
        <translation>(pas de point de montage)</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/locale/Label.cpp" line="46"/>
        <source>%1 (%2)</source>
        <extracomment>language[name] (country[name])</extracomment>
        <translation>%1 (%2)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/modulesystem/RequirementsChecker.cpp" line="65"/>
        <source>Requirements checking for module &lt;i&gt;%1&lt;/i&gt; is complete.</source>
        <translation>La vérification de la configuration requise pour le module &lt;i&gt;%1&lt;/i&gt; est complète.</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/Workers.cpp" line="45"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="53"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="57"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="101"/>
        <source>File not found</source>
        <translation>Fichier non trouvé</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/Workers.cpp" line="46"/>
        <source>Path &lt;pre&gt;%1&lt;/pre&gt; must be an absolute path.</source>
        <translation>Le chemin &lt;pre&gt;%1&lt;/pre&gt; doit être un chemin absolu.</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/Workers.cpp" line="102"/>
        <source>Could not create new random file &lt;pre&gt;%1&lt;/pre&gt;.</source>
        <translation>Impossible de créer un fichier aléatoire &lt;pre&gt;%1&lt;/pre&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageModel.cpp" line="79"/>
        <source>No product</source>
        <translation>Aucun produit</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageModel.cpp" line="87"/>
        <source>No description provided.</source>
        <translation>Aucune description fournie.</translation>
    </message>
</context>
<context>
    <name>RemoveVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="34"/>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="48"/>
        <source>Remove Volume Group named %1.</source>
        <translation>Supprimer le groupe de volumes nommé %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="41"/>
        <source>Remove Volume Group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Supprimer le groupe de volumes nommé &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="61"/>
        <source>The installer failed to remove a volume group named &apos;%1&apos;.</source>
        <translation>Le programme d’installation n’a pu supprimer un groupe de volumes nommé &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>ReplaceWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.ui" line="14"/>
        <source>Form</source>
        <translation>Form</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="135"/>
        <source>Select where to install %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;this will delete all files on the selected partition.</source>
        <translation>Sélectionner la partition où installer %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Attention : &lt;/font&gt;cela supprimera tous les fichiers de la partition sélectionnée.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="161"/>
        <source>The selected item does not appear to be a valid partition.</source>
        <translation>La partition sélectionnée ne semble pas être une partition valide.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="169"/>
        <source>%1 cannot be installed on empty space. Please select an existing partition.</source>
        <translation>%1 ne peut être installé sur un espace vide. Veuillez sélectionner une partition existante.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="179"/>
        <source>%1 cannot be installed on an extended partition. Please select an existing primary or logical partition.</source>
        <translation>%1 ne peut être installé sur une partition étendue. Veuillez choisir une partition primaire ou une partition logique.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="189"/>
        <source>%1 cannot be installed on this partition.</source>
        <translation>%1 ne peut être installé sur cette partition.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="195"/>
        <source>Data partition (%1)</source>
        <translation>Partition de données (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="212"/>
        <source>Unknown system partition (%1)</source>
        <translation>Partition système inconnue (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="217"/>
        <source>%1 system partition (%2)</source>
        <translation>Partition système %1 (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="228"/>
        <source>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;The partition %1 is too small for %2. Please select a partition with capacity at least %3 GiB.</source>
        <translation>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;La partition %1 est trop petite pour %2. Veuillez selectionner une partition ayant une taille d’au moins %3 Gio.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="251"/>
        <source>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Aucune partition système EFI n’a pu être trouvée sur ce système. Veuillez recommencer et utiliser le partitionnement manuel pour configurer %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="262"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="279"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="303"/>
        <source>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 will be installed on %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;all data on partition %2 will be lost.</source>
        <translation>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 sera installé sur %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Attention : &lt;/font&gt;toutes les données sur la partition %2 seront perdues.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="271"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>La partition système EFI %1 sera utilisée pour démarrer %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="287"/>
        <source>EFI system partition:</source>
        <translation>Partition système EFI :</translation>
    </message>
</context>
<context>
    <name>ResizePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="48"/>
        <source>Resize partition %1.</source>
        <translation>Redimensionner la partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="55"/>
        <source>Resize &lt;strong&gt;%2MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%3MiB&lt;/strong&gt;.</source>
        <translation>Redimensionner la partition &lt;strong&gt;%1&lt;/strong&gt; de &lt;strong&gt;%2Mio&lt;/strong&gt; à &lt;strong&gt;%3Mio&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="66"/>
        <source>Resizing %2MiB partition %1 to %3MiB.</source>
        <translation>Redimensionnement de la partition %1 de %2Mio à %3Mio.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="85"/>
        <source>The installer failed to resize partition %1 on disk &apos;%2&apos;.</source>
        <translation>Le programme d&apos;installation n&apos;a pu redimensionner la partition %1 sur le disque &apos;%2&apos;.</translation>
    </message>
</context>
<context>
    <name>ResizeVolumeGroupDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ResizeVolumeGroupDialog.cpp" line="39"/>
        <source>Resize Volume Group</source>
        <translation>Redimensionner le groupe de volumes</translation>
    </message>
</context>
<context>
    <name>ResizeVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="37"/>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="55"/>
        <source>Resize volume group named %1 from %2 to %3.</source>
        <translation>Modifier le groupe de volumes nommé %1 de %2 à %3.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="46"/>
        <source>Resize volume group named &lt;strong&gt;%1&lt;/strong&gt; from &lt;strong&gt;%2&lt;/strong&gt; to &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation>Modifier le groupe de volumes nommé &lt;strong&gt;%1&lt;/strong&gt; de &lt;strong&gt;%2&lt;/strong&gt; à &lt;strong&gt;%3&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="70"/>
        <source>The installer failed to resize a volume group named &apos;%1&apos;.</source>
        <translation>Le programme d&apos;installation n&apos;a pu redimensionner le groupe de volumes nommé &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>ResultsListDialog</name>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="137"/>
        <source>For best results, please ensure that this computer:</source>
        <translation>Pour de meilleurs résultats, veuillez vous assurer que cet ordinateur :</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="138"/>
        <source>System requirements</source>
        <translation>Prérequis du système</translation>
    </message>
</context>
<context>
    <name>ResultsListWidget</name>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="263"/>
        <source>This computer does not satisfy the minimum requirements for setting up %1.&lt;br/&gt;Setup cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation>Cet ordinateur ne satisfait pas les conditions requises pour installer %1.&lt;br/&gt;L’installation ne peut pas continuer.&lt;a href=&quot;#details&quot;&gt;Détails…&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="267"/>
        <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation>Cet ordinateur ne satisfait pas les conditions requises pour installer %1.&lt;br/&gt;L’installation ne peut pas continuer.&lt;a href=&quot;#details&quot;&gt;Détails…&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="274"/>
        <source>This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;Setup can continue, but some features might be disabled.</source>
        <translation>Cet ordinateur ne satisfait pas les conditions requises pour installer %1.&lt;br/&gt;L’installation peut continuer, mais certaines fonctionnalités peuvent être désactivées.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="278"/>
        <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
        <translation>Cet ordinateur ne satisfait pas les conditions requises pour installer %1.&lt;br/&gt;L’installation peut continuer, mais certaines fonctionnalités peuvent être désactivées.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="287"/>
        <source>This program will ask you some questions and set up %2 on your computer.</source>
        <translation>Ce programme va vous poser des questions et configurer %2 sur votre ordinateur.</translation>
    </message>
</context>
<context>
    <name>ScanningDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="84"/>
        <source>Scanning storage devices...</source>
        <translation>Analyse des périphériques de stockage…</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="85"/>
        <source>Partitioning</source>
        <translation>Partitionnage</translation>
    </message>
</context>
<context>
    <name>SetHostNameJob</name>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="39"/>
        <source>Set hostname %1</source>
        <translation>Définir le nom d&apos;hôte %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="46"/>
        <source>Set hostname &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Définir le nom d&apos;hôte &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="53"/>
        <source>Setting hostname %1.</source>
        <translation>Définition du nom d&apos;hôte %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="64"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="71"/>
        <source>Internal Error</source>
        <translation>Erreur interne</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="78"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="89"/>
        <source>Cannot write hostname to target system</source>
        <translation>Impossible d&apos;écrire le nom d&apos;hôte sur le système cible.</translation>
    </message>
</context>
<context>
    <name>SetKeyboardLayoutJob</name>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="59"/>
        <source>Set keyboard model to %1, layout to %2-%3</source>
        <translation>Configurer le modèle clavier à %1, l&apos;agencement à %2-%3</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="321"/>
        <source>Failed to write keyboard configuration for the virtual console.</source>
        <translation>Impossible d&apos;écrire la configuration clavier pour la console virtuelle.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="322"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="326"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="332"/>
        <source>Failed to write to %1</source>
        <translation>Impossible d&apos;écrire sur %1</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="325"/>
        <source>Failed to write keyboard configuration for X11.</source>
        <translation>Impossible d&apos;écrire la configuration clavier pour X11.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="331"/>
        <source>Failed to write keyboard configuration to existing /etc/default directory.</source>
        <translation>Impossible d&apos;écrire la configuration clavier dans le répertoire existant /etc/default.</translation>
    </message>
</context>
<context>
    <name>SetPartFlagsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="49"/>
        <source>Set flags on partition %1.</source>
        <translation>Configurer les flags sur la partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="52"/>
        <source>Set flags on %1MiB %2 partition.</source>
        <translation>Configurer les flags sur la partition %2 de %1Mio.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="56"/>
        <source>Set flags on new partition.</source>
        <translation>Configurer les flags sur la nouvelle partition.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="67"/>
        <source>Clear flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Effacer les flags sur la partition &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="71"/>
        <source>Clear flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>Effacer les flags sur la partition &lt;strong&gt;%2&lt;/strong&gt; de %1Mo.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="85"/>
        <source>Flag %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition as &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation>Configuration des flags &lt;strong&gt;%3&lt;/strong&gt; pour la partition &lt;strong&gt;%2&lt;/strong&gt; de %1Mio.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="107"/>
        <source>Clearing flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>Effacement des flags sur la partition &lt;strong&gt;%2&lt;/strong&gt; de %1Mio.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="121"/>
        <source>Setting flags &lt;strong&gt;%3&lt;/strong&gt; on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>Configuration des flags &lt;strong&gt;%3&lt;/strong&gt; pour la partition &lt;strong&gt;%2&lt;/strong&gt; de %1Mio.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="75"/>
        <source>Clear flags on new partition.</source>
        <translation>Effacer les flags sur la nouvelle partition.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="79"/>
        <source>Flag partition &lt;strong&gt;%1&lt;/strong&gt; as &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Marquer la partition &lt;strong&gt;%1&lt;/strong&gt; comme &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="91"/>
        <source>Flag new partition as &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Configuration du flag &lt;strong&gt;%1&lt;/strong&gt; pour la nouvelle partition.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="103"/>
        <source>Clearing flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Effacement des flags sur la partition &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="111"/>
        <source>Clearing flags on new partition.</source>
        <translation>Effacement des flags sur la nouvelle partition.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="115"/>
        <source>Setting flags &lt;strong&gt;%2&lt;/strong&gt; on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Configuration des flags &lt;strong&gt;%2&lt;/strong&gt; pour la partition &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="127"/>
        <source>Setting flags &lt;strong&gt;%1&lt;/strong&gt; on new partition.</source>
        <translation>Configuration des flags &lt;strong&gt;%1&lt;/strong&gt; pour la nouvell partition.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="144"/>
        <source>The installer failed to set flags on partition %1.</source>
        <translation>L’installateur n’a pu configurer les flags sur la partition %1.</translation>
    </message>
</context>
<context>
    <name>SetPasswordJob</name>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="49"/>
        <source>Set password for user %1</source>
        <translation>Définir le mot de passe pour l&apos;utilisateur %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="56"/>
        <source>Setting password for user %1.</source>
        <translation>Configuration du mot de passe utilisateur %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="90"/>
        <source>Bad destination system path.</source>
        <translation>Mauvaise destination pour le chemin système.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="91"/>
        <source>rootMountPoint is %1</source>
        <translation>Le point de montage racine est %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="97"/>
        <source>Cannot disable root account.</source>
        <translation>Impossible de désactiver le compte root.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="98"/>
        <source>passwd terminated with error code %1.</source>
        <translation>passwd s’est terminé avec le code erreur %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="106"/>
        <source>Cannot set password for user %1.</source>
        <translation>Impossible de créer le mot de passe pour l&apos;utilisateur %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="107"/>
        <source>usermod terminated with error code %1.</source>
        <translation>usermod s&apos;est terminé avec le code erreur %1.</translation>
    </message>
</context>
<context>
    <name>SetTimezoneJob</name>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="43"/>
        <source>Set timezone to %1/%2</source>
        <translation>Configurer le fuseau-horaire à %1/%2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="71"/>
        <source>Cannot access selected timezone path.</source>
        <translation>Impossible d&apos;accéder au chemin d&apos;accès du fuseau horaire sélectionné.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="72"/>
        <source>Bad path: %1</source>
        <translation>Mauvais chemin : %1</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="80"/>
        <source>Cannot set timezone.</source>
        <translation>Impossible de définir le fuseau horaire.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="81"/>
        <source>Link creation failed, target: %1; link name: %2</source>
        <translation>Création du lien échouée, destination : %1; nom du lien : %2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="86"/>
        <source>Cannot set timezone,</source>
        <translation>Impossible de définir le fuseau horaire,</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="87"/>
        <source>Cannot open /etc/timezone for writing</source>
        <translation>Impossible d’ouvrir /etc/timezone en écriture.</translation>
    </message>
</context>
<context>
    <name>SlideCounter</name>
    <message>
        <location filename="../src/qml/calamares/slideshow/SlideCounter.qml" line="36"/>
        <source>%L1 / %L2</source>
        <extracomment>slide counter, %1 of %2 (numeric)</extracomment>
        <translation>%L1 / %L2</translation>
    </message>
</context>
<context>
    <name>SummaryPage</name>
    <message>
        <location filename="../src/modules/summary/SummaryPage.cpp" line="57"/>
        <source>This is an overview of what will happen once you start the setup procedure.</source>
        <translation>Ceci est un aperçu de ce qui va se passer une fois la procédure d’installation lancée.</translation>
    </message>
    <message>
        <location filename="../src/modules/summary/SummaryPage.cpp" line="60"/>
        <source>This is an overview of what will happen once you start the install procedure.</source>
        <translation>Ceci est un aperçu de ce qui va se passer une fois la procédure d’installation lancée.</translation>
    </message>
</context>
<context>
    <name>SummaryViewStep</name>
    <message>
        <location filename="../src/modules/summary/SummaryViewStep.cpp" line="43"/>
        <source>Summary</source>
        <translation>Résumé</translation>
    </message>
</context>
<context>
    <name>UsersPage</name>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="139"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after setup.&lt;/small&gt;</source>
        <translation>&lt;small&gt;si plusieurs personnes utilisent cet ordinateur, vous pourrez créer plusieurs comptes après l&apos;installation.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="145"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after installation.&lt;/small&gt;</source>
        <translation>&lt;small&gt;si plusieurs personnes utilisent cet ordinateur, vous pourrez créer plusieurs comptes après l&apos;installation.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="342"/>
        <source>Your username is too long.</source>
        <translation>Votre nom d’utilisateur est trop long.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="349"/>
        <source>Your username must start with a lowercase letter or underscore.</source>
        <translation>Votre nom d’utilisateur doit commencer par une lettre minuscule ou un tiret-bas.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="356"/>
        <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
        <translation>Seuls les lettres minuscules, les nombres, les tirets-bas et les traits d’union sont autorisés.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="404"/>
        <source>Only letters, numbers, underscore and hyphen are allowed.</source>
        <translation>Seuls les lettres, les nombres, les tirets-bas et les traits d’union sont autorisés.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="392"/>
        <source>Your hostname is too short.</source>
        <translation>Votre nom d’hôte est trop court.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="397"/>
        <source>Your hostname is too long.</source>
        <translation>Votre nom d’hôte est trop long.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="421"/>
        <source>Your passwords do not match!</source>
        <translation>Vos mots de passe ne correspondent pas !</translation>
    </message>
</context>
<context>
    <name>UsersViewStep</name>
    <message>
        <location filename="../src/modules/users/UsersViewStep.cpp" line="55"/>
        <source>Users</source>
        <translation>Utilisateurs</translation>
    </message>
</context>
<context>
    <name>VariantModel</name>
    <message>
        <location filename="../src/calamares/VariantModel.cpp" line="241"/>
        <source>Key</source>
        <translation>CLé</translation>
    </message>
    <message>
        <location filename="../src/calamares/VariantModel.cpp" line="245"/>
        <source>Value</source>
        <translation>Valeur</translation>
    </message>
</context>
<context>
    <name>VolumeGroupBaseDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="14"/>
        <source>Create Volume Group</source>
        <translation>Créer un groupe de volumes</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="20"/>
        <source>List of Physical Volumes</source>
        <translation>Liste des volumes physiques</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="30"/>
        <source>Volume Group Name:</source>
        <translation>Nom du groupe de volumes :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="43"/>
        <source>Volume Group Type:</source>
        <translation>Type de groupe de volumes :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="56"/>
        <source>Physical Extent Size:</source>
        <translation>Taille de l’étendue physique :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="66"/>
        <source> MiB</source>
        <translation>Mio</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="82"/>
        <source>Total Size:</source>
        <translation>Taille totale :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="102"/>
        <source>Used Size:</source>
        <translation>Taille utilisée :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="122"/>
        <source>Total Sectors:</source>
        <translation>Nombre total de secteurs :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="142"/>
        <source>Quantity of LVs:</source>
        <translation>Nombre de volumes logiques :</translation>
    </message>
</context>
<context>
    <name>WelcomePage</name>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="14"/>
        <source>Form</source>
        <translation>Form</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="69"/>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="82"/>
        <source>Select application and system language</source>
        <translation>Sélectionner la langue du système et des applications</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="190"/>
        <source>Open donations website</source>
        <translation>Site web pour effectuer des dons librement</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="230"/>
        <source>&amp;Donate</source>
        <translation>&amp;Faire un don</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="240"/>
        <source>Open help and support website</source>
        <translation>Site web d’aide et de support</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="300"/>
        <source>&amp;Release notes</source>
        <translation>&amp;Notes de version</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="290"/>
        <source>&amp;Known issues</source>
        <translation>&amp;Problèmes connus</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="243"/>
        <source>&amp;Support</source>
        <translation>&amp;Support</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="180"/>
        <source>&amp;About</source>
        <translation>&amp;À propos</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="254"/>
        <source>&lt;h1&gt;Welcome to the %1 installer.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Bienvenu sur l’installateur %1.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="253"/>
        <source>&lt;h1&gt;Welcome to the Calamares installer for %1.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Bienvenu sur l’installateur Calamares pour %1&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="247"/>
        <source>&lt;h1&gt;Welcome to the Calamares setup program for %1.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Bienvenu sur l’installateur Calamares pour %1&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="248"/>
        <source>&lt;h1&gt;Welcome to %1 setup.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Bienvenu sur l’installateur %1.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="266"/>
        <source>About %1 setup</source>
        <translation>À propos de l&apos;installateur %1</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="266"/>
        <source>About %1 installer</source>
        <translation>À propose de l&apos;installateur %1</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="269"/>
        <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Copyright 2017-2019 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;Thanks to &lt;a href=&quot;https://calamares.io/team/&quot;&gt;the Calamares team&lt;/a&gt; and the &lt;a href=&quot;https://www.transifex.com/kaos/kaos/&quot;&gt;KaOS translators team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;&lt;a href=&quot;https://calamares.io/&quot;&gt;Calamares&lt;/a&gt; development is sponsored by &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</source>
        <translation>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;pour %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Copyright 2017-2019 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;Merci à &lt;a href=&quot;https://calamares.io/team/&quot;&gt;l’équipe Calamares&lt;/a&gt; et l’&lt;a href=&quot;https://www.transifex.com/kaos/kaos/&quot;&gt;équipe de traducteurs KaOS&lt;/a&gt;. &lt;br/&gt;&lt;br/&gt;Le développement de &lt;a href=&quot;https://calamares.io/&quot;&gt;Calamares&lt;/a&gt; est sponsorisé par &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="259"/>
        <source>%1 support</source>
        <translation>%1 supporte</translation>
    </message>
</context>
<context>
    <name>WelcomeQmlViewStep</name>
    <message>
        <location filename="../src/modules/welcomeq/WelcomeQmlViewStep.cpp" line="58"/>
        <source>Welcome</source>
        <translation>Bienvenu</translation>
    </message>
</context>
<context>
    <name>WelcomeViewStep</name>
    <message>
        <location filename="../src/modules/welcome/WelcomeViewStep.cpp" line="62"/>
        <source>Welcome</source>
        <translation>Bienvenue</translation>
    </message>
</context>
<context>
    <name>notes</name>
    <message>
        <location filename="../src/branding/kaos_branding/notes.qml" line="50"/>
        <source>&lt;h3&gt;KaOS - 2020.02&lt;/h3&gt;
            &lt;p&gt;A nice way of starting 2020 is to present to you the January release of a new stable ISO.&lt;/p&gt;
            
            &lt;p&gt;For the many changes in this release, two stand out.  First one is the addition of signed kernel modules for Linux 5.4. All internal modules are now signed automatically during the kernel build, out of tree modules like virtualbox-modules and NVIDIA packages have the signing added too. Building of those modules was adjusted to use the kernel specific signing files during each and every rebuild. You can harden your system by adding &lt;code&gt;module.sig_enforce=1&lt;/code&gt; to your kernel boot line. To check if your systems contains any unsigned:&lt;/p&gt;
            
            &lt;p&gt;&lt;code&gt;for mod in $(lsmod | tail -n +2 | cut -d' ' -f1); do modinfo ${mod} | grep -q 'signature' || echo 'no signature for module: ${mod}' ; done&lt;/code&gt;&lt;/p&gt;
            
            &lt;p&gt;Second: To better accommodate hybrid systems and non-free NVIDIA, there is now a switch from libgl to vendor neutral libglvnd. This will make the NVIDIA bumblebee packages obsolete. Xorg-server was updated to 1.20.6, this now includes the needed patches to use Prime instead of Bumblebee. The needed scripts for this are packaged as the &lt;code&gt;prime&lt;/code&gt; package. The hardware-detection scripts and Calamares installer have their code adjusted to use the new Prime option. The availability of NVIDIA hybrid testing hardware was limited, so you might still encounter some issue with Prime.&lt;/p&gt;
            
            &lt;p&gt;Work has also continued last month to further remove python2. This time it was removed as makedepend from as many as possible.&lt;/b&gt;
            
            &lt;p&gt;You will find KDE Applications 19.12 on this ISO. Highlights of 19.12 include Kdenlive now comes with a spectacular new sound mixer. Dolphin redesigned advanced search options and now you can go backwards and forwards in the history of places you have already visited. KDE-Connect implemented a new Kirigami interface which provides new features for desktop-to-desktop users, such as media control, remote input, device ringing, file transfer and running commands. For Elisa, indexing music files has improved and now supports web radios and ships with a few examples for you to try.&lt;/b&gt;
            Frameworks is at 5.65.0, Plasma at 5.17.4 and KDE Applications at 19.12.0. All built on Qt 5.14.0.
            
            &lt;p&gt;For the installer Calamares, support for non-free NVIDIA with Prime has been added.&lt;/p&gt;
            
            &lt;p&gt;Since LibreOffice 6.2, it is now possible to supply this as a pure Qt5/kf5 application.  LibreOffice has thus replaced Calligra as the default Office Application for KaOS.
            
            &lt;p&gt;KaOS' creation &lt;strong&gt;Croeso&lt;/strong&gt; (Welsh for welcome) for helping with configuring a new install is included.  It will run on the newly installed system and offers to adjust some 15 commonly used settings and replaces the formerly used, PyQt based first run wizard Kaptan.  It also includes a custom Wallpaper selector, distribution info and news.  It is written in QML and fits well with the Welcome application used in the Live system.  The latter now includes a fully rewritten (also in QML) Installation Guide.&lt;/p&gt;
            
            &lt;p&gt;There is an option to verify the authenticity of downloaded KaOS ISO files through GPG signature verification, see the Download page for further details and instructions.&lt;/p&gt;
            
            &lt;p&gt;A KaOS specific tool to write ISO files to USB is in use.  Not only does IsoWriter write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do. It includes the option to verify the written USB in comparison to the used ISO file.&lt;/p&gt;
            
            &lt;p&gt;Most notable major updates to the base of the system are LLVM/Clang 9.0.1, Glib2 2.62.4, Bison 3.4.2, Python3 3.7.6, Linux 5.4.7, Protobuf 3.11.1, Mesa 19.2.8, NetworkManager 1.22.2, Nano 4.7, GStreamer 1.16.2 and Qt 5.14.0&lt;/p&gt;
            
            &lt;p&gt;KaOS repositories no longer provide Qt 4.  It is a good three years ago that development for Qt 4 stopped, late 2015 all support including security fixes ended.  Any application that has not made the transition to Qt 5 in all this time can no longer be supported in KaOS.  Either they actually are no longer maintained or their development is ignoring the implications of building on a possible insecure toolkit.&lt;/p&gt;
            
            &lt;p&gt;The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.&lt;/p&gt;

            &lt;p&gt;This ISO uses the &lt;b&gt;CRC and finobt enabled&lt;/b&gt; XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability  of  various  tools to validate and repair metadata corruptions when they are found.  The  free  inode  btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.&lt;/p&gt;
            
            &lt;p&gt;&lt;strong&gt;Octopi&lt;/strong&gt; is becoming a very crucial part of full system maintenance for KaOS. It is not just a GUI frontend to pacman. Tools like making sure a mirror is synced before starting any update, looking at the pacman logs, an option to get a paste from a complete snapshot of all info of a system with the SysInfo tool are included. Also included are very simple ways to open files, like copy to clipboard the file path shown in Octopi. To make sure the system doesn't start using too much disk space for the pacman cache, but still giving the user the option to retain some recent packages, the cache-cleaner tool is a great addition. The built-in tool to access &lt;b&gt;KCP&lt;/b&gt; has now a much clearer place with the addition of its own foreign icon in the menu-bar. New added is the option to select custom icons for the systemtray.&lt;/p&gt;
            
            &lt;p&gt;For UEFI installs, KaOS uses the simple, transparent but quite powerful systemd-boot as bootloader.&lt;/p&gt;
            
            &lt;p&gt;To learn more about the goals and ideas behind KaOS, please read the &lt;b&gt;http://kaosx.us/&lt;/b&gt;, &lt;b&gt;http://kaosx.us/about/&lt;/b&gt;, and &lt;b&gt;http://kaosx.us/faq/&lt;/b&gt; pages.&lt;/p&gt;
            
            &lt;p&gt;To avoid any misunderstanding and confusion, KaOS is &lt;b&gt;not based upon, derived of, or inspired by&lt;/b&gt; any one particular distribution. It is completely independent, build entirely from scratch with its own repositories. To read more about this see &lt;b&gt;http://kaosx.us/about/based/&lt;/b&gt;. A &lt;b&gt;rolling release distribution&lt;/b&gt; never has a final release, every ISO is merely a snapshot of the current status of the repositories. An idea what is currently available:&lt;/p&gt;
            
            &lt;p&gt;The ISO ships with &lt;b&gt;Frameworks 5.65.0, Plasma 5.17.4, KDE Applications 19.12.0&lt;/b&gt;, Linux 5.4.7, Systemd 243, Kmod 26, NetworkManager 1.22.2, LibreOffice 6.3.4, Krita 4.2.8, Elisa, Xorg-Server 1.20.6, Mesa 19.2.8, Glibc 2.30, GCC 9.2.0, non-free Nvidia 440.44, Pepperflash and Python3 3.7.6 to name a few.&lt;/p&gt;
            
            &lt;p&gt;The package manager is &lt;strong&gt;Pacman 5.2.1&lt;/strong&gt;, with the simple but powerful Octopi 0.9.0 as GUI frontend. Falkon is the default web browser, it is Qt based and the successor of Qupzilla. &lt;b&gt;GFXboot&lt;/b&gt; is included with KaOS artwork, Grub theme is Midna, Look &amp;amp; Feel is a KaOS exclusive version Midna.&lt;/p&gt;
            
            &lt;p&gt;&lt;b&gt;Repositories&lt;/b&gt; of KaOS will stay limited in size and expect it to stay at the current maximum of about 2100-2200. A gist of what is available, besides the stable kernel there is Linux-next 5.4, LibreOffice 6.3.4,VLC, Vokoscreen, Blender, Kodi, Calibre, Sigil, Vulkan packages, a few games like 0ad and Knights.&lt;br /&gt;
            A limited number of the most well-known GTK applications are available, examples Firefox 71.0, Chrome 81, Ardour 5.12.0, Inkscape 0.92.4, GIMP 2.10.14 and Google-talkplugin 5.41.3.0.1.&lt;br /&gt;
            Complete language packs are available for KDE, Calligra, Firefox, LibreOffice and Thunderbird. For IM, Fcitx 4.2.9.6 is available as a rather complete group.&lt;/p&gt;
            
            &lt;p&gt;&lt;b&gt;Known issues:&lt;/b&gt;&lt;/p&gt;
            &lt;ul&gt;
                &lt;li&gt;Some Intel CPU systems might have an issue kernel’s entropy pool and have a long boot delay, if encountered add &lt;strong&gt;random.trust_cpu=1&lt;/strong&gt; to the kernel boot line.
                &lt;li&gt;Installing on RAID is currently not possible&lt;/li&gt;
            &lt;/ul&gt;
            
            &lt;p&gt;To create &lt;b&gt;reliable&lt;/b&gt; installation media, please follow the instructions from the &lt;b&gt;http://kaosx.us/download/&lt;/b&gt; page. KaOS&apos;s ISO&apos;s &lt;b&gt;do not support Unetbootin or Rufus&lt;/b&gt;, and DVDs need a burn speed &lt;b&gt;no higher than 4x&lt;/b&gt;.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;KaOS - 2020.02&lt;/h3&gt;
            &lt;p&gt;Une bonne façon de commencer 2020 est de vous présenter la version de janvier d&apos;une nouvelle ISO stable.&lt;/p&gt;
            
            &lt;p&gt;Parmi les nombreux changements de cette version, deux se distinguent. Le premier est l’ajout de modules de noyau signés pour Linux 5.4. Tous les modules internes sont désormais signés automatiquement lors de la compilation du noyau, des modules hors de l’arborescence comme les modules virtualbox et les paquets NVIDIA ont également une signature ajoutée. La compilation de ces modules a été ajustée pour utiliser des fichiers de signature spécifiques au noyau lors de chaque recompilation. Vous pouvez durcir votre système en ajoutant &lt;code&gt;module.sig_enforce=1&lt;/code&gt; à votre ligne de démarrage du noyau. Pour vérifier si votre système contient des modules non signés :&lt;/p&gt;
            
            &lt;p&gt;&lt;code&gt;for mod in $(lsmod | tail -n +2 | cut -d&apos; &apos; -f1); do modinfo ${mod} | grep -q &apos;signature&apos; || echo &apos;no signature for module: ${mod}&apos; ; done&lt;/code&gt;&lt;/p&gt;
            
            &lt;p&gt;Deuxièmement, pour mieux s’adapter aux systèmes hybrides et NVIDIA non libre, on est passé de libgl à libglvnd qui est indépendant des fournisseurs. Cela rendra les paquets NVIDIA bumblebee obsolètes. Le serveur Xorg a été mis à jour à 1.20.6, cela inclut maintenant les correctifs nécessaires pour utiliser Prime à la place de Bumblebee. Les scripts nécessaires pour cela sont fournis dans le paquet &lt;code&gt;prime&lt;/code&gt;. Les scripts de détection du matériel et l’installeur Calamares ont leur code ajusté pour utiliser la nouvelle option Prime. La disponibilité du matériel de test hybride NVIDIA était limitée, vous pouvez donc toujours rencontrer des problèmes avec Prime..&lt;/p&gt;
            
            &lt;p&gt;Le travail s’est également poursuivi le mois dernier pour supprimer davantage python2. Cette fois, il a été supprimé du plus grand nombre de paquets possible.&lt;/b&gt;
            
            &lt;p&gt;Vous trouverez KDE Applications 19.12 sur cette ISO. Point sur les nouveautés de 19.12 : Kdenlive embarque désormais un mélangeur de sons spectaculaire. Dolphin a repensé les options de recherche avancées et vous pouvez maintenant avancer et reculer dans l’historique des dossiers que vous avez déjà visités.. KDE-Connect implémente une nouvelle interface Kirigami qui offre de nouvelles fonctionnalités aux utilisateurs de bureau à bureau, telles que le contrôle des médias, l’entrée à distance, la sonnerie du périphérique, le transfert de fichiers et l’exécution de commandes. Concernant Elisa, l’indexation des fichiers musicaux s’est améliorée et prend désormais en charge les radios Web et est livrée avec quelques exemples à essayer.&lt;/b&gt;
            Frameworks passe en version 5.65.0, Plasma en 5.17.4 et KDE Applications en 19.12.0. Le tout compilé avec Qt 5.14.0.
            
            &lt;p&gt;Concernant l’installeur Calamares, la prise en charge de NVIDIA non libre avec Prime a été ajoutée..&lt;/p&gt;
            
            &lt;p&gt;Depuis LibreOffice 6.2, il est désormais possible de le fournir en tant qu’application Qt5/kf5 pure.  LibreOffice a donc remplacé Calligra comme application bureautique par défaut sur KaOS.
            
            &lt;p&gt;La créaiton de KaOS&lt;strong&gt;Croeso&lt;/strong&gt; (bienvenu en gallois) pour faciliter la configuration d’une nouvelle installation est inclus.  Il s’exécuter sur un système nouvellement installé et permet d’ajuster les paramètres parmi les 15 les plus fréquemment utilisés. Il remplace l’application Kaptan basée sur PyQt.  Il inclut également un sélecteur personnalisé de fonds d’écran, des informations sur la distribution et des nouveautés.  Il est écrit en QML et s’intègre bien avec l’application de bienvenue utilisée dans le système Live.  Ce dernier inclut désormais un guide d&apos;installation entièrement réécrit (également en QML).&lt;/p&gt;
            
            &lt;p&gt;Il existe une option pour vérifier l’authenticité des fichiers ISO KaOS téléchargés via la vérification de signature GPG, voir la page de téléchargement pour plus de détails et pour les instructions.&lt;/p&gt;
            
            &lt;p&gt;Un outil propre à KaOS pour graver des fichiers ISO sur USB est fourni. Non seulement IsoWriter écritl sur USB, mais il permet également de récupérer votre clé USB après l’avoir utilisée pour une image ISO, ce que la copie dd régulière ou Imagewriter précédemment utilisé ne pouvaient pas faire. Il comprend la possibilité de vérifier la cohérence entre la gravure de l’USB et le fichier ISO utilisé.&lt;/p&gt;
            
            &lt;p&gt;Les principales mises à jour de la base du système sont LLVM/Clang 9.0.1, Glib2 2.62.4, Bison 3.4.2, Python3 3.7.6, Linux 5.4.7, Protobuf 3.11.1, Mesa 19.2.8, NetworkManager 1.22.2, Nano 4.7, GStreamer 1.16.2 et Qt 5.14.0&lt;/p&gt;
            
            &lt;p&gt;Les dépôts KaOS ne fournissent plus Qt 4. Il y a trois ans, le développement de Qt 4 s’est arrêté, fin 2015, tout le support, y compris les correctifs de sécurité, a pris fin. Toute application qui n’a pas effectué la transition vers Qt 5 pendant tout ce temps ne peut plus être prise en charge dans KaOS. Soit ils ne sont en fait plus maintenus, soit leur développement ignore les implications de la compilation avec un toolkit potentiellement non sécurisé.&lt;/p&gt;
            
            &lt;p&gt;L’apparence comprend des thèmes d’icônes personnalisés pour les thèmes clairs et sombres. Midna et Midna Dark créent toutes deux un aspect unifié complet depuis le démarrage jusqu’à la déconnexion.&lt;/p&gt;

            &lt;p&gt;Cette ISO utilise le système de fichiers XFS avc &lt;b&gt;CRC et finobt autorisés&lt;/b&gt; par défaut. Les CRCs permettent un détection des erreurs matérielles améliorée, tandis que les changements de format améliorent également les algorithmes de récupération après incident et la capacité de divers outils à valider et réparer les corruptions de métadonnées lorsqu’elles sont trouvées. L’arbre-B des inodes libres n’indexe pas les inodes utilisés, ce qui permet une performante de l’allocation des inodes plus rapide et plus consistante que les vieux systèmes de fichiers.&lt;/p&gt;
            
            &lt;p&gt;&lt;strong&gt;Octopi&lt;/strong&gt; est devenu une partie cruciale pour la maintenance de tout le système sur KaOS. Ce n’est plus simplement une interface graphique à pacman. Des outils comme la vérification de la synchronisation d’un miroir avant de commencer toute mise à jour, la consultattion des journaux pacman, une option pour obtenir un collage à partir d&apos;un instantané complet de toutes les informations d’un système avec l’outil SysInfo sont inclus. Sont également inclus des moyens très simples d’ouvrir des fichiers, comme copier dans le presse-papiers le chemin d’accès au fichier affiché dans Octopi. Pour vous assurer que le système ne commence pas à utiliser trop d’espace disque pour le cache pacman, mais tout en offrant à l&apos;utilisateur la possibilité de conserver certains paqutes récents, l&apos;outil de nettoyage du cache est un excellent ajout. L&apos;outil intégré pour accéder à &lt;b&gt;KCP&lt;/b&gt; a maintenant une place beaucoup plus claire avec l’ajout de sa propre icône alien dans la barre de menus. Un nouvel ajout est également la possibilité de sélectionner des icônes personnalisées pour la barre d’état.&lt;/p&gt;
            
            &lt;p&gt;Sur les installations UEFI, KaOS utilise systemd-boot comme chargeur de démarrage simple, transparent mais plutôt puissant.&lt;/p&gt;
            
            &lt;p&gt;Pour en savoir plus sur les objectifs et les idées derrière KaOS, veuillez lire les pages &lt;b&gt;http://kaosx.us/&lt;/b&gt;, &lt;b&gt;http://kaosx.us/about/&lt;/b&gt;, et &lt;b&gt;http://kaosx.us/faq/&lt;/b&gt;.&lt;/p&gt;
            
            &lt;p&gt;Afin d’empêcher toute incompréhension ou confusion, KaOS n’est &lt;b&gt;pas basée sur, dérivée ou inspirée&lt;/b&gt;  de quelconque distribution. Elle est complètement indépendante, conçue entièrement de zéro avec ses propres dépôts. Pour en savoir plus à ce sujet, lisez &lt;b&gt;http://kaosx.us/about/based/&lt;/b&gt;. Une &lt;b&gt;distribution rolling release&lt;/b&gt; n’a jamais de version finale, chaque ISO est un instantané de satut actuel des dépôts. Aperçu de ce qui est actuellement disponible :&lt;/p&gt;
            
            &lt;p&gt;L’ISO embarque &lt;b&gt;Frameworks 5.65.0, Plasma 5.17.4, KDE Applications 19.12.0&lt;/b&gt;, Linux 5.4.7, Systemd 243, Kmod 26, NetworkManager 1.22.2, LibreOffice 6.3.4, Krita 4.2.8, Elisa, Xorg-Server 1.20.6, Mesa 19.2.8, Glibc 2.30, GCC 9.2.0, non-free Nvidia 440.44, Pepperflash et Python3 3.7.6 pour en nommer quelques uns.&lt;/p&gt;
            
            &lt;p&gt;Le gestionnaire de paquets est &lt;strong&gt;Pacman 5.2.1&lt;/strong&gt;, avec l’inteface graphique simple mais puissante Octopi 0.9.0. Falkon est le navigateur par défaut, basé sur Qt et successeur de Qupzilla. &lt;b&gt;GFXboot&lt;/b&gt; est inclut avec un thème KaOS, le thème de Grub est Midna, propre à KaOS.&lt;/p&gt;
            
            &lt;p&gt;&lt;b&gt;Les dépôts&lt;/b&gt; de KaOS resteront limités en taille avec un maximum 2100-2200 comme actuellement. Un aperçu de ce qui est disponible, en plus du noyau stable il y a Linux-next 5.4, LibreOffice 6.3.4,VLC, Vokoscreen, Blender, Kodi, Calibre, Sigil, les paquets Vulkan et quelques jeux comme 0ad et Knights.&lt;br /&gt;
            Un nombre limité d’applications GTK célèbres sont disponibles, comme Firefox 71.0, Chrome 81, Ardour 5.12.0, Inkscape 0.92.4, GIMP 2.10.14 et Google-talkplugin 5.41.3.0.1.&lt;br /&gt;
            Les paquets de langues complets sont disponibles pour  KDE, Calligra, Firefox, LibreOffice et Thunderbird. Pour IM, Fcitx 4.2.9.6 est disponible en tant que groupe plutôt complet.&lt;/p&gt;
            
            &lt;p&gt;&lt;b&gt;Problèmes connus :&lt;/b&gt;&lt;/p&gt;
            &lt;ul&gt;
                &lt;li&gt;Certains systèmes utilisant un CPU Intel peuvent avoir un problème avec le pool d’entropie du noyau, ce qui cause un délai de démarrage assez long. Si vous avez ce problème, ajoutez &lt;strong&gt;random.trust_cpu=1&lt;/strong&gt; à la ligne de démarrage du noyau.
                &lt;li&gt;L’installation sur RAID n’est pas possible.&lt;/li&gt;
            &lt;/ul&gt;
            
            &lt;p&gt;Pour créer un média d’installation &lt;b&gt;fiable&lt;/b&gt; veuillez suivre les instructions de la page &lt;b&gt;http://kaosx.us/download/&lt;/b&gt;. Les ISO KaOS &lt;b&gt;ne supportent ni Unetbootin ni Rufus&lt;/b&gt; et les DVD ne doivent pas être gravés à une vitesse &lt;b&gt;supérieure à 4x&lt;/b&gt;.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>notesqml</name>
    <message>
        <location filename="../src/modules/notesqml/notesqml.qml" line="51"/>
        <source>&lt;h3&gt;Generic GNU/Linux 2020.2 LTS &lt;quote&gt;Turgid Tuba&lt;/quote&gt;&lt;/h3&gt;
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
        <translation>&lt;h3&gt;Generic GNU/Linux 2020.2 LTS &lt;quote&gt;Turgid Tuba&lt;/quote&gt;&lt;/h3&gt;
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
            
            &lt;p&gt;The vertical scrollbar is adjustable, current width set to 10.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>show</name>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="48"/>
        <source>Here the actual install of KaOS will start.&lt;br/&gt;Use the left &lt;b&gt;mouse button&lt;/b&gt; to go to the next slide, right for previous.&lt;br/&gt;After creating your chosen disk setup in the first 10 % &lt;br/&gt;the full copying of the ISO will take the longest of this install phase &lt;br/&gt;and will run until approximately 30%.&lt;br/&gt;</source>
        <translation>L’installation de KaOS va commencer à partir d’ici.&lt;br/&gt;Veuillez utiliser le &lt;b&gt;bouton gauche de la souris&lt;/b&gt; pour passer à la diapositive suivante, bouton droit pour la précédente.&lt;br/&gt;Une fois les disques choisis créés dans les premier 10%,&lt;br/&gt; la copie de toute l’ISO sera la phase la plus longue de l’installation&lt;br/&gt; et durera jusqu’à environ 30%.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="74"/>
        <source>After the ISO is copied some 25 post-install modules will run.&lt;br/&gt;This includes setting user specific options, &lt;br/&gt;removing Live Session only packages&lt;br/&gt;and adjusting hardware setup.&lt;br/&gt;</source>
        <translation>Une fois l’ISO copiée, près de 25 modules post-installation seront exécutés.&lt;br/&gt;Cela comprend la configuration d’options utilisateur spécifiques,&lt;br/&gt;la suppression des paquets uniquement utilisés pour la session Live&lt;br/&gt;et la configuration des paramètres matériels.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="99"/>
        <source>The default Office Suite is LibreOffice.&lt;br/&gt;Calligra is available in the repositories. &lt;br/&gt;</source>
        <translation>La suite Office par défaut est LibreOffice.&lt;br/&gt; Calligra est disponible dans les dépôts.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="122"/>
        <source>Qt/KDE specific internet applications include the &lt;br/&gt;Falkon web-browser and kde-telepathy for &lt;br/&gt;chat and Instant Messaging. &lt;br/&gt;</source>
        <translation>Parmi les applications internet spécifiquement Qt/KDE, on peut noter &lt;br/&gt;le navigateur Falkon et kde-telepathy pour &lt;br/&gt;la messagerie instantanée et client chat.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="146"/>
        <source>For package management Octopi is the GUI application.&lt;br/&gt;</source>
        <translation>Octopi est l’interface graphique pour la gestion de paquets.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="168"/>
        <source>May using KaOS be a pleasant experience for you.</source>
        <translation>En espérant que KaOS vous soit une expérience agréable.</translation>
    </message>
    <message>
        <location filename="../src/branding/default/show.qml" line="64"/>
        <source>This is a second Slide element.</source>
        <translation>This is a second Slide element.</translation>
    </message>
    <message>
        <location filename="../src/branding/default/show.qml" line="68"/>
        <source>This is a third Slide element.</source>
        <translation>This is a third Slide element.</translation>
    </message>
</context>
</TS>