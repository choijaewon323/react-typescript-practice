import CategoryList from "../../Components/CategoryList.tsx";
import BoardList from "../../Components/BoardList.tsx";
import NewCategory from "../../Components/NewCategory.tsx";
import NewBoard from "../../Components/NewBoard.tsx";
import UserSignupButton from "../../Components/UserSignupButton.tsx";
import LoginButton from "../../Components/LoginButton.tsx";

export default function Home() {
    return <>
        <h1>Blog</h1>
        <UserSignupButton></UserSignupButton>
        <LoginButton></LoginButton>
        <NewCategory></NewCategory>
        <CategoryList></CategoryList>
        <NewBoard></NewBoard>
        <BoardList></BoardList>
    </>
}