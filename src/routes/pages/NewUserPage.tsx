import * as React from "react";
import {postNewUser} from "../../api/UserApis.ts";
import {NewUserRequest} from "../../types/request/NewUserRequest.ts";

export default function NewUserPage() {
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [nickname, setNickname] = React.useState<string>("");

    async function signup() {
        const requestBody: NewUserRequest = {
            nickname: nickname,
            email: email,
            password: password
        }

        await postNewUser(requestBody)

        window.location.href = "/";
    }

    return <>
        <div className={"text-center"}>
            <h1 className="
                text-4xl mt-50
            ">
                TOY PROJECT
            </h1>
            <div className="border rounded-md ml-20 mr-20 mt-10">
                <p className="
                    border-b h-10
                ">
                    <input
                        className="w-full h-full"
                        type={"email"} placeholder={"이메일을 입력하세요"} onChange={e => setEmail(e.target.value)}/>
                </p>
                <p className="
                    border-b h-10
                ">
                    <input
                        className="w-full h-full"
                        type={"password"} placeholder={"비밀번호를 입력하세요"} onChange={e => setPassword(e.target.value)}/>
                </p>
                <p className="h-10">
                    <input
                        className="w-full h-full"
                        placeholder={"닉네임을 입력하세요"} onChange={e => setNickname(e.target.value)}/>
                </p>
            </div>
            <div>
                <button
                    className={"bg-sky-500 hover:bg-sky-700 p-2 rounded-md text-white mt-5"}
                    onClick={signup}>회원가입</button>
            </div>
        </div>
    </>
}