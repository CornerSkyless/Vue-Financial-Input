<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Vue-Financial-Input</h1>
    <VueFinancialInput v-model="value1" currency="¥" :height="32" style="width: 260px;margin: 12px auto"/>
    <VueFinancialInput v-model="value2" currency="¥" style="width: 260px;margin: 10px auto"/>
    <VueFinancialInput v-model="value3" currency="¥" :height="44" style="width: 260px;margin: 10px auto"/>
    <div style="margin-top: 20px">value1: {{value1}}</div>
    <div style="margin-top: 20px">value2: {{value2}}</div>
    <div style="margin-top: 20px">value3: {{value3}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  value1 = 567.89;
  value2 = 123456;
  value3 = 31415926;
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
