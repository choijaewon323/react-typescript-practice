import {BlogListResponse} from "../dto/BlogListResponse.ts";

/*
interface BlogListElementResponse {
    writer: string;
    createdAt: string;
    title: string;
    shortContent: string;
    cnt: number;
    replyCount: number;
    likeCount: number;
}
 */

async function getBlogList(): Promise<BlogListResponse> {
    return {
        results: [
            {
                writer: "Admin",
                createdAt: "2025-12-12",
                title: "인기 CEO의 성공 전략",
                shortContent: "블로그 게시물의 내용을 간략하게 소개하는 짧고 인상적인 부제를 추가하여 독자들의 관심을 유도하세요. 참신하고 흥미로운 블로그...",
                cnt: 3,
                replyCount: 2,
                likeCount: 2
            },
            {
                writer: "Admin",
                createdAt: "2025-12-12",
                title: "투자자를 모으는 노하우",
                shortContent: "블로그 게시물의 내용을 간략하게 소개하는 짧고 인상적인 부제를 추가하여 독자들의 관심을 유도하세요. 참신하고 흥미로운 블로그...",
                cnt: 3,
                replyCount: 2,
                likeCount: 2
            },
            {
                writer: "Admin",
                createdAt: "2025-12-12",
                title: "테스트 제목입니다",
                shortContent: "블로그 게시물의 내용을 간략하게 소개하는 짧고 인상적인 부제를 추가하여 독자들의 관심을 유도하세요. 참신하고 흥미로운 블로그...",
                cnt: 3,
                replyCount: 2,
                likeCount: 2
            },
            {
                writer: "Admin",
                createdAt: "2025-12-12",
                title: "인기 CEO의 성공 전략",
                shortContent: "블로그 게시물의 내용을 간략하게 소개하는 짧고 인상적인 부제를 추가하여 독자들의 관심을 유도하세요. 참신하고 흥미로운 블로그...",
                cnt: 3,
                replyCount: 2,
                likeCount: 2
            },
            {
                writer: "Admin",
                createdAt: "2025-12-12",
                title: "투자자를 모으는 노하우",
                shortContent: "블로그 게시물의 내용을 간략하게 소개하는 짧고 인상적인 부제를 추가하여 독자들의 관심을 유도하세요. 참신하고 흥미로운 블로그...",
                cnt: 3,
                replyCount: 2,
                likeCount: 2
            },
            {
                writer: "Admin",
                createdAt: "2025-12-12",
                title: "테스트 제목입니다",
                shortContent: "블로그 게시물의 내용을 간략하게 소개하는 짧고 인상적인 부제를 추가하여 독자들의 관심을 유도하세요. 참신하고 흥미로운 블로그...",
                cnt: 3,
                replyCount: 2,
                likeCount: 2
            },
        ]
    }
}

export { getBlogList };