import { ref } from "vue"

let getPost = (id) => {
    let post = ref(null);
    let error = ref(null);

    let load = async () => {
        try {
            let data = await fetch('http://localhost:3000/posts/' + id);
            if (!data.ok) {
                return Error("That Post is not found");
            }

            post.value = await data.json();

        } catch (err) {
            error.value = err.message;
        }
    }

    return { post, error, load };
}

export default getPost;