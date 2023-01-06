import { ref } from "vue";


let useTags = (posts) => {
    let tags = ref([]);
    let tagSet = new Set();

    posts.forEach(post => {
        post.tags.forEach(tag => tagSet.add(tag));
    });

    tags.value = [...tagSet];

    return { tags };
}

export default useTags;