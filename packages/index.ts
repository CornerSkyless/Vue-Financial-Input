import VueFinancialInput from './vue-financial-input.vue';


const install = (Vue: any) => {
    Vue.component('vue-financial-input', VueFinancialInput);
    Vue.component('VueFinancialInput', VueFinancialInput);
};

export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    VueFinancialInput,
};
