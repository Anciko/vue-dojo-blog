<template>
    <div class="col-md-6 mx-auto">
        <form @submit.prevent="handleSubmit">
            <div class="mb-2">
                <label for="title">Title</label>
                <input type="text" class="form-control" v-model="title">
            </div>

            <div class="mb-2">
                <label for="body">Body</label>
                <textarea id="body" cols="10" rows="5" class="form-control" v-model="body"></textarea>
            </div>
            <div class="mb-2">
                <label for="tags">Tags (Hit enter to add a tag) </label>
                <input id="tags" type="text" class="form-control" v-model="tag" @keydown.enter.prevent="handleKeyDown">
                <p v-for="tag in tags" :key="tag" class="tag mt-3">#{{ tag }}&nbsp;</p>
            </div>
            <div class="mt-2">
                <button type="submit" class="btn mt-3 btn-info float-end">Add Post</button>
            </div>
        </form>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useRoute, useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        let title = ref('');
        let body = ref('');
        let tag = ref('');
        let tags = ref([]);

        let handleKeyDown = () => {
            if (!tags.value.includes(tag.value)) {
                tag.value = tag.value.replace(/\s/, ''); // remove all whitespace
                tags.value.push(tag.value);
            }
            tag.value = "";
        }

        let handleSubmit = async () => {
            let post = {
                title: title.value,
                body: body.value,
                tags: tags.value
            };

            await fetch('http://localhost:3000/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(post)
            });

            router.push({ name: 'home' });

        }


        return { title, body, tag, tags, handleKeyDown, handleSubmit };

    }
}
</script>

<style>
.tag {
    display: inline;
}
</style>