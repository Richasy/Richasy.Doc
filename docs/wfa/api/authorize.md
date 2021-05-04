---
sidebar_position: 3
---

# 获取授权

:::tip
在此已假定你通过了审核，拿到了你的**通行证**。    
如果你还未申请，请查看[申请权限](./how_to_apply)
:::



当你通过审核后，你将获取专属于你的`ClientId`以及`ClientSecret`，请牢牢记住它们，并妥善保管，一旦丢失，不予补办。

## 授权API

|    请求地址   |请求方式|      请求类型        |返回数据|
|:-------------|:----:|:--------------------|:----:|
|**https://identity.richasy.cn/connect/token**| POST |x-www-form-urlencoded| JSON |

### 请求结构

```javascript
Body : {
    client_id : 'xxxxxxxxxx',
    client_secret : 'xxxxxxxxxx',
    grant_type : 'client_credentials'，
    scope:'wfa.basic wfa.lib.query'
}
```

### 返回结构

```json
{
    "access_token" : "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "expires_in" : 1209600,
    "token_type": "Bearer"
}
```

### 数据说明

- `client_id`/`client_secret` : 这是你在申请通过后我给你的身份识别码，仅属于你

- `scope` : 这是你的权限范围，参见[权限](#权限)

- `access_token` : 这是你的令牌，在之后的请求中都必须在`Header`中携带该令牌。

- `expires_in` : 令牌有效时间，以秒为单位，通常为2周，过期则令牌失效，重新请求则旧令牌失效

- `token_type` : 令牌类型，这是一个请求前缀，需要写在`Header`之中

## 权限

对于申请WFA使用权的账户而言，有以下权限可选：

- `wfa.basic` : 涉及游戏信息和WM信息
- `wfa.riven.query` : 涉及WFA紫卡市场
- `wfa.user.read` : 涉及WFA用户信息读取
- `wfa.lib.query` : 涉及资料库条目读取

如果需要使用高级功能，比如上架紫卡、修改用户资料等，需要你已经有成型的并通过资格认证的应用（不接受机器人和网页应用），并联系开发者进行考察。

*所谓资格认证即你已经在应用商店上架或其他能证明你有足够能力和足够信誉合理妥善地使用API的证明。*