import { RangeBar } from '@antv/g2plot';

const data = [
  { type: '分类一', values: [76, 100] },
  { type: '分类二', values: [56, 108] },
  { type: '分类三', values: [38, 129] },
  { type: '分类四', values: [58, 155] },
  { type: '分类五', values: [45, 120] },
  { type: '分类六', values: [23, 99] },
  { type: '分类七', values: [18, 56] },
  { type: '分类八', values: [18, 34] },
];

const barPlot = new RangeBar(document.getElementById('container'), {
  title: {
    visible: true,
    text: '为区间条形图配置label样式',
  },
  description: {
    visible: true,
    text: '使用style配置项配置label整体样式，同时支持通过leftStyle和rightStyle分别配置label样式。',
  },
  data,
  xField: 'values',
  yField: 'type',
  color: 'l(0) 0:#3e5bdb 1:#dd3121',
  columnStyle: {
    fillOpacity: 0.8,
  },
  label: {
    visible: true,
    leftStyle: {
      fill: '#3e5bdb',
    },
    rightStyle: {
      fill: '#dd3121',
    },
  },
});
barPlot.render();
