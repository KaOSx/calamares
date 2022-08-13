<?xml version="1.0" ?><!DOCTYPE TS><TS version="2.1" language="ja">
<context>
    <name>AboutData</name>
    <message>
        <location filename="../src/libcalamares/CalamaresAbout.cpp" line="17"/>
        <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt; for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;</source>
        <translation type="unfinished"/>
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
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>AutoMountManagementJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/AutoMountManagementJob.cpp" line="22"/>
        <source>Manage auto-mount settings</source>
        <translation>自動マウント設定を管理する</translation>
    </message>
</context>
<context>
    <name>BIOS</name>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="41"/>
        <source>GRUB 2, the GRand Unified Bootloader is the reference implementation of the Free Software Foundation&apos;s Multiboot Specification, which provides a user the choice to boot one of multiple operating systems installed on a computer.</source>
        <translation>GRUB 2は、フリーソフトウェアファウンデーションのマルチブート仕様のリファレンス実装で、コンピュータにインストールされた複数のOSの中から1つを起動する選択肢をユーザーに提供するものです。</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="54"/>
        <source>GRUB</source>
        <translation>GRUB</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="108"/>
        <source>No bootloader selected. Selecting no bootloader might result in an un-bootable system, if you don&apos;t already have a bootloader were you can add this install to.</source>
        <translation>ブートローダーが選択されていません。ブートローダーを選択しなければブートできないシステムになるでしょう。もし、まだブートローダーがない場合はこのインストールに追加することができます。</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="121"/>
        <source>No bootloader</source>
        <translation>ブートローダーがありません</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="173"/>
        <source>Please select a bootloader option for your install, or leave the default option, &lt;strong&gt;GRUB 2&lt;/strong&gt;.</source>
        <translation>インストールするブートローダのオプションを選択するか、デフォルトのオプションである&lt;strong&gt;GRUB 2&lt;/strong&gt;のままにしておいてください。</translation>
    </message>
</context>
<context>
    <name>BootInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="62"/>
        <source>The &lt;strong&gt;boot environment&lt;/strong&gt; of this system.&lt;br&gt;&lt;br&gt;Older x86 systems only support &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Modern systems usually use &lt;strong&gt;EFI&lt;/strong&gt;, but may also show up as BIOS if started in compatibility mode.</source>
        <translation>このシステムの&lt;strong&gt;ブート環境&lt;/strong&gt;。&lt;br&gt;&lt;br&gt;古いx86システムは&lt;strong&gt;BIOS&lt;/strong&gt;のみサポートされています。&lt;br&gt;最新のシステムには&lt;strong&gt;EFI&lt;/strong&gt;が通常利用されますが、互換モードで起動した場合BIOSとして表示されることがあります。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="72"/>
        <source>This system was started with an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from an EFI environment, this installer must deploy a boot loader application, like &lt;strong&gt;GRUB&lt;/strong&gt; or &lt;strong&gt;systemd-boot&lt;/strong&gt; on an &lt;strong&gt;EFI System Partition&lt;/strong&gt;. This is automatic, unless you choose manual partitioning, in which case you must choose it or create it on your own.</source>
        <translation>このシステムは&lt;strong&gt;EFI&lt;/strong&gt;ブート環境で起動しました。&lt;br&gt;&lt;br&gt;EFI環境からのスタートアップを構成するには、このインストーラは&lt;strong&gt;EFIシステムパーティション&lt;/strong&gt;に&lt;strong&gt;GRUB&lt;/strong&gt;や&lt;strong&gt;systemd-boot&lt;/strong&gt;のようなブートローダーアプリケーションを展開しなければなりません。手動でパーティションを選択しない限り、これは自動的に行われます。手動でパーティションを選択する場合は、選択するか、自分で作成する必要があります。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="84"/>
        <source>This system was started with a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from a BIOS environment, this installer must install a boot loader, like &lt;strong&gt;GRUB&lt;/strong&gt;, either at the beginning of a partition or on the &lt;strong&gt;Master Boot Record&lt;/strong&gt; near the beginning of the partition table (preferred). This is automatic, unless you choose manual partitioning, in which case you must set it up on your own.</source>
        <translation>このシステムは &lt;strong&gt;BIOS&lt;/strong&gt; ブート環境で起動されました。&lt;br&gt;&lt;br&gt;BIOS 環境からの起動を設定するため、このインストーラーはパーティションの先頭またはパーティションテーブルの先頭近くの&lt;strong&gt;マスターブートレコード&lt;/strong&gt;に、&lt;strong&gt;GRUB&lt;/strong&gt; などのブートローダーをインストールする必要があります（推奨）。手動パーティションニングを選択しない限り、これは自動的に行われます。手動パーティションニングを選択した場合は、自分で設定する必要があります。</translation>
    </message>
</context>
<context>
    <name>BootLoaderModel</name>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="60"/>
        <source>Master Boot Record of %1</source>
        <translation>%1 のマスターブートレコード</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="93"/>
        <source>Boot Partition</source>
        <translation>ブートパーティション</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="100"/>
        <source>System Partition</source>
        <translation>システムパーティション</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="131"/>
        <source>Do not install a boot loader</source>
        <translation>ブートローダーをインストールしません</translation>
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
        <translation>空白のページ</translation>
    </message>
</context>
<context>
    <name>Calamares::DebugWindow</name>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="18"/>
        <source>Form</source>
        <translation>Form</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="28"/>
        <source>GlobalStorage</source>
        <translation>グローバルストレージ</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="38"/>
        <source>JobQueue</source>
        <translation>ジョブキュー</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="48"/>
        <source>Modules</source>
        <translation>モジュール</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="61"/>
        <source>Type:</source>
        <translation>Type:</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="68"/>
        <location filename="../src/calamares/DebugWindow.ui" line="82"/>
        <source>none</source>
        <translation>なし</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="75"/>
        <source>Interface:</source>
        <translation>インターフェース:</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="102"/>
        <source>Crashes Calamares, so that Dr. Konqui can look at it.</source>
        <translation>Calamares をクラッシュさせ、Dr. Konquiで見れるようにする。</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="115"/>
        <source>Reloads the stylesheet from the branding directory.</source>
        <translation>ブランディングディレクトリからスタイルシートをリロードする。</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="141"/>
        <source>Uploads the session log to the configured pastebin.</source>
        <translation>設定されたペーストビンにセッションログをアップロードする。</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="144"/>
        <source>Send Session Log</source>
        <translation>セッションログを送信</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="118"/>
        <source>Reload Stylesheet</source>
        <translation>スタイルシートを再読み込み</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="128"/>
        <source>Displays the tree of widget names in the log (for stylesheet debugging).</source>
        <translation>ログにウィジェット名のツリーを表示する（スタイルシートのデバッグ用）。</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="131"/>
        <source>Widget Tree</source>
        <translation>ウィジェットツリー</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.cpp" line="164"/>
        <source>Debug information</source>
        <translation>デバッグ情報</translation>
    </message>
</context>
<context>
    <name>Calamares::ExecutionViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="118"/>
        <source>Set up</source>
        <translation>セットアップ</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="118"/>
        <source>Install</source>
        <translation>インストール</translation>
    </message>
</context>
<context>
    <name>Calamares::FailJob</name>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="29"/>
        <source>Job failed (%1)</source>
        <translation>ジョブに失敗 (%1)</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="30"/>
        <source>Programmed job failure was explicitly requested.</source>
        <translation>要求されたジョブは失敗しました。</translation>
    </message>
</context>
<context>
    <name>Calamares::JobThread</name>
    <message>
        <location filename="../src/libcalamares/JobQueue.cpp" line="203"/>
        <source>Done</source>
        <translation>完了</translation>
    </message>
</context>
<context>
    <name>Calamares::NamedJob</name>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="17"/>
        <source>Example job (%1)</source>
        <translation>ジョブの例 (%1)</translation>
    </message>
</context>
<context>
    <name>Calamares::ProcessJob</name>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="42"/>
        <source>Run command &apos;%1&apos; in target system.</source>
        <translation>ターゲットシステムでコマンド &apos;%1&apos; を実行。</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="42"/>
        <source> Run command &apos;%1&apos;.</source>
        <translation>コマンド &apos;%1&apos; を実行。</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="49"/>
        <source>Running command %1 %2</source>
        <translation>コマンド %1 %2 を実行しています</translation>
    </message>
</context>
<context>
    <name>Calamares::PythonJob</name>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="233"/>
        <source>Running %1 operation.</source>
        <translation>%1 操作を実行しています。</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="262"/>
        <source>Bad working directory path</source>
        <translation>不正なワーキングディレクトリパス</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="263"/>
        <source>Working directory %1 for python job %2 is not readable.</source>
        <translation>python ジョブ %2 の作業ディレクトリ %1 が読み取れません。</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="269"/>
        <source>Bad main script file</source>
        <translation>不正なメインスクリプトファイル</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="270"/>
        <source>Main script file %1 for python job %2 is not readable.</source>
        <translation>python ジョブ %2 におけるメインスクリプトファイル %1 が読み取れません。</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="343"/>
        <source>Boost.Python error in job &quot;%1&quot;.</source>
        <translation>ジョブ &quot;%1&quot; での Boost.Python エラー。</translation>
    </message>
</context>
<context>
    <name>Calamares::QmlViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="67"/>
        <source>Loading ...</source>
        <translation>ロードしています...</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="88"/>
        <source>QML Step &lt;i&gt;%1&lt;/i&gt;.</source>
        <translation>QML ステップ &lt;i&gt;%1&lt;/i&gt;。</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="268"/>
        <source>Loading failed.</source>
        <translation>ロードが失敗しました。</translation>
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
        <translation><numerusform> %n 個のモジュールを待機しています。</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="119"/>
        <source>(%n second(s))</source>
        <translation><numerusform>(%n 秒(s))</numerusform></translation>
    </message>
    <message>
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="124"/>
        <source>System-requirements checking is complete.</source>
        <translation>要求されるシステムの確認を終了しました。</translation>
    </message>
</context>
<context>
    <name>Calamares::ViewManager</name>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="397"/>
        <source>&amp;Back</source>
        <translation>戻る (&amp;B)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="392"/>
        <source>&amp;Next</source>
        <translation>次へ (&amp;N)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="422"/>
        <source>&amp;Cancel</source>
        <translation>中止 (&amp;C)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="381"/>
        <source>Cancel setup without changing the system.</source>
        <translation>システムを変更することなくセットアップを中止します。</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="382"/>
        <source>Cancel installation without changing the system.</source>
        <translation>システムを変更しないでインストールを中止します。</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="160"/>
        <source>Setup Failed</source>
        <translation>セットアップに失敗しました。</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/Paste.cpp" line="178"/>
        <source>Install log posted to

%1

Link copied to clipboard</source>
        <translation>インストールログをこちらに送信しました

%1

クリップボードにリンクをコピーしました</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/Paste.cpp" line="184"/>
        <source>Install Log Paste URL</source>
        <translation>インストールログを貼り付けるURL</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/Paste.cpp" line="166"/>
        <source>The upload was unsuccessful. No web-paste was done.</source>
        <translation>アップロードは失敗しました。ウェブへの貼り付けは行われませんでした。</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="189"/>
        <source>Calamares Initialization Failed</source>
        <translation>Calamares によるインストールに失敗しました。</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="190"/>
        <source>%1 can not be installed. Calamares was unable to load all of the configured modules. This is a problem with the way Calamares is being used by the distribution.</source>
        <translation>%1 をインストールできません。Calamares はすべてのモジュールをロードすることをできませんでした。これは、Calamares のこのディストリビューションでの使用法による問題です。</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="196"/>
        <source>&lt;br/&gt;The following modules could not be loaded:</source>
        <translation>&lt;br/&gt;以下のモジュールがロードできませんでした。:</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="310"/>
        <source>Continue with installation?</source>
        <translation>セットアップを続行しますか？</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="312"/>
        <source>The %1 setup program is about to make changes to your disk in order to set up %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation>%1 のセットアッププッログラムは %2 のセットアップのためディスクの内容を変更します。&lt;br/&gt;&lt;strong&gt;これらの変更は取り消しできません。&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="318"/>
        <source>&amp;Set up now</source>
        <translation>セットアップしています (&amp;S)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="376"/>
        <source>&amp;Set up</source>
        <translation>セットアップ (&amp;S)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="376"/>
        <source>&amp;Install</source>
        <translation>インストール (&amp;I)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="378"/>
        <source>Setup is complete. Close the setup program.</source>
        <translation>セットアップが完了しました。プログラムを閉じます。</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="495"/>
        <source>Cancel setup?</source>
        <translation>セットアップを中止しますか？</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="495"/>
        <source>Cancel installation?</source>
        <translation>インストールを中止しますか？</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="496"/>
        <source>Do you really want to cancel the current setup process?
The setup program will quit and all changes will be lost.</source>
        <translation>本当に現在のセットアップのプロセスを中止しますか？
すべての変更が取り消されます。</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="498"/>
        <source>Do you really want to cancel the current install process?
The installer will quit and all changes will be lost.</source>
        <translation>本当に現在の作業を中止しますか？
