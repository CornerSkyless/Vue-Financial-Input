<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Vue-Financial-Input</h1>
    <VueFinancialInput v-model="value"/>
    {{value}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  value = '3345';
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
