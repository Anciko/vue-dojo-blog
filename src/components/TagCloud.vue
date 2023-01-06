<template>

    <div>
        <h4>Tags</h4>
        <div class="d-flex flex-wrap">
            <div v-for="tag in tags" :key="tag">
                <router-link :to="{ name: 'tags', params: { tag: tag } }">
                    #{{ tag }}&nbsp;&nbsp;
                </router-link>
            </div>
        </div>

    </div>

</template>

<script>
import useTags from '../composables/useTags';

export default {
    props: ['posts'],
    setup(props) {
        const { tags } = useTags(props.posts);

        return { tags };
    }
}
</script>

<style>
a {
    text-decoration: none !important;
}
</style>