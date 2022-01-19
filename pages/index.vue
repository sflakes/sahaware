<template>
  <div>
    <Navbar />
    <section class="mt-24 max-w-7xl mx-auto">
      <div class="hero mx-auto"></div>
      <div class="article mx-auto text-center mt-8 text-bold">
        <h2>Article</h2>
        <div class="container my-12 mx-auto px-4 md:px-12">
          <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <!-- Column -->
            <div
              class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              v-for="dataPostIndex in postIndexHome.slice(0, 3)"
              :key="dataPostIndex.id"
            >

            
              <!-- Article -->
              <article class="overflow-hidden border border-sky-500 h-80">
                <div class="h-56 bg-blue-200">
                  <nuxt-link :to="/Article/ + dataPostIndex.id" href="#">
                    <!-- <img :src="!datapost.image ? 'https://picsum.photos/600/400/?random' : datapost.image  "> <img/> -->
                    <img
                      :src="dataPostIndex.image"
                      alt="image not available"
                      class="h-full"
                    />
                  </nuxt-link>
                </div>

                <header
                  class="flex flex-col items-center justify-between leading-tight p-2 md:p-4"
                >
                  <h1 class="text-lg">
                    <a class="no-underline hover:underline text-black" href="#">
                      {{ dataPostIndex.title }}
                    </a>
                  </h1>
                  <p class="text-grey-darker text-sm">
                    {{ dataPostIndex.short_description }}
                  </p>
                </header>
              </article>
              <!-- END Article -->
            </div>
            <!-- END Column -->
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "IndexPage",
  data() {
    return {

    };
  },

  mounted() {
    this.getAllDataIndex();    
  },
  computed: {
    ...mapState({
      postIndexHome: (state) => state.postIndex,
    }),
  },
  methods: {
    ...mapActions(["getAllDataIndex"]),
    ...mapMutations(["SET_BLOG_DATA"]),
  },
};
</script>

<style>
.hero {
  width: auto;
  height: 706px;
  background-image: url("../assets/img/Hero.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: scroll;
  background-size: cover;
  background-color: aqua;
}
</style>
