import AUTH from 'services/auth'
let beforeEnter = (to, from ,next) => {
    AUTH.currentPath = to.path
    // let userID = parseInt(localStorage.getItem('account_id'))
    // let token = localStorage.getItem('usertoken')
    // if (token !== '/'|| to.path === '/'){
    //}
    next()
}

var devRoutes = []
let app = require('./app.js')
devRoutes = devRoutes.concat(app.default.routes)
for(let x = 0; x < devRoutes.length; x++){
    devRoutes[x]['beforeEnter'] = beforeEnter
}
let routes = [
    {
        path: '/',
        name: 'login',
        component: resolve => require(['modules/Login.vue'], resolve),
        beforeEnter: beforeEnter
    }
    {
        path: '/',
        name: 'register',
        component: resolve => require(['modules/Register.vue'], resolve),
        beforeEnter: beforeEnter
    }
]
routes = routes.concat(devRoutes)
export default{
    routes: routes
}
