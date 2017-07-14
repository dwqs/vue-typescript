<template>
    <div id="app2">
        <h3>{{title}} -- {{computedTitle}} == {{computedInfo}}</h3>
        <hello />
        <p class="doc">
            Documentation can be found atx2:
            <a href="https://github.com/dwqs/vue-startup" target="_blank">vue-startup</a>
        </p>
        <button @click="changeUserName('1111')">查看用户信息:</button>{{userName}}
        <router-link to="/info">查看项目信息</router-link>
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
                default: 'testProps'
            }
        },

        watch: {
            userName(oldVal, newVal) {
                console.log('username changed: ', oldVal, newVal);
            }
        }
    })
    export default class App extends Vue {
        // data
        title: string = `vuejs 2 + webpack 2 + ${this.testProps}`;

        // computed
        get computedTitle(){
            return this.title + ' computed';
        }

        get computedInfo(){
            return this.computedTitle + ' info';
        }

        // hooks
        created(){
            console.log('created', this.userName)
        }

        // methods
        showUserInfo() {
            this.title = '22222';
        }
    }
</script>

<style></style>
