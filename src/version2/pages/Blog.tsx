import LargeBlogList from "../components/LargeBlogList.tsx";


export default function Blog() {
    return <>
        <div className={"px-40 py-5 mx-auto max-w-300"}>
            <div className={"flex flex-row justify-between"}>
                <button className={"hover:text-blue-400"}>전체 게시물</button>
                <div className={"flex p-1 gap-1 border-b-1"}>
                    <input className={"p-1"} placeholder={"검색"}/>
                    <button>🔍</button>
                </div>
            </div>

            <LargeBlogList></LargeBlogList>
        </div>
    </>
}