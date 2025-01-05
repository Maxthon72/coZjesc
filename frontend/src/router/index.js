import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage/HomePage.vue';
import LoginPage from '../components/LoginPage/LoginPage.vue';
import RegisterPage from '../components/RegisterPage/RegisterPage.vue';
import ProfilePage from '../components/ProfilePage/ProfilePage.vue';
import RecipePage from '../components/RecipyPage/RecipyPage.vue'
import RecipeSearchPage from '../components/searchPage/SearchPage.vue'

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/login', name: 'Login', component: LoginPage },
    { path: '/register', name: 'Register', component: RegisterPage },
    { path: '/profile', name: 'Profile', component: ProfilePage },
    { path: "/recipe/:id", name: "RecipePage", component: RecipePage, },
    { path: "/search-recipes", component: RecipeSearchPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;