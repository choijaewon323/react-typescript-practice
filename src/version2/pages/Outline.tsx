import {Link, Outlet} from "react-router";


export default function Outline() {
    return <>
        <div className={"bg-black w-full"}>
            <div className={"flex gap-3 p-3 text-gray-400"}>
                <button className={"hover:text-white"}>
                    <Link to={"/"}>메인</Link>
                </button>
                <h2>
                    |
                </h2>
                <button className={"hover:text-white"}>
                    <Link to={"/blog"}>블로그</Link>
                </button>
                <h2>
                    |
                </h2>
                <button className={"hover:text-white"}>
                    <Link to={"/info"}>소개</Link>
                </button>
            </div>
        </div>

        <Outlet></Outlet>

        <div className={"flex flex-col mx-auto bg-black px-40 pt-5 pb-10"}>
            <p className={"text-gray-500"}>© 2025 Proudly created with Jaewon</p>
        </div>
    </>
}
