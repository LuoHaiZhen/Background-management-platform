<!--
 * @Author: your name
 * @Date: 2022-03-02 16:17:42
 * @LastEditTime: 2022-03-16 21:41:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \LHZ\vue\src\views\dashboard\index.vue
-->
<template>
  <div class="dashboard-container">
  <Cart></Cart>
  <Sale></Sale>
  <Observe></Observe>
  </div>
</template>

<script>

import Cart from './cart';
import Sale from './sale';
import Observe from './Observe';


export default {
  name: 'Dashboard',
  components:{
    Cart,
    Sale,
    Observe,
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
