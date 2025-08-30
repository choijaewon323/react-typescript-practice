import {getBlogList} from "../api/BlogApis.ts";
import {useEffect, useState} from "react";
import {BlogListElementResponse} from "../dto/BlogListResponse.ts";

export default function LargeBlogList() {
    const [largeBlogList, setLargeBlogList] = useState<BlogListElementResponse[]>([]);

    useEffect(() => {
        getBlogList()
            .then(list => {
                setLargeBlogList(list.results)
            });
    }, []);

    return <>
        <div className={"flex flex-col gap-10 items-center justify-center py-10"}>
            {largeBlogList.map((blog: BlogListElementResponse) => {
                return <>
                    <div className={"flex flex-col justify-between px-10 py-6 border min-h-70"}>
                        <div>
                            <p className={"text-sm text-gray-500"}>{blog.writer}</p>
                            <p className={"text-sm text-gray-500"}>{blog.createdAt}</p>
                            <div className={"hover:text-blue-400"}>
                                <h2 className={"text-2xl py-1"}>{blog.title}</h2>
                                <p>{blog.shortContent}</p>
                            </div>
                        </div>
                        <div>
                            <hr className={"border-gray-500"} />
                            <div className={"flex flex-row justify-between mt-3 text-sm text-gray-500"}>
                                <p>조회수 {blog.cnt}회 댓글 {blog.replyCount}개</p>
                                <p>{blog.likeCount} ❤️</p>
                            </div>
                        </div>
                    </div>
                </>
            })}
        </div>
    </>
}