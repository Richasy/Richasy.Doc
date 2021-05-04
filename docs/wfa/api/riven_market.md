---
sidebar_position: 7
---

# 紫卡市场信息查询

## API前缀

`/wfa/rm`

## 游戏平台切换

经修改，现在平台设置将写在查询参数中，比如获取PS4平台的希图斯信息可以这样写：

`https://data.richasy.cn/wfa/basic/cetusStatus?platform=ps4`

平台可选值参照[游戏平台可选值](/document/wfa/data#游戏平台可选值)，不写的话默认为PC。

## 订单状态

- `New` = 0
- `Trading` = 1
- `Done` = 2
- `Suspend` = 3
- `Off` = 4

## 订单类型

- `Sell` = 0
- `Buy` = 1

## 查询物品

WFA紫卡市场查询的是武器或类目的英文，支持的条目名称和类型表请参见[词库](https://github.com/Richasy/WFA_Lexicon/tree/WFA5)内的`WF_Riven`表

## 订单结构

```json
{
    "orderId": "eacf3f8f6a1841db8072e72be92b3eba",
    "orderType": 0,
    "category": "Melee",
    "weapon": "Dark Dagger",
    "successUser": "",
    "reset": 0,
    "dan": 13,
    "polarity": "vazarin",
    "platform": "pc",
    "createTime": 1581672126,
    "status": 0,
    "isVeiled": false,
    "platinum": 130,
    "modRank": 0,
    "description": null,
    "properties": [
        {
            "name": "Chance to be a Critical Hit",
            "displayType": 0,
            "isDeduction": false,
            "value": 8.5
        },
        // ...
    ],
    "account": {
        "userId": "12e48dfbcd01480495e8e592fedb20cc",
        "level": 1,
        "showBadge": null,
        "status": 0,
        "displayName": "PCyoung",
        "gameName": "PCyoung"
    },
    "locking": []
}
```

## 获取物品的建议价格

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**advice**|  GET |   无  | JSON |

### 请求参数

- `weapon`: 武器名，比如Tigris，注意嵌入到链接前先进行一次URL编码
- `category`: 类目名，比如melee, 与weapon同时存在时忽略weapon
- `rerolled`: 是否洗过，一个物品的价格有两种，未洗和已洗

### 返回结构

```json
[
    {
        "id": 1452,
        "itemType": "Melee",
        "compatibility": "DARK DAGGER",
        "rerolled": false,
        "avg": 131.65,
        "stddev": 290.09,
        "min": 5.0,
        "max": 1000.0,
        "pop": 1.0,
        "platform": "pc"
    },
    //...
]
```

### 数据说明

所有数据均为DE公开的交易数据，每周更新

`avg`: 平均价格
`stddev`: 标准差
`pop`: 应该是受欢迎程度？

---

## 获取最新列表

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**lastest**|  GET |   无  | JSON |

### 请求参数

- `orderType`: 订单类型，可选值为`sell`和`buy`
- `pageSize`: 一页容纳的条目数
- `page`: 页码

### 返回结构

```json
{
    "items":[
        //订单结构参见上文
    ],
    "count": 10,
    "page": 1,
    "hasMore": false
}
```

### 数据说明

与WM不同，这里`page`和`pageSize`是必填项，如果没写，那么会采用默认值：`page=1`, `pageSize=10`

---

## 订单查询

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**orders**|  GET |   无  | JSON |

### 请求参数

- `weapon`：武器名，与类别同时存在时忽略类别
- `category`：类别
- `orderType`: 订单类型，可选值为`sell`和`buy`
- `pageSize`: 一页容纳的条目数
- `page`: 页码
- `isVeiled`: 是否为未开紫卡

### 返回结构

```json
{
    "items":[
        //订单结构参见上文
    ],
    "count": 10,
    "page": 1,
    "hasMore": false
}
```

### 数据说明

与WM不同，这里`page`和`pageSize`是必填项，如果没写，那么会采用默认值：`page=1`, `pageSize=10`

---

## 用户上架物品

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**profile**|  GET |   无  | JSON |

### 请求参数

- `userId`: 用户Id，指的是WFA账户系统中的`userId`，可以精准查询某用户
- `user`：用户游戏名，与userId同时存在时忽略userId

### 返回结构

```json
{
    "profile": {
        "userId": "iwC1451iw1",
        "displayName": "云之幻",
        "badges": [
            {
                "id": 2,
                "name": "宗师",
                "description": "社区的坚定支持者，人人爱戴的领袖人物"
            }
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
        "credit": 3025
    },
    "orders": [
        //订单结构参见上文
    ]
}
```

### 数据说明

该API除了返回用户的订单外，也会返回用户的详细信息。