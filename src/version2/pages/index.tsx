import {createBrowserRouter, RouterProvider} from "react-router";
import Main from "./Main.tsx";
import Blog from "./Blog.tsx";
import Info from "./Info.tsx";
import Outline from "./Outline.tsx";

const router = createBrowserRouter(([
    {
        path: '/',
        element: <Outline></Outline>,
        children: [
            {
                index: true,
                element: <Main></Main>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/info',
                element: <Info></Info>
            }
        ]
    }
]));

export default function Index() {
    return <>
        <RouterProvider router={router}>
        </RouterProvider>
    </>
}