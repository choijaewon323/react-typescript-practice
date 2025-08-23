import CategoryList from "../../Components/CategoryList.tsx";
import BoardList from "../../Components/BoardList.tsx";
import NewCategory from "../../Components/NewCategory.tsx";
import NewBoard from "../../Components/NewBoard.tsx";
import UserSignupButton from "../../Components/UserSignupButton.tsx";
import LoginButton from "../../Components/LoginButton.tsx";
import LogoutButton from "../../Components/LogoutButton.tsx";

export default function Home() {
    return <>
        <div className={"container mx-auto"}>
            <h1 className={"text-center text-7xl"}>
                TOY PROJECT
            </h1>
            <div className="
            flex flex-row-reverse mt-12
        ">
                <div className="
                text-center mr-12
            ">
                    <UserSignupButton></UserSignupButton>
                </div>
                <div className="
                text-center mr-12
            ">
                    <LoginButton></LoginButton>
                </div>
                <div className="
                text-center mr-12
            ">
                    <LogoutButton></LogoutButton>
                </div>
            </div>

            <div className="flex mt-12">
                <div className="flex-2">
                    <NewBoard></NewBoard>
                    <BoardList></BoardList>
                </div>
                <div className="flex-1">
                    <NewCategory></NewCategory>
                    <CategoryList></CategoryList>
                </div>
            </div>
        </div>
    </>
}