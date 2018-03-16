import { Component } from 'vue-property-decorator';

// https://github.com/vuejs/vue-class-component#adding-custom-hooks
Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
]);