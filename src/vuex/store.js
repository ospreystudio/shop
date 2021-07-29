import Vue from 'vue';
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: []
    },
    mutations: {
        set_products: (state, products) => {
            state.products = products
        }
    },
    actions: {
        getProduct({ commit }) {
            return axios ('http://localhost:3000/products', {
                method: "GET"
            })
                .then((products) => {
                    commit('set_products', products.data)
                    return products
                }). catch((error) => {
                    console.log(error)
                    return error
                })
        }
    },
    getters: {
        products(state) {
            return state.products
        }
    }

})

export default store;