<template lang="pug">
q-layout(view='hHh lpR fFf')
    //- Header
    Header

    //- q-drawer(show-if-above, v-model='left', side='left', bordered)
    //-     // drawer content
    q-page-container
        q-page
            Hero
</template>

<script>
import Header from './components/Header'
import Hero from './components/Hero'

export default {
    name: 'LayoutDefault',
    props: {},
    components: {
        Header,
        Hero
    },
    mixins: [],
    data() {
        return {
            leftDrawerOpen: false,
            innerHeight: window.innerHeight
        }
    },
    watch: {},
    computed: {},
    created: function () {
        console.log(this.innerHeight);
    },
    beforeDestroy: function () { },
    mounted: function () { },
    methods: {},
}
</script>

<style>
</style>
