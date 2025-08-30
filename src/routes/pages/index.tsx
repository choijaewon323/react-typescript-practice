import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./Home.tsx";
import About from "./About.tsx";
import NewBoardPage from "./NewBoardPage.tsx";
import NewUserPage from "./NewUserPage.tsx";
import LoginPage from "./LoginPage.tsx";
import {AuthProvider} from "../../AuthContext.tsx";
import BoardDetailPage from "./BoardDetailPage.tsx";
import MapPage from "./MapPage.tsx";
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