すべての変更が取り消されます。</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="90"/>
        <source>&amp;Yes</source>
        <translation>はい (%Y)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="91"/>
        <source>&amp;No</source>
        <translation>いいえ (&amp;N)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="92"/>
        <source>&amp;Close</source>
        <translation>閉じる (&amp;C)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="310"/>
        <source>Continue with setup?</source>
        <translation>セットアップを続けますか？</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="315"/>
        <source>The %1 installer is about to make changes to your disk in order to install %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation>%1 インストーラーは %2 をインストールするためディスクの内容を変更しようとしています。&lt;br/&gt;&lt;strong&gt;これらの変更は取り消せません。&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="318"/>
        <source>&amp;Install now</source>
        <translation>今すぐインストール (&amp;I)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="326"/>
        <source>Go &amp;back</source>
        <translation>戻る (&amp;B)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="403"/>
        <source>&amp;Done</source>
        <translation>完了 (&amp;D)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="379"/>
        <source>The installation is complete. Close the installer.</source>
        <translation>インストールが完了しました。インストーラーを閉じます。</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="163"/>
        <source>Error</source>
        <translation>エラー</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="160"/>
        <source>Installation Failed</source>
        <translation>インストールに失敗しました。</translation>
    </message>
</context>
<context>
    <name>CalamaresPython::Helper</name>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="302"/>
        <source>Unknown exception type</source>
        <translation>不明な例外型</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="320"/>
        <source>unparseable Python error</source>
        <translation>解析不能なPythonエラー</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="364"/>
        <source>unparseable Python traceback</source>
        <translation>解析不能な Python トレースバック</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="371"/>
        <source>Unfetchable Python error.</source>
        <translation>取得不能なPythonエラー。</translation>
    </message>
</context>
<context>
    <name>CalamaresWindow</name>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="396"/>
        <source>%1 Setup Program</source>
        <translation>%1 セットアッププログラム</translation>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="397"/>
        <source>%1 Installer</source>
        <translation>%1 インストーラー</translation>
    </message>
</context>
<context>
    <name>ChangeFilesystemLabelJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="34"/>
        <source>Set filesystem label on %1.</source>
        <translation>ファイルシステムのラベルを %1 に設定する。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="41"/>
        <source>Set filesystem label &lt;strong&gt;%1&lt;/strong&gt; to partition &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>ファイルシステムのラベル &lt;strong&gt;%1&lt;/strong&gt; をパーティション &lt;strong&gt;%2&lt;/strong&gt; に設定する。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="71"/>
        <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="83"/>
        <source>The installer failed to update partition table on disk &apos;%1&apos;.</source>
        <translation>インストーラーはディスク &apos;%1&apos; 上のパーティションテーブルのアップデートに失敗しました。</translation>
    </message>
</context>
<context>
    <name>CheckerContainer</name>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerContainer.cpp" line="38"/>
        <source>Gathering system information...</source>
        <translation>システム情報を取得しています...</translation>
    </message>
</context>
<context>
    <name>ChoicePage</name>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="140"/>
        <source>After:</source>
        <translation>後:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1041"/>
        <source>%1 will be shrunk to %2MiB and a new %3MiB partition will be created for %4.</source>
        <translation>%1 は %2MiB に縮小され、%4 に新しい %3MiB のパーティションが作成されます。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1323"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1360"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1382"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1407"/>
        <source>&lt;strong&gt;Erase disk&lt;/strong&gt;&lt;br/&gt;This will &lt;font color=&quot;red&quot;&gt;delete&lt;/font&gt; all data currently present on the selected storage device.</source>
        <translation>&lt;strong&gt;ディスクの消去&lt;/strong&gt;&lt;br/&gt;選択したストレージデバイス上のデータがすべて &lt;font color=&quot;red&quot;&gt;削除&lt;/font&gt;されます。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1327"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1356"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1378"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1403"/>
        <source>&lt;strong&gt;Install alongside&lt;/strong&gt;&lt;br/&gt;The installer will shrink a partition to make room for %1.</source>
        <translation>&lt;strong&gt;共存してインストール&lt;/strong&gt;&lt;br/&gt;インストーラは %1 用の空きスペースを確保するため、パーティションを縮小します。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1331"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1365"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1386"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1411"/>
        <source>&lt;strong&gt;Replace a partition&lt;/strong&gt;&lt;br/&gt;Replaces a partition with %1.</source>
        <translation>&lt;strong&gt;パーティションの置換&lt;/strong&gt;&lt;br/&gt;パーティションを %1 に置き換えます。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1679"/>
        <source>Boot loader location:</source>
        <translation>ブートローダーの場所:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="138"/>
        <source>Select storage de&amp;vice:</source>
        <translation>ストレージデバイスを選択 (&amp;V):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="139"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1016"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1068"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1121"/>
        <source>Current:</source>
        <translation>現在:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="881"/>
        <source>Reuse %1 as home partition for %2.</source>
        <translation>%1 を %2 のホームパーティションとして再利用する</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1017"/>
        <source>&lt;strong&gt;Select a partition to shrink, then drag the bottom bar to resize&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;縮小するパーティションを選択し、下のバーをドラッグしてサイズを変更して下さい&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1112"/>
        <source>&lt;strong&gt;Select a partition to install on&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;インストールするパーティションの選択&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1173"/>
        <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>システムにEFIシステムパーティションが存在しません。%1 のセットアップのため、元に戻り、手動パーティショニングを使用してください。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1181"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>%1 の EFI システム パーティションは、%2 の起動に使用されます。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1189"/>
        <source>EFI system partition:</source>
        <translation>EFIシステムパーティション:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1318"/>
        <source>This storage device does not seem to have an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>このストレージデバイスにはオペレーティングシステムが存在しないようです。何を行いますか？&lt;br/&gt;ストレージデバイスに対する変更を行う前に、変更点をレビューし、確認することができます。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1350"/>
        <source>This storage device has %1 on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>このストレージデバイスには %1 が存在します。何を行いますか？&lt;br/&gt;ストレージデバイスに対する変更を行う前に、変更点をレビューし、確認することができます。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1373"/>
        <source>This storage device already has an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>このストレージデバイスにはすでにオペレーティングシステムが存在します。何を行いますか？&lt;br/&gt;ストレージデバイスに対する変更を行う前に、変更点をレビューし、確認することができます。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1398"/>
        <source>This storage device has multiple operating systems on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>このストレージデバイスには複数のオペレーティングシステムが存在します。何を行いますか？&lt;br /&gt;ストレージデバイスに対する変更を行う前に、変更点をレビューし、確認することができます。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1470"/>
        <source>This storage device already has an operating system on it, but the partition table &lt;strong&gt;%1&lt;/strong&gt; is different from the needed &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;</source>
        <translation>このストレージデバイスにはすでにオペレーティングシステムがインストールされていますが、パーティションテーブル &lt;strong&gt;%1&lt;/strong&gt; は必要な &lt;strong&gt;%2&lt;/strong&gt; とは異なります。&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1493"/>
        <source>This storage device has one of its partitions &lt;strong&gt;mounted&lt;/strong&gt;.</source>
        <translation>このストレージデバイスにはパーティションの1つが&lt;strong&gt;マウントされています&lt;/strong&gt;。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1498"/>
        <source>This storage device is a part of an &lt;strong&gt;inactive RAID&lt;/strong&gt; device.</source>
        <translation>このストレージデバイスは&lt;strong&gt;非アクティブなRAID&lt;/strong&gt;デバイスの一部です。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1617"/>
        <source>No Swap</source>
        <translation>スワップを使用しない</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1626"/>
        <source>Reuse Swap</source>
        <translation>スワップを再利用</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1629"/>
        <source>Swap (no Hibernate)</source>
        <translation>スワップ(ハイバーネートなし)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1632"/>
        <source>Swap (with Hibernate)</source>
        <translation>スワップ(ハイバーネート)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1635"/>
        <source>Swap to file</source>
        <translation>ファイルにスワップ</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1648"/>
        <source>&lt;strong&gt;Manual partitioning&lt;/strong&gt;&lt;br/&gt;You can create or resize partitions yourself.&lt;br/&gt;Having a GPT partition table and &lt;strong&gt;fat32 512Mb /boot partition is a must for UEFI installs&lt;/strong&gt;,&lt;br/&gt;either use an existing without formatting or create one.</source>
        <translation>&lt;strong&gt;手動パーティション&lt;/strong&gt;&lt;br/&gt;パーティションを自分で作成またはサイズ変更することができます。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.ui" line="18"/>
        <source>Form</source>
        <translation>Form</translation>
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
        <translation>%1 を正常にアンマウントしました。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="279"/>
        <source>Successfully disabled swap %1.</source>
        <translation>スワップ %1 を正常に無効にしました。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="305"/>
        <source>Successfully cleared swap %1.</source>
        <translation>スワップ %1 を正常にクリアしました。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="319"/>
        <source>Successfully closed mapper device %1.</source>
        <translation>マッパーデバイス %1 を正常に閉じました。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="332"/>
        <source>Successfully disabled volume group %1.</source>
        <translation>ボリュームグループ %1 を正常に無効にしました。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="371"/>
        <source>Clear mounts for partitioning operations on %1</source>
        <translation>%1 のパーティション操作のため、マウントを解除する</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="377"/>
        <source>Clearing mounts for partitioning operations on %1.</source>
        <translation>%1 のパーティション操作のため、マウントを解除しています。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="396"/>
        <source>Cleared all mounts for %1</source>
        <translation>%1 のすべてのマウントを解除しました</translation>
    </message>
</context>
<context>
    <name>ClearTempMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="33"/>
        <source>Clear all temporary mounts.</source>
        <translation>すべての一時的なマウントをクリアする</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="40"/>
        <source>Clearing all temporary mounts.</source>
        <translation>すべての一時的なマウントをクリアしています。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="70"/>
        <source>Cleared all temporary mounts.</source>
        <translation>すべての一時的なマウントを解除しました。</translation>
    </message>
</context>
<context>
    <name>CommandList</name>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="165"/>
        <source>Could not run command.</source>
        <translation>コマンドを実行できませんでした。</translation>
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
        <translation>キーボードのモデルを %1 に設定する。&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/Config.cpp" line="368"/>
        <source>Set keyboard layout to %1/%2.</source>
        <translation>キーボードのレイアウトを %1/%2 に設定する。</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/Config.cpp" line="374"/>
        <source>Set timezone to %1/%2.</source>
        <translation>タイムゾーンを %1/%2 に設定する。</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/Config.cpp" line="412"/>
        <source>The system language will be set to %1.</source>
        <translation>システムの言語を %1 に設定する。</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/Config.cpp" line="419"/>
        <source>The numbers and dates locale will be set to %1.</source>
        <translation>数値と日付のロケールを %1 に設定する。</translation>
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
        <translation>このコンピューターは、 %1 をセットアップするための推奨条件をいくつか満たしていません。&lt;br/&gt;セットアップは続行しますが、一部の機能が無効になる場合があります。</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="69"/>
        <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
        <translation>このコンピューターは、 %1 をインストールするための推奨条件をいくつか満たしていません。&lt;br/&gt;インストールは続行しますが、一部の機能が無効になる場合があります。</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="79"/>
        <source>This program will ask you some questions and set up %2 on your computer.</source>
        <translation>このプログラムはあなたにいくつか質問をして、コンピューターに %2 を設定します。</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="266"/>
        <source>&lt;h1&gt;Welcome to the Calamares setup program for %1&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;%1 のCalamaresセットアッププログラムへようこそ&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="267"/>
        <source>&lt;h1&gt;Welcome to %1 setup&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;%1 のセットアップへようこそ&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="271"/>
        <source>&lt;h1&gt;Welcome to the Calamares installer for %1&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;%1 Calamares インストーラーにようこそ&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="272"/>
        <source>&lt;h1&gt;Welcome to the %1 installer&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;%1 インストーラーへようこそ。&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/summary/Config.cpp" line="94"/>
        <source>Summary</source>
        <translation>概要</translation>
    </message>
    <message>
        <location filename="../src/modules/summary/Config.cpp" line="98"/>
        <source>This is an overview of what will happen once you start the setup procedure.</source>
        <translation>これは、セットアップ開始後に行うことの概要です。</translation>
    </message>
    <message>
        <location filename="../src/modules/summary/Config.cpp" line="103"/>
        <source>This is an overview of what will happen once you start the install procedure.</source>
        <translation>これは、インストール開始後に行うことの概要です。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="235"/>
        <source>Your username is too long.</source>
        <translation>ユーザー名が長すぎます。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="251"/>
        <source>&apos;%1&apos; is not allowed as username.</source>
        <translation>&apos;%1&apos; はユーザー名として許可されていません。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="241"/>
        <source>Your username must start with a lowercase letter or underscore.</source>
        <translation>ユーザー名はアルファベットの小文字または _ で始めてください。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="245"/>
        <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
        <translation>使用できるのはアルファベットの小文字と数字と _ と - だけです。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="300"/>
        <source>Your hostname is too short.</source>
        <translation>ホストネームが短すぎます。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="304"/>
        <source>Your hostname is too long.</source>
        <translation>ホストネームが長すぎます。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="310"/>
        <source>&apos;%1&apos; is not allowed as hostname.</source>
        <translation>&apos;%1&apos; はホスト名として許可されていません。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="315"/>
        <source>Only letters, numbers, underscore and hyphen are allowed.</source>
        <translation>使用できるのはアルファベットと数字と _ と - だけです。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="584"/>
        <source>Your passwords do not match!</source>
        <translation>パスワードが一致していません！</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="598"/>
        <source>OK!</source>
        <translation>OK!</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="145"/>
        <source>Setup Failed</source>
        <translation>セットアップに失敗しました。</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="145"/>
        <source>Installation Failed</source>
        <translation>インストールに失敗しました。</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="147"/>
        <source>The setup of %1 did not complete successfully.</source>
        <translation>%1 のセットアップは正常に完了しませんでした。</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="148"/>
        <source>The installation of %1 did not complete successfully.</source>
        <translation>%1 のインストールは正常に完了しませんでした。</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="152"/>
        <source>Setup Complete</source>
        <translation>セットアップが完了しました。</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="153"/>
        <source>Installation Complete</source>
        <translation>インストールが完了しました。</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="154"/>
        <source>The setup of %1 is complete.</source>
        <translation>%1 のセットアップが完了しました。</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="155"/>
        <source>The installation of %1 is complete.</source>
        <translation>%1 のインストールは完了です。</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/Config.cpp" line="111"/>
        <source>Package Selection</source>
        <translation>パッケージの選択</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/Config.cpp" line="113"/>
        <source>Please pick a product from the list. The selected product will be installed.</source>
        <translation>リストから製品を選んでください。選択した製品がインストールされます。</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/Config.cpp" line="243"/>
        <source>Install option: &lt;strong&gt;%1&lt;/strong&gt;</source>
        <translation>インストールオプション: &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/Config.cpp" line="243"/>
        <source>None</source>
        <translation>なし</translation>
    </message>
