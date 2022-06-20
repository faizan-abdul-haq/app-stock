import Vue from 'vue'
import VueRouter from 'vue-router'

import Inicio from './components/Inicio.vue'
import Formulario from './components/Formulario.vue'
import Producto from './components/Producto.vue'
import Vista from './components/Vista.vue'

Vue.use(VueRouter)


export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/inicio' },
        { path: '/inicio', component: Inicio },
        { path: '/formulario', component: Formulario },
        { path: '/producto', component: Producto },
        { path: '/vista', component: Vista },
        { path: '*', redirect: '/' },
    ]
})