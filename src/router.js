const routers = [
    {
        path: '/',
        meta: {
            title: 'Home'
        },
        component: (resolve) => require(['./views/Home.vue'], resolve)
    }
    // ,{
    //     path: '/login',
    //     meta: {
    //         title: 'Login'
    //     },
    //     component: (resolve) => require(['./views/Login.vue'], resolve)
    // }

];
export default routers;
