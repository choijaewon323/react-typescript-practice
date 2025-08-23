import {useParams} from "react-router";
import {useAuth} from "../AuthContext.tsx";
import {useState} from "react";
import NewReplyRequest from "../types/request/NewReplyRequest.ts";
import {postNewReply} from "../api/ReplyApis.ts";


export default function NewReply({reload}: {reload: () => Promise<void>}) {
    const {id} = useParams<{ id: string }>();
    const {user} = useAuth();
    const [content, setContent] = useState<string>('');

    async function newReply() {
        const requestBody: NewReplyRequest = {
            nickname: user,
            content: content,
            boardId: Number(id)
        }

        await postNewReply(requestBody);

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