import {useAuth} from "../AuthContext.tsx";

export default function LogoutButton() {
    const {logout} = useAuth();

    return <div>
        <button onClick={logout}>로그아웃</button>
    </div>
}