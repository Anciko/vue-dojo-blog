import { ref } from "vue";
import { collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import { firedb } from "../firebase/config";

let getPosts = () => {
    let posts = ref([]);
    let error = ref(null);

    let load = async () => {
        try {
            // const fire_posts = await getDocs(collection(firedb, "posts"));
            const q = query(collection(firedb, "posts"), orderBy('title'));

            const fire_posts = await getDocs(q);
            fire_posts.forEach((fire_post) => {
                posts.value.push({ ...fire_post.data(), id: fire_post.id })
            });


        } catch (e) {
            console.error("Error adding document: ", e.message);
        }


        // simulate delay
        // await new Promise(resolve => {
        //     setTimeout(resolve, 1000);
        // })

        // let data = await fetch('http://localhost:3000/posts');
        // if (!data.ok) {
        //     throw Error("Post Not Found!");
        // }
        // posts.value = await data.json();

    }
    return { posts, error, load }

}




export default getPosts;