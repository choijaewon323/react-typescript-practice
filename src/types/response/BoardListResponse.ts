import BoardListDetail from "../BoardListDetail.ts";

interface BoardListResponse {
    count: number;
    boardList: BoardListDetail[];
}

export default BoardListResponse;