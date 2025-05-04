import {Link} from "react-router";

export default function NewBoard() {
    return <>
        <div>
            <Link to={"/board/new"}>새 게시글 작성</Link>
        </div>
    </>
}