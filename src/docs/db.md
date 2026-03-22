# 数据库设计

## 注意

- 时间字段用数字时间戳表示

## carMeta

## updateVersion

游戏版本，一般会有 2 到 3 个赛季

- version number
- startDate number
- endDate number
- seasons array
  - name
  - startDate number
  - endDate number
  - \_id

## updateSeason

游戏赛季

- name string
- startDate number
- endDate number
- update_version
  - \_id string
  - version number
