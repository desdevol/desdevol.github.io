<template lang="pug">
q-header.bg-dark.text-white(bordered)
    q-toolbar.text-whiterounded-borders
        //- TODO: replace with
        q-btn(flat, label='Home')
        q-space
        q-tabs(v-model='tab', shrink)
            q-tab(name='tab1', label='About')
            q-tab(name='tab2', label='Projects')
            q-tab(name='tab3', label='Contact')

</template>

<script>
export default {
    props: {},
    components: {},
    mixins: [],
    data: function () {
        return {
            tab: ''
        };
    },
    watch: {},
    computed: {},
    created: function () { },
    beforeDestroy: function () { },
    mounted: function () { },
    methods: {},
}
</script>

<style>
</style>
