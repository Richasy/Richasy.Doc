---
sidebar_position: 9
---

# WFA CSharp SDK

## 关于 Warframe Alerting Prime

Warframe Alerting Prime（以下简称WFA）是由云之幻开发的一款展示Warframe游戏信息的应用，现已集成了Warframe Market和WFA Riven Market等诸多服务。

UWP应用下载地址：[微软应用商店](https://www.microsoft.com/store/productId/9MV8KGSLRVTF)

## 安装SDK

|||
|-|-|
|SDK名称|Richasy.Wfa.Sdk|
|目标平台| .Net Standard 2.0|
|打包工具|Visual Studio 2019|

Nuget: [下载地址](https://www.nuget.org/packages/Richasy.WFA.Sdk/1.0.0)

目前也已经开放源代码，您可以根据自己平台的需要自行适配。

## 如何使用

### 授权

使用本SDK，您需要申请资格认证，具体申请方式请参考[这篇文档](./authorize)。

### 开始

在安装完SDK并申请了CliendId和ClientSecret之后，您可以按照如下方式使用SDK:

#### - 创建`Client`

`Client`中包含了你能使用的所有方法，在使用之前，你需要先创建它。

有两种创建方式：

1. 传入你的`ClientId`，`ClientSecret`，请求的[权限](#权限)，和目标游戏平台

```csharp
Client client = new Client(clientId, clientSecret, permissions, PlatformType.PC);
```

这种创建方式适合首次使用SDK时进行，创建完成后，调用`client.InitAsync()`方法，将会向WFA服务器申请Token，执行完毕后，你需要保存`client.Token`的值，并使用第二种创建方式（这会提高你的加载速度）

2. 传入之前获得过的Token和目标游戏平台

```csharp
Client client = new Client(token, PlatformType.PC);
```

Token的有效期是两周，这两周内，你都可以调用这个方法创建Client类。

#### - 初始化client

```csharp
await client.InitAsync();
```

上一步你创建了`client`，但是还不能立刻使用，你需要进行初始化，这种初始化体现在两方面：

- 通过ClientId创建的`Client`，需要向服务器发送请求，得到授权令牌
- 通过`Token`创建的`Client`，需要发送一个简单请求用于验证Token的有效性（如果你确认`Token`有效，可以跳过这一步）

#### - 添加错误事件监听

```csharp
Client.OnException += Client_OnException;
```

这个错误处理是一个全局的错误处理，即无论你在哪个模块出现了**网络请求错误**，都会触发该事件。但如果是内部的数据处理错误则会抛出异常。

### 获取信息

**很简单的，你只需要调用方法就行了**

示例:

#### - 获取全部游戏信息

```csharp
string total = await client.GetAllGameInfoAsync();
```

获取到的信息包含游戏数据的所有模块，将以json字符串的形式传出。

#### - 获取部分游戏信息

以希图斯昼夜信息举例，分部信息通常有两种获取方式：

1. 请求服务器获取数据

```csharp
CetusStatus cetus = await client.GetCetusStatusAsync();
```

2. 根据之前获取到的全部游戏信息字符串解析

```csharp
CetusStatus cetus = cleint.GetCetusStatus(total);
```

## 权限

对于申请WFA使用权的账户而言，有以下权限可选：

- `wfa.basic` : 涉及游戏信息和WM信息
- `wfa.riven.query` : 涉及WFA紫卡市场
- `wfa.user.read` : 涉及WFA用户信息读取
- `wfa.lib.query` : 涉及资料库条目读取

如果需要使用高级功能，比如上架紫卡、修改用户资料等，需要你已经有成型的并通过资格认证的应用（不接受机器人和网页应用），并联系开发者进行考察。

*所谓资格认证即你已经在应用商店上架或其他能证明你有足够能力和足够信誉合理妥善地使用API的证明。*

---

欢迎访问我的博客: [Richasy's Blog](https://blog.richasy.cn).

你能在这里找到关于API的全部数据: [WFA API Introduce](https://www.richasy.cn/document/wfa/data/).

你可以在这里下载应用涉及到的词典: [WFA Dictionary](https://github.com/Richasy/WFA_Lexicon/tree/WFA5).
