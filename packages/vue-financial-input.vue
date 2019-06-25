<template>
  <div class="vue-financial-input" :style="financialInputStyle" :class="{'vue-financial-input-valid-error':!isValid}">
    <div class="vue-financial-input-currency" :style="currencyStyle">{{currency}}</div>
    <div class="vue-financial-input-tip" :style="tipStyle">{{tipText}}</div>
    <input type="text" v-model="myValue" :style="theInputStyle" ref="inputElement" @blur="onBlur">
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
  import debounce from 'lodash/debounce'

@Component
export default class VueFinancialInput extends Vue {
  @Prop({
    type: Number,
    default: 0
  })
  private value!: number;

  @Prop({
    type: String,
    default: '¥'
  })
  private currency!: string;

  @Prop({
    type: Number,
    default: 36
  })
  private height!: number;

  myValue = '';
  inputStyle:CSSStyleDeclaration|null = null;

  get inputElement(){
    return this.$refs['inputElement'] as HTMLElement;
  }

  get financialInputStyle(){
    const fontSize = this.height * 0.444;
    return {
      fontSize:fontSize + 'px',
      height: this.height + 'px'
    }
  }

  get tipStyle(){
    const fontSize = this.height * 0.444;
    const scale = fontSize > 18 ? 0.69 : 0.72;
    return {
      height:this.inputStyle ? this.inputStyle.paddingTop : '0px',
      right:this.inputStyle ? this.inputStyle.paddingRight : '0px',
      width:(this.value.toFixed(2).length*fontSize*scale)-1 + 'px',
      fontSize:this.inputStyle  ? (0.8*fontSize-3+'px') : '0px',
      lineHeight:this.inputStyle ? this.inputStyle.paddingTop : '0px',
    }
  }

  get theInputStyle(){
    const fontSize = this.height * 0.444;
    return {
      paddingTop:0.8*fontSize + 'px',
      paddingBottom:0.45*fontSize + 'px',
      fontSize:fontSize + 'px'
    }
  }

  get currencyStyle(){
    return {
      height:this.height+'px'
    }
  }

  get tipText(){
    const textList = ['','','','','个','十','百','千','万','十万','百万','千万','亿','十亿','百亿','千亿'];
    return textList[this.value.toFixed(2).length]
  }

  get isValid(){
    return /^-?\d+\.?\d{0,2}$/.test(this.myValue);
  }

  // @Watch('myValue')
  // onMyValueChange(){
  //   this.parseFloat(this);
  // }

  @Watch('value')
  onValueChange(){
    this.myValue = this.value.toFixed(2);
  }

  forceParseFloat(){
    const nums = [];
    for(const ch of this.myValue){
      if(ch>='0' && ch<='9') nums.push(ch);
      if(ch=='.' && !nums.includes('.')) nums.push(ch);
    }
    let num = parseFloat(nums.join('')) % 1000000000000;
    if(isNaN(num)) num = 0;
    this.myValue = num.toFixed(2);
    this.$emit('input', parseFloat(this.myValue));
  }

  parseFloat = debounce((vm:any)=>{
    vm.forceParseFloat();
  },3000);

  onBlur(){
    this.forceParseFloat();
  }


  created(){
    this.myValue = this.value.toFixed(2);
  }

  mounted(){
    if(document.defaultView){
      this.inputStyle = document.defaultView.getComputedStyle(this.inputElement,null);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @font-face{
    font-family: 'Source Code Pro';
    src: url('./assets/SourceCodePro-Medium.ttf');
  }
  .vue-financial-input{
    font-size: 16px;
    position: relative;
    .vue-financial-input-currency{
      position: absolute;
      top: 0;
      left: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .vue-financial-input-tip{
      position: absolute;
      top: 1px;
      border-left: 1px solid #dcdfe6;
      text-align: left;
      color: #dcdfe6;
      padding-left: 2px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    }
    input{
      width: calc(100% - 32px);
      text-align: right;
      height: 16px;
      line-height: 16px;
      padding: 0.8rem 15px 0.45rem 15px;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      outline: none;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      letter-spacing:2px;
      font-family: "Source Code Pro","monospace";
      &:hover{
        border-color: #c0c4cc;
      }
      &:focus{
        outline: none;
        border-color: #409eff;
      }
    }
  }
  .vue-financial-input-valid-error{
    input{
      border-color: #f56c6c!important;
    }
  }
</style>
