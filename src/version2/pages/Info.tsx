

export default function Info() {
    return <>
        <div>
            <div className={"flex flex-col bg-[url('../../public/background2.jpg')] bg-cover text-center p-30"}>
                <h1 className={"text-7xl p-3"}>
                    Blog Project.
                </h1>
                <h2 className={"text-2xl p-3"}>
                    블로그 프로젝트 v2
                </h2>
            </div>

            <div className={"flex flex-row gap-10 mx-auto px-40 py-30 max-w-400"}>
                <div className={"flex-2"}>
                    <h2 className={"text-xl"}>
                        뉴스는 신뢰입니다!
                    </h2>

                    <p className={"text-gray-450"}>
                        <br/>
                        여기를 클릭해 내용을 입력하세요. 마우스로 텍스트 상자의 위치와 크기를 변경하고, 텍스트 에디터에서 글꼴과 색상을 선택해 보세요.<br/>

                        <br/>
                        다양한 한글 글꼴을 사용하려면, 글꼴 언어를 한국어로 지정하세요. 나만의 콘텐츠, 나만의 스타일을 위한 나만의 홈페이지를 완성해 보세요! 단순한 아이디어 구상부터 블로그 제작, 작품 시연, 쇼핑몰 운영, 비즈니스 홍보까지 온라인 세상에 펼쳐진 가능성은 여전히 무궁무진합니다. Wix는 사용자의 선호 및 필요에 따라 최고 수준의 홈페이지를 제작할수 있는 모든 솔루션을 갖추고 있습니다.
                        <br/>
                        <br/>
                        홈페이지 템플릿 컬렉션에서 마음에 드는 디자인을 선택한후, 원하는대로 편집해 나만의 홈페이지를 완성해 보세요! 사용자 친화적인 드래그-앤-드롭 방식의 홈페이지 제작 도구를 사용해 코딩없이 홈페이지를 만들어보세요. 간단한 조작으로 데스크톱 홈페이지를 모바일 기기에 최적화 할수도 있습니다. 홈페이지를 게시하기전, 방문자들의 입장에서 홈페이지를 미리 사용해보세요.
                        <br/>
                        <br/>
                        '미리보기' 메뉴를 통해 홈페이지를 게시하기전에 방문자들이 사용하는 그대로 홈페이지의 기능을 시험해볼수 있습니다. 전세계 5000만명 이상이 홈페이지 제작을 위해 Wix를 선택한 이유를 확인해보세요. Wix가 자랑하는 세계 최고의 클라우드 기반 홈페이지 제작 플랫폼과 홈페이지, 도메인 관리를 함께할수 있는 편의성 등 최고의 서비스를 느껴보세요.
                    </p>
                </div>
                <div className={"flex-1 flex flex-col max-w-60 items-center border text-center"}>
                    <img src={"../../public/profile.jpeg"}  alt={"profile.jpeg"}/>
                    <div className={"py-5 px-5"}>
                        <h2 className={"text-xl"}>Software Engineer</h2>
                        <p className={"mt-3"}>Jaewon Choi</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}