<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/app-tab-bar'
export default {
  components:{
    [TabBar.name]:TabBar
  }
}
</script>

<style>

</style>
