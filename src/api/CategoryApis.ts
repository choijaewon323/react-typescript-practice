import DOMAIN from "./Domain.tsx";
import Category from "../types/response/Category.ts";
import NewCategoryRequest from "../types/request/NewCategoryRequest.ts";


async function RgetCategoryList() {
    const response = await fetch(`${DOMAIN}/api/v1/category/all`);

    const responseBody: Category[] = await response.json();

    return responseBody;
}

async function getCategoryList(): Category[] {
    return [
        {
            count: 123,
            categoryName: "카테고리1"
        },
        {
            count: 12323,
            categoryName: "카테고리2"
        },
    ];
}

async function RpostNewCategory(requestBody: NewCategoryRequest): Promise<void> {
    const response = await fetch(`${DOMAIN}/api/v1/category`, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: { "Content-Type": "application/json" },
    });

    const responseBody: boolean = await response.json();

    if (!responseBody) {
        throw new Error(`카테고리 추가에 실패했습니다. 카테고리명 : ${requestBody.name}`);
    }
}

async function postNewCategory(requestBody: NewCategoryRequest): Promise<void> {
    return;
}

export {getCategoryList, postNewCategory};