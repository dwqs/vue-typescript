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

    import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
    
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
        }
    })
    export default class App extends Vue {
        @Prop({ default: 'TypeScript 2' }) 
        testProps: string;
        
        // data
        title: string = `Vuejs 2 + Webpack 3 + ${this.testProps}`;

        // computed
        get computedTitle () {
            return this.title + ' computed';
        }

        get computedInfo () {
            return this.computedTitle + ' info';
        }

        @Watch('curTime')
        onTimeChanged(val: number, oldVal: number) {
            console.log('curTime changed: ', oldVal, val);
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
    import timeModel from '@src/mobx/time';

    export default {
        data () {
            return {
                title: 'vuejs 2 + webpack 3'
            };
        },

        fromMobx: {
            timeModel
        },

        components: {
            Hello
        }
    }
    {{/if_eq}}
</script>

<style></style>
