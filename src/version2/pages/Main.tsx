import BlogList from "../components/BlogList.tsx";


export default function Main() {
    return <>
        <div>
            <div className={"flex flex-col bg-[url('../../public/background2.jpg')] bg-cover text-center p-30"}>
                <h1 className={"text-7xl p-3 text-black"}>
                    Blog Project.
                </h1>
                <h2 className={"text-2xl p-3"}>
                    블로그 프로젝트 v2
                </h2>
            </div>

            <BlogList></BlogList>
        </div>
    </>
}