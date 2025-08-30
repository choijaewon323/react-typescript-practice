import {useEffect, useState} from "react";
import {useParams} from "react-router";
import ReplyList from "../../Components/ReplyList.tsx";
import {getBoardDetail} from "../../api/BoardApis.ts";
import {BoardDetail} from "../../types/response/BoardDetail.ts";


export default function BoardDetailPage() {
    const [board, setBoard] = useState<BoardDetail>();
    const {id} = useParams<{id: string}>();
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [likeCount, setLikeCount] = useState<number>(0);

    const toggleLike = () => {
        if (isLiked) {
            setIsLiked(false);
            setLikeCount(likeCount - 1);
        } else {
            setIsLiked(true);
            setLikeCount(likeCount + 1);
        }
    }

    useEffect(() => {
        getBoardDetail(id!)
            .then((result: BoardDetail) => {
                setBoard(result);
                setLikeCount(result.likeCount)
            })
    }, []);

    return <>
        <div className="container mx-auto mt-20">
            <h2 className="text-2xl font-bold">{board?.title}</h2>
            <div
                className="flex gap-2 text-gray-600 py-2">

                <div>{board?.category}</div>
                <div>{board?.updatedAt}</div>
            </div>
            <p>{board?.content}</p>

            <button
                onClick={toggleLike}
                className="flex items-center gap-2 px-4 py-2"
            >
                {/* 하트 아이콘 */}
                <span>
                    {isLiked ? "❤️" : "🤍"}
                </span>
                <span>
                    {likeCount}
                </span>
            </button>
            <div className="mt-10">
                <hr />
                <ReplyList></ReplyList>
            </div>
        </div>
    </>
}