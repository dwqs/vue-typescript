<template lang="html">
    <div class="info">
        <h2>\{{info}}</h2>
        <h3>Project Name: {{name}}</h3>
        <h3>Project Version: {{version}}</h3>
        <h3>Author: {{author}}</h3>
        <h3>Desc: {{description}}</h3>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component
    export default class Info extends Vue {
        name: string = 'info';
        info: string = 'project info:';

        beforeRouteEnter (to, from, next) {
            console.log('666666');
            next();
        }
    };
</script>

<style></style>
