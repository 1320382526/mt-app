<template>
    <div class="m-products-list">
        <ul>
            <li v-for="item in nav" :class="{'s-nav-active': item.active}" :key="item.key">{{item.name}}</li>
        </ul>
        <el-row>
            <item v-for="(item, index) in productList" :key="index" :meta="item"/> 
        </el-row>
    </div>
</template>
<script>
import Item from "@/components/products/item.vue"
import api from "@/api/index.js"
export default {
    data() {
        return {
            nav: [{
                key: "s-default",
                name: "智能排序",
                active: true
            },{
                key: "s-price",
                name: "价格最低",
                active: false
            },{
                key: "s-sale",
                name: "人气最高",
                active: false
            },{
                key: "s-comment",
                name: "评分最高",
                active: false
            }],
            productList: []
        }
    },
    created () {
        api.getProductsList().then(res => {
            this.productList = res.data.data;
        })
    },
    components: {
        Item
    }
}
</script>
