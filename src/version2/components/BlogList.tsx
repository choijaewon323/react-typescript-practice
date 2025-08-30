import {BlogListElementResponse} from "../dto/BlogListResponse.ts";
import {useEffect, useState} from "react";
import {getBlogList} from "../api/BlogApis.ts";

export default function BlogList() {
    const [blogList, setBlogList] = useState<BlogListElementResponse[]>([]);

    useEffect(() => {
        getBlogList()
            .then(list => {
                setBlogList(list.results);
            });
    }, []);

    return <>
        <div className={"flex flex-row flex-wrap justify-center gap-5 px-40 py-20"}>
            {blogList.map(item => {
                return <>
                    <div className={"flex flex-col px-5 py-7 min-w-70 max-w-70 h-80 border border-gray-300"}>
                        <p className={"flex-1 text-sm"}>{item.writer}</p>
                        <p className={"flex-1 text-sm"}>{item.createdAt}</p>
                        <h2 className={"flex-2 text-lg hover:text-blue-300"}>{item.title}</h2>
                        <p className={"flex-6 text-sm text-gray-500 hover:text-blue-300"}>{item.shortContent}</p>
                        <hr className={"flex-1 border-gray-200"} />
                        <div className={"flex-1 flex flex-row justify-between"}>
                            <div>
                                <span>👁️‍🗨️ {item.cnt} ️ 🗨️ {item.replyCount}</span>
                            </div>
                            <div>
                                <p>{item.likeCount} ❤️</p>
                            </div>
                        </div>
                    </div>
                </>
            })}
        </div>
    </>
}