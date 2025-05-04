import * as React from "react";
import DOMAIN from "../routes/Domain.tsx";

interface CategoryRequestBody {
    name: string;
}

export default function NewCategory() {
    const [categoryInput, setCategoryInput] = React.useState<string>("");

    async function onClick() {
        const requestBody: CategoryRequestBody = {
            name: categoryInput
        };

        const response = await fetch(`${DOMAIN}/api/v1/category`, {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: { "Content-Type": "application/json" },
        });

        const responseBody: boolean = await response.json();

        if (!responseBody) {
            throw new Error(`카테고리 추가에 실패했습니다. 카테고리명 : ${categoryInput}`);
        }
        window.location.href = "/";
    }

    return <>
        <div>
            <input onChange={e => setCategoryInput(e.target.value)} placeholder={"추가할 카테고리를 입력하세요"} /><button onClick={onClick}>추가</button>
        </div>
    </>
}