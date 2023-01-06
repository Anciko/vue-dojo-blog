<template>
    <div class="col-md-6 mx-auto">
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="posts.length">
            <PostList :posts="postsWithTag" />
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
import { computed } from '@vue/runtime-core';
import { useRoute } from 'vue-router'

import PostList from '../components/PostList.vue';

import getPosts from '../composables/getPosts';


export default {
    components: { PostList },
    setup() {
        let route = useRoute();
        let { posts, error, load } = getPosts();

        load();

        let postsWithTag = computed(() => {
            return posts.value.filter((post) => post.tags.includes(route.params.tag));
        })

        return { posts, error, postsWithTag };
    }
}
</script>

<style>

</style>