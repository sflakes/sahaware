<template>
  <div class="h-full">
    <Navbar />

    <!--CREATE ARTICLE SECTION -->
    <section
      class="max-w-6xl mx-auto rounded-lg shadow-lg flex my-24"
      style="width: 1500px"
    >
      <div class="createNewArticle px-6 py-4 w-4/6 h-auto">
        <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">
          Create a New Article
        </h4>
        <label
          class="block tracking-wide text-gray-500 font-bold text-sm mb-2"
          for="grid-first-name"
        >
          Title
        </label>
        <input
          class="resize-none appearance-none border-2 border-grey-200 mb-8 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          type="text"
          placeholder="Enter your Article Title"
          v-model="title"
        />
        <textarea
          placeholder="Write your Story"
          class="appearance-none resize-none border-2 border-gray-200 mb-8 h-screen rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          v-model="description"
        ></textarea>
      </div>

      <div class="publicationDetail px-6 py-4 w-2/6">
        <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">
          Publication Detail
        </h4>
        <label
          class="block tracking-wide text-gray-500 font-semibold text-sm mb-2"
          for="grid-first-name"
        >
          Short Description
        </label>
        <textarea
          placeholder="Enter your Article Description"
          class="resize-none appearance-none border-2 border-gray-200 mb-8 rounded h-48 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          v-model="short_description"
        ></textarea>
        <label
          class="block tracking-wide text-gray-500 font-semibold text-sm mb-2"
          for="grid-first-name"
        >
          Thumbnail
        </label>
        <input
          class="resize-none appearance-none border-2 border-gray-200 mb-8 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          id="inline-full-name"
          type="file"
          placeholder="Enter your Article Title"
          ref="file"
          @change="seletFile($event)"
        /><label
          class="block tracking-wide text-gray-500 font-semibold text-sm mb-2"
          for="grid-first-name"
        >
          Categories
        </label>
        <!-- <div class="inline-block flex w-full"> -->

        <div class="resize-none appearance-none border-2 border-gray-200 mb-8 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
          
          <!--  -->
          <select v-model="selected" class="resize-none appearance-none border-2 border-gray-200 rounded w-full p-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
            <option v-for="categoryListOption in categoryList"
              :key="categoryListOption.id">
               {{ categoryListOption.title }}
               <!-- {{ categoryListOption.id }} -->
            </option>
          </select>
          <!-- <span>Selected: {{ selected }}</span> -->

        </div>
        <!-- </div> -->

        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Vue.js switch toggle</h3>
          </div>
          <div class="panel-body">
            <!--Only code you need is this label-->
            <label class="switch">
              <input type="checkbox" @click="toggleCheckbox" />
              <div class="slider round"></div>
            </label>
            <!-- <p>{{checkbox}}</p> -->
          </div>
        </div>
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          @click="submitPost"
        >
          Publish
        </button>
      </div>
    </section>

    <!-- END OF CREATE ARTICLE SECTION -->
    <Footer />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: null,
      short_description: null,
      description: null,
      category_id: null,
      checkbox: false,
      imageFile: null,
      categoryList: [],
      selected: null,
      selectedId: null,
    };
  },
  methods: {
    seletFile(event) {
      this.imageFile = this.$refs.file.files[0];
    },
    toggleCheckbox() {
      this.checkbox = !this.checkbox;
      this.$emit("setCheckboxVal", this.checkbox);
    },
    async submitPost() {
      await axios
        .post(
          "https://restify-sahaware-boilerplate.herokuapp.com/api/article/create",
          {
            title: this.title,
            short_description: this.short_description,
            description: this.description,
            category_id: this.category_id,
            is_visible: this.checkbox,
            image: this.imageFile,
          }
        )
        .then((response) => {
          if (response.status === 200) {
            // console.log(response);
          } else {
            console.log("gagal mendaftar");
            // this.$router.push("/register");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getCategories() {
      await axios
        .get(
          "https://restify-sahaware-boilerplate.herokuapp.com/api/article-category"
        )
        .then((response) => {
          if (response.status === 200) {
          this.categoryList = response.data.content;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>

<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 24px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 17px;
  width: 17px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #101010;
}

input:focus + .slider {
  box-shadow: 0 0 1px #101010;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
