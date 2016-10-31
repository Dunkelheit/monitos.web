<template>
    <div id="app">
        <hello></hello>
        <graph></graph>
    </div>
</template>

<script>
    import Hello from './components/Hello';
    import Graph from './components/Graph';

    export default {
        name: 'app',
        components: {
            Hello,
            Graph
        }
    };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
