import Component from 'vue-class-component';

// https://github.com/vuejs/vue-class-component#adding-custom-hooks
Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
]);