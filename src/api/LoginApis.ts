import {LoginRequest} from "../types/request/LoginRequest.ts";
import DOMAIN from "./Domain.tsx";
import {LoginResponse} from "../types/response/LoginResponse.ts";


async function loginAndGetNickname(requestBody: LoginRequest) {
    const response = await fetch(`${DOMAIN}/api/v1/user/login`, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: { "Content-Type": "application/json" }
    });

    const responseBody: LoginResponse = await response.json();

    if (!responseBody.isSuccess) {
        throw new Error("로그인에 실패했습니다")
    }

    return responseBody.nickname;
}

/*
async function loginAndGetNickname(requestBody: LoginRequest) {
    return "작성자";
}

 */

export { loginAndGetNickname };