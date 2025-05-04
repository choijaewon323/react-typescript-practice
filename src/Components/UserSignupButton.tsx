import {Link} from "react-router";

export default function UserSignupButton() {
    return <>
        <div>
            <Link to={"/user/new"}>회원가입</Link>
        </div>
    </>
}