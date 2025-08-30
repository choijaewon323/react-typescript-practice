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
            <h3 className="text-1sm">댓글 <span className={"text-green-600"}>{replyList.length}</span></h3>
            <hr className="border-gray-200 my-5" />
            <ul>
                {replyList?.map((reply: Reply) => {
                    return <>
                        <div className="flex">
                            <li className="mb-5 flex-10" key={reply.id}>
                                <p className="text-lg font-bold">{reply.writer}</p>
                                <p>{reply.content}</p>
                                <p className="mt-5 text-sm text-gray-500">{reply.updatedAt}</p>
                            </li>
                            <button className="border rounded-2xl h-6 w-6 border-white hover:bg-gray-200">
                                ⋮
                            </button>
                        </div>
                        <hr className="border-gray-100 mt-5 mb-3" />
                    </>
                })}
            </ul>
            <NewReply reload={replyListReload}></NewReply>
        </div>
    </>
}