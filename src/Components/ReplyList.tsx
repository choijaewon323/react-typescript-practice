import {useParams} from "react-router";
import {useEffect, useState} from "react";
import NewReply from "./NewReply.tsx";
import Reply from "../types/response/Reply.ts";
import {getReplyList} from "../api/ReplyApis.ts";

export default function ReplyList() {
    const {id} = useParams<{id: string}>();
    const [replyList, setReplyList] = useState<Reply[]>([]);

    useEffect(() => {
        replyListReload();
    }, []);

    async function replyListReload() {
        getReplyList(id!)
            .then(replyList => setReplyList(replyList));
    }

    return <>
        <div>
            <h3>댓글 리스트</h3>
            <ul>
                {replyList?.map((reply: Reply) => {
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
        <NewReply reload={replyListReload}></NewReply>
    </>
}