import {useEffect} from "react";
import * as React from "react";
import {Link} from "react-router";
import BoardListDetail from "../types/BoardListDetail.ts";
import {getBoardList} from "../api/BoardApis.ts";


export default function BoardList() {
    const [boardList,  setBoardList] = React.useState<BoardListDetail[]>([]);

    useEffect(() => {
        getBoardList()
            .then((list: BoardListDetail[]) => {
                setBoardList(list);
            })
    }, []);

    return <>
        <div>
            {boardList.map((board: BoardListDetail) => {
                return <div
                    className="flex text-center  h-20"
                    key={board.id}>
                    <div className={"flex-10"}><Link to={`/board/detail/${board.id}`}>{board.title}</Link></div>
                    <div className={"flex-1"}>{board.writer}</div>
                    <div className={"flex-1"}>{board.likeCount}</div>
                    <div className={"flex-2"}>{board.createdAt}</div>
                </div>
            })}
        </div>
    </>
}