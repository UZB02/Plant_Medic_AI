<template>
    <Nav></Nav>
    <Home></Home>
</template>
<script setup>
import Nav from "../../components/Nav/Main.vue"
import Home from '../../views/HomeView.vue'
import router from '@/router';
if(localStorage.getItem('token') === null){
        router.push('/login');
    }
</script>
<style scoped>
</style>