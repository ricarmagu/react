const routesAdmin = [
    {
        path: "/admin",
        layout: layoutAdmin,
        component: AdminHome,
    },
    {
        path: "/admin/login/*",
        layout: layoutAdmin,
        component: AdminSignIn,
    },
];