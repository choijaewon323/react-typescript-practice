import {useParams} from "react-router";
import {useAuth} from "../AuthContext.tsx";
import {useState} from "react";
import DOMAIN from "../routes/Domain.tsx";

interface RequestBody {
    nickname: string;
    content: string;
    boardId: number;
}

export default function NewReply({reload}: {reload: () => Promise<void>}) {
    const {id} = useParams<{ id: string }>();
    const {user} = useAuth();
    const [content, setContent] = useState<string>('');

    async function newReply() {
        const requestBody: RequestBody = {
            nickname: user,
            content: content,
            boardId: Number(id)
        }

        const response = await fetch(`${DOMAIN}/api/v1/reply`, {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: {"Content-Type": "application/json"},
        });

        const isSuccess: boolean = await response.json();

        if (!isSuccess) {
            throw new Error("댓글 생성에 실패했습니다");
        }

        setContent('');

        await reload();
    }

    return <>
        <div>
            <input placeholder={"댓글 내용을 입력하세요"} onChange={e => setContent(e.target.value)} value={content}/>
            <button onClick={newReply}>댓글 추가</button>
        </div>
    </>
}