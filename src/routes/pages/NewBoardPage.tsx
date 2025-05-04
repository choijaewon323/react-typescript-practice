import * as React from "react";
import {useAuth} from "../../AuthContext.tsx";
import {useNavigate} from "react-router";
import DOMAIN from "../Domain.tsx";

interface RequestBody {
    title: string;
    content: string;
    writer: string;
    category: string;
}

export default function NewBoardPage() {
    const [title, setTitle] = React.useState<string>("");
    const [content,  setContent] = React.useState<string>("");
    const [category,  setCategory] = React.useState<string>("");
    const {user} = useAuth();
    const navigate = useNavigate();

    async function onClick() {
        const requestBody: RequestBody = {
            title: title,
            content: content,
            writer: user,
            category: category
        }

        const response = await fetch(`${DOMAIN}/api/v1/board`, {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: { "Content-Type": "application/json" }
        });

        const result: boolean = await response.json();

        if (!result) {
            throw new Error("게시글 추가에 실패했습니다");
        }

        navigate("/");
    }

    return <>
        <div>
            <p><input placeholder={"카테고리를 입력하세요"} onChange={e => setCategory(e.target.value)} /></p>
            <p><input placeholder={"제목을 입력하세요"} onChange={e => setTitle(e.target.value)}/></p>
            <div>
                <textarea placeholder={"내용을 입력하세요"} onChange={e => setContent(e.target.value)}></textarea>
            </div>
            <p>{user}</p>
            <button onClick={onClick}>글 작성</button>
        </div>
    </>
}