<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
            </el-col>
            <el-col :span="15" class="center">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur" @input="input"></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item, index) in hoyPlaceList" :key="index">
                            <router-link :to="{name: 'goods', params: {name: item}}">{{ item }}</router-link>
                        </dd>
                    </dl>
                    <dl class="searchList" v-if="isSerachList">
                        <dd v-for="(item, index) in searchList" :key="index">
                            <router-link :to="{name: 'goods', params: {name: item}}">{{ item }}</router-link>
                        </dd>
                    </dl>
                </div>
                <p class="suggest">
                    <a href="#" v-for="(item, index) in suggestList" :key="index">{{ item }}</a>
                </p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import api from "@/api/index.js"
export default {
    data() {
        return {
            searchWord: '',
            idFocus: false,
            hoyPlaceList: [],
            searchList: [],
            suggestList: ['第一温泉','99旅馆连锁','尚客又快捷酒店','7天连锁酒店','7天连锁酒店']
        }
    },
    created() {
        api.searchHotWords().then(res => {
            this.hoyPlaceList = res.data.data
        })
    },
    computed: {
        isHotPlace: function() {
            return this.idFocus && !this.searchWord
        },
        isSerachList: function() {
            return this.idFocus && this.searchWord
        }
    },
    methods: {
        focus() {
            this.idFocus = true
        },
        blur() {
            setTimeout(() => {
                this.idFocus = false
            },200)

        },
        input() {
            api.getSearchList().then(res => {
                this.searchList = res.data.data.list.filter((item, index) => {
                    return item.indexOf(this.searchWord) > -1;
                })
            })
        }
    }

}
</script>


