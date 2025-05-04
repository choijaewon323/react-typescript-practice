import * as React from "react";
import DOMAIN from "../Domain.tsx";

interface NewUserRequestBody {
    nickname: string;
    email: string;
    password: string;
}

export default function NewUserPage() {
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [nickname, setNickname] = React.useState<string>("");

    async function signup() {
        const requestBody: NewUserRequestBody = {
            nickname: nickname,
            email: email,
            password: password
        }

        const response = await fetch(`${DOMAIN}/api/v1/user`, {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: { "Content-Type": "application/json" }
        });

        const isSuccess: boolean = await response.json();

        if (!isSuccess) {
            throw new Error("회원가입에 실패했습니다")
        }

        window.location.href = "/";
    }

    return <>
        <div>
            <p><input type={"email"} placeholder={"이메일을 입력하세요"} onChange={e => setEmail(e.target.value)}/></p>
            <p><input type={"password"} placeholder={"비밀번호를 입력하세요"} onChange={e => setPassword(e.target.value)}/></p>
            <p><input placeholder={"닉네임을 입력하세요"} onChange={e => setNickname(e.target.value)}/></p>
            <button onClick={signup}>회원가입</button>
        </div>
    </>
}