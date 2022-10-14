---
title: 叠片柱状图
nav:
  title: 大屏素材库
  path: /screen
group:
  title: 条形图
---

# 叠片柱状图

## API

| 属性          | 必填    | 说明                  | 类型                                            | 默认值  |
| ------------- | ------- | --------------------- | ----------------------------------------------- | ------- |
| xAxisData     | `true`  | x 轴数据              | `any[]`                                         |         |
| unit          | `false` | 单位                  | `string`                                        |         |
| name          | `false` | 图例名称              | `string`                                        |         |
| data          | `true`  | 图表数据              | `(number \| { name: string; value: number })[]` |
| style         | `false` | 自定义样式            | `CSSProperties`                                 |         |
| autoLoop      | `false` | 控制是否自动轮播      | `boolean`                                       |         |
| duration      | `false` | 自动轮播的时长        | `number`                                        | `2000`  |
| config        | `false` | 自定义 Echarts 配置   | `ECOption`                                      |         |
| inModal       | `false` | 是否在弹窗内显示      | `boolean`                                       | `false` |
| showYAxisLine | `false` | 控制是否显示 y 轴的线 | `boolean`                                       | `true`  |
| onEvents      | `false` | 自定义事件            | `Record<string, (params?: any) => void>`        |         |

## 效果图 1

<code src="../../../example/SliceBarDemo/demo1.tsx" background="#040727">

## 效果图 2

<code src="../../../example/SliceBarDemo/demo2.tsx" background="#040727">

## 效果图 3 自动轮播

<code src="../../../example/SliceBarDemo/demo3.tsx" background="#040727">

## 效果图 4 (轮播两次后停止)

<code src="../../../example/SliceBarDemo/demo4.tsx" background="#040727">

## 效果图 5 (弹窗)

<code src="../../../example/SliceBarDemo/demo5.tsx" background="#040727">

## 效果图 6 (手动控制图表轮播)

<code src="../../../example/SliceBarDemo/demo6.tsx" background="#040727">
