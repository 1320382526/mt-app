<template>
  <div class="slide">
    <el-carousel height="240px">
      <el-carousel-item v-for="(item, index) in ingList" :key="index">
        <img :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ingList: [{
        url: 'sss',
        img: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
      },{
        url: 'sss',
        img: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
      },{
        url: 'sss',
        img: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
      },{
        url: 'sss',
        img: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
      }]
    }
  }
};
</script>