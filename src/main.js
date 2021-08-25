import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import ContactPage from './components/ContactPage.vue'
import Footer from './components/Footer.vue'

import FAQ from './components/FAQ.vue'

import Services from './components/Services.vue'

import About from './components/About.vue'





Vue.use(VueRouter)


Vue.config.productionTip = false

const router=new VueRouter({
  routes:[
    {name:'Home' ,   path: '/' , component:Home},
    
    {name:'ContactPage' ,path: '/contactus' , component:ContactPage},

    {name:'Services' ,path: '/services' , component:Services},

    {name:'About' ,path: '/about' , component:About},


    {name:'ContactPage' ,path: '/contactus' , component:ContactPage},


    {name:'Footer' ,path: '/footer' , component:Footer},

    {name:'FAQ' ,path: '/FAQ' , component:FAQ},





 

  ],
  mode:'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
