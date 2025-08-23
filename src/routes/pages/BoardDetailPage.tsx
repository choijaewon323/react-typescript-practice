import {useEffect, useState} from "react";
import {useParams} from "react-router";
import ReplyList from "../../Components/ReplyList.tsx";
import {getBoardDetail} from "../../api/BoardApis.ts";
import {BoardDetail} from "../../types/response/BoardDetail.ts";


export default function BoardDetailPage() {
    const [board, setBoard] = useState<BoardDetail>();
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        getBoardDetail(id!)
            .then((result: BoardDetail) => {
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