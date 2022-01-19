<template>
  <div>
    <Navbar />
    <div class="container max-w-6xl my-12 mx-auto px-4 md:px-12 min-h-screen">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <div class="container my-12 mx-auto px-4 md:px-12">
          <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <!-- Column -->
            <div
              class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              v-for="datapost in post"
              :key="datapost.id"
            >
              <!-- Article -->
              <article class="overflow-hidden border h-96">
                <div class="h-56 w-full bg-blue-200">
                  <nuxt-link :to="/Article/ + datapost.id"  href="#">
                    <!-- <img :src="!datapost.image ? 'https://picsum.photos/600/400/?random' : datapost.image  "> <img/> -->
                    <img :src="datapost.image" alt="image not available" class="h-full"/>
                    
                  </nuxt-link>
                </div>
                <header
                  class="flex items-center justify-between leading-tight px-2 md:px-4"
                >
                  <h1 class="text-lg text-bold">
                    {{ datapost.title }}
                  </h1>
                </header>
                <p class="px-2 md:px-4 text-gray-400">{{ datapost.short_description }}</p>
              </article>
              <!-- END Article -->
            </div>
            <!-- END Column -->
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "IndexPage",
  data() {
    return {
      post: [],
    };
  },

  mounted() {
    this.getAllDataArticle();
  },

  methods: {
    async getAllDataArticle() {
      await axios
        .get("https://restify-sahaware-boilerplate.herokuapp.com/api/article")
        .then((Response) => {
          if (Response.status === 200) {
            this.post = Response.data.content;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
