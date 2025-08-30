import * as React from "react";
import {useAuth} from "../../AuthContext.tsx";
import {Link, useNavigate} from "react-router";
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
        <div className="container mx-auto mt-20 max-w-100">
            <h2 className={"text-center font-bold text-2xl"}>TOY PROJECT</h2>

            <div className={"flex flex-col my-7 p-10 border border-gray-200 gap-3"}>
                <input
                    className={"h-10 border-b-1 border-gray-300"}
                    type={"email"}
                    placeholder={"이메일을 입력하세요"}
                    onChange={e => setEmail(e.target.value)}/>
                <input
                    className={"h-10 border-b-1 border-gray-300"}
                    type={"password"}
                    placeholder={"비밀번호를 입력하세요"}
                    onChange={e => setPassword(e.target.value)}/>
                <button
                    className={"bg-green-400 h-12 mt-10"}
                    onClick={signin}>
                    로그인
                </button>
                <div className={"flex justify-between mt-5 text-sm"}>
                    <button>
                        <Link to={"/user/new"}>회원가입</Link>
                    </button>
                    <button>
                        비밀번호 찾기
                    </button>
                </div>
            </div>
        </div>
    </>
}