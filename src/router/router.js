import Vue from 'vue'
import Router from 'vue-router'
import MainCatalog from "../components/MainCatalog";
import CatalogCart from "../components/CatalogCart";

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: MainCatalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: CatalogCart,
            props: true
        }
    ]
})

export default router