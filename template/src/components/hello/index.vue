<template lang="html">
    <div class="desc">
        <p>\{{desc}}</p>
        <img src="/assets/logo.png" alt="logo">
    </div>
</template>

<script lang="ts">
    import './hello.less';

    import { Vue, Component } from 'vue-property-decorator';

    @Component
    export default class Hello extends Vue {
        name: string = 'hello';
        desc: string = 'A simple template webpack 3 + vuejs 2 + typescript 2 setup for projects';
    };
</script>

<style></style>