</context>
<context>
    <name>CreatePartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="18"/>
        <source>Create a Partition</source>
        <translation>パーティションを作成する。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="52"/>
        <source> MiB</source>
        <translation> MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="59"/>
        <source>Partition &amp;Type:</source>
        <translation>パーティションの種類 (&amp;T)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="71"/>
        <source>Primar&amp;y</source>
        <translation>プライマリ (&amp;Y)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="81"/>
        <source>E&amp;xtended</source>
        <translation>拡張 (&amp;X)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="123"/>
        <source>Fi&amp;le System:</source>
        <translation>ファイルシステム (&amp;L):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="155"/>
        <source>LVM LV name</source>
        <translation>LVMのLV名</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="191"/>
        <source>Flags:</source>
        <translation>フラグ:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="224"/>
        <source>Label for the filesystem</source>
        <translation>ファイルシステムのラベル</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="234"/>
        <source>FS Label:</source>
        <translation>FSラベル:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="165"/>
        <source>&amp;Mount Point:</source>
        <translation>マウントポイント (&amp;M)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="42"/>
        <source>Si&amp;ze:</source>
        <translation>サイズ (&amp;Z)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="66"/>
        <source>En&amp;crypt</source>
        <translation>暗号化 (&amp;C)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="194"/>
        <source>Logical</source>
        <translation>論理</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="199"/>
        <source>Primary</source>
        <translation>プライマリ</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="218"/>
        <source>GPT</source>
        <translation>GPT</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="91"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation>マウントポイントは既に使用されています。他を選択してください。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="96"/>
        <source>Mountpoint must start with a &lt;tt&gt;/&lt;/tt&gt;.</source>
        <translation>マウントポイントは &lt;tt&gt;/&lt;/tt&gt; で開始する必要があります。</translation>
    </message>
</context>
<context>
    <name>CreatePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="183"/>
        <source>Create new %1MiB partition on %3 (%2) with entries %4.</source>
        <translation>%3 (%2) にエントリ %4 の新しい %1MiB パーティションを作成する。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="191"/>
        <source>Create new %1MiB partition on %3 (%2).</source>
        <translation>%3 (%2) に新しい %1MiB パーティションを作成する。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="198"/>
        <source>Create new %2MiB partition on %4 (%3) with file system %1.</source>
        <translation> %4 (%3) にファイルシステム %1 の新しい %2MiB パーティションを作成する。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="215"/>
        <source>Create new &lt;strong&gt;%1MiB&lt;/strong&gt; partition on &lt;strong&gt;%3&lt;/strong&gt; (%2) with entries &lt;em&gt;%4&lt;/em&gt;.</source>
        <translation>&lt;strong&gt;%3&lt;/strong&gt; (%2) にエントリ &lt;em&gt;%4&lt;/em&gt; の新しい &lt;strong&gt;%1MiB&lt;/strong&gt; パーティションを作成する。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="224"/>
        <source>Create new &lt;strong&gt;%1MiB&lt;/strong&gt; partition on &lt;strong&gt;%3&lt;/strong&gt; (%2).</source>
        <translation>&lt;strong&gt;%3&lt;/strong&gt; (%2) に新しい &lt;strong&gt;%1MiB&lt;/strong&gt; パーティションを作成する。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="231"/>
        <source>Create new &lt;strong&gt;%2MiB&lt;/strong&gt; partition on &lt;strong&gt;%4&lt;/strong&gt; (%3) with file system &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%4&lt;/strong&gt; (%3) にファイルシステム &lt;strong&gt;%1&lt;/strong&gt; の新しい &lt;strong&gt;%2MiB&lt;/strong&gt; パーティションを作成する。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="256"/>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="259"/>
        <source>Creating new %1 partition on %2.</source>
        <translation>%2 に新しい %1 パーティションを作成しています。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="276"/>
        <source>The installer failed to create partition on disk &apos;%1&apos;.</source>
        <translation>インストーラーはディスク &apos;%1&apos; にパーティションを作成できませんでした。</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="24"/>
        <source>Create Partition Table</source>
        <translation>パーティションテーブルの作成</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="43"/>
        <source>Creating a new partition table will delete all existing data on the disk.</source>
        <translation>新しいパーティションテーブルを作成すると、ディスク上の既存のデータがすべて削除されます。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="69"/>
        <source>What kind of partition table do you want to create?</source>
        <translation>どの種類のパーティションテーブルを作成しますか？</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="76"/>
        <source>Master Boot Record (MBR)</source>
        <translation>マスターブートレコード (MBR)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="86"/>
        <source>GUID Partition Table (GPT)</source>
        <translation>GUID パーティションテーブル (GPT)</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="41"/>
        <source>Create new %1 partition table on %2.</source>
        <translation>%2 に新しい %1 パーティションテーブルを作成する。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="49"/>
        <source>Create new &lt;strong&gt;%1&lt;/strong&gt; partition table on &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>&lt;strong&gt;%2&lt;/strong&gt; (%3) に新しい &lt;strong&gt;%1&lt;/strong&gt; パーティションテーブルを作成する。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="59"/>
        <source>Creating new %1 partition table on %2.</source>
        <translation>%2 に新しい %1 パーティションテーブルを作成しています。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="88"/>
        <source>The installer failed to create a partition table on %1.</source>
        <translation>インストーラーは %1 のパーティションテーブル作成に失敗しました。</translation>
    </message>
</context>
<context>
    <name>CreateUserJob</name>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="35"/>
        <source>Create user %1</source>
        <translation>ユーザー %1 を作成</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="42"/>
        <source>Create user &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>ユーザー &lt;strong&gt;%1&lt;/strong&gt; を作成する。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="49"/>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="142"/>
        <source>Creating user %1</source>
        <translation>ユーザー %1 を作成しています</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="125"/>
        <source>Preserving home directory</source>
        <translation>ホームディレクトリを保持する</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="150"/>
        <source>Configuring user %1</source>
        <translation>ユーザー %1 を設定しています</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="158"/>
        <source>Setting file permissions</source>
        <translation>ファイルのアクセス権限を設定しています</translation>
    </message>
</context>
<context>
    <name>CreateVolumeGroupDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreateVolumeGroupDialog.cpp" line="28"/>
        <source>Create Volume Group</source>
        <translation>ボリュームグループの作成</translation>
    </message>
</context>
<context>
    <name>CreateVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="32"/>
        <source>Create new volume group named %1.</source>
        <translation>新しいボリュームグループ %1 を作成する。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="38"/>
        <source>Create new volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>新しいボリュームグループ &lt;strong&gt;%1&lt;/strong&gt; を作成する。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="44"/>
        <source>Creating new volume group named %1.</source>
        <translation>新しいボリュームグループ %1 を作成しています。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="51"/>
        <source>The installer failed to create a volume group named &apos;%1&apos;.</source>
        <translation>インストーラーはボリュームグループ名 &apos;%1&apos; の作成に失敗しました。</translation>
    </message>
</context>
<context>
    <name>DeactivateVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="26"/>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="38"/>
        <source>Deactivate volume group named %1.</source>
        <translation>ボリュームグループ %1 を無効化</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="32"/>
        <source>Deactivate volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>ボリュームグループ &lt;strong&gt;%1&lt;/strong&gt; を無効化。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="46"/>
        <source>The installer failed to deactivate a volume group named %1.</source>
        <translation>インストーラーはボリュームグループ %1 の無効化に失敗しました。</translation>
    </message>
</context>
<context>
    <name>DeletePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="73"/>
        <source>Delete partition %1.</source>
        <translation>パーティション %1 の削除</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="80"/>
        <source>Delete partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>パーティション &lt;strong&gt;%1&lt;/strong&gt; の削除</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="87"/>
        <source>Deleting partition %1.</source>
        <translation>パーティション %1 を削除しています。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="102"/>
        <source>The installer failed to delete partition %1.</source>
        <translation>インストーラーはパーティション %1 の削除に失敗しました。</translation>
    </message>
</context>
<context>
    <name>DeviceInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="149"/>
        <source>The type of &lt;strong&gt;partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The only way to change the partition table type is to erase and recreate the partition table from scratch, which destroys all data on the storage device.&lt;br&gt;This installer will keep the current partition table unless you explicitly choose otherwise.&lt;br&gt;If unsure, on modern systems GPT is preferred.</source>
        <translation>選択したストレージデバイスにおける&lt;strong&gt; パーティションテーブル &lt;/strong&gt; の種類。 &lt;br&gt;&lt;br&gt; パーティションテーブルの種類を変更する唯一の方法は、パーティションテーブルを消去し、最初から再作成を行うことですが、この操作はストレージ上のすべてのデータを破壊します。 &lt;br&gt; このインストーラーは、他の種類へ明示的に変更ししない限り、現在のパーティションテーブルが保持されます。よくわからない場合、最近のシステムではGPTが推奨されます。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="141"/>
        <source>This device has a &lt;strong&gt;%1&lt;/strong&gt; partition table.</source>
        <translation>このデバイスのパーテションテーブルは &lt;strong&gt;%1&lt;/strong&gt; です。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="97"/>
        <source>This is a &lt;strong&gt;loop&lt;/strong&gt; device.&lt;br&gt;&lt;br&gt;It is a pseudo-device with no partition table that makes a file accessible as a block device. This kind of setup usually only contains a single filesystem.</source>
        <translation>このデバイスは&lt;strong&gt;ループ&lt;/strong&gt; デバイスです。&lt;br&gt;&lt;br&gt; ブロックデバイスとしてアクセスできるファイルを作成する、パーティションテーブルを持たない仮想デバイスです。この種のセットアップは通常、単一のファイルシステムで構成されます。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="106"/>
        <source>This installer &lt;strong&gt;cannot detect a partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The device either has no partition table, or the partition table is corrupted or of an unknown type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</source>
        <translation>インストーラーが、選択したストレージデバイス上の&lt;strong&gt;パーティションテーブルを検出できません。&lt;/strong&gt;&lt;br&gt;&lt;br&gt;デバイスのパーティションテーブルが存在しないか、破損しているか、タイプが不明です。&lt;br&gt;このインストーラーは、自動的に、または手動パーティショニングページを介して、新しいパーティションテーブルを作成できます。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="91"/>
        <source>&lt;br&gt;&lt;br&gt;This is the recommended partition table type for modern systems which start from an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.</source>
        <translation>&lt;br&gt;&lt;br&gt;これは &lt;strong&gt;EFI&lt;/strong&gt; ブート環境から起動する現在のシステムで推奨されるパーティションテーブルの種類です。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="80"/>
        <source>&lt;br&gt;&lt;br&gt;This partition table type is only advisable on older systems which start from a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment. GPT is recommended in most other cases.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Warning:&lt;/strong&gt; the MBR partition table is an obsolete MS-DOS era standard.&lt;br&gt;Only 4 &lt;em&gt;primary&lt;/em&gt; partitions may be created, and of those 4, one can be an &lt;em&gt;extended&lt;/em&gt; partition, which may in turn contain many &lt;em&gt;logical&lt;/em&gt; partitions.</source>
        <translation>&lt;br&gt;&lt;br&gt;このパーティションテーブルの種類は&lt;strong&gt;BIOS&lt;/strong&gt; ブート環境から起動する古いシステムにおいてのみ推奨されます。他のほとんどの場合ではGPTが推奨されます。&lt;br&gt;&lt;br&gt;&lt;strong&gt;警告:&lt;/strong&gt; MBR パーティションテーブルは時代遅れのMS-DOS時代の標準です。&lt;br&gt;作成できる&lt;em&gt;プライマリ&lt;/em&gt;パーティションは4つだけです。そのうち1つは&lt;em&gt;拡張&lt;/em&gt;パーティションになることができ、そこには多くの&lt;em&gt;論理&lt;/em&gt;パーティションを含むことができます。</translation>
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
    <name>EditExistingPartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="24"/>
        <source>Edit Existing Partition</source>
        <translation>パーティションの編集</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="54"/>
        <source>Con&amp;tent:</source>
        <translation>コンテンツ (&amp;T):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="64"/>
        <source>&amp;Keep</source>
        <translation>保持 (&amp;K)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="74"/>
        <source>Format</source>
        <translation>フォーマット</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="93"/>
        <source>Warning: Formatting the partition will erase all existing data.</source>
        <translation>警告: パーティションのフォーマットはすべてのデータを消去します。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="103"/>
        <source>&amp;Mount Point:</source>
        <translation>マウントポイント (&amp;M)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="129"/>
        <source>Si&amp;ze:</source>
        <translation>サイズ (&amp;Z):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="139"/>
        <source> MiB</source>
        <translation> MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="146"/>
        <source>Fi&amp;le System:</source>
        <translation>ファイルシステム (&amp;L):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="159"/>
        <source>Flags:</source>
        <translation>フラグ:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="179"/>
        <source>Label for the filesystem</source>
        <translation>ファイルシステムのラベル</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="189"/>
        <source>FS Label:</source>
        <translation>FSラベル:</translation>
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
        <translation>フォーム</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="36"/>
        <source>En&amp;crypt system</source>
        <translation>システムを暗号化 (&amp;C)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="43"/>
        <source>Your system does not seem to support encryption well enough to encrypt the entire system. You may enable encryption, but performance may suffer.</source>
        <translation>お使いのシステムはシステム全体を暗号化するのに十分な暗号化をサポートしていないようです。暗号化を有効にすることはできますが、パフォーマンスが低下する可能性があります。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="59"/>
        <source>Passphrase</source>
        <translation>パスフレーズ</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="69"/>
        <source>Confirm passphrase</source>
        <translation>パスフレーズの確認</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="156"/>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="166"/>
        <source>Please enter the same passphrase in both boxes.</source>
        <translation>両方のボックスに同じパスフレーズを入力してください。</translation>
    </message>
