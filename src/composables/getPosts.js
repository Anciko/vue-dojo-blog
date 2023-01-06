import { ref } from "vue";

let getPosts = () => {
    let posts = ref([]);
    let error = ref(null);

    let load = async () => {
        try {
            // simulate delay
            await new Promise(resolve => {
                setTimeout(resolve, 1000);
            })

            let data = await fetch('http://localhost:3000/posts');
            if (!data.ok) {
                throw Error("Post Not Found!");
            }
            posts.value = await data.json();
        } catch (err) {
            error.value = err.message;
        }
    }

    return { posts, error, load }
}


export default getPosts;