<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd :class="{active: kind == ''+item.tab+''}" :data-type="item.tab" v-for="(item, index) in nav.List" :key="index">{{ item.text }}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultsData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image">
          <div class="cbody">
            <div class="title" :title="item.title">{{ item.title }}</div>
            <div class="sub-title" :title="item.subtitle">{{ item.subtitle }}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{ item.price}}</span>
              </span>
              <span class="sold bottom-right-info">{{ item.address }}</span>
              <!-- <span class="old-price">门市价¥{{ item.price_info.current_price}}</span>
              <span class="sold bottom-right-info">{{ item.address }}</span> -->
            </div>
            <!-- <div class="price-info" v-else-if="!item.rentNum">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
            </div>
            <div class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{ item.price_info.avg_price }}</span>
                <span class="units">/{{ item.price_info.units }}均</span>
              </span>
            </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api/index.js"
export default {
    props: ['nav'],
    data() {
        return {
            kind: 'all',
            resultsData: {}
        }
    },
    created () {
      api.resultsByKeywords().then(res => {
        this.resultsData = res.data.data;
      })
    },
    methods: {
        over(e) {
            let dom = e.target;
            let tagName = dom.tagName.toLowerCase();
            if(tagName != 'dd'){
                return false;
            }
            this.kind = dom.getAttribute('data-type');
            //动态获取数据ajax请求
        }
    }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>