<template>
    <div class="mb-4 border-bottom border-1 p-2">
        <router-link :to="{ name: 'postdetails', params: { id: post.id } }">
            <h3 class="text-white px-2 py-1 shadow">{{ post.title }}</h3>
        </router-link>

        <p>{{ snippet }}</p>
        <p class="tags" v-for="tag in post.tags" :key="tag">
            #{{ tag }}
        </p>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'

export default {
    props: ['post'],
    setup(props) {
        let snippet = computed(() => props.post.body.substring(0, 50) + '...');

        return { snippet };
    }

}
</script>

<style scoped>
h3 {
    width: fit-content;
    background: #42D392;
    transform: rotateZ(-2deg);
}

.tags {
    display: inline;

}
</style>