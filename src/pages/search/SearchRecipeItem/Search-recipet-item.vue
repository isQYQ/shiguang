<template>
<div>
    <div id="recipe-item" class="page subpage">
        <h1>点击tab栏里菜谱下的选项出来的页面</h1>
    </div>
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
        <router-view></router-view>
    </transition>
</div>
</template>

<script>
export default {
}
</script>

<style>

</style>