</context>
<context>
    <name>ErrorDialog</name>
    <message>
        <location filename="../src/libcalamaresui/widgets/ErrorDialog.ui" line="40"/>
        <source>Details:</source>
        <translation>詳細:</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/ErrorDialog.ui" line="56"/>
        <source>Would you like to paste the install log to the web?</source>
        <translation>インストールログをWebに貼り付けますか？</translation>
    </message>
</context>
<context>
    <name>FillGlobalStorageJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="170"/>
        <source>Set partition information</source>
        <translation>パーティション情報の設定</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="199"/>
        <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition with features &lt;em&gt;%3&lt;/em&gt;</source>
        <translation>&lt;strong&gt;新規の&lt;/strong&gt; %2 システムパーティション (機能 &lt;em&gt;%3&lt;/em&gt;) に %1 をインストールする</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="207"/>
        <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition.</source>
        <translation>&lt;strong&gt;新規の&lt;/strong&gt; %2 システムパーティションに %1 をインストールする。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="216"/>
        <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt; and features &lt;em&gt;%3&lt;/em&gt;.</source>
        <translation>&lt;strong&gt;新規の&lt;/strong&gt; %2 パーティション (マウントポイント &lt;strong&gt;%1&lt;/strong&gt;、機能 &lt;em&gt;%3&lt;/em&gt;) をセットアップする。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="224"/>
        <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt;%3.</source>
        <translation>&lt;strong&gt;新規の&lt;/strong&gt; %2 パーティション (マウントポイント &lt;strong&gt;%1&lt;/strong&gt; %3) をセットアップする。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="238"/>
        <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt; with features &lt;em&gt;%4&lt;/em&gt;.</source>
        <translation>%3 システムパーティション &lt;strong&gt;%1&lt;/strong&gt; (機能 &lt;em&gt;%4&lt;/em&gt;) に %2 をインストールする。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="257"/>
        <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt; and features &lt;em&gt;%4&lt;/em&gt;.</source>
        <translation>パーティション %3 &lt;strong&gt;%1&lt;/strong&gt; (マウントポイント &lt;strong&gt;%2&lt;/strong&gt;、機能 &lt;em&gt;%4&lt;/em&gt;) をセットアップする。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="266"/>
        <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt;%4.</source>
        <translation>%3 パーティション &lt;strong&gt;%1&lt;/strong&gt; (マウントポイント &lt;strong&gt;%2&lt;/strong&gt; %4) をセットアップする。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="247"/>
        <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>%3 システムパーティション &lt;strong&gt;%1&lt;/strong&gt; に%2 をインストールする。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="281"/>
        <source>Install boot loader on &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt; にブートローダーをインストールする。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="290"/>
        <source>Setting up mount points.</source>
        <translation>マウントポイントを設定する。</translation>
    </message>
