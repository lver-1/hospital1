import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import AddStaff from '../views/addStaff.vue'
import AddPrescription from '../views/addPrescription.vue'
import ManagerStaff from '../views/managerStaff.vue'
import ChangeDrug from '../views/changeDrug.vue'
import DrugInformation from '../views/drugInformation.vue'
import AddDrug from '../views/addDrug.vue'
import ManagerDrug from '../views/managerDrug.vue'
import DisableDrug from '../views/disableDrug.vue'
import AddDrug2 from '../views/addDrug2.vue'
import Medicine_in from '../views/Medicine_in.vue'


import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

Vue.use(VueRouter)


const routes = [
  {
    path: '/addDrug',
    name: 'AddDrug',
    component: AddDrug
  },

  {
    path: '/addDrug2',
    name: 'AddDrug2',
    component: AddDrug2
  },
  {
    path: '/changeDrug',
    name: 'ChangeDrug',
    component: ChangeDrug
  },


  {
    path: '/managerDrug',
    name: 'ManagerDrug',
    component: ManagerDrug
  },

  {
    path: '/drugInformation',
    name: 'DrugInformation',
    component: DrugInformation
  },

  {
    path: '/disableDrug',
    name: 'DisableDrug',
    component: DisableDrug
  },

  {
    path: '/addStaff',
    name: 'AddStaff',
    component: AddStaff
  },

  {
    path: '/managerStaff',
    name: 'ManagerStaff',
    component: ManagerStaff
  },


  {
    path: '/addPrescription',
    name: 'AddPrescription',
    component: AddPrescription
  },



  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
