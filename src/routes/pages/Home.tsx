import CategoryList from "../../Components/CategoryList.tsx";
import BoardList from "../../Components/BoardList.tsx";
import NewCategory from "../../Components/NewCategory.tsx";
import NewBoard from "../../Components/NewBoard.tsx";
import UserSignupButton from "../../Components/UserSignupButton.tsx";
import LoginButton from "../../Components/LoginButton.tsx";
import LogoutButton from "../../Components/LogoutButton.tsx";
import TopElement from "./TopElement.tsx";

export default function Home() {
    return <>
        <div className={"container mx-auto"}>
            <TopElement></TopElement>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <h3 className="text-center mt-20 mb-15 text-2xl">
                전체 글
            </h3>

            <div className="flex flex-col items-center">
                <BoardList></BoardList>
            </div>
            <div className="flex-1">
                <CategoryList></CategoryList>
            </div>
            <div>
                <NewBoard></NewBoard>

                <NewCategory></NewCategory>
            </div>


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
        </div>
    </>
}