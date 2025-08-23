import {Link} from "react-router";

export default function UserSignupButton() {
    return <>
        <button className="
            bg-sky-500 hover:bg-sky-700 p-2 rounded-md text-white
        ">
            <Link to={"/user/new"}>회원가입</Link>
        </button>
    </>
}