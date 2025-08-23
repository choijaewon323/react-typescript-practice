import * as React from "react";
import NewCategoryRequest from "../types/request/NewCategoryRequest.ts";
import {postNewCategory} from "../api/CategoryApis.ts";

export default function NewCategory() {
    const [categoryInput, setCategoryInput] = React.useState<string>("");

    async function onClick() {
        const requestBody: NewCategoryRequest = {
            name: categoryInput
        };

        await postNewCategory(requestBody);

        window.location.href = "/";
    }

    return <>
        <div>
            <input onChange={e => setCategoryInput(e.target.value)} placeholder={"추가할 카테고리를 입력하세요"} /><button onClick={onClick}>추가</button>
        </div>
    </>
}