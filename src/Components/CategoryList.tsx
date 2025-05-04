import * as React from "react";
import DOMAIN from "../routes/Domain.tsx";
import {useEffect} from "react";

interface Category {
    count: number;
    categoryName: string;
}

export default function CategoryList() {
    const [categoryList, setCategoryList] = React.useState<Category[]>([]);

    async function getCategoryList() {
        const response = await fetch(`${DOMAIN}/api/v1/category/all`);

        const responseBody: Category[] = await response.json();

        return responseBody;
    }

    useEffect(() => {
        getCategoryList()
            .then(result => {
                setCategoryList(result);
            });
    }, []);

    return <>
        <div>
            <ul>
                <li>{categoryList.map((category: Category) => {
                    return <>
                        <li>{category.categoryName} {category.count}</li>
                    </>
                })}</li>
            </ul>
        </div>
    </>
}