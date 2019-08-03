<template>
    <div id="tab-bar" class="border-top">
        <template v-for="item in tabData">
            <router-link :to="item.path" :key="item.id" class="tab-item">
                <span class="iconfont icon" :class="item.iconClass"></span>
                <span class="title">{{item.name}}</span>
            </router-link>
        </template>
    </div>
</template>

<script>
export default {
    name:'tab-bar',
    data(){
        return {
            tabData: [
                {id: 1, name: '首页', path: '/home',iconClass:'iconshouye'},
                {id: 2, name: '搜索', path: '/search',iconClass:'iconsousuo1'},
                {id: 3, name: '文章', path: '/article',iconClass:'iconyuanchuangwenzhang'},
                {id: 4, name: '我的', path: '/mine',iconClass:'iconwode'},
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
#tab-bar{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 49px;
    background: #fff;
    display: flex;
    .tab-item{
        flex: 1;
        height: 100%;
        text-align: center;
        font-size: 18px;
        display: flex;
        flex-direction: column;
        &.router-link-active{
            background: #ccc;
            color: #fff;
        }
         .icon{
            flex: 1;
            line-height: 28px;
            font-size: 24px;
        }
        .title{
            flex: 1;
            font-size: 14px;
        }
    }

}
</style>

