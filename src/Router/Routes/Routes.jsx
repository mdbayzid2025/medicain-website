

import Contact from "../../Pages/Contact/Contact";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import { Home, Login, Signup, DoctorDetails, Doctors, Services, CheckOutCancel, CheckOutSuccess, BookAppointment } from "../../Pages";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DoctorAccount from "../../Dashboard/doctor-account/DoctorAccount";
import UserList from "../../Dashboard/User/UserList";
import CheckOutFail from "../../Pages/Booking/CheckOutFail";
import MyAccount from "../../Dashboard/user-account/MyAccount";
import DoctorList from "../../Dashboard/Doctor/DoctorList";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
            {
                path: '/doctors',
                element: <Doctors />,
            },
            {
                path: '/services',
                element: <Services />,
            },

            {
                path: "/payment-success",
                element: <CheckOutSuccess />,
            },
            {
                path: "/payment-failed",
                element: <CheckOutFail />,
            },
            {
                path: "/payment-cancel",
                element: <CheckOutCancel />,
            },
            {
                path: "/doctors/:id",
                element: <PrivateRoute allowedRoles={["patient"]}>
                    <DoctorDetails />
                </PrivateRoute>,
            },

            {
                path: "/users/profile/:id",
                element: <PrivateRoute allowedRoles={["patient"]}>
                    <MyAccount />,
                </PrivateRoute>
            },
            {
                path: "/doctors/profile/:id",
                element: <PrivateRoute allowedRoles={["doctor"]}>
                    <DoctorAccount />
                </PrivateRoute>,
            },

            {
                path: "/dashboard/doctors",
                element: <PrivateRoute allowedRoles={["doctor"]}>
                    <DoctorList />
                </PrivateRoute>,
            },
            {
                path: "/dashboard/users",
                element: <PrivateRoute allowedRoles={["patient"]}>
                    <UserList />
                </PrivateRoute>,
            },
            {
                path: "/doctor/:id/bookAppointment",
                element: <PrivateRoute allowedRoles={["patient"]}>
                    <BookAppointment />
                </PrivateRoute>,
            },
        ]
    }
])

export default router