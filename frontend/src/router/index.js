import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../views/NotFound.vue";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";
import CustomerDashboard from "../views/CustomerDashboard.vue";
import ProductOverview from "../views/ProductOverview.vue";

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
    {
        path: "/forgot-password",
        name: "forgot-password",
        component: ForgotPassword,
    },
    {
        path: "/reset-password",
        name: "reset-password",
        component: ResetPassword,
    },
    {
        path: "/",
        name: "customer-dashboard",
        component: CustomerDashboard,
    },
    {
        path: "/product",
        name: "product-overview",
        component: ProductOverview,
    },
    {
        path: "/:pathMatch(.*)",
        name: "notfound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
