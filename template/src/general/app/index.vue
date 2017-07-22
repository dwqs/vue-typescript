<template>
    <div id="app2">
        <h3>\{{title}}</h3>
        <hello />
        <p class="doc">
            Documentation can be found at:
            <a href="https://github.com/dwqs/vue-typescript" target="_blank">vue-typescript</a>
        </p>
        <div>
            <button @click="changeUserName('2222')">更改用户信息:</button>
            <span>用户信息: \{{userName}}</span>
        </div>
        <br/><br/>
        <router-link to="{{publicPath}}info">查看项目信息</router-link>
    </div>
</template>

<script lang="ts">
    import './index.css';

    import Vue from 'vue';
    import { mapActions, mapGetters } from 'vuex';
    import Component from 'vue-class-component';
    
    import Hello from '@components/hello/index.vue';

    @Component({
        computed: {
            ...mapGetters({
                userName: 'getUserName'
            })
        },
        methods: {
            ...mapActions(['changeUserName'])
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
            userName (oldVal, newVal) {
                console.log('username changed: ', oldVal, newVal);
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
            console.log('created', this.userName);
        }

        // methods
        showUserInfo () {
            this.title = '22222';
        }
    }
</script>

<style></style>
