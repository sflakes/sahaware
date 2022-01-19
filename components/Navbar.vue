<template>
  <div
    class="border-b-2 border-black-500 fixed top-0 bottom-0 left-0 right-0 h-14 bg-white"
  >
    <div class="max-w-7xl mx-auto">
      <nav
        class="container py-3 mx-auto md:mx-auto md:flex md:justify-between md:items-center md:mx-0 x;:mx-auto xl:flex xl:justify-between xl:items-center:"
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400 mr-12"
          >
            <img src="../assets/img/Logo.png" alt="Logo" />
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="text-gray-800 hover:text-gray-400 border-none"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-4 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center justify-center md:space-x-10 md:mt-0 w-auto bg-white"
        >
          <li
            class="text-sm font-bold text-gray-800 hover:text-blue-400 text-center"
          >
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li
            class="text-sm font-bold text-gray-800 hover:text-blue-400 text-center"
          >
            <nuxt-link to="/Article/Index">Articles</nuxt-link>
          </li>
          <li
            class="text-sm font-bold text-gray-800 hover:text-blue-400 text-center"
          >
            <nuxt-link to="/Create">Create</nuxt-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <!-- LOGIN MODAL -->
            <div class="container mx-auto">
              <div class="flex justify-center">
                <button
                  @click="isOpenLoginModal = true"
                  class="px-6 py-2 text-Blue bg-transparent rounded font-bold text-blue-400"
                  type="button"
                >
                  Login
                </button>

                <div
                  v-show="isOpenLoginModal"
                  class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 h-screen fixed"
                >
                  <div class="max-w-2xl p-6 mx-4 bg-white rounded-md shadow-xl">
                    <div class="flex items-center justify-between">
                      <h3 class="text-2xl text-black">Login</h3>
                      <svg
                        @click="isOpenLoginModal = false"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-8 h-8 text-red-900 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="Blue"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div class="mt-4">
                      <div id="app">
                        <section class="section container">
                          <h1 class="text-black">
                            Don't have account?
                            <button
                              class="text-red-400"
                              @click="
                                (isOpenLoginModal = false),
                                  (isOpenRegisterModal = true)
                              "
                            >
                              Create Account
                            </button>
                          </h1>

                          <div>
                            <div>
                              <div class="card">
                                <div class="card-content w-96">
                                  <div class="field my-4">
                                    <label class="label text-black"
                                      >Email</label
                                    >
                                    <div class="control my-4">
                                      <input
                                        type="email"
                                        class="inputUsername border-2 border-gray-200 w-full py-2 px-4"
                                        placeholder="Entry your email"
                                        v-model="emailLogin"
                                      />
                                    </div>
                                  </div>
                                  <label class="label text-black"
                                    >Password</label
                                  >
                                  <div class="password my-4">
                                    <div class="w-full">
                                      <input
                                        v-if="showPassword"
                                        type="text"
                                        class="inputPassword border-2 border-gray-200 w-full py-2 px-4 text-black"
                                        v-model="passwordLogin"
                                      />
                                      <input
                                        v-else
                                        type="password "
                                        class="inputPassword border-2 border-gray-200 w-full py-2 px-4 text-transparent"
                                        v-model="passwordLogin"
                                        placeholder="Entry your password"
                                      />
                                    </div>
                                    <div class="control relative">
                                      <button
                                        class="button"
                                        @click="toggleShow"
                                      >
                                        <span class="icon is-small is-right">
                                          <i
                                            class="fa text-black absolute -top-7 right-2"
                                            :class="{
                                              'fa-eye': showPassword,
                                              'fa-eye-slash': !showPassword,
                                            }"
                                          ></i>
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>

                      <button
                        class="px-6 py-2 text-blue-100 bg-red-500 hover:bg-red-600 rounded"
                        @click.prevent="submit"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- END OF LOGIN MODAL -->

            <!-- REGISTER MODAL -->
            <div class="container mx-auto">
              <div class="flex justify-center">
                <div
                  v-show="isOpenRegisterModal"
                  class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 h-screen fixed"
                >
                  <div class="max-w-2xl p-6 mx-4 bg-white rounded-md shadow-xl">
                    <div class="flex items-center justify-between">
                      <h3 class="text-2xl text-black">Register</h3>
                      <svg
                        @click="isOpenRegisterModal = false"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-8 h-8 text-red-900 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="Blue"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div class="mt-4">
                      <div id="app">
                        <section class="section container">
                          <h1 class="text-black">
                            Have an account?
                            <button
                              @click="
                                (isOpenRegisterModal = false),
                                  (isOpenLoginModal = true)
                              "
                              class="text-red-400"
                            >
                              Login
                            </button>
                          </h1>

                          <div>
                            <div>
                              <div class="card">
                                <div class="card-content w-96">
                                  <div class="field my-4">
                                    <label class="label text-black"
                                      >Email</label
                                    >
                                    <div class="control my-4">
                                      <input
                                        type="email"
                                        class="inputUsername border-2 border-gray-200 w-full py-2 px-4"
                                        placeholder="Entry your email"
                                        v-model="emailRegister"
                                      />
                                    </div>
                                  </div>
                                  <div class="field my-4">
                                    <label class="label text-black"
                                      >Fullname</label
                                    >
                                    <div class="control my-4">
                                      <input
                                        type="text"
                                        class="inputUsername border-2 border-gray-200 w-full py-2 px-4"
                                        placeholder="Entry your fullname"
                                        v-model="fullnameRegister"
                                      />
                                    </div>
                                  </div>
                                  <label class="label text-black"
                                    >Password</label
                                  >
                                  <div class="password my-4">
                                    <div class="w-full">
                                      <input
                                        v-if="showPassword"
                                        type="text"
                                        class="inputPassword border-2 border-gray-200 w-full py-2 px-4"
                                        v-model="passwordRegister"
                                      />
                                      <input
                                        v-else
                                        type="password "
                                        class="inputPassword border-2 border-gray-200 w-full py-2 px-4"
                                        v-model="passwordRegister"
                                        placeholder="Entry your password"
                                      />
                                    </div>
                                    <div class="control">
                                      <button
                                        class="button"
                                        @click="toggleShow"
                                      ></button>
                                    </div>
                                    <div class="field my-4">
                                      <label class="label text-black"
                                        >Phone Number</label
                                      >
                                      <div class="control my-4">
                                        <input
                                          type="number"
                                          class="inputUsername border-2 border-gray-200 w-full py-2 px-4"
                                          placeholder="Entry your phone number"
                                          v-model="phoneRegister"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>

                      <button
                        class="px-6 py-2 text-blue-100 bg-red-500 hover:bg-red-600 rounded"
                        @click="submitRegister"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- END OF REGISTER MODAL -->
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      showMenu: false,
      isOpenLoginModal: false,
      isOpenRegisterModal: false,
      showPassword: false,
      username: null,
      emailLogin: null,
      passwordLogin: null,
      fullnameRegister: null,
      emailRegister: null,
      passwordRegister: null,
      phoneRegister: null,
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    async submit() {
      await axios
        .post(
          "https://restify-sahaware-boilerplate.herokuapp.com/api/auth/login",
          {
            email: this.emailLogin,
            password: this.passwordLogin,
          }
        )
        .then((response) => {
          console.log(response)
          if (response.status === 200) {
            console.log("sukses Login");
            
            // this.$router.push("/"); //silly way redirect less secure
            
          } else {
            console.log("gagal login");
            // this.$router.push("/register");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async submitRegister() {
      await axios
        .post(
          "https://restify-sahaware-boilerplate.herokuapp.com/api/auth/register",
          {
            name: this.fullnameRegister,
            email: this.emailRegister,
            password: this.passwordRegister,
            phone: this.phoneRegister,
          }
        )
        .then((response) => {
          if (response.status === 200) {
            // this.$router.push("/"); //silly way redirect less secure
          } else {
            console.log("user not found");
            // this.$router.push("/register");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
@import "https://pro.fontawesome.com/releases/v5.10.0/css/all.css";
</style>
