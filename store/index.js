import axios from "axios";

export const state = () => ({
  // PostDetail: [],
  postIndex: [],
});

export const mutations = {
  // SET_LATEPOST_DATA(state, payload) {
  //   const paramId = this.$route.params.id;
  //   payload = paramId;
  //   state.PostDetail = payload;
  // },

  SET_POSTINDEX(state, payload) {
    state.postIndex = payload;
  },
};

export const actions = {
  // async getAllDataById({ commit, state }, payload) {
  //   await axios
  //     .get(
  //       "https://restify-sahaware-boilerplate.herokuapp.com/api/article/" + 
  //         payload
  //     )
  //     .then((Response) => {
  //       if (Response.status === 200) {
  //         commit("SET_LATEPOST_DATA", Response.data);
          
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },

  async getAllDataIndex({ commit, state }, payload)  {
    await axios
      .get("https://restify-sahaware-boilerplate.herokuapp.com/api/article")
      .then((Response) => {
        if (Response.status === 200) {
          commit("SET_POSTINDEX", Response.data.content)
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  },
};
