import { ref } from "vue"
import { doc, getDoc } from "firebase/firestore";
import { firedb } from "../firebase/config";



let getPost = (id) => {
    let post = ref(null);
    let error = ref(null);

    let load = async () => {
        try {
            const fire_post = doc(firedb, "posts", id);
            const docPost = await getDoc(fire_post);

            if (docPost.exists()) {
                post.value = docPost.data();
            } else {
                console.log("No Such document!");
            }

        } catch (err) {
            error.value = err.message;
        }
    }

    return { post, error, load };
}

export default getPost;