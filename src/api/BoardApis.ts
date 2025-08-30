import DOMAIN from "./Domain.tsx";
import BoardListResponse from "../types/response/BoardListResponse.ts";
import BoardListDetail from "../types/BoardListDetail.ts";
import {BoardDetail} from "../types/response/BoardDetail.ts";
import {NewBoardRequest} from "../types/request/NewBoardRequest.ts";


async function RgetBoardList(): Promise<BoardListDetail[]> {
    const response: Response = await fetch(`${DOMAIN}/api/v1/board`);

    const responseBody: BoardListResponse = await response.json();

    return responseBody.boardList;
}

async function getBoardList(): Promise<BoardListDetail[]> {
    return [
        {
            id: 1,
            category: "카테고리1",
            title: "테스트 제목1",
            content: "안ㄴㅇㄹㄴㅇ란ㅇ란ㅇ러니아러닝라ㅓㄴ이라넝ㄹㄴㅇㄹㄴㅇㄹ...",
            writer: "작성자",
            likeCount: 123,
            createdAt: "2025-08-23",
            updatedAt: "2025-08-23",
        },
        {
            id: 2,
            category: "카테고리2",
            title: "테스트 제목2",
            content: "sdfasdfsdflkwerwerlersdslkxlxckvxcvxcvwdfdfdsdflwker...",
            writer: "작성자",
            likeCount: 123,
            createdAt: "2025-08-23",
            updatedAt: "2025-08-23",
        },
        {
            id: 3,
            category: "카테고리3",
            title: "테스트 제목3",
            content: "sdlkfjsdfervvxcvxcvxcvsdfwerwlekrjwer...",
            writer: "작성자",
            likeCount: 123,
            createdAt: "2025-08-23",
            updatedAt: "2025-08-23",
        }
    ]
}

async function RgetBoardDetail(id: string): Promise<BoardDetail> {
    const response = await fetch(`${DOMAIN}/api/v1/board/${id}`);

    const responseBody: BoardDetail = await response.json();

    return responseBody;
}

async function getBoardDetail(id: string): Promise<BoardDetail> {
    return {
        id: 1,
        title: "테스트 제목",
        content: "안녕하세요 반갑습니다",
        writer: "작성자",
        category: "카테고리",
        likeCount: 123,
        cnt: 321,
        createdAt: "2025-08-23",
        updatedAt: "2025-08-23"
    }
}

async function RpostBoard(requestBody: NewBoardRequest) {
    const response = await fetch(`${DOMAIN}/api/v1/board`, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: { "Content-Type": "application/json" }
    });

    const result: boolean = await response.json();

    if (!result) {
        throw new Error("게시글 추가에 실패했습니다");
    }
}

async function postBoard(requestBody: NewBoardRequest) {
    return;
}

export {getBoardList, getBoardDetail, postBoard};