<template>
<div>
    <div id="login" class="page subpage">
        <h1>登录</h1>
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
