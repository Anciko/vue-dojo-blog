<template>
  <div class="container">
    <div v-if="error">
      {{ error }}
    </div>
    <div class="d-flex justify-content-between" v-if="posts.length">
      <div class="col-md-7">
        <PostList :posts="posts" />
      </div>
      <div class="col-md-3">
        <TagCloud :posts="posts" />
      </div>
    </div>
    <div v-else>
      <div class="text-center">
        <div class="spinner-border text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import TagCloud from '../components/TagCloud.vue';

import getPosts from '../composables/getPosts';

export default {
  components: { PostList, TagCloud },
  setup() {
    let { posts, error, load } = getPosts();

    load();

    return { posts, error };
  }
}
</script>

<style>

</style>