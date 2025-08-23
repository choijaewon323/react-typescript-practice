import NewReplyRequest from "../types/request/NewReplyRequest.ts";
import DOMAIN from "./Domain.tsx";
import Reply from "../types/response/Reply.ts";


async function RpostNewReply(requestBody: NewReplyRequest) {
    const response = await fetch(`${DOMAIN}/api/v1/reply`, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {"Content-Type": "application/json"},
    });

    const isSuccess: boolean = await response.json();

    if (!isSuccess) {
        throw new Error("댓글 생성에 실패했습니다");
    }
}

async function postNewReply(requestBody: NewReplyRequest) {
    return;
}

async function RgetReplyList(id: string) {
    const response = await fetch(`${DOMAIN}/api/v1/reply/${id}`);

    const responseBody: Reply[] = await response.json();

    return responseBody;
}

async function getReplyList(id: string): Promise<Reply[]> {
    return [
        {
            id: 1,
            writer: "작성자",
            content: "테스트 댓글 내용입니다",
            createdAt: "2025-08-23",
            updatedAt: "2025-08-23"
        },
        {
            id: 2,
            writer: "작성자",
            content: "테스트 댓글 내용입니다",
            createdAt: "2025-08-23",
            updatedAt: "2025-08-23"
        }
    ]
}

export { postNewReply, getReplyList };