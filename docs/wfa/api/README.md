---
sidebar_position: 1
---

# API介绍

:::tip
WFA提供了C#版本的SDK，基于.Net Standard 2.0  
项目地址：[Github](https://github.com/Richasy/WFA-SDK)  
Nuget地址：[下载](https://www.nuget.org/packages/Richasy.WFA.Sdk/1.0.0)
:::

在此公开的WFA相关数据的API遵循[REST](https://baike.baidu.com/item/rest/6330506?fr=aladdin)设计模式，采用`GET`,`PUT`等方式区分请求。

所以当你碰到请求地址相同时，请留意请求方式。

在你请求资源之前，你必须要连接服务器获取授权的令牌，以后你每次请求API时，都必须在请求头中携带该令牌，否则服务器将返回`401`的未授权错误

对于如聊天机器人一类的即时应用，开发者可以在本机先行请求一次令牌，并将令牌保存下来，定期更换即可。

:::tip
值得一提的是，令牌的有效期通常是自请求之时起的2周内，所以定期重新发起请求获取新的令牌是很有必要的哟~
:::

:::warning
如果没有特殊说明，API请求都需要Token验证，Token需要写在请求头的`Authorization`字段中，不了解的同学请先去学习OAuth2。
:::

## API根域名

`https://data.richasy.cn`

## 游戏平台可选值

- `pc` (Windows平台/Steam)

- `ps4` (PS4平台)

- `xb1` (Xbox平台)

- `ns`（Nintendo Switch 平台）