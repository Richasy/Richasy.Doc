---
sidebar_position: 6
---

# 用户信息查询

## API前缀

`/wfa/account`

## 用户状态

- `Ingame` = 0
- `Online` = 1
- `Offline` = 2
- `Suspend` = 3

## 批量获取用户简略信息

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**query**|  POST |   无  | JSON |

### 请求结构

```json
[
    "userId",
    "userId"
]
```

仅支持UserId查询，开发者可以上传一串UserId的数组，API会返回这些UserId对应的账户简略信息

### 返回结构

```json
[
    {
        "userId": "...",
        "level": 10,
        "showBadge": {
            "id": 2,
            "name": "宗师",
            "description": "社区的坚定支持者，人人爱戴的领袖人物"
        },
        "status": 1,
        "displayName": "云之幻",
        "gameName": "Thansy"
    },
    //...
]
```

### 数据说明

`showBadge`是用户的显示称号。用户可以有很多个称号，但只能显示其中一个。

---

## 获取单个用户详细信息

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**user**|  GET |   无  | JSON |

### 请求参数

- `userId`: 用户ID

仅支持UserId查询，API会返回这个UserId对应的账户详细信息

### 返回结构

```json
{
    "userId": "iwC1451iw1",
    "displayName": "云之幻",
    "badges": [
        {
            "id": 13,
            "name": "积分至尊",
            "description": "无法用数字形容的财富，陪伴紫卡市场成长的见证"
        }
        //...
    ],
    "introduce": "目前心情极为复杂",
    "mail": "Thansy@foxmail.com",
    "level": 10,
    "status": 1,
    "showBadge": {
        "id": 2,
        "name": "宗师",
        "description": "社区的坚定支持者，人人爱戴的领袖人物"
    },
    "reputation": 0,
    "gameName": "Thansy",
    "experience": 16522,
    "credit": 3025,
    "lastSignTime": 1581578977
}
```

### 数据说明

- `badges`: 是用户获得的所有称号
- `experience`: 用户当前的经验值
- `credit`: 用户的信用值
- `lastSignTime`: 用户最后一次签到的时间，Unix时间戳，精确到秒