import * as React from "react";
import {useEffect} from "react";
import {getCategoryList} from "../api/CategoryApis.ts";
import Category from "../types/response/Category.ts";


export default function CategoryList() {
    const [categoryList, setCategoryList] = React.useState<Category[]>([]);

    useEffect(() => {
        getCategoryList()
            .then(result => {
                setCategoryList(result);
            });
    }, []);

    return <>
        <div>
            <ul>
                {categoryList.map((category: Category) => {
                    return <>
                        <li>
                            {category.categoryName} {category.count}
                        </li>
                    </>
                })}
            </ul>
        </div>
    </>
}