<template>
  <v-container class="dashboard">
    <histogram-chart
      v-if="chartData.rows.length > 0"
      :chart-data="chartData"
      :title="title"
      height="100%"
      class="pt-3 pl-3"
    />
  </v-container>
</template>

<script>
  import HistogramChart from '@/components/HistogramChart'
  import frontData from '@/components/front.json'

  export default {
    name: 'Dashboard',
    components: {
      HistogramChart
    },

    data(){
      return {
        title: {
          text: '圖表綜覽',
          textStyle: {
            color: '#757575',
            fontSize: 20,
          }
        },
        chartData:{
          columns:['year','economic_growth_rate','average_monthly_working_hours_industry_and_services_hours'],
          rows:[]
        }
      }
    },

    mounted() {
      this.chartData.rows = frontData.map(item => {
        return {
          year: item.year,
          economic_growth_rate: item.economic_growth_rate,
          average_monthly_working_hours_industry_and_services_hours: item.average_monthly_working_hours_industry_and_services_hours
        }
      })
    }
  }
</script>
<style lang="scss">
.dashboard {
  width: 100vw;
  height: calc(100vh - 64px);
}
</style>