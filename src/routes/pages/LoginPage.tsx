import * as React from "react";
import DOMAIN from "../Domain.tsx";
import {useAuth} from "../../AuthContext.tsx";
import {useNavigate} from "react-router";

interface LoginRequestBody {
    email: string;
    password: string;
}

interface LoginResponseBody {
    isSuccess: boolean;
    email: string;
    nickname: string;
}

export default function LoginPage() {
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const {user, login, logout} = useAuth();
    const navigate = useNavigate();

    async function signin() {
        const requestBody: LoginRequestBody = {
            email: email,
            password: password
        }

        const response = await fetch(`${DOMAIN}/api/v1/user/login`, {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: { "Content-Type": "application/json" }
        });

        const responseBody: LoginResponseBody = await response.json();

        if (!responseBody.isSuccess) {
            throw new Error("로그인에 실패했습니다")
        }

        login(responseBody.nickname);
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