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
                    className="mb-10"
                    key={board.id}>
                    <div
                    className="text-xl font-bold"
                    ><Link to={`/board/detail/${board.id}`}>{board.title}</Link></div>
                    <div className="flex gap-3 py-1 text-gray-400">
                        <div>
                            {board.category}
                        </div>
                        <div>{board.createdAt}</div>
                    </div>
                    <div className="text-gray-500 py-2">
                        {board.content}
                    </div>
                    <button
                        className="bg-blue-500 text-white font-bold p-1"
                    >
                        <Link to={`/board/detail/${board.id}`}>... Read More</Link>
                    </button>
                </div>
            })}
        </div>
    </>
}