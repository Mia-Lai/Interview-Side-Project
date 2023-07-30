<template>
  <v-container class="dashboard">
    <v-data-table
      :headers="headers"
      :items="tabelData"
      :items-per-page="tablePerPage"
      class="elevation-1 mb-3"
    />
  </v-container>
</template>

<script>
  import frontData from '@/components/front.json'

  export default {
    name: 'DataTable',

    data(){
      return {
        headers: [
          { text: '年份', value: 'year' },
          { text: '經濟成長率', value: 'economic_growth_rate' },
          { text: '人均總收入（美元）', value: 'average_gross_national_income_per_capita_usd' },
          { text: '儲蓄率', value: 'savings_rate' },
          { text: '失業率', value: 'unemployment_rate_percent' },
          { text: '每月最低工資', value: 'monthly_minimum_wage_amount' },
          { text: '每小時最低工資', value: 'hourly_minimum_wage_amount' },
          { text: '平均月工資', value: 'average_monthly_wage_industry_and_services_twd' },
          { text: '平均月產能', value: 'average_monthly_wage_manufacturing_twd' },
          { text: '平均月工時', value: 'average_monthly_wage_industry_and_services_twd' },
        ],
        tablePerPage: 10,
        tabelData: frontData
      }
    }
  }
</script>
<style lang="scss">
.dashboard {
  width: 100vw;
  height: calc(100vh - 64px);
}
</style>