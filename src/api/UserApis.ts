import {NewUserRequest} from "../types/request/NewUserRequest.ts";
import DOMAIN from "./Domain.tsx";


async function postNewUser(requestBody: NewUserRequest) {
    const response = await fetch(`${DOMAIN}/api/v1/user`, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: { "Content-Type": "application/json" }
    });

    const isSuccess: boolean = await response.json();

    if (!isSuccess) {
        throw new Error("회원가입에 실패했습니다")
    }
}

/*
async function postNewUser(requestBody: NewUserRequest) {
    return;
}

 */

export { postNewUser };