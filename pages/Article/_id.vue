<template>
  <div>
    <Navbar />
    <!-- <div class="container">
      <div class="row">
        <div class="col-md-12 my-5"> 
          <div class="newsfeed card p-4 mb-3">
            <h4>{{ PostDetail.title }}</h4>
            <p>{{ PostDetail.description }}</p>
            <div></div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="container max-w-6xl my-12 mx-auto px-4 md:px-12 min-h-screen">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <div class="container my-12 mx-auto px-4 md:px-12">
          <div class="flex flex-wrap -mx-1 lg:-mx-4 bg-green-100 w-full">
            <!-- Column -->
            <div
              class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 bg-gray-100 mx-auto"
             
            >
              <!-- Article -->
              <article class="overflow-hidden border bg-black mx-auto">
                <div class="h-56 w-full mx-auto bg-red-200">
                  
                    <!-- <img :src="!datapost.image ? 'https://picsum.photos/600/400/?random' : datapost.image  "> <img/> -->
                    <img :src="PostDetail.image" alt="image not available" class="h-full w-full"/>
                    
                  
                </div>
                <header
                  class="flex items-center justify-between leading-tight px-2 md:px-4"
                >
                  <h1 class="text-lg text-bold">
                    {{ PostDetail.title }}
                  </h1>
                </header>
                <p class="px-2 md:px-4 text-gray-400">{{ PostDetail.description }}</p>
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
// import {mapActions, mapState, mapMutations} from 'vuex'

const url = "https://restify-sahaware-boilerplate.herokuapp.com/api/article/";

export default {
  data() {
    return {
      PostDetail: [],
    };
  },
  // computed: {
  //   ...mapState({
  //     PostDetail: (state) => state.Blog
  //   }),
  // },
  methods: {
    // ...mapActions(),
    // ...mapMutations(),
    async getAllDataById() {
      await axios
        .get(url + this.$route.params.id)
        .then((Response) => {
          if (Response.status === 200) {
            this.PostDetail = Response.data.content;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  async mounted() {
    await this.getAllDataById();
  },
};
</script>

<style></style>
