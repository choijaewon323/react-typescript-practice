import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import NewBoardPage from "./pages/NewBoardPage.tsx";
import NewUserPage from "./pages/NewUserPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import {AuthProvider} from "../AuthContext.tsx";
import BoardDetailPage from "./pages/BoardDetailPage.tsx";
import MapPage from "./pages/MapPage.tsx";
import 'leaflet/dist/leaflet.css'


const router = createBrowserRouter(([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/map',
        element: <MapPage />
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
    ,
    {
        path: '/board/detail/:id',
        element: <BoardDetailPage></BoardDetailPage>
    }
]))

export default function Router() {
    return <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
}