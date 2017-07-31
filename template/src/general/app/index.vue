<template>
    <div id="app">
        <h3>\{{title}}</h3>
        <hello />
        <p class="doc">
            Documentation can be found at:
            <a href="https://github.com/dwqs/vue-typescript" target="_blank">vue-typescript</a>
        </p>
        <router-link to="/info">查看项目信息</router-link>
        <div class="time">
            <span> 当前时间: \{{new Date(curTime)}}</span>
            <span @click="changeTime"> 点击更新当前时间</span>
        </div>
    </div>
</template>

<script lang="ts">
    import './index.less';

    import Vue from 'vue';
    import Component from 'vue-class-component';
    
    import Hello from '@components/hello/index.vue';
    {{#if_eq state 'vuex'}}
    import { mapActions, mapGetters } from 'vuex';

    @Component({
        computed: {
            ...mapGetters({
                curTime: 'getCurTime'
            })
        },
        methods: {
            ...mapActions(['changeTime'])
        },

        components: {
            Hello
        },

        props: {
            testProps: {
                type: String,
                default: 'TypeScript 2'
            }
        },

        watch: {
            curTime (oldVal, newVal) {
                console.log('curTime changed: ', oldVal, newVal);
            }
        }
    })
    export default class App extends Vue {
        // data
        title: string = `Vuejs 2 + Webpack 3 + ${this.testProps}`;

        // computed
        get computedTitle () {
            return this.title + ' computed';
        }

        get computedInfo () {
            return this.computedTitle + ' info';
        }

        // hooks
        created () {
            console.log('created', this.curTime);
        }

        // methods
        showUserInfo () {
            this.title = '22222';
        }
    }
    {{/if_eq}}
    {{#if_eq state 'mobx'}}
    import {connect} from 'vue-mobx';
    import timeModel from '@src/mobx/time';

    const indexComponent = {
        data () {
            return {
                title: 'vuejs 2 + webpack 3'
            };
        },
        components: {
            Hello
        }
    }
    export default connect({timeModel})(indexComponent)
    {{/if_eq}}
</script>

<style></style>
