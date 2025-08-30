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
        <div className="flex-col items-end">
            <div>
                <textarea
                    className="p-3 w-full h-30 border border-gray-300"
                    placeholder="내용을 입력하세요."
                    onChange={e => setContent(e.target.value)}
                    value={content}>

                </textarea>
            </div>
            <div>
                <button
                    className="bg-green-400 text-white h-10 w-30"
                    onClick={newReply}>
                    등록
                </button>
            </div>
        </div>
    </>
}