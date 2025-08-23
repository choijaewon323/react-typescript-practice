import * as React from "react";
import {useAuth} from "../../AuthContext.tsx";
import {useNavigate} from "react-router";
import {loginAndGetNickname} from "../../api/LoginApis.ts";
import {LoginRequest} from "../../types/request/LoginRequest.ts";



export default function LoginPage() {
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const {user, login, logout} = useAuth();
    const navigate = useNavigate();

    async function signin() {
        const requestBody: LoginRequest = {
            email: email,
            password: password
        }

        const nickname = await loginAndGetNickname(requestBody);

        login(nickname);
        navigate("/");
    }

    return <>
        <div>
            <p><input type={"email"} placeholder={"이메일을 입력하세요"} onChange={e => setEmail(e.target.value)}/></p>
            <p><input type={"password"} placeholder={"비밀번호를 입력하세요"} onChange={e => setPassword(e.target.value)}/></p>
            <button onClick={signin}>로그인</button>
        </div>
    </>
}