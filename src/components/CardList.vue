<template>
    <RouterLink  :to=" '/artilce/'+article.id" target="_blank" class="card shadow border-0 ">
        <img :src="article.img" class="card-img-top" :alt="article.title ">
        <div class="card-body">
            <h5 class="card-title">{{ article.title }}</h5>
            <p class="card-text">{{ article.body }}.</p>
        </div>
    </RouterLink>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'
const props = defineProps(['article'])
</script>

<style lang="scss" scoped>
.card{
    text-decoration: none;
    color: black;
    height: 100%;
    display: block;
    .card-img-top{
        // max-height: 150px;
    }
}
</style>