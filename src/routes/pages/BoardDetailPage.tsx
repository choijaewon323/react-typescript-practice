import {useEffect, useState} from "react";
import DOMAIN from "../Domain.tsx";
import {useParams} from "react-router";
import ReplyList from "../../Components/ReplyList.tsx";

interface ResponseBody {
    id: number;
    title: string;
    content: string;
    writer: string;
    category: string;
    likeCount: number;
    cnt: number;
    createdAt: string;
    updatedAt: string;
}

export default function BoardDetailPage() {
    const [board, setBoard] = useState<ResponseBody>();
    const {id} = useParams<{id: string}>();

    async function getBoard() {
        const response = await fetch(`${DOMAIN}/api/v1/board/${id}`);

        const responseBody: ResponseBody = await response.json();

        return responseBody;
    }

    useEffect(() => {
        getBoard()
            .then((result: ResponseBody) => {
                setBoard(result);
            })
    }, []);

    return <>
        <div>
            <p>카테고리 : {board?.category}</p>
            <p>{board?.title}</p>
            <p>{board?.content}</p>
            <p>{board?.writer}</p>
            <p>조회수 : {board?.cnt} 좋아요 수 : {board?.likeCount}</p>
            <p>게시 날짜 : {board?.createdAt} 최근 수정일 : {board?.updatedAt}</p>
        </div>
        <div>
            <ReplyList></ReplyList>
        </div>
    </>
}