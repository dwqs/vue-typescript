<template lang="html">
    <div class="info">
        <h2>{{info}}</h2>
        <h3>Project Name: vue-typescript</h3>
        <h3>Project Version: 0.0.1</h3>
        <h3>Author: dwqs</h3>
        <h3>Desc: A new Vue.js project</h3>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component
    export default class Info extends Vue {
        name: string =  'info';
        info: string = 'project info:';

        beforeRouteEnter (to, from, next) {
            console.log('666666');
            next();
        }
    };
</script>

<style></style>
