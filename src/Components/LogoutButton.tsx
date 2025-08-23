import {useAuth} from "../AuthContext.tsx";

export default function LogoutButton() {
    const {logout} = useAuth();

    return <div>
        <button
            className={"bg-sky-500 hover:bg-sky-700 p-2  rounded-md text-white"}
            onClick={logout}>로그아웃</button>
    </div>
}