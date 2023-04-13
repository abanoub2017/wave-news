
<template >
  <div class="articles_list m-5">
    <div class="conatiner">
      <div class="row">
        <div class="col-md-3 mb-5" v-for="article in articles" :key="article.id">
          <CardList :article="article" />
        </div>
        <div class="d-flex justify-content-center my-4"  v-if="isLoading">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ArticleServices from '@/services/articles/articles'
const articles = ref([]) as any
const isLoading = ref(false)
const page = ref(1)
const getAllArticles = async () => {
  isLoading.value = true
  await ArticleServices.getArticleList(page.value).then((response: any) => {
    response.data.map((item: any) => {
      item.img = 'https://placehold.co/600x400/png'
      articles.value.push(item)
      isLoading.value = false
    })

  }).catch((error) => {
    console.error(error)
    isLoading.value = false
  });
};
const handleScroll = () => {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    // User has scrolled to the end of the page
    page.value = + 1
    getAllArticles()
  }
}
onMounted(() => {
  getAllArticles();
  window.addEventListener('scroll', handleScroll);
});

</script>
<style lang="scss" scoped></style>