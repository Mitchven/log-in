export default {
    routes: [{
        path: '/login/',
        name: 'login',
        component: resolve => requestAnimationFrame(['modules/Login.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    }, {
        path: '/register',
        name: 'register',
        component: resolve => requestAnimationFrame(['modules/Register.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    }]
}

