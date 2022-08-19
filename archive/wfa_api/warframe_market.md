---
sidebar_position: 5
---

# Warframe Market 价格查询

:::tip
API的数据来源为[Warframe Market](https://warframe.market)，经由开发者进行了二次包装
:::

## 请求路由前缀

**/wfa/wm**

## 游戏平台切换

经修改，现在平台设置将写在查询参数中，比如获取PS4平台的希图斯信息可以这样写：

`https://data.richasy.cn/wfa/basic/cetusStatus?platform=ps4`

平台可选值参照[游戏平台可选值](./home#游戏平台可选值)，不写的话默认为PC。

## 查询代码

`item`指的是条目的查询代码，而不是条目的名字，WM支持的条目名称与查询代码的对照表请参见[词库](https://github.com/Richasy/WFA_Lexicon/tree/WFA5)内的`WF_Sale`表

## 查询订单

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**orders/{item}**|  GET |   无  | JSON |

### 查询参数

- `pageSize`: 一页最多容纳的条目数
- `page`: 页码
- `type`: 订单类型，可选值为`sell`或`buy`
- `status`: 用户状态（可多选），可选值为`ingame`, `online`和`offline`
- `rank`: Mod最低强化等级（如果搜的是Mod的话）
- `minPrice`：最低价格
- `maxPrice`: 最高价格

示例请求：https://data.richasy.cn/wfa/wm/orders/ash_prime_set?platform=pc&pageSize=10&page=1&type=sell&status=ingame&status=online&minPrice=20&maxPrice=90

请求表示：在PC平台搜索名为`ash_prime_set`的条目，要求订单状态为`sell`，且用户状态为`ingame`或`online`，订单最低价格20pl，最高价格90pl的订单，将结果分页，每一页放10个条目，并返回第一页的结果。

### 返回结构

```json
{
    "items": [
        {
            "quantity": 2,
            "creation_date": "2020-02-14T12:52:28+08:00",
            "visible": true,
            "user": {
                "ingame_name": "SkilledBR",
                "last_seen": "2020-02-14T12:55:06.997+08:00",
                "reputation_bonus": 0,
                "reputation": 1,
                "region": "en",
                "avatar": "user/avatar/5cb4bb9d4532a6053f2c646e.png?a5f23edf6b5613e125f9d19290e3f5df",
                "status": "ingame",
                "id": "5cb4bb9d4532a6053f2c646e"
            },
            "last_update": "2020-02-14T12:52:28+08:00",
            "platinum": 75.0,
            "order_type": "sell",
            "region": "en",
            "platform": "pc",
            "id": "5e46278c5a828100780d5fa0",
            "mod_rank": null,
            "item": null
        },
        //...
    ],
    "hasMore": true,
    "page": 1,
    "itemsCount": 10,
    "totalCount": 11
}
```

### 数据说明

- `hasMore`:是否有更多的数据
- `page`：当前页码
- `itemsCount`：当前传回的数据条目个数
- `totalCount`：查询到的符合搜索条件的条目总数

### 提醒

如果不想使用分页的查询方式，可以不传入`page`和`pageSize`查询参数，API会传回所有符合搜索条件的数据，回传的结构就只是一个订单数组（即上述结构的`items`部分）

---

## 查询相关物品

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**itemset/{item}**|  GET |   无  | JSON |

### 返回结构

```json
[
    {
        "tags": [
            "blueprint",
            "prime",
            "warframe"
        ],
        "ducats": 45,
        "icon": "icons/en/ash_prime_blueprint.9f3f82bee82a9741531857cf76eb6594.png",
        "icon_format": "port",
        "trading_tax": 4000,
        "thumb": "icons/en/thumbs/ash_prime_blueprint.9f3f82bee82a9741531857cf76eb6594.128x128.png",
        "en": {
            "item_name": "Ash Prime Blueprint",
            "description": "<p>Release Date: July 7, 2015</p><p>Ash Prime is the primed variant of the Ash Warframe featuring more powerful stats, possessing a higher shield capacity, armor and sprint speed, as well as an additional  polarity.</p>",
            "wiki_link": "http://warframe.wikia.com/wiki/Ash/Prime",
            "drop": [
                {
                    "name": "Lith S3 Uncommon",
                    "link": null
                },
                //...
            ]
        },
        "mastery_level": 0,
        "id": "559daa9fe779897b3263c2c7",
        "url_name": "ash_prime_blueprint",
        "set_root": false,
        "sub_icon": "sub_icons/blueprint_128x128.png",
        "rarity": null
    },
    //...
]
```

### 数据说明

这个API主要用于查询搜索条目的相关条目。比如我搜索`ash_prime_set`，会回传包括蓝图，机体等在内的部件信息。这些信息就是条目的描述，不包含订单信息。

## 最新订单

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**recent**|  GET |   无  | JSON |

### 查询参数

- `type`: 订单类型，可选值为`sell`,`buy`,`all`

### 返回结构

```json
[
    {
        "quantity": 1,
        "creation_date": "2020-02-14T16:46:26.709+08:00",
        "visible": true,
        "user": {
            "ingame_name": "GinoBear",
            "last_seen": null,
            "reputation_bonus": 0,
            "reputation": 0,
            "region": "zh",
            "avatar": null,
            "status": "ingame",
            "id": "5e463ffcebde7c0055e7f5fb"
        },
        "last_update": "2020-02-14T16:46:26.709+08:00",
        "platinum": 25.0,
        "order_type": "sell",
        "region": "zh",
        "platform": "pc",
        "id": "5e465e62f34415006eec870a",
        "mod_rank": null,
        "item": {
            "tags": [
                "blueprint",
                "melee"
            ],
            "ducats": 0,
            "icon": "icons/en/Silva_&_Aegis_Prime_Set.d226bbe86d3eccd8c751958dba46a4f6.png",
            "icon_format": null,
            "trading_tax": 0,
            "thumb": "icons/en/thumbs/Silva_&_Aegis_Prime_Set.d226bbe86d3eccd8c751958dba46a4f6.128x128.png",
            "en": {
                "item_name": "Silva & Aegis Prime Guard",
                "description": null,
                "wiki_link": null,
                "drop": null
            },
            "mastery_level": 0,
            "id": "592dd262011e88f094afec88",
            "url_name": "silva_and_aegis_prime_guard",
            "set_root": false,
            "sub_icon": "sub_icons/guard_128x128.png",
            "rarity": null
        }
    },
    //...
]
```

### 数据说明

通过该API获得的数据在条目中会包含`item`信息，里面提供了该订单的目标物品的信息。

如果将订单类型设置为`all`，回传的数据结构会有变化：

```json
{
    "sell":[],
    "buy":[]
}
```

## 统计数据

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**statistics/{item}**|  GET |   无  | JSON |

### 查询参数

- `type`: 数据来源类型，可选值为`live`,`closed`,`all`。live表示目前在售的订单，closed表示隐藏或删除的订单，建议选择`live`，不传的话默认为all

### 返回结构

```json
{
    "_48hours": [
        {
            "datetime": "2020-02-12T17:00:00+08:00",
            "volume": 150,
            "min_price": 40.0,
            "max_price": 65.0,
            "open_price": 0.0,
            "closed_price": 0.0,
            "avg_price": 52.5,
            "wa_price": 51.353,
            "median": 51.0,
            "donch_top": 0.0,
            "donch_bot": 0.0,
            "id": "5e43cd2bdf14870022333a14",
            "moving_avg": 77.9,
            "order_type": "buy"
        },
        //...
    ],
    "_90days": [
        {
            "datetime": "2019-11-17T08:00:00+08:00",
            "volume": 252,
            "min_price": 40.0,
            "max_price": 102.0,
            "open_price": 0.0,
            "closed_price": 0.0,
            "avg_price": 71.0,
            "wa_price": 71.306,
            "median": 80.0,
            "donch_top": 0.0,
            "donch_bot": 0.0,
            "id": "5dd1e2eb9262e60022ba9a28",
            "moving_avg": 115.9,
            "order_type": "buy"
        },
    ]
}
```

### 数据说明

如果将订单类型设置为`all`，回传的数据结构会有变化：

```json
{
    "live":[],
    "closed":[]
}
```

## 用户数据

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**profile/{name}**|  GET |   无  | JSON |

:::tip
`name`指的是用户的游戏名，不可为空
:::

### 返回结构

```json
{
    "profile": {
        "own_profile": false,
        "ingame_name": "xxx",
        "status": "offline",
        "last_seen": "2020-02-14T17:29:08+08:00",
        "reputation": 4,
        "background": null,
        "avatar": "user/avatar/5de19ce492f5e002c3fccc03.png?cac93edbaec6327315ce1ac564d5f8aa",
        "platform": "pc",
        "region": "en",
        "banned": false,
        "id": "5de19ce492f5e002c3fccc03",
        "about": ""
    },
    "sell":[
        // 结构请参考最新订单的条目结构
    ],
    "buy":[]
}
```

### 数据说明

`avatar`是用户头像，没设置的话会为`null`，`about`是用户的说明，是html文本。

## 杜卡德散件行情

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**ducats**|  GET |   无  | JSON |

### 返回结构

```json
{
  "previous_hour": [
      {
        "datetime": "2020-06-24T05:00:00.000+00:00",
        "position_change_month": 0,
        "position_change_week": 11,
        "position_change_day": 8,
        "plat_worth": 58.995,
        "volume": 19,
        "ducats_per_platinum": 15.0,
        "ducats_per_platinum_wa": 14.49,
        "ducats": 45,
        "item": "5d93ca127ea27b0a87566f7c",
        "median": 3.0,
        "wa_price": 3.1,
        "id": "5ef2ec9523fc73002455dc46"
      },
      ...
  ],
  "previous_day": [
      {
        // 同上
      }
  ]
}
```

### 数据说明

对照 https://warframe.market/tools/ducats 查看数据含义。

id仅表示该条目的标识符，item才表示当前对应的条目ID。条目ID需搭配词库中的`WF_Sale`词库使用.