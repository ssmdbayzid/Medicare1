import Main from "../../Layout/Main";
import PrivateRoute from "./PrivateRoute";

const {createBrowserRouter} = require("react-router-dom")
const { Home, Contact, DoctorDetails, Login, Signup, Doctors, Services } = require("../../pages")

const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/doctors",
                element: <Doctors />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/doctor/:id",
                element: <PrivateRoute>
                        <DoctorDetails />
                        </PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
        ]
    }
])

export default router;