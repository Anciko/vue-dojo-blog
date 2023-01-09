<template>
    <div class="col-md-6 mx-auto">
        <div v-if="post">
            <h3>
                {{ post.title }}
            </h3>
            <p>{{ post.body }}</p>

            <button class="btn btn-danger btn-sm text-end" @click="handleDelete()">Delete</button>
        </div>
    </div>
</template>

<script>
import getPost from '../composables/getPost';
import { doc, deleteDoc } from "firebase/firestore";
import { firedb } from '../firebase/config';
import { useRouter } from 'vue-router';

export default {
    props: ['id'],
    setup(props) {
        let router = useRouter();
        let { post, error, load } = getPost(props.id);


        let handleDelete = async () => {
            await deleteDoc(doc(firedb, "posts", props.id));
            router.push({ name: 'home' });
        }

        load();

        return { post, error, handleDelete };
    }
}
</script>

<style scoped>
h3 {
    width: fit-content;
    background: #42D392;
    transform: rotateZ(-2deg);
}
</style>