import {Link} from "react-router";

export default function LoginButton() {
    return <>
        <div>
            <Link to={"/login"}>로그인</Link>
        </div>
    </>
}