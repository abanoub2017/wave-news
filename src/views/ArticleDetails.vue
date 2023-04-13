<template>
  <div class="container">
    <div class="row">
      <div class="col text-center">
        <h1 class="my-4">{{article?.title}}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <img :src="article?.img" alt="Article Image" class="img-fluid my-4">
      </div>
      <div class="col-md-6">
        <p class="my-4">{{article?.body}}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ArticleServices from '@/services/articles/articles'
import { useRoute } from 'vue-router'

const route = useRoute()
const article = ref()

const getAllArticleDetails = async () => {
  await ArticleServices.getArticleDetails(route.params.id).then((response: any) => {
    article.value = response.data;
    article.value.img = 'https://placehold.co/600x400/png'

  }).catch((error) => {
    console.error(error)
  });
};

onMounted(() => {
  getAllArticleDetails();
});
</script>
<style lang="scss" scoped></style>
