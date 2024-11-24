import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue'; // Ensure this matches your component path

const routes = [{
        path: '/',
        name: 'Home',
        component: HomePage, // HomePage should be your custom component
    },
    // Add other routes here as needed
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;