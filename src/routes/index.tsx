import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import NewBoardPage from "./pages/NewBoardPage.tsx";
import NewUserPage from "./pages/NewUserPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";

const router = createBrowserRouter(([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/about',
        element: <About></About>
    },
    {
        path: '/board/new',
        element: <NewBoardPage></NewBoardPage>
    },
    {
        path: '/user/new',
        element: <NewUserPage></NewUserPage>
    },
    {
        path: '/login',
        element: <LoginPage></LoginPage>
    }
]))

export default function Router() {
    return <RouterProvider router={router} />
}