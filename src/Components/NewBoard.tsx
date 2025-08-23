import {useNavigate} from "react-router";
import {useAuth} from "../AuthContext.tsx";

export default function NewBoard() {
    const navigate = useNavigate();
    const {user} = useAuth();

    function onClick() {
        if (user === null) {
            alert("로그인이 필요합니다");
            navigate("/");
            return;
        }
        navigate("/board/new")
    }

    return <>
        <div>
            <button onClick={onClick}>새 게시글 작성</button>
        </div>
    </>
}