</context>
<context>
    <name>FinishedPage</name>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="18"/>
        <source>Form</source>
        <translation>フォーム</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="102"/>
        <source>&amp;Restart now</source>
        <translation>今すぐ再起動 (&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="75"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been set up on your computer.&lt;br/&gt;You may now start using your new system.</source>
        <translation>&lt;h1&gt;すべて完了しました。&lt;/h1&gt;&lt;br/&gt;%1 はコンピューターにセットアップされました。&lt;br/&gt;今から新しいシステムを開始することができます。</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="79"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot;font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the setup program.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;このボックスをチェックすると、 &lt;span style=&quot;font-style:italic;&quot;&gt;実行&lt;/span&gt;をクリックするかプログラムを閉じると直ちにシステムが再起動します。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="87"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been installed on your computer.&lt;br/&gt;You may now restart into your new system, or continue using the %2 Live environment.</source>
        <translation>&lt;h1&gt;すべて完了しました。&lt;/h1&gt;&lt;br/&gt;%1 はコンピューターにセットアップされました。&lt;br/&gt;今から再起動して新しいシステムを開始するか、%2ライブ環境を使い続けることができます</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="92"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot;font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the installer.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;このボックスをチェックすると、 &lt;span style=&quot;font-style:italic;&quot;&gt;実行&lt;/span&gt;をクリックするかインストーラーを閉じると直ちにシステムが再起動します。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="105"/>
        <source>&lt;h1&gt;Setup Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been set up on your computer.&lt;br/&gt;The error message was: %2.</source>
        <translation>&lt;h1&gt;セットアップに失敗しました&lt;/h1&gt;&lt;br/&gt;%1はコンピューターにセットアップされませんでした。&lt;br/&gt;エラーメッセージは次の通りです。: %2</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="113"/>
        <source>&lt;h1&gt;Installation Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been installed on your computer.&lt;br/&gt;The error message was: %2.</source>
        <translation>&lt;h1&gt;インストールに失敗しました&lt;/h1&gt;&lt;br/&gt;%1はコンピューターにセットアップされませんでした。&lt;br/&gt;エラーメッセージは次の通りです。: %2</translation>
    </message>
</context>
<context>
    <name>FinishedQmlViewStep</name>
    <message>
        <location filename="../src/modules/finishedq/FinishedQmlViewStep.cpp" line="35"/>
        <source>Finish</source>
        <translation>終了</translation>
    </message>
</context>
<context>
    <name>FinishedViewStep</name>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="46"/>
        <source>Finish</source>
        <translation>終了</translation>
    </message>
</context>
<context>
    <name>FormatPartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="39"/>
        <source>Format partition %1 (file system: %2, size: %3 MiB) on %4.</source>
        <translation>%4 のパーティション %1 (ファイルシステム: %2、サイズ: %3 MiB) をフォーマットする。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="50"/>
        <source>Format &lt;strong&gt;%3MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; with file system &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%3MiB&lt;/strong&gt; のパーティション &lt;strong&gt;%1&lt;/strong&gt; をファイルシステム &lt;strong&gt;%2&lt;/strong&gt; でフォーマットする。</translation>
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
        <translation>パーティション%1をファイルシステム%2でフォーマットしています</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="76"/>
        <source>The installer failed to format partition %1 on disk &apos;%2&apos;.</source>
        <translation>インストーラーはディスク &apos;%2&apos; のパーティション&apos;%1&apos;をフォーマットできませんでした。</translation>
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
        <translation>ディスクスペースが不足しています。最低でも %1 GiB必要です。</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="172"/>
        <source>has at least %1 GiB working memory</source>
        <translation>%1 GiB以降のメモリーがあります</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="174"/>
        <source>The system does not have enough working memory. At least %1 GiB is required.</source>
        <translation>十分なメモリがありません。少なくとも %1 GiB 必要です。</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="183"/>
        <source>is plugged in to a power source</source>
        <translation>電源が接続されていること</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="184"/>
        <source>The system is not plugged in to a power source.</source>
        <translation>システムに電源が接続されていません。</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="191"/>
        <source>is connected to the Internet</source>
        <translation>インターネットに接続されていること</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="192"/>
        <source>The system is not connected to the Internet.</source>
        <translation>システムはインターネットに接続されていません。</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="199"/>
        <source>is running the installer as an administrator (root)</source>
        <translation>は管理者（root）としてインストーラーを実行しています</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="203"/>
        <source>The setup program is not running with administrator rights.</source>
        <translation>セットアッププログラムは管理者権限で実行されていません。</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="204"/>
        <source>The installer is not running with administrator rights.</source>
        <translation>インストーラーは管理者権限で実行されていません。</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="212"/>
        <source>has a screen large enough to show the whole installer</source>
        <translation>にはインストーラー全体を表示できる大きさの画面があります</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="216"/>
        <source>The screen is too small to display the setup program.</source>
        <translation>画面が小さすぎてセットアッププログラムを表示できません。</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="217"/>
        <source>The screen is too small to display the installer.</source>
        <translation>画面が小さすぎてインストーラーを表示できません。</translation>
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
        <translation>OEMのバッチID</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="40"/>
        <source>Could not create directories &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>ディレクトリ &lt;code&gt;%1&lt;/code&gt; を作成できませんでした。</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="53"/>
        <source>Could not open file &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>ファイル &lt;code&gt;%1&lt;/code&gt; を開けませんでした。</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="60"/>
        <source>Could not write to file &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>ファイル &lt;code&gt;%1&lt;/code&gt; に書き込めませんでした。</translation>
    </message>
</context>
<context>
    <name>InitcpioJob</name>
    <message>
        <location filename="../src/modules/initcpio/InitcpioJob.cpp" line="32"/>
        <source>Creating initramfs with mkinitcpio.</source>
        <translation>mkinitcpio と initramfs を作成しています。</translation>
    </message>
</context>
<context>
    <name>KeyboardQmlViewStep</name>
    <message>
        <location filename="../src/modules/keyboardq/KeyboardQmlViewStep.cpp" line="32"/>
        <source>Keyboard</source>
        <translation>キーボード</translation>
    </message>
</context>
<context>
    <name>KeyboardViewStep</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardViewStep.cpp" line="42"/>
        <source>Keyboard</source>
        <translation>キーボード</translation>
    </message>
</context>
<context>
    <name>LCLocaleDialog</name>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="23"/>
        <source>System locale setting</source>
        <translation>システムのロケールの設定</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="30"/>
        <source>The system locale setting affects the language and character set for some command line user interface elements.&lt;br/&gt;The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>システムロケール設定は、一部のコマンドラインユーザーインターフェイスの言語と文字に影響します。&lt;br/&gt;現在の設定は&lt;strong&gt;%1&lt;/strong&gt;です。</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="54"/>
        <source>&amp;Cancel</source>
        <translation>中止 (&amp;C)</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="55"/>
        <source>&amp;OK</source>
        <translation>了解 (&amp;O)</translation>
    </message>
</context>
<context>
    <name>LOSHJob</name>
    <message>
        <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="36"/>
        <source>Configuring encrypted swap.</source>
        <translation>暗号化したswapを設定しています。</translation>
    </message>
    <message>
        <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="88"/>
        <source>No target system available.</source>
        <translation>使用可能なターゲットシステムがありません。</translation>
    </message>
    <message>
        <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="96"/>
        <source>No rootMountPoint is set.</source>
        <translation>rootMountPoint が設定されていません。</translation>
    </message>
    <message>
        <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="101"/>
        <source>No configFilePath is set.</source>
        <translation>configFilePath が設定されていません。</translation>
    </message>
</context>
<context>
    <name>LicensePage</name>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="18"/>
        <source>Form</source>
        <translation>フォーム</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="26"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;ライセンス契約&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="143"/>
        <source>I accept the terms and conditions above.</source>
        <translation>上記の項目及び条件に同意します。</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="145"/>
        <source>Please review the End User License Agreements (EULAs).</source>
        <translation>エンドユーザーライセンス条項(EULAs)をご確認ください。</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="150"/>
        <source>This setup procedure will install proprietary software that is subject to licensing terms.</source>
        <translation>このセットアップ手順では、ライセンス条項の対象となるプロプライエタリソフトウェアをインストールします。</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="153"/>
        <source>If you do not agree with the terms, the setup procedure cannot continue.</source>
        <translation>条件に同意しない場合はセットアップ手順を続行できません。</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="158"/>
        <source>This setup procedure can install proprietary software that is subject to licensing terms in order to provide additional features and enhance the user experience.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="163"/>
        <source>If you do not agree with the terms, proprietary software will not be installed, and open source alternatives will be used instead.</source>
        <translation>規約に同意しなければプロプライエタリソフトウェアはインストールされず、代わりにオープンソースソフトウェアが利用されます。</translation>
    </message>
</context>
<context>
    <name>LicenseViewStep</name>
    <message>
        <location filename="../src/modules/license/LicenseViewStep.cpp" line="43"/>
        <source>License</source>
        <translation>ライセンス</translation>
    </message>
</context>
<context>
    <name>LicenseWidget</name>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="88"/>
        <source>URL: %1</source>
        <translation>URL: %1</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="109"/>
        <source>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;by %2</source>
        <extracomment>%1 is an untranslatable product name, example: Creative Audigy driver</extracomment>
        <translation>&lt;strong&gt;%1 ドライバー&lt;/strong&gt;&lt;br/&gt;by %2</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="116"/>
        <source>&lt;strong&gt;%1 graphics driver&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <extracomment>%1 is usually a vendor name, example: Nvidia graphics driver</extracomment>
        <translation>&lt;strong&gt;%1 グラフィックドライバー&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="122"/>
        <source>&lt;strong&gt;%1 browser plugin&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1 ブラウザプラグイン&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="128"/>
        <source>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="134"/>
        <source>&lt;strong&gt;%1 package&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1 パッケージ&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="140"/>
        <source>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="163"/>
        <source>File: %1</source>
        <translation>ファイル: %1</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="186"/>
        <source>Hide license text</source>
        <translation>ライセンステキストを非表示</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="186"/>
        <source>Show the license text</source>
        <translation>ライセンステキストを表示</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="190"/>
        <source>Open license agreement in browser.</source>
        <translation>ブラウザでライセンス契約を開く。</translation>
    </message>
</context>
<context>
    <name>LocalePage</name>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="130"/>
        <source>Region:</source>
        <translation>地域:</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="131"/>
        <source>Zone:</source>
        <translation>ゾーン:</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="132"/>
        <location filename="../src/modules/locale/LocalePage.cpp" line="133"/>
        <source>&amp;Change...</source>
        <translation>変更 (&amp;C)...</translation>
    </message>
</context>
<context>
    <name>LocaleQmlViewStep</name>
    <message>
        <location filename="../src/modules/localeq/LocaleQmlViewStep.cpp" line="32"/>
        <source>Location</source>
        <translation>ロケーション</translation>
    </message>
</context>
<context>
    <name>LocaleTests</name>
    <message>
        <location filename="../src/libcalamares/locale/Tests.cpp" line="272"/>
        <source>Quit</source>
        <translation>終了</translation>
    </message>
</context>
<context>
    <name>LocaleViewStep</name>
    <message>
        <location filename="../src/modules/locale/LocaleViewStep.cpp" line="75"/>
        <source>Location</source>
        <translation>ロケーション</translation>
    </message>
</context>
<context>
    <name>LuksBootKeyFileJob</name>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="33"/>
        <source>Configuring LUKS key file.</source>
        <translation>LUKSキーファイルを設定しています。</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="235"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="243"/>
        <source>No partitions are defined.</source>
        <translation>パーティションが定義されていません。</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="279"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="286"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="300"/>
        <source>Encrypted rootfs setup error</source>
        <translation>暗号化された rootfs のセットアップエラー</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="280"/>
        <source>Root partition %1 is LUKS but no passphrase has been set.</source>
        <translation>ルートパーティション %1 はLUKSですが、パスワードが設定されていません。</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="287"/>
        <source>Could not create LUKS key file for root partition %1.</source>
        <translation>ルートパーティション %1 のLUKSキーファイルを作成できませんでした。</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="301"/>
        <source>Could not configure LUKS key file on partition %1.</source>
        <translation>パーティション %1 でLUKSキーファイルを設定できませんでした。</translation>
    </message>
</context>
<context>
    <name>MachineIdJob</name>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="37"/>
        <source>Generate machine-id.</source>
        <translation>machine-id の生成</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="53"/>
        <source>Configuration Error</source>
        <translation>コンフィグレーションエラー</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="54"/>
        <source>No root mount point is set for MachineId.</source>
        <translation>マシンIDにルートマウントポイントが設定されていません。</translation>
    </message>
</context>
<context>
    <name>Map</name>
    <message>
        <location filename="../src/modules/localeq/Map.qml" line="44"/>
        <location filename="../src/modules/localeq/Map.qml" line="68"/>
        <source>Timezone: </source>
        <translation>タイムゾーン:</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Map.qml" line="232"/>
        <source>Please select your preferred location on the map so the installer can suggest the locale
            and timezone settings for you. You can fine-tune the suggested settings below. Search the map by dragging
            to move and using the +/- buttons to zoom in/out or use mouse scrolling for zooming.</source>
        <translation>インストーラーがロケールとタイムゾーンの設定を提案できるように、
マップ上の適切な場所を選択してください。 以下の推奨設定を調整できます。
ドラッグして移動し、+ /-ボタンでズームインまたはズームアウトしてマップを検索するか、
マウスのスクロールを使用してズームします。</translation>
    </message>
</context>
<context>
    <name>NotesQmlViewStep</name>
    <message>
        <location filename="../src/modules/notesqml/NotesQmlViewStep.cpp" line="23"/>
        <source>Notes</source>
        <translation>ノート</translation>
    </message>
</context>
<context>
    <name>OEMPage</name>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="32"/>
        <source>Ba&amp;tch:</source>
        <translation>バッチ (&amp;t)</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="42"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter a batch-identifier here. This will be stored in the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;ここにバッチIDを入力してください。これはターゲットシステムに保存されます。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="52"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEM Configuration&lt;/h1&gt;&lt;p&gt;Calamares will use OEM settings while configuring the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEMの設定&lt;/h1&gt;&lt;p&gt;Calamaresはターゲットシステムの設定中にOEMの設定を使用します。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>OEMViewStep</name>
    <message>
        <location filename="../src/modules/oemid/OEMViewStep.cpp" line="122"/>
        <source>OEM Configuration</source>
        <translation>OEMの設定</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMViewStep.cpp" line="128"/>
        <source>Set the OEM Batch Identifier to &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>OEMのバッチIDを &lt;code&gt;%1&lt;/code&gt; に設定してください。</translation>
    </message>
</context>
<context>
    <name>Offline</name>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="41"/>
        <source>Select your preferred Region, or use the default settings.</source>
        <translation>希望する地域を選択するか、デフォルトの設定を使用してください。</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="99"/>
        <location filename="../src/modules/localeq/Offline.qml" line="175"/>
        <location filename="../src/modules/localeq/Offline.qml" line="219"/>
        <source>Timezone: %1</source>
        <translation>タイムゾーン: %1</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="116"/>
        <source>Select your preferred Zone within your Region.</source>
        <translation>地域内の優先ゾーンを選択してください。</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="188"/>
        <source>Zones</source>
        <translation>ゾーン</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="235"/>
        <source>You can fine-tune Language and Locale settings below.</source>
        <translation>以下の言語とロケールの設定を微調整できます。</translation>
    </message>
</context>
<context>
    <name>PWQ</name>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="51"/>
        <source>Password is too short</source>
        <translation>パスワードが短すぎます</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="67"/>
        <source>Password is too long</source>
        <translation>パスワードが長すぎます</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="188"/>
        <source>Password is too weak</source>
        <translation>パスワードが弱すぎます</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="196"/>
        <source>Memory allocation error when setting &apos;%1&apos;</source>
        <translation>&apos;%1&apos; の設定の際にメモリーアロケーションエラーが発生しました</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="199"/>
        <source>Memory allocation error</source>
        <translation>メモリーアロケーションエラー</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="201"/>
        <source>The password is the same as the old one</source>
        <translation>パスワードが以前のものと同じです。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="203"/>
        <source>The password is a palindrome</source>
        <translation>パスワードが回文です</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="205"/>
        <source>The password differs with case changes only</source>
        <translation>パスワードの変更が大文字、小文字の変更のみです</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="207"/>
        <source>The password is too similar to the old one</source>
        <translation>パスワードが以前のものと酷似しています</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="209"/>
        <source>The password contains the user name in some form</source>
        <translation>パスワードにユーザー名が含まれています</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="211"/>
        <source>The password contains words from the real name of the user in some form</source>
        <translation>パスワードにユーザーの実名が含まれています</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="214"/>
        <source>The password contains forbidden words in some form</source>
        <translation>パスワードに禁止されている単語が含まれています</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="221"/>
        <source>The password contains too few digits</source>
        <translation>パスワードに含まれる数字の数が少なすぎます</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="228"/>
        <source>The password contains too few uppercase letters</source>
        <translation>パスワードに含まれる大文字の数が少なすぎます</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="235"/>
        <source>The password contains too few lowercase letters</source>
        <translation>パスワードに含まれる小文字の数が少なすぎます</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="242"/>
        <source>The password contains too few non-alphanumeric characters</source>
        <translation>パスワードに含まれる非アルファベット文字の数が少なすぎます</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="249"/>
        <source>The password is too short</source>
        <translation>パスワードが短すぎます</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="258"/>
        <source>The password does not contain enough character classes</source>
        <translation>パスワードには十分な文字クラスが含まれていません</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="265"/>
        <source>The password contains too many same characters consecutively</source>
        <translation>パスワードで同じ文字を続けすぎています</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="275"/>
        <source>The password contains too many characters of the same class consecutively</source>
        <translation>パスワードで同じ文字クラスの文字を続けすぎています</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="218"/>
        <source>The password contains fewer than %n digits</source>
        <translation><numerusform>パスワードに含まれる数字の桁数が %n 未満です</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="225"/>
        <source>The password contains fewer than %n uppercase letters</source>
        <translation><numerusform>パスワードに含まれる大文字が %n 未満です</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="232"/>
        <source>The password contains fewer than %n lowercase letters</source>
        <translation><numerusform>パスワードに含まれる小文字が %n 未満です</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="239"/>
        <source>The password contains fewer than %n non-alphanumeric characters</source>
        <translation><numerusform>パスワードに含まれる英数字以外の文字が %n 未満です</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="246"/>
        <source>The password is shorter than %n characters</source>
        <translation><numerusform>パスワードに含まれる文字が %n 未満です</numerusform></translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="251"/>
        <source>The password is a rotated version of the previous one</source>
        <translation>このパスワードは以前のものを再利用しています</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="255"/>
        <source>The password contains fewer than %n character classes</source>
        <translation><numerusform>パスワードに含まれる文字の種類が %n 未満です</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="262"/>
        <source>The password contains more than %n same characters consecutively</source>
        <translation><numerusform>パスワードに同じ文字が %n 以上連続して含まれています</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="269"/>
        <source>The password contains more than %n characters of the same class consecutively</source>
        <translation><numerusform>スワードに同じ種類の文字が %n 以上連続して含まれています</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="280"/>
        <source>The password contains monotonic sequence longer than %n characters</source>
        <translation><numerusform>パスワードに単調なシーケンスが %n 文字より多く含まれています</numerusform></translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="286"/>
        <source>The password contains too long of a monotonic character sequence</source>
        <translation>パスワードに限度を超えた単調な文字列が含まれています</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="289"/>
        <source>No password supplied</source>
        <translation>パスワードがありません</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="291"/>
        <source>Cannot obtain random numbers from the RNG device</source>
        <translation>RNGデバイスから乱数を取得できません</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="293"/>
        <source>Password generation failed - required entropy too low for settings</source>
        <translation>パスワードの生成に失敗しました - 設定に必要なエントロピーが低すぎます</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="298"/>
        <source>The password fails the dictionary check - %1</source>
        <translation>パスワードの辞書チェックに失敗しました - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="301"/>
        <source>The password fails the dictionary check</source>
        <translation>パスワードの辞書チェックに失敗しました</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="305"/>
        <source>Unknown setting - %1</source>
        <translation>未設定 - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="307"/>
        <source>Unknown setting</source>
        <translation>未設定</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="311"/>
        <source>Bad integer value of setting - %1</source>
        <translation>不適切な設定値 - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="313"/>
        <source>Bad integer value</source>
        <translation>不適切な設定値</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="317"/>
        <source>Setting %1 is not of integer type</source>
        <translation>設定値 %1 は整数ではありません</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="319"/>
        <source>Setting is not of integer type</source>
        <translation>設定値は整数ではありません</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="323"/>
        <source>Setting %1 is not of string type</source>
        <translation>設定値 %1 は文字列ではありません</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="325"/>
        <source>Setting is not of string type</source>
        <translation>設定値は文字列ではありません</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="327"/>
        <source>Opening the configuration file failed</source>
        <translation>設定ファイルが開けませんでした</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="329"/>
        <source>The configuration file is malformed</source>
        <translation>設定ファイルが不正な形式です</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="331"/>
        <source>Fatal failure</source>
        <translation>致命的な失敗</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="333"/>
        <source>Unknown error</source>
        <translation>未知のエラー</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="829"/>
        <source>Password is empty</source>
        <translation>パスワードが空です</translation>
    </message>
</context>
<context>
    <name>PackageChooserPage</name>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="24"/>
        <source>Form</source>
        <translation>フォーム</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="50"/>
        <source>Product Name</source>
        <translation>製品名</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="63"/>
        <source>TextLabel</source>
        <translation>テキストラベル</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="79"/>
        <source>Long Product Description</source>
        <translation>製品の詳しい説明</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="25"/>
        <source>Package Selection</source>
        <translation>パッケージの選択</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="26"/>
        <source>Please pick a product from the list. The selected product will be installed.</source>
        <translation>リストから製品を選んでください。選択した製品がインストールされます。</translation>
    </message>
</context>
<context>
    <name>PackageChooserQmlViewStep</name>
    <message>
        <location filename="../src/modules/packagechooserq/PackageChooserQmlViewStep.cpp" line="32"/>
        <source>Packages</source>
        <translation>パッケージ</translation>
    </message>
</context>
<context>
    <name>PackageChooserViewStep</name>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserViewStep.cpp" line="51"/>
        <source>Packages</source>
        <translation>パッケージ</translation>
    </message>
</context>
<context>
    <name>Page_Keyboard</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="18"/>
        <source>Form</source>
        <translation>フォーム</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="74"/>
        <source>Keyboard Model:</source>
        <translation>キーボードモデル:</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="135"/>
        <source>Type here to test your keyboard</source>
        <translation>ここでタイプしてキーボードをテストしてください</translation>
    </message>
</context>
<context>
    <name>Page_UserSetup</name>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="18"/>
        <source>Form</source>
        <translation>フォーム</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="40"/>
        <source>What is your name?</source>
        <translation>あなたの名前は何ですか？</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="124"/>
        <source>What name do you want to use to log in?</source>
        <translation>ログイン時に使用する名前は何ですか？</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="325"/>
        <source>Choose a password to keep your account safe.</source>
        <translation>アカウントを安全に使うため、パスワードを選択してください</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="349"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="374"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.&lt;/small&gt;</source>
        <translation>&lt;small&gt;確認のため、同じパスワードを2回入力して下さい。8文字以上で、アルファベット・数字・句読点を混ぜたものにすれば強いパスワードになります。パスワードは定期的に変更してください。&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="223"/>
        <source>What is the name of this computer?</source>
        <translation>このコンピューターの名前は何ですか？</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="55"/>
        <source>Your Full Name</source>
        <translation>あなたのフルネーム</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="148"/>
        <source>login</source>
        <translation>ログイン</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="247"/>
        <source>&lt;small&gt;This name will be used if you make the computer visible to others on a network.&lt;/small&gt;</source>
        <translation>&lt;small&gt;この名前は、コンピューターをネットワーク上の他のユーザーに表示する場合に使用されます。&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="250"/>
        <source>Computer Name</source>
        <translation>コンピューターの名前</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="355"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="525"/>
        <source>Password</source>
        <translation>パスワード</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="380"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="550"/>
        <source>Repeat Password</source>
        <translation>パスワードを再度入力</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="455"/>
        <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
        <translation>このボックスをオンにするとパスワードの強度チェックが行われ、弱いパスワードを使用できなくなります。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="458"/>
        <source>Require strong passwords.</source>
        <translation>強いパスワードを要求する。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="465"/>
        <source>Log in automatically without asking for the password.</source>
        <translation>パスワードを尋ねずに自動的にログインする。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="472"/>
        <source>Use the same password for the administrator account.</source>
        <translation>管理者アカウントと同じパスワードを使用する。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="495"/>
        <source>Choose a password for the administrator account.</source>
        <translation>管理者アカウントのパスワードを選択する。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="519"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="544"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors.&lt;/small&gt;</source>
        <translation>&lt;small&gt;入力ミスを確認することができるように、同じパスワードを 2 回入力します。&lt;/small&gt;</translation>
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
        <translation>EFIシステム</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="206"/>
        <source>Swap</source>
        <translation>スワップ</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="210"/>
        <source>New partition for %1</source>
        <translation>新しいパーティション %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="214"/>
        <source>New partition</source>
        <translation>新しいパーティション</translation>
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
        <translation>空き領域</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="161"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="205"/>
        <source>New partition</source>
        <translation>新しいパーティション</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="298"/>
        <source>Name</source>
        <translation>名前</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="300"/>
        <source>File System</source>
        <translation>ファイルシステム</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="302"/>
        <source>File System Label</source>
        <translation>ファイルシステムのラベル</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="304"/>
        <source>Mount Point</source>
        <translation>マウントポイント</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="306"/>
        <source>Size</source>
        <translation>サイズ</translation>
    </message>
</context>
<context>
    <name>PartitionPage</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="18"/>
        <source>Form</source>
        <translation>フォーム</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="26"/>
        <source>Storage de&amp;vice:</source>
        <translation>ストレージデバイス (&amp;V):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="55"/>
        <source>&amp;Revert All Changes</source>
        <translation>すべての変更を元に戻す (&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="91"/>
        <source>New Partition &amp;Table</source>
        <translation>新しいパーティションテーブル (&amp;T)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="111"/>
        <source>Cre&amp;ate</source>
        <translation>作成 (&amp;A)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="136"/>
        <source>New Volume Group</source>
        <translation>新しいボリュームグループ</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="143"/>
        <source>Resize Volume Group</source>
        <translation>ボリュームグループのリサイズ</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="150"/>
        <source>Deactivate Volume Group</source>
        <translation>ボリュームグループの無効化</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="157"/>
        <source>Remove Volume Group</source>
        <translation>ボリュームグループの削除</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="184"/>
        <source>I&amp;nstall boot loader on:</source>
        <translation>ブートローダーインストール先:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="118"/>
        <source>&amp;Edit</source>
        <translation>編集 (&amp;E)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="125"/>
        <source>&amp;Delete</source>
        <translation>削除 (&amp;D)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="224"/>
        <source>Are you sure you want to create a new partition table on %1?</source>
        <translation>%1 に新しいパーティションテーブルを作成します。よろしいですか？</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="259"/>
        <source>Can not create new partition</source>
        <translation>新しいパーティションを作成できません</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="260"/>
        <source>The partition table on %1 already has %2 primary partitions, and no more can be added. Please remove one primary partition and add an extended partition, instead.</source>
        <translation>%1 のパーティションテーブルにはすでに %2 個のプライマリパーティションがあり、これ以上追加できません。代わりに1つのプライマリパーティションを削除し、拡張パーティションを追加してください。</translation>
    </message>
</context>
<context>
    <name>PartitionQmlViewStep</name>
    <message>
        <location filename="../src/modules/partitionq/PartitionQmlViewStep.cpp" line="39"/>
        <source>Partition</source>
        <translation>パーティション</translation>
    </message>
</context>
<context>
    <name>PartitionViewStep</name>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="56"/>
        <source>Gathering system information...</source>
        <translation>システム情報を取得しています...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="111"/>
        <source>Partitions</source>
        <translation>パーティション</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="254"/>
        <source>Unsafe partition actions are enabled.</source>
        <translation>安全でないパーティションアクションが有効になります。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="257"/>
        <source>Partitioning is configured to &lt;b&gt;always&lt;/b&gt; fail.</source>
        <translation>パーティショニングが&lt;b&gt;常に&lt;/b&gt;失敗するように設定されています。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="260"/>
        <source>No partitions will be changed.</source>
        <translation>パーティションは変更されていません。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="300"/>
        <source>Current:</source>
        <translation>現在:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="318"/>
        <source>After:</source>
        <translation>後:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="524"/>
        <source>No EFI system partition configured</source>
        <translation>EFIシステムパーティションは構成されていません</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="528"/>
        <source>EFI system partition configured incorrectly</source>
        <translation>EFIシステムパーティションが誤って構成されています</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="533"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;To configure an EFI system partition, go back and select or create a suitable filesystem.</source>
        <translation>%1 を起動するには EFI システムパーティションが必要です。&lt;br/&gt;&lt;br/&gt;EFI システムパーティションを設定するには、戻って適切なファイルシステムを選択または作成してください。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="544"/>
        <source>The filesystem must be mounted on &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>ファイルシステムは &lt;strong&gt;%1&lt;/strong&gt;にマウントされなければなりません。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="550"/>
        <source>The filesystem must have type FAT32.</source>
        <translation>ファイルシステムはFAT32でなければなりません。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="558"/>
        <source>The filesystem must be at least %1 MiB in size.</source>
        <translation>ファイルシステムのサイズは最低でも %1 MiB である必要があります。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="564"/>
        <source>The filesystem must have flag &lt;strong&gt;%1&lt;/strong&gt; set.</source>
        <translation>ファイルシステムにはフラグ &lt;strong&gt;%1&lt;/strong&gt; を設定する必要があります。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="570"/>
        <source>You can continue without setting up an EFI system partition but your system may fail to start.</source>
        <translation>EFIシステムパーティションを設定せずに続行することはできますが、システムは起動に失敗するでしょう。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="588"/>
        <source>Option to use GPT on BIOS</source>
        <translation>BIOS で GPT を使用するためのオプション</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="714"/>
        <source>There are no partitions to install on.</source>
        <translation>インストールするパーティションがありません。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="621"/>
        <source>Boot partition not encrypted</source>
        <translation>ブートパーティションは暗号化されていません</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="589"/>
        <source>A GPT partition table is the best option for all systems. This installer supports such a setup for BIOS systems too.&lt;br/&gt;&lt;br/&gt;To configure a GPT partition table on BIOS, (if not done so already) go back and set the partition table to GPT, next create a 8 MB unformatted partition with the &lt;strong&gt;%2&lt;/strong&gt; flag enabled.&lt;br/&gt;&lt;br/&gt;An unformatted 8 MB partition is necessary to start %1 on a BIOS system with GPT.</source>
        <translation>GPT パーティションテーブルは、すべてのシステムに最適なオプションです。このインストーラーは、BIOS システムのそのようなセットアップもサポートします。&lt;br/&gt;&lt;br/&gt;BIOS で GPT パーティションテーブルを設定するには（まだ設定していない場合は）、戻ってパーティションテーブルを GPT に設定し、&lt;strong&gt;%2&lt;/strong&gt; フラグを有効にした 8 MB の未フォーマットパーティションを作成します。&lt;br/&gt;&lt;br/&gt;GPT を使用する BIOS システムで %1 を開始するには、未フォーマットの 8 MB のパーティションが必要です。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="622"/>
        <source>A separate boot partition was set up together with an encrypted root partition, but the boot partition is not encrypted.&lt;br/&gt;&lt;br/&gt;There are security concerns with this kind of setup, because important system files are kept on an unencrypted partition.&lt;br/&gt;You may continue if you wish, but filesystem unlocking will happen later during system startup.&lt;br/&gt;To encrypt the boot partition, go back and recreate it, selecting &lt;strong&gt;Encrypt&lt;/strong&gt; in the partition creation window.</source>
        <translation>ブートパーティションは暗号化されたルートパーティションとともにセットアップされましたが、ブートパーティションは暗号化されていません。&lt;br/&gt;&lt;br/&gt;重要なシステムファイルが暗号化されていないパーティションに残されているため、このようなセットアップは安全上の懸念があります。&lt;br/&gt;セットアップを続行することはできますが、後でシステムの起動中にファイルシステムが解除されます。&lt;br/&gt;ブートパーティションを暗号化させるには、前の画面に戻って、再度パーティションを作成し、パーティション作成ウィンドウ内で&lt;strong&gt;Encrypt&lt;/strong&gt; (暗号化) を選択してください。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="713"/>
        <source>has at least one disk device available.</source>
        <translation>は少なくとも1つのディスクデバイスを利用可能です。</translation>
    </message>
</context>
<context>
    <name>PreserveFiles</name>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="53"/>
        <source>Saving files for later ...</source>
        <translation>後でファイルを保存する...</translation>
    </message>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="61"/>
        <source>No files configured to save for later.</source>
        <translation>後で保存するよう設定されたファイルがありません。</translation>
    </message>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="85"/>
        <source>Not all of the configured files could be preserved.</source>
        <translation>設定ファイルはすべて保護されるわけではありません。</translation>
    </message>
</context>
<context>
    <name>ProcessResult</name>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="309"/>
        <source>
There was no output from the command.</source>
        <translation>
コマンドから出力するものがありませんでした。</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="310"/>
        <source>
Output:
</source>
        <translation>
出力:
</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="314"/>
        <source>External command crashed.</source>
        <translation>外部コマンドがクラッシュしました。</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="315"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; crashed.</source>
        <translation>コマンド&lt;i&gt;%1&lt;/i&gt;はクラッシュしました。</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="320"/>
        <source>External command failed to start.</source>
        <translation>外部コマンドの起動に失敗しました。</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="321"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to start.</source>
        <translation>コマンド&lt;i&gt;%1&lt;/i&gt;は起動に失敗しました。</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="325"/>
        <source>Internal error when starting command.</source>
        <translation>コマンドを実行しているときに環境エラーが発生しました。</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="326"/>
        <source>Bad parameters for process job call.</source>
        <translation>ジョブ呼び出しにおける不正なパラメータ</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="330"/>
        <source>External command failed to finish.</source>
        <translation>外部コマンドの終了に失敗しました。</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="331"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to finish in %2 seconds.</source>
        <translation>コマンド&lt;i&gt;%1&lt;/i&gt; %2 秒以内に終了することに失敗しました。</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="338"/>
        <source>External command finished with errors.</source>
        <translation>外部のコマンドがエラーで停止しました。</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="339"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; finished with exit code %2.</source>
        <translation>コマンド&lt;i&gt;%1&lt;/i&gt;は終了コード%2で終了しました。</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="130"/>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="167"/>
        <source>Default</source>
        <translation>デフォルト</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="40"/>
        <source>Unpartitioned space or unknown partition table</source>
        <translation>パーティションされていない領域または未知のパーティションテーブル</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="33"/>
        <source>unknown</source>
        <translation>不明</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="35"/>
        <source>extended</source>
        <translation>拡張</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="37"/>
        <source>unformatted</source>
        <translation>未フォーマット</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="39"/>
        <source>swap</source>
        <translation>スワップ</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="44"/>
        <source>(no mount point)</source>
        <translation>(マウントポイントなし)</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/locale/Translation.cpp" line="151"/>
        <source>%1 (%2)</source>
        <translation>%1 (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/Workers.cpp" line="64"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="72"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="76"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="93"/>
        <source>File not found</source>
        <translation>ファイルが存在しません</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/Workers.cpp" line="65"/>
        <source>Path &lt;pre&gt;%1&lt;/pre&gt; must be an absolute path.</source>
        <translation>パス &lt;pre&gt;%1&lt;/pre&gt; は絶対パスにしてください。</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="83"/>
        <source>Directory not found</source>
        <translation>ディレクトリが存在しません</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="84"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="94"/>
        <source>Could not create new random file &lt;pre&gt;%1&lt;/pre&gt;.</source>
        <translation>新しいランダムファイル &lt;pre&gt;%1&lt;/pre&gt; を作成できませんでした。</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageModel.cpp" line="74"/>
        <source>No product</source>
        <translation>製品がありません。</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageModel.cpp" line="82"/>
        <source>No description provided.</source>
        <translation>説明はありません。</translation>
    </message>
</context>
<context>
    <name>Recommended</name>
    <message>
        <location filename="../src/modules/welcomeq/Recommended.qml" line="40"/>
        <source>&lt;p&gt;This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;
        Setup can continue, but some features might be disabled.&lt;/p&gt;</source>
        <translation>&lt;p&gt;このコンピュータは %1 のセットアップの推奨要件を満たしていません。&lt;br/&gt;
セットアップは続行できませんがいくつかの機能は無効化されるでしょう。&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>RemoveVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="26"/>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="38"/>
        <source>Remove Volume Group named %1.</source>
        <translation>ボリュームグループ %1 の消去。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="32"/>
        <source>Remove Volume Group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>ボリュームグループ &lt;strong&gt;%1&lt;/strong&gt; の消去。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="46"/>
        <source>The installer failed to remove a volume group named &apos;%1&apos;.</source>
        <translation>インストーラーは新しいボリュームグループ &apos;%1&apos; の消去に失敗しました。</translation>
    </message>
</context>
<context>
    <name>ReplaceWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.ui" line="18"/>
        <source>Form</source>
        <translation>フォーム</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="128"/>
        <source>Select where to install %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;this will delete all files on the selected partition.</source>
        <translation>%1 へのインストールを選択。&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;警告:&lt;/font&gt;選択したパーティションにあるすべてのファイルは削除されます。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="150"/>
        <source>The selected item does not appear to be a valid partition.</source>
        <translation>選択されたのは有効なパーティションではないようです。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="158"/>
        <source>%1 cannot be installed on empty space. Please select an existing partition.</source>
        <translation>%1 は空きスペースにインストールできません。 既存のパーティションを選択してください。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="168"/>
        <source>%1 cannot be installed on an extended partition. Please select an existing primary or logical partition.</source>
        <translation>%1は拡張パーティションにインストールできません。既存のプライマリもしくは論理パーティションを選択してください。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="178"/>
        <source>%1 cannot be installed on this partition.</source>
        <translation>%1はこのパーティションにインストールできません。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="184"/>
        <source>Data partition (%1)</source>
        <translation>データパーティション (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="204"/>
        <source>Unknown system partition (%1)</source>
        <translation>不明なシステムパーティション (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="208"/>
        <source>%1 system partition (%2)</source>
        <translation>%1 システムパーティション (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="220"/>
        <source>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;The partition %1 is too small for %2. Please select a partition with capacity at least %3 GiB.</source>
        <translation>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;パーティション %1 は、%2 には小さすぎます。少なくとも %3 GB 以上のパーティションを選択してください。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="242"/>
        <source>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;EFI システムパーティションがシステムに見つかりません。%1 を設定するために一旦戻って手動パーティショニングを使用してください。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="253"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="269"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="294"/>
        <source>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 will be installed on %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;all data on partition %2 will be lost.</source>
        <translation>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 は %2 にインストールされます。&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;警告: &lt;/font&gt;パーティション %2 のすべてのデータは失われます。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="261"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>%1 上の EFI システムパーティションは %2 開始時に使用されます。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="277"/>
        <source>EFI system partition:</source>
        <translation>EFIシステムパーティション:</translation>
    </message>
</context>
<context>
    <name>Requirements</name>
    <message>
        <location filename="../src/modules/welcomeq/Requirements.qml" line="37"/>
        <source>&lt;p&gt;This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;
        Installation cannot continue.&lt;/p&gt;</source>
        <translation>&lt;p&gt;このコンピュータは %1 のインストールの最小システム要件を満たしていません。&lt;br/&gt;
インストールは継続できません。&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/Requirements.qml" line="39"/>
        <source>&lt;p&gt;This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;
        Setup can continue, but some features might be disabled.&lt;/p&gt;</source>
        <translation>&lt;p&gt;このコンピュータは %1 のセットアップの推奨要件を満たしていません。&lt;br/&gt;
セットアップは継続できませんがいくつかの機能は無効化されるでしょう。&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>ResizePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="41"/>
        <source>Resize partition %1.</source>
        <translation>パーティション %1 をリサイズする。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="48"/>
        <source>Resize &lt;strong&gt;%2MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%3MiB&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%2MiB&lt;/strong&gt; のパーティション &lt;strong&gt;%1&lt;/strong&gt; を &lt;strong&gt;%3MiB&lt;/strong&gt;にサイズ変更。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="59"/>
        <source>Resizing %2MiB partition %1 to %3MiB.</source>
        <translation> %2MiB のパーティション %1 を %3MiB にサイズ変更しています。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="77"/>
        <source>The installer failed to resize partition %1 on disk &apos;%2&apos;.</source>
        <translation>インストーラが、ディスク &apos;%2&apos; でのパーティション %1 のリサイズに失敗しました。</translation>
    </message>
</context>
<context>
    <name>ResizeVolumeGroupDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ResizeVolumeGroupDialog.cpp" line="30"/>
        <source>Resize Volume Group</source>
        <translation>ボリュームグループのサイズ変更</translation>
    </message>
</context>
<context>
    <name>ResizeVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="28"/>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="46"/>
        <source>Resize volume group named %1 from %2 to %3.</source>
        <translation>ボリュームグループ %1 を %2 から %3 にサイズ変更。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="37"/>
        <source>Resize volume group named &lt;strong&gt;%1&lt;/strong&gt; from &lt;strong&gt;%2&lt;/strong&gt; to &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation>ボリュームグループ &lt;strong&gt;%1&lt;/strong&gt; を &lt;strong&gt;%2&lt;/strong&gt; から &lt;strong&gt;%3&lt;/strong&gt; にサイズ変更。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="57"/>
        <source>The installer failed to resize a volume group named &apos;%1&apos;.</source>
        <translation>インストーラーはボリュームグループ名 &apos;%1&apos; のリサイズに失敗しました。</translation>
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
        <translation>ストレージをスキャンしています...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="68"/>
        <source>Partitioning</source>
        <translation>パーティショニング</translation>
    </message>
</context>
<context>
    <name>SetHostNameJob</name>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="36"/>
        <source>Set hostname %1</source>
        <translation>ホスト名 %1 の設定</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="43"/>
        <source>Set hostname &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>ホスト名 &lt;strong&gt;%1&lt;/strong&gt; を設定する。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="50"/>
        <source>Setting hostname %1.</source>
        <translation>ホスト名 %1 を設定しています。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="124"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="131"/>
        <source>Internal Error</source>
        <translation>内部エラー</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="142"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="159"/>
        <source>Cannot write hostname to target system</source>
        <translation>ターゲットのシステムにホストネームを書き込めません</translation>
    </message>
</context>
<context>
    <name>SetKeyboardLayoutJob</name>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="55"/>
        <source>Set keyboard model to %1, layout to %2-%3</source>
        <translation>キーボードのモデルを %1 に、レイアウトを %2-%3に設定</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="368"/>
        <source>Failed to write keyboard configuration for the virtual console.</source>
        <translation>バーチャルコンソール用のキーボードの構成に失敗しました。</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="369"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="397"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="414"/>
        <source>Failed to write to %1</source>
        <translation>%1 への書き込みに失敗しました</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="396"/>
        <source>Failed to write keyboard configuration for X11.</source>
        <translation>X11のキーボードの構成に失敗しました。</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="413"/>
        <source>Failed to write keyboard configuration to existing /etc/default directory.</source>
        <translation>現存する /etc/default ディレクトリへのキーボード設定の書き込みに失敗しました。</translation>
    </message>
</context>
<context>
    <name>SetPartFlagsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="45"/>
        <source>Set flags on partition %1.</source>
        <translation>フラグをパーティション%1にセットしました。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="51"/>
        <source>Set flags on %1MiB %2 partition.</source>
        <translation>%1MiB %2 パーティションにフラグを設定する。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="55"/>
        <source>Set flags on new partition.</source>
        <translation>新しいパーティションにフラグを設定する。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="67"/>
        <source>Clear flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>パーティション &lt;strong&gt;%1&lt;/strong&gt; 上のフラグを消去。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="73"/>
        <source>Clear flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>%1MiB &lt;strong&gt;%2&lt;/strong&gt; パーティション上のフラグを消去。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="91"/>
        <source>Flag %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition as &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation>%1MiB &lt;strong&gt;%2&lt;/strong&gt; パーティションに &lt;strong&gt;%3&lt;/strong&gt; フラグを設定する。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="116"/>
        <source>Clearing flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>%1MiB &lt;strong&gt;%2&lt;/strong&gt; パーティション上のフラグを消去しています。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="135"/>
        <source>Setting flags &lt;strong&gt;%3&lt;/strong&gt; on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>%1MiB &lt;strong&gt;%2&lt;/strong&gt; パーティションに &lt;strong&gt;%3&lt;/strong&gt; フラグを設定しています。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="77"/>
        <source>Clear flags on new partition.</source>
        <translation>新しいパーティション上のフラグを消去。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="82"/>
        <source>Flag partition &lt;strong&gt;%1&lt;/strong&gt; as &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>パーティション &lt;strong&gt;%1&lt;/strong&gt; に &lt;strong&gt;%2&lt;/strong&gt;フラグを設定する。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="98"/>
        <source>Flag new partition as &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>新しいパーティションに &lt;strong&gt;%1&lt;/strong&gt; フラグを設定する。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="110"/>
        <source>Clearing flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>パーティション &lt;strong&gt;%1&lt;/strong&gt; のフラグを消去しています。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="121"/>
        <source>Clearing flags on new partition.</source>
        <translation>新しいパーティション上のフラグを消去しています。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="126"/>
        <source>Setting flags &lt;strong&gt;%2&lt;/strong&gt; on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>パーティション &lt;strong&gt;%1&lt;/strong&gt; に &lt;strong&gt;%2&lt;/strong&gt; フラグを設定する。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="142"/>
        <source>Setting flags &lt;strong&gt;%1&lt;/strong&gt; on new partition.</source>
        <translation>新しいパーティションに &lt;strong&gt;%1&lt;/strong&gt; フラグを設定しています。</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="156"/>
        <source>The installer failed to set flags on partition %1.</source>
        <translation>インストーラーはパーティション %1 上のフラグの設定に失敗しました。</translation>
    </message>
</context>
<context>
    <name>SetPasswordJob</name>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="40"/>
        <source>Set password for user %1</source>
        <translation>ユーザ %1 のパスワード設定</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="47"/>
        <source>Setting password for user %1.</source>
        <translation>ユーザー %1 のパスワードを設定しています。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="81"/>
        <source>Bad destination system path.</source>
        <translation>不正なシステムパス。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="82"/>
        <source>rootMountPoint is %1</source>
        <translation>root のマウントポイントは %1 。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="88"/>
        <source>Cannot disable root account.</source>
        <translation>ルートアカウントを無効にすることはできません。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="89"/>
        <source>passwd terminated with error code %1.</source>
        <translation>passwd がエラーコード %1 のため終了しました。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="97"/>
        <source>Cannot set password for user %1.</source>
        <translation>ユーザー %1 のパスワードを設定できませんでした。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="98"/>
        <source>usermod terminated with error code %1.</source>
        <translation>エラーコード %1 によりusermodが停止しました。</translation>
    </message>
</context>
<context>
    <name>SetTimezoneJob</name>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="34"/>
        <source>Set timezone to %1/%2</source>
        <translation>タイムゾーンを %1/%2 に設定</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="62"/>
        <source>Cannot access selected timezone path.</source>
        <translation>選択したタイムゾーンパスにアクセスできません。</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="63"/>
        <source>Bad path: %1</source>
        <translation>不正なパス: %1</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="71"/>
        <source>Cannot set timezone.</source>
        <translation>タイムゾーンを設定できませんでした。</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="72"/>
        <source>Link creation failed, target: %1; link name: %2</source>
        <translation>リンクの作成に失敗しました、ターゲット: %1 ; リンク名: %2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="77"/>
        <source>Cannot set timezone,</source>
        <translation>タイムゾーンを設定できません,</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="78"/>
        <source>Cannot open /etc/timezone for writing</source>
        <translation>/etc/timezone を開くことができません</translation>
    </message>
</context>
<context>
    <name>SetupGroupsJob</name>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="182"/>
        <source>Preparing groups.</source>
        <translation>グループを準備しています。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="194"/>
        <location filename="../src/modules/users/MiscJobs.cpp" line="199"/>
        <source>Could not create groups in target system</source>
        <translation>ターゲットシステムにグループを作成できませんでした</translation>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="200"/>
        <source>These groups are missing in the target system: %1</source>
        <translation>これらのグループはターゲットシステムにありません: %1</translation>
    </message>
</context>
<context>
    <name>SetupSudoJob</name>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="34"/>
        <source>Configure &lt;pre&gt;sudo&lt;/pre&gt; users.</source>
        <translation>&lt;pre&gt;sudo&lt;/pre&gt;ユーザーを構成しています。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="71"/>
        <source>Cannot chmod sudoers file.</source>
        <translation>sudoersファイルの権限を変更できません。</translation>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="76"/>
        <source>Cannot create sudoers file for writing.</source>
        <translation>sudoersファイルを作成できません。</translation>
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
        <translation>了解 (&amp;O)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="24"/>
        <source>&amp;Yes</source>
        <translation>はい (%Y)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="25"/>
        <source>&amp;No</source>
        <translation>いいえ (&amp;N)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="26"/>
        <source>&amp;Cancel</source>
        <translation>中止 (&amp;C)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="27"/>
        <source>&amp;Close</source>
        <translation>閉じる (&amp;C)</translation>
    </message>
</context>
<context>
    <name>UEFI</name>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="37"/>
        <source>Systemd-boot is a UEFI boot manager which executes configured EFI images. The default entry is selected by a configured pattern (glob) or an on-screen menu and is simple to configure.</source>
        <translation>Systemd-bootは、構成されたEFIイメージを実行するUEFIブートマネージャーです。デフォルトのエントリは、設定されたパターン（glob）または画面上のメニューによって選択され、簡単に構成できます。</translation>
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
        <translation>ブートローダーが選択されていません。ブートローダーを選択しなければブートできないシステムになるでしょう。もし、まだブートローダーがない場合はこのインストールに追加することができます。</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="184"/>
        <source>No bootloader</source>
        <translation>ブートローダーがありません</translation>
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
        <location filename="../src/modules/usersq/UserInput.qml" line="57"/>
        <source>Pick your user name and credentials to login and perform admin tasks</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="70"/>
        <source>Virtual Keyboard</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="87"/>
        <source>What is your name?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="96"/>
        <source>Your Full Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="113"/>
        <source>What name do you want to use to log in?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="122"/>
        <source>Login Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="153"/>
        <source>If more than one person will use this computer, you can create multiple accounts after installation.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="166"/>
        <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="175"/>
        <source>root is not allowed as username.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="184"/>
        <source>What is the name of this computer?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="192"/>
        <source>Computer Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="219"/>
        <source>This name will be used if you make the computer visible to others on a network.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="232"/>
        <source>Only letters, numbers, underscore and hyphen are allowed, minimal of two characters.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="241"/>
        <source>localhost is not allowed as hostname.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="250"/>
        <source>Choose a password to keep your account safe.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="265"/>
        <source>Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="284"/>
        <source>Repeat Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="311"/>
        <source>Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="343"/>
        <source>Reuse user password as root password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="351"/>
        <source>Use the same password for the administrator account.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="364"/>
        <source>Choose a root password to keep your account safe.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="379"/>
        <source>Root Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="397"/>
        <source>Repeat Root Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="424"/>
        <source>Enter the same password twice, so that it can be checked for typing errors.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="454"/>
        <source>Log in automatically without asking for the password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="462"/>
        <source>Validate passwords quality</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/UserInput.qml" line="472"/>
        <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>UsersPage</name>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="190"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after setup.&lt;/small&gt;</source>
        <translation>&lt;small&gt;このコンピュータを複数人で使う場合、セットアップ後複数ユーザーを作成することができます。&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="196"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after installation.&lt;/small&gt;</source>
        <translation>&lt;small&gt;このコンピュータを複数人で使う場合、インストール後複数ユーザーを作成することができます。&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>UsersQmlViewStep</name>
    <message>
        <location filename="../src/modules/usersq/UsersQmlViewStep.cpp" line="35"/>
        <source>Users</source>
        <translation>ユーザー</translation>
    </message>
</context>
<context>
    <name>UsersViewStep</name>
    <message>
        <location filename="../src/modules/users/UsersViewStep.cpp" line="48"/>
        <source>Users</source>
        <translation>ユーザー</translation>
    </message>
</context>
<context>
    <name>VariantModel</name>
    <message>
        <location filename="../src/calamares/VariantModel.cpp" line="232"/>
        <source>Key</source>
        <comment>Column header for key/value</comment>
        <translation>キー</translation>
    </message>
    <message>
        <location filename="../src/calamares/VariantModel.cpp" line="236"/>
        <source>Value</source>
        <comment>Column header for key/value</comment>
        <translation>値</translation>
    </message>
</context>
<context>
    <name>VolumeGroupBaseDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="18"/>
        <source>Create Volume Group</source>
        <translation>ボリュームグループの作成</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="24"/>
        <source>List of Physical Volumes</source>
        <translation>論理ボリュームの一覧</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="34"/>
        <source>Volume Group Name:</source>
        <translation>ボリュームグループ名:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="47"/>
        <source>Volume Group Type:</source>
        <translation>ボリュームグループのタイプ:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="60"/>
        <source>Physical Extent Size:</source>
        <translation>物理拡張サイズ:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="70"/>
        <source> MiB</source>
        <translation> MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="86"/>
        <source>Total Size:</source>
        <translation>合計サイズ:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="106"/>
        <source>Used Size:</source>
        <translation>使用済みサイズ:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="126"/>
        <source>Total Sectors:</source>
        <translation>すべてのセクター:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="146"/>
        <source>Quantity of LVs:</source>
        <translation>LVs の容量:</translation>
    </message>
</context>
<context>
    <name>WelcomePage</name>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="18"/>
        <source>Form</source>
        <translation>フォーム</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="79"/>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="98"/>
        <source>Select application and system language</source>
        <translation>アプリケーション及び言語の選択</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="140"/>
        <source>Open donations website</source>
        <translation>寄付サイトを開く</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="143"/>
        <source>&amp;Donate</source>
        <translation>寄付 (&amp;D)</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="153"/>
        <source>Open help and support website</source>
        <translation>サポートサイトを開く</translation>
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
        <translation>リリースノート (&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="169"/>
        <source>&amp;Known issues</source>
        <translation>既知の問題 (&amp;K)</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="156"/>
        <source>&amp;Support</source>
        <translation>サポート (&amp;S)</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.cpp" line="239"/>
        <source>About %1 setup</source>
        <translation>%1セットアップについて</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.cpp" line="240"/>
        <source>About %1 installer</source>
        <translation>%1 インストーラについて</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="212"/>
        <source>%1 support</source>
        <translation>%1 サポート</translation>
    </message>
</context>
<context>
    <name>WelcomeQmlViewStep</name>
    <message>
        <location filename="../src/modules/welcomeq/WelcomeQmlViewStep.cpp" line="40"/>
        <source>Welcome</source>
        <translation>ようこそ</translation>
    </message>
</context>
<context>
    <name>WelcomeViewStep</name>
    <message>
        <location filename="../src/modules/welcome/WelcomeViewStep.cpp" line="46"/>
        <source>Welcome</source>
        <translation>ようこそ</translation>
    </message>
</context>
<context>
    <name>ZfsJob</name>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="101"/>
        <source>Create ZFS pools and datasets</source>
        <translation>ZFS プールとデータセットを作成</translation>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="162"/>
        <source>Failed to create zpool on </source>
        <translation>以下への zpool の作成に失敗</translation>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="180"/>
        <source>Configuration Error</source>
        <translation>構成エラー</translation>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="181"/>
        <source>No partitions are available for ZFS.</source>
        <translation>ZFS に使用できるパーティションがありません。</translation>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="192"/>
        <source>Internal data missing</source>
        <translation>内部データがありません</translation>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="192"/>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="257"/>
        <source>Failed to create zpool</source>
        <translation>zpool の作成に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="329"/>
        <source>Failed to create dataset</source>
        <translation>データセットの作成に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="330"/>
        <source>The output was: </source>
        <translation>出力は次のとおり:</translation>
    </message>
</context>
<context>
    <name>about</name>
    <message>
        <location filename="../src/branding/kaos_branding/about.qml" line="23"/>
        <source>About Calamares</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/about.qml" line="48"/>
        <location filename="../src/modules/welcomeq/about.qml" line="47"/>
        <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;
                        &lt;strong&gt;%2&lt;br/&gt;
                        for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;
                        Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;
                        Copyright 2017-2022 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;
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
        <location filename="../src/branding/kaos_branding/about.qml" line="95"/>
        <source>Close</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/about.qml" line="96"/>
        <source>Back</source>
        <translation>戻る</translation>
    </message>
</context>
<context>
    <name>calamares-navigation</name>
    <message>
        <location filename="../src/branding/kaos_branding/calamares-navigation.qml" line="57"/>
        <source>About</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/calamares-navigation.qml" line="61"/>
        <source>Info about Calamares</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/calamares-navigation.qml" line="91"/>
        <source>Debug</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/calamares-navigation.qml" line="120"/>
        <source>Back</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/calamares-navigation.qml" line="152"/>
        <source>Next</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/calamares-navigation.qml" line="208"/>
        <source>Cancel</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>calamares-sidebar</name>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="165"/>
        <source>Show debug information</source>
        <translation>デバッグ情報を表示する。</translation>
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
        <translation>インストールが完了しました。</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="45"/>
        <source>%1 has been installed on your computer.&lt;br/&gt;
            You may now restart into your new system, or continue using the Live environment.</source>
        <translation>&lt;h1&gt;すべて完了しました。&lt;/h1&gt;&lt;br/&gt;%1 はコンピューターにセットアップされました。&lt;br/&gt;今から再起動して新しいシステムを開始するか、%2ライブ環境を使い続けることができます</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="67"/>
        <source>Close Installer</source>
        <translation>インストーラーを閉じる</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="74"/>
        <source>Restart System</source>
        <translation>システムの再起動</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="95"/>
        <source>&lt;p&gt;A full log of the install is available as installation.log in the home directory of the Live user.&lt;br/&gt;
            This log is copied to %1 of the target system.&lt;/p&gt;</source>
        <translation>&lt;p&gt;完全なインストールログはライブユーザのホームディレクトリのinstallation.logで使用可能です。&lt;br/&gt;
ターゲットシステムの %1 にコピーされています。&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>finishedq@mobile</name>
    <message>
        <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="36"/>
        <source>Installation Completed</source>
        <translation>インストールが完了しました。</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="43"/>
        <source>%1 has been installed on your computer.&lt;br/&gt;
            You may now restart your device.</source>
        <translation>%1 はあなたのコンピュータにインストールされました。&lt;br/&gt;
デバイスを再起動できます。</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="65"/>
        <source>Close</source>
        <translation>閉じる</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="71"/>
        <source>Restart</source>
        <translation>再起動</translation>
    </message>
</context>
<context>
    <name>keyboardq</name>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="61"/>
        <source>To activate keyboard preview, select a layout.</source>
        <translation>キーボードプレビューをアクティブにするには、レイアウトを選択してください。</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="144"/>
        <source>&lt;b&gt;Keyboard Model:&amp;nbsp;&amp;nbsp;&lt;/b&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="185"/>
        <source>Layout</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="258"/>
        <source>Variant</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="311"/>
        <source>Type here to test your keyboard</source>
        <translation> ここでタイプしてキーボードをテストしてください</translation>
    </message>
</context>
<context>
    <name>localeq</name>
    <message>
        <location filename="../src/modules/localeq/localeq.qml" line="99"/>
        <location filename="../src/modules/localeq/localeq.qml" line="129"/>
        <source>Change</source>
        <translation>変更</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/localeq.qml" line="165"/>
        <source>&lt;h3&gt;Languages&lt;/h3&gt; &lt;/br&gt;
                        The system locale setting affects the language and character set for some command line user interface elements. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/localeq.qml" line="236"/>
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
        <translation>オフィススイートなし</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="180"/>
        <source>Create a minimal Plasma Desktop install, remove all extra applications and decide later on what you would like to add to your system. Examples of what won&apos;t be on such an install, there will be no Office Suite, no media players, no image viewer or print support.  It will be just a desktop, file browser, package manager, text editor and simple web-browser.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="193"/>
        <source>Minimal Install</source>
        <translation>最小インストール</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="245"/>
        <source>Please select an option for your install, or use the default: LibreOffice included.</source>
        <translation>インストールのオプションを選択するか、デフォルト（LibreOffice が含まれます）を使用してください。</translation>
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
        <translation>上記の項目及び条件に同意します。</translation>
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
        <translation>戻る</translation>
    </message>
</context>
<context>
    <name>show</name>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="48"/>
        <source>Here the actual install of KaOS will start.&lt;br/&gt;Use the left &lt;b&gt;mouse button&lt;/b&gt; to go to the next slide, right for previous.&lt;br/&gt;After creating your chosen disk setup in the first 10 % &lt;br/&gt;the full copying of the ISO will take the longest of this install phase &lt;br/&gt;and will run until approximately 30%.&lt;br/&gt;</source>
        <translation>ここでKaOSの実際のインストールが始まります。&lt;br/&gt;&lt;b&gt;マウスの左ボタン&lt;/b&gt;で次のスライドに進み、右ボタンで前に戻ります。&lt;br/&gt;最初の10%で選択したディスクの設定を作成した後、&lt;br/&gt;ISOのフルコピーはこのインストール段階の中で最も時間がかかり、&lt;br/&gt;約30%まで実行されます。&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="74"/>
        <source>After the ISO is copied some 25 post-install modules will run.&lt;br/&gt;This includes setting user specific options, &lt;br/&gt;removing Live Session only packages&lt;br/&gt;and adjusting hardware setup.&lt;br/&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="99"/>
        <source>The default Office Suite is LibreOffice.&lt;br/&gt;Calligra is available in the repositories. &lt;br/&gt;</source>
        <translation>デフォルトのオフィススイートはLibreOfficeです。&lt;br/&gt;Calligraはレポジトリで利用可能です。&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="122"/>
        <source>Qt/KDE specific internet applications include the &lt;br/&gt;Falkon web-browser and kde-telepathy for &lt;br/&gt;chat and Instant Messaging. &lt;br/&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="146"/>
        <source>For package management Octopi is the GUI application.&lt;br/&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="168"/>
        <source>May using KaOS be a pleasant experience for you.</source>
        <translation>KaOSを快適に利用できますように。</translation>
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
        <translation>&lt;h3&gt;&lt;quote&gt;%2&lt;/quote&gt;インストーラへようこそ&lt;/h3&gt;
&lt;p&gt;このプログラムはあなたにいくつか質問をし、%1をあなたのコンピューターにセットアップします。&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="127"/>
        <source>Current Language:&amp;nbsp;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="155"/>
        <source>Select Language</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="194"/>
        <source>Known Issues</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="216"/>
        <source>Release Notes</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="238"/>
        <source>Donate</source>
        <translation>寄付</translation>
    </message>
</context>
</TS>