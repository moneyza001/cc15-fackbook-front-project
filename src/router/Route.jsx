import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Layout from "../layout/Layout";
import FriendPage from "../pages/FriendPage";
import ProfilePage from "../pages/ProfilePage";
import { RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "friend", element: <FriendPage /> },
            { path: "profile/:profileId", element: <ProfilePage /> },
        ],
    },
]);

export default function Route() {
    return <RouterProvider router={router} />;
}
