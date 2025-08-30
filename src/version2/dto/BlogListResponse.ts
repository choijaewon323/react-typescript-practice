interface BlogListResponse {
    results: BlogListElementResponse[];
}

interface BlogListElementResponse {
    writer: string;
    createdAt: string;
    title: string;
    shortContent: string;
    cnt: number;
    replyCount: number;
    likeCount: number;
}

export type { BlogListResponse, BlogListElementResponse };