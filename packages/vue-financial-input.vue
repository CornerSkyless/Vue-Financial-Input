<template>
  <div class="vue-financial-input">
    <input type="text" v-model="myValue">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class VueFinancialInput extends Vue {
  @Prop() private value!: string;

  get myValue() {
    return this.value;
  }

  set myValue(theValue: string) {
    const nums = [];
    for(const ch of theValue){
      if(ch>='0' && ch<='9') nums.push(ch);
    }
    this.$emit('input', nums.join(''));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
