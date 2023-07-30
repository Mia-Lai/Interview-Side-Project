<template>
  <ve-histogram
    :settings="chartSettings"
    :grid="grid"
    :extend="chartExtend"
    :colors="colors"
    :data="chartData"
    :title="title"
    :legend-visible="true"
    :height="height"
    class="histogram-chart"
  />
</template>

<script>
import VeHistogram from 'v-charts/lib/histogram.common'
import 'v-charts/lib/line.common'
import 'echarts/lib/component/title'
export default {
  components: {
    VeHistogram
  },

  props:{
    chartData: {
      type: Object,
      required: true,
      default:() => {
        return  {
          rows : []
        }
      }
    },
    height: {
      type: String,
      default:'',
    },
    title: {
      type: Object,
      default:() => {
        return  {
          text : ''
        }
      }
    }
  },

  data(){
    return {
      colors: ['#f0a35c','#6091c1',],
      chartSettings: {
        labelMap: {
          economic_growth_rate: '經濟成長率',
          average_monthly_working_hours_industry_and_services_hours: '平均工時',
        },
        axisSite: { right: ['economic_growth_rate'] },
        showLine: ['economic_growth_rate'],
        max: [250, 20],
        yAxisName: ['平均工時', '經濟成長率'],
      },
      grid: {
        x: 10,
        y: 70,
        y2: 25,
        x2: 25
      },
      chartExtend: {
        xAxis: {
          name: '年份',
          nameTextStyle: {
            fontSize: 14,
            lineHeight: 20,
            fontWeight: 'bold'
          },
          axisLine: {
            lineStyle: {
              color: 'black'
            }
          },
          axisLabel: {
            fontSize: 12,
          }
        },
        yAxis: {
          nameTextStyle: {
            fontSize: 14,
            lineHeight: 20,
            fontWeight: 'bold'
          },
          axisLine: {
            lineStyle: {
              color: 'black'
            }
          },
          axisLabel: {
            fontSize: 12,
          }
        },
        series (v) {
          v.forEach(i => {
            i.barWidth = 18
            i.lineStyle = {
              width: 3.5
            }
          })
          return v
        },
      },
    }
  }
}
</script>
<style lang="scss">
.histogram-chart {
  width: 100% !important;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 2px 1px #BDBDBD;
}
</style>