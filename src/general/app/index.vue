<template>
    <div id="app2">
        <h3>{{title}}</h3>
        <!--<hello />-->
        <p class="doc">
            Documentation can be found atx2:
            <a href="https://github.com/dwqs/vue-startup" target="_blank">vue-startup</a>
        </p>
        <router-link to="/info">查看项目信息</router-link>
    </div>
</template>

<script lang="ts">
    
    import Vue from 'vue';
    import Component from 'vue-class-component';

    import './index.css';
    
    // import Hello from '@components/hello/';
    @Component
    export default class App extends Vue {
        title: string = 'vuejs 2 + webpack 2';
    }

    // export default{
    //     data () {
    //         return {
    //             title: 'vuejs 2 + webpack 2'
    //         };
    //     },

    //     components: {
    //         Hello
    //     }
    // };
</script>

<style></style>
