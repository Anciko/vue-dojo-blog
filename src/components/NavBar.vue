<template>
    <header>

        <nav>
            <div class="container py-4">
                <div class="d-flex justify-content-between align-items-center">
                    <h1>Dojo Blog</h1>
                    <div class="d-flex gap-4">
                        <router-link class="nav-link" :to="{ name: 'home' }">
                            Home
                        </router-link>

                        <router-link class="nav-link" :to="{ name: 'postcreate' }">
                            Create Post
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style>
.router-link-active {
    color: #42D392 !important;
}

.router-link-exact-active {
    color: #42D392 !important;
}

.navbar-brand {
    font-size: 30px !important;
}
</style>