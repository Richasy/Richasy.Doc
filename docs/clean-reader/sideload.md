# 侧加载包的安装

本文将详细讲述 `干净阅读` 的侧加载安装过程，请按照下文所述一步步操作，在安装中遇到的问题，可以在 [干净阅读论坛](https://github.com/Clean-Reader/CleanReader.Desktop/discussions) 中讨论。

## 准备

首先，你需要打开系统的开发者模式，这是通过侧加载方式安装 UWP 应用的前置条件，否则，您的设备只能安装来自 Microsoft Store 的 UWP 应用。

打开系统设置的 `开发者选项`，如果浏览器无法打开，请参考以下步骤进入 `开发者选项` 页面.

1. 进入 `设置`。
2. Win11 请打开 `隐私和安全性` 页面，Win10 请打开 `更新和安全` 页面。
3. 选择 `开发者选项` 选项，打开开发人员模式，等待系统安装一些必要组件。
    - 对 Win10 ，你还需要再单独勾选 `从任意源(包括松散文件)安装应用` 选项。
4. 向下找到 PowerShell 分区，将 `更改执行策略，以允许本地PowerShell脚本在未签名的情况下运行。远程脚本需要` 选项勾选并点击 `应用`。

:::tip
下面步骤中的部分图片源自 [哔哩](https://github.com/Richasy/Bili.Uwp) ，这是我做的一个哔哩哔哩第三方应用，欢迎尝试哟~
:::

## 下载应用

1. 进入 Github 的 [Release](https://github.com/Clean-Reader/CleanReader.Desktop/releases) 页面。

    ![release_page.png](https://pic.dogimg.com/2022/04/09/6250ca1c65551.png)

2. 找到标识 `Latest release` 标识的版本，该版本意味着最新发布版本。在该版本中下的 `Assets` 面板中找到适合自己设备平台的包并点击下载。具体平台版本对应如下：

    |架构|说明|示例包名|
    |-|-|-|
    |x64|64 位平台，是现在的主流平台。在设置的**关于**页面中的 `设备规格` 区块可以查看当前的系统类型|CleanReader.Desktop_{版本号}_x64.zip|
    |x86|32 位平台，确认方法可以参照 x64 进行|CleanReader.Desktop_{版本号}_x86.zip|
    |ARM64|64 位 ARM 架构，Surface Pro X 是典型设备|CleanReader.Desktop_{版本号}_ARM64.zip|

    *注：ARM 架构在 UWP 中通常指 Windows Phone 设备，目前已不再支持。*

## 推荐：使用 PowerShell 安装应用

> 需要特别注意的是，应使用 Windows PowerShell 而不是 PowerShell Core 来安装。  
> 在涉及到本机操作时，PowerShell Core 并没有提供相应的功能。  

优势：通过脚本安装，可以自动安装证书，方便快捷。

1. 解压上一步骤下载的应用压缩包。
2. 在解压后的文件夹中找到 `install.ps1` 这个脚本文件。
3. 右键单击该文件，并选择 `使用 PowerShell 运行`。
    
    ![open_with_powershell.png](https://pic.dogimg.com/2022/04/09/6250ca18e3b3d.png)

4. 在初次运行时，安装脚本会在安装证书时提示你提升权限，请按 `回车 (Enter)` 键继续。
    
    ![cert_uac.png](https://pic.dogimg.com/2022/04/09/6250ca1735ba9.png)

5. 在安装证书时，请输入 `Y` 以继续

    ![cert_confirm.png](https://pic.dogimg.com/2022/04/09/6250ca1e6068d.png)

6. 等待安装完成

    ![install_process.png](https://pic.dogimg.com/2022/04/09/6250ca179d862.png)

7. 现在你可以在你的开始菜单中找到 `干净阅读` 了。

## 常规：使用应用安装程序 (App Installer)

优势：图形化操作界面，易于理解

劣势：需要手动安装证书

1. （可选）在 Microsoft Store 中下载或更新 **应用安装程序**
2. 解压之前下载的应用压缩包。
3. 在解压后的文件夹中找到后缀名为 `.cer` 的证书文件。

    ![cert_file.png](https://pic.dogimg.com/2022/04/09/6250ca1f203b8.png)

4. 双击运行，点击 `安装证书`。

    ![cert_detail.png](https://pic.dogimg.com/2022/04/09/6250ca1e40a38.png)

5. 存储位置选择 `本地计算机`，点击 `下一页`，并通过 UAC 验证

    ![cert_locate.png](https://pic.dogimg.com/2022/04/09/6250ca1558a27.png)

6. 选择 `将所有的证书都放入下列存储`，并点击 `浏览`，选择 `受信任的根证书颁发机构` 或者 `受信任人`，点击 `确定`，再点击 `下一页`。

    ![cert_save.png](https://pic.dogimg.com/2022/04/09/6250ca1d69246.png)

7. 证书已导入，点击 `完成` 即可结束证书导入。
8. 在解压的应用包文件夹中，双击打开后缀名为 `.msixbundle` 的安装包。

    ![msixbundle_file.png](https://pic.dogimg.com/2022/04/09/6250ca1818335.png)

9. 到了这一步就简单了，确认安装包显示的是 `Trusted App`，这表示我们的证书导入正确，点击 `Install` 按钮，等待应用安装完成即可。

    ![package_install.png](https://pic.dogimg.com/2022/04/09/6250ca1b983f0.png)

## 订阅更新

为了能在 `干净阅读` 更新时收到通知，请在 Github 的 `干净阅读` 仓库中，点击右上角的 `Watch` 以进行追踪，详细步骤如下：

1. 点击 `Watch` 按钮，再点击旁边的三角符号。

    ![watch_repo.png](https://pic.dogimg.com/2022/04/09/6250ca1d1c8b1.png)

2. 选择 `Custom`，选中 `Release`，并点击 `Apply`。

    ![watch_release.png](https://pic.dogimg.com/2022/04/09/6250ca1cc53e7.png)

这样，在之后 `干净阅读` 的 `Release` 页面更新时，你就能在你的注册邮箱中收到订阅邮件，从而获知最新的版本。

有条件的小伙伴也可以下载 Github 的 Android 或 iOS 客户端，能得到更直接的通知推送。