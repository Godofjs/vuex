import Vue from "vue";
import Router from "vue-router";
import admin from "./views/admin/admindashboard.vue";
import userslist from "./views/admin/userslist.vue";
import userchat from "./views/admin/userchat.vue";
import register from "./views/user/register.vue";
import userprofile from "./views/user/userprofile.vue";
import user from "./views/user/userdashboard.vue";
import adminLayout from "@/layouts/adminlayout.vue"
import userLayout from "@/layouts/userlayout.vue"
import complaints from "./views/user/complaints.vue";
// import store from './store'
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/",
    },  

    {
      path: "/",
      component: register,
      meta: {
        requiresAuth: false
      }
    },

    {
      path: "/",
      component: adminLayout,
      children: [
        {
          path: "/admin",
          component: admin
        },
        {
          path: "/userchat",
          component: userchat
        },
        {
          path: "/userslist",
          component: userslist
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/",
      component: userLayout,
      children: [
        {
          path: "/userdashboard",
          component: user,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "/complaints",
          component: complaints,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "/userprofile",
          component: userprofile,
          meta: {
            requiresAuth: true
          }
        }
      ],
      meta: {
        requiresAuth: true
      }
    }
  ]
});

export default router;
