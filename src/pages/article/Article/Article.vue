<template>
<div>
    <div id="article" class="page">
        <h1>文章</h1>
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
