import {useParams} from "react-router";
import DOMAIN from "../routes/Domain.tsx";
import {useEffect, useState} from "react";
import NewReply from "./NewReply.tsx";

interface ResponseBody {
    id: number;
    writer: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}

export default function ReplyList() {
    const {id} = useParams<{id: string}>();
    const [replyList, setReplyList] = useState<ResponseBody[]>([]);

    async function getReplyList() {
        const response = await fetch(`${DOMAIN}/api/v1/reply/${id}`);

        const responseBody: ResponseBody[] = await response.json();

        setReplyList(responseBody);
    }

    useEffect(() => {
        getReplyList();
    }, []);

    return <>
        <div>
            <h3>댓글 리스트</h3>
            <ul>
                {replyList?.map((reply: ResponseBody) => {
                    return <>
                        <li key={reply.id}>
                            <p>{reply.content}</p>
                            <p>{reply.writer}</p>
                            <p>게시일 : {reply.createdAt} 수정일 : {reply.updatedAt}</p>
                        </li>
                    </>
                })}
            </ul>
        </div>
        <NewReply reload={getReplyList}></NewReply>
    </>
}