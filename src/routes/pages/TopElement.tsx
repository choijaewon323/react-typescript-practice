import {ChangeEvent, FormEvent, isValidElement, useState} from "react";

export default function TopElement() {
    const [searchKeyword, setSearchKeyword] = useState<string>('');

    const searchClick = () => {

    }

    const onChangeSearchKeyword = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(event.target.value);
    }

    return <>
        <h1 className={"flex-111 text-center mt-15 mb-5 text-3xl"}>
            TOY PROJECT
        </h1>
        <div className={"flex justify-between"}>
            <button>
                =
            </button>
            <div>
                <input
                    onChange={onChangeSearchKeyword}
                    className={"border-b-1 border-gray-300 p-1"}
                    placeholder={"검색어를 입력하세요"} />
                <button
                    onClick={searchClick}
                    className={"flex-1"}>
                    🔍️
                </button>
            </div>
        </div>
    </>
}