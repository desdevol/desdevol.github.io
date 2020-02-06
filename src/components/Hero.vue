<template lang="pug">
.hero.bg-primary.window-height.flex.flex-center
    .row.justify-center
        //- Logo
        img.q-mb-lg(
            style="max-width: 400px; height: 200px"
            src="../assets/logo.png"
        )
        //- Text
        .col-xs-12.text-h2.text-white.text-center
            | Hi, I am
            span.text-bold.text-accent  Desmond
        .col-xs-12.text-h4.text-white.text-center.q-mt-md
            | A full-stack
            span.text-accent  web developer
            |  from Johor Bahru
        q-icon.text-white.down-arrow(name="keyboard_arrow_down")

        //- Animated Background
        ul.circles
            li(v-for="n in 5")

</template>

<script>
export default {
    props: {},
    components: {},
    mixins: [],
    data: function () {
        return {};
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
/* ========================================================
 *                Animated floating shape
 * ========================================================
 */
.circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.15);
    animation: animate 25s linear infinite;
    bottom: -150px;
}

.circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}

.circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}

@keyframes animate {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}
/* ========================================================
 *                Down arrow animation
 * ========================================================
 */
.down-arrow.q-icon {
    font-size: 80px;
    margin-top: 20px;
    animation: downarrow 2s linear infinite;
}
@keyframes downarrow {
    0% {
        transform: translateY(0);
    }

    25% {
        transform: translateY(15px);
    }

    75% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0px);
    }
}
</style>
