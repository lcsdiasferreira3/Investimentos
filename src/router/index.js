import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/auth/login.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../views/dashboard/dashboard.vue"
      ),
    meta: {
      authRequired: true,
    },
    children: [
      {
        path: "stock",
        name: "stock",
        component: () =>
          import(
            /* webpackChunkName: "stock" */ "../views/dashboard/dashboard.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  /* Each time a route change, this methods will be called*/
  if (to.matched.some((record) => record.meta.authRequired)) {
    var fireAuth = firebase.auth().currentUser;
    if (fireAuth) {
      next();
    } else {
      alert("You must be logged in to see this page");
      next({
        path: "/",
      });
    }
  } else {
    next();
  }
});

export default router;
