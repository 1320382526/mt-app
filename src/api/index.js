import axios from '@/axios.js'

var api = {
  searchHotWords (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)// 热门搜索
  },
  getSearchList () {
    return axios.get('/api/meituan/header/search.json')// 搜索关键字
  },
  getMenuList () {
    return axios.get('/api/meituan/index/nav.json')// 左侧导航条
  },
  resultsByKeywords () {
    return axios.get('/api/meituan/index/resultsByKeywords.json') // 有格调内容区数据获取
  },
  getProductsList () {
    return axios.get('/api/meituan/list/goodsList.json')// 产品展示列表数据获取
  },
  getHotCity () {
    return axios.get('/api/meituan/city/hot.json')// 获取热门城市
  },
  getRecentCity () {
    return axios.get('/api/meituan/city/recents.json')// 最近搜索城市
  },
  getProvinceList () {
    return axios.get('/api/meituan/city/province.json')// 获取省份列表
  },
  getCurPosition () {
    return axios.get('/api/meituan/city/getPosition.json') // 获取当前位置信息
  },
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json') // 获取城市列表接口
  },
  login (params) {
    return axios.get('/api/meituan/login', params) // 用户登录接口
  },
  register (params) {
    return axios.get('/api/meituan/register', params) // 用户注册接口
  }

}
export default api
