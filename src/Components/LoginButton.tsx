import {Link} from "react-router";

export default function LoginButton() {
    return <>
        <button className="
            bg-sky-500 hover:bg-sky-700 p-2  rounded-md text-white
        ">
            <Link to={"/login"}>로그인</Link>
        </button>
    </>
}