import * as React from "react";
import {useAuth} from "../../AuthContext.tsx";
import {useNavigate} from "react-router";
import {postBoard} from "../../api/BoardApis.ts";
import {NewBoardRequest} from "../../types/request/NewBoardRequest.ts";

export default function NewBoardPage() {
    const [title, setTitle] = React.useState<string>("");
    const [content,  setContent] = React.useState<string>("");
    const [category,  setCategory] = React.useState<string>("");
    const {user} = useAuth();
    const navigate = useNavigate();

    async function onClick() {
        const requestBody: NewBoardRequest = {
            title: title,
            content: content,
            writer: user,
            category: category
        }

        await postBoard(requestBody);

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