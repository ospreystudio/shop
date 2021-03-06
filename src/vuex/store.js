import Vue from 'vue';
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        set_products: (state, products) => {
            state.products = products
        },
        set_cart: (state, product) => {
            if (state.cart.length) {
                let isProductExists = false;
                state.cart.map(function (item){
                    if (item.article === product.article) {
                        isProductExists = true
                        item.quantity++
                    }
                });
                if (!isProductExists) {
                    state.cart.push(product)
                }
            } else {
                state.cart.push(product)
            }

        },
        remove_cart: (state, index) => {
            state.cart.splice(index, 1)
        },

        increment: (state, index) => {
            state.cart[index].quantity++
        },

        decrement: (state, index) => {
            if (state.cart[index].quantity > 1) {
                state.cart[index].quantity--
            }
        }
    },
    actions: {
        getProduct({ commit }) {
            return axios ('https://my-json-server.typicode.com/ospreystudio/shop/products', {
                method: "GET"
            })
                .then((products) => {
                    commit('set_products', products.data)
                    return products
                }). catch((error) => {
                    console.log(error)
                    return error
                })
        },
        addCart({ commit }, product) {
            commit('set_cart', product)
        },
        delete({ commit }, index) {
            commit('remove_cart', index)
        },
        incrementCart({ commit }, index) {
            commit ('increment', index)
        },
        decrementCart({ commit }, index) {
            commit ('decrement', index)
        }



    },
    getters: {
        products(state) {
            return state.products
        },
        cart(state) {
            return state.cart
        }
    }

})

export default store;
