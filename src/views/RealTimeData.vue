<template>
    <h2>Real time data</h2>

    <div v-for="post in posts" :key="post.id">
        <p class="text-info">{{ post.title }}</p>
        <p class="text-success">{{ post.body }}</p>
        <i>{{ post.id }}</i>

        <hr>
    </div>

</template>

<script>
import { firedb } from '../firebase/config';
import { collection, onSnapshot } from "firebase/firestore";
import { ref } from '@vue/reactivity';


export default {

    setup() {
        let posts = ref([]);
        onSnapshot(collection(firedb, "posts"), (snapshot) => {
            snapshot.docs.forEach(post => {
                // posts.value.push({ ...post.data(), id: post.id });
                console.log(post.data())
            })
        });



        return { posts };
    }
}
</script>

<style>

</style>