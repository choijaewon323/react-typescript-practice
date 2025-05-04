import DOMAIN from "../routes/Domain.tsx";
import {useEffect} from "react";
import * as React from "react";
import {Link} from "react-router";

interface BoardListDetail {
    id: number;
    category: string;
    title: string;
    writer: string;
    likeCount: number;
    createdAt: string;
    updatedAt: string;
}

interface BoardListResponse {
    count: number;
    boardList: BoardListDetail[];
}

export default function BoardList() {
    const [boardList,  setBoardList] = React.useState<BoardListDetail[]>([]);

    async function getBoardList() {
        const response = await fetch(`${DOMAIN}/api/v1/board`);

        const responseBody: BoardListResponse = await response.json();

        return responseBody.boardList;
    }

    useEffect(() => {
        getBoardList()
            .then((list: BoardListDetail[]) => {
                setBoardList(list);
            })
    }, []);

    return <>
        <div>
            <ul>
                {boardList.map((board: BoardListDetail) => {
                    return <li key={board.id}>
                        <p><Link to={`/board/detail/${board.id}`}>{board.title}</Link> {board.writer} {board.likeCount} {board.createdAt}</p>
                    </li>
                })}
            </ul>
        </div>
    </>
}