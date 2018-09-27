<template>
    <div class="home">
        <app-header v-bind:title="title"></app-header>
        <p><Input v-model="value" placeholder="Enter something..." style="width: 300px" /></p>
        <app-footer v-bind:title="title"></app-footer>
    </div>
</template>
<script>
import Header from './Header';
import Footer from './Footer';
export default {
    name: 'Home',
    data () {
        return {
            value: 'input'
        };
    },
    methods: {
    },
    components: {
        'app-header': Header,
        'app-footer': Footer
    },
};
</script>
<style scoped>
    div p{
        text-align: center;
    }
</style>
