import { NextRequest, NextResponse } from "next/server";
import { faUser,faCode,faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface AboutItem{
    title: string,
    desc?: string,
    desc2?: string,
    date?: string[],
    dateDesc?: string[];
}

interface NavItem{
    name: string,
    link: string,
}

interface SkillItem{
    title: string,
    progressBefore: number,
    progressAfter: number,
    desc: string;
}

interface WorkItem{
    img: string,
    descTitle: string,
    desc: string,
    keyword: string[],
    color: string[],
    font: string,
    tools: string[],
    date: string,
    contribution: string,
    type: string,
    original?: string,
    create: string,
    git: string
}

export const GET = async (req: NextRequest) : Promise<NextResponse> =>{

    const type = req.nextUrl.searchParams.get("type");
    console.log(type)
    switch(type){
        case 'about' : 
            const data: AboutItem[] = [
                {
                    title: "◆ MIND",
                    desc: "혼자 부딪혀봐야 온전히 내 것이 된다",
                    desc2: "는 마인드를 가지고 있어, 혼자 찾아보고 고민하여 문제 해결하는 것을 좋아합니다."
                },
                {
                    title: "◆ EDUCATION",
                    date: [
                        "2023.06.29 ~ 2023.11.30",
                        "2023.01.01 ~ 2023.12.31",
                        "2023.01.01 ~ 2023.12.31",
                        "2023.01.01 ~ 2023.12.31"
                    ],
                    dateDesc: [
                        "(혼합+디지털컨버전스) React를 활용한 프론트엔드 개발자 양성(SPA 프로젝트 개발) A",
                        "설명2",
                        "설명3",
                        "설명4"
                    ]
                },
                {
                    title: "◆ LICENSE",
                    date: [
                        "2023.06",
                        "2023.05",
                        "2023.03"
                    ],
                    dateDesc: [
                        "자격증 이름1",
                        "자격증 이름2",
                        "자격증 이름3"
                    ]
                }
            ]
            return NextResponse.json({data});

        case 'nav' :
            const dataNav: NavItem[] = [
                {
                    name: "소개",
                    link: "/about"
                },
                {
                    name: "스킬",
                    link: "/skill"
                },
                {
                    name: "포트폴리오",
                    link: "/work"
                }
            ]
            return NextResponse.json({dataNav});

        case 'skill' :
            const dataSkill: SkillItem[] = [
                {
                    title: "HTML",
                    progressBefore: 0,
                    progressAfter: 90,
                    desc: "웹 표준에 준수하여, 마크업을 할 수 있으며, flex or grid를 활용하여 레이아웃 구성을 할 수 있다."
                },
                {
                    title: "CSS",
                    progressBefore: 0,
                    progressAfter: 90,
                    desc: "웹 표준에 준수하여, 마크업을 할 수 있으며, flex or grid를 활용하여 레이아웃 구성을 할 수 있다."
                },
                {
                    title: "JS",
                    progressBefore: 0,
                    progressAfter: 70,
                    desc: "웹 표준에 준수하여, 마크업을 할 수 있으며, flex or grid를 활용하여 레이아웃 구성을 할 수 있다."
                },
                {
                    title: "REACT",
                    progressBefore: 0,
                    progressAfter: 50,
                    desc: "REACT를 활용하여, SPA 사이트 제작을 할 수 있다. REDUX, ROUTER DOM 등 다양한 라이브러리 활용을 할 수 있다."
                },
                {
                    title: "NEXTJS",
                    progressBefore: 0,
                    progressAfter: 50,
                    desc: "REACT 프레임워크 NEXTJS를 활용하여 SSR 사이트 제작을 할 수 있다."
                }
            ]
            return NextResponse.json({dataSkill});
        case 'work' :
            const dataWork: WorkItem[] = [
                {
                    img: "https://via.placeholder.com/500",
                    descTitle: "xxx 사이트 클론 코딩",
                    desc: "xxx 사이트 클론 코딩",
                    keyword: ["#심플", "#깔끔", "#반응형"],
                    color: ["pink", "white", "black"],
                    font: "Noto Sans KR",
                    tools: ["Figma", "VS CODE", "GIT"],
                    date: "5일",
                    contribution: "100%",
                    type: "Clone",
                    original: "https://www.subway.co.kr",
                    create: "https://www.naver.com",
                    git: "http://www.github.com"
                },
                {
                    img: "https://via.placeholder.com/500",
                    descTitle: "캠핑예약 사이트 Greenping",
                    desc: "캠핑예약 사이트 Greenping",
                    keyword: ["#자연친화적", "#초록", "#반응형"],
                    color: ["green", "mint", "white"],
                    font: "Noto Sans KR",
                    tools: ["Figma", "VS CODE", "GIT"],
                    date: "30일",
                    contribution: "30%",
                    type: "Project",
                    original: "https://www.subway.co.kr",
                    create: "https://www.naver.com",
                    git: "http://www.github.com"
                },
                {
                    img: "https://via.placeholder.com/500",
                    descTitle: "TOY Project",
                    desc: "스터디 토이 프로젝트",
                    keyword: ["#자바스크립트", "#깔끔", "#반응형"],
                    color: ["white", "white", "black"],
                    font: "Noto Sans KR",
                    tools: ["Figma", "VS CODE", "GIT"],
                    date: "14일",
                    contribution: "40%",
                    type: "Project",
                    original: "https://www.subway.co.kr",
                    create: "https://www.naver.com",
                    git: "http://www.github.com"
                },
                {
                    img: "https://via.placeholder.com/500",
                    descTitle: "간단한 게임 즐기기",
                    desc: "간단한 게임 즐기기",
                    keyword: ["#심플", "#깔끔", "#반응형"],
                    color: ["pink", "white", "black"],
                    font: "Noto Sans KR",
                    tools: ["Figma", "VS CODE", "GIT"],
                    date: "5일",
                    contribution: "100%",
                    type: "Webapp",
                    original: "https://www.subway.co.kr",
                    create: "https://www.naver.com",
                    git: "http://www.github.com"
                },
                {
                    img: "https://via.placeholder.com/500",
                    descTitle: "어플 만들기",
                    desc: "어플 만들기",
                    keyword: ["#심플", "#깔끔", "#반응형"],
                    color: ["pink", "white", "black"],
                    font: "Noto Sans KR",
                    tools: ["Figma", "VS CODE", "GIT"],
                    date: "10일",
                    contribution: "100%",
                    type: "Webapp",
                    original: "https://www.subway.co.kr",
                    create: "https://www.naver.com",
                    git: "http://www.github.com"
                },
                {
                    img: "https://via.placeholder.com/500",
                    descTitle: "빌리프 클론 사이트",
                    desc: "빌리프 클론 사이트",
                    keyword: ["#코스메틱", "#깔끔", "#반응형"],
                    color: ["blue", "purple", "black"],
                    font: "Noto Sans KR",
                    tools: ["Figma", "VS CODE", "GIT"],
                    date: "10일",
                    contribution: "100%",
                    type: "Clone",
                    original: "https://www.subway.co.kr",
                    create: "https://www.naver.com",
                    git: "http://www.github.com"
                },
                {
                    img: "https://via.placeholder.com/500",
                    descTitle: "수연 클론 사이트",
                    desc: "수연 클론 사이트",
                    keyword: ["#코스메틱", "#깔끔", "#반응형"],
                    color: ["blue", "purple", "black"],
                    font: "Noto Sans KR",
                    tools: ["Figma", "VS CODE", "GIT"],
                    date: "10일",
                    contribution: "100%",
                    type: "Clone",
                    original: "https://www.subway.co.kr",
                    create: "https://www.naver.com",
                    git: "http://www.github.com"
                },
                {
                    img: "https://via.placeholder.com/500",
                    descTitle: "웹앱",
                    desc: "웹앱",
                    keyword: ["#코스메틱", "#깔끔", "#반응형"],
                    color: ["blue", "purple", "black"],
                    font: "Noto Sans KR",
                    tools: ["Figma", "VS CODE", "GIT"],
                    date: "10일",
                    contribution: "100%",
                    type: "Webapp",
                    original: "https://www.subway.co.kr",
                    create: "https://www.naver.com",
                    git: "http://www.github.com"
                },
                {
                    img: "https://via.placeholder.com/500",
                    descTitle: "부산 축제",
                    desc: "부산 축제",
                    keyword: ["#축제", "#깔끔", "#반응형"],
                    color: ["blue", "purple", "black"],
                    font: "Noto Sans KR",
                    tools: ["Figma", "VS CODE", "GIT"],
                    date: "10일",
                    contribution: "100%",
                    type: "Project",
                    original: "https://www.subway.co.kr",
                    create: "https://www.naver.com",
                    git: "http://www.github.com"
                },
                {
                    img: "https://via.placeholder.com/500",
                    descTitle: "빌리프 클론 사이트",
                    desc: "빌리프 클론 사이트",
                    keyword: ["#코스메틱", "#깔끔", "#반응형"],
                    color: ["blue", "purple", "black"],
                    font: "Noto Sans KR",
                    tools: ["Figma", "VS CODE", "GIT"],
                    date: "10일",
                    contribution: "100%",
                    type: "Clone",
                    original: "https://www.subway.co.kr",
                    create: "https://www.naver.com",
                    git: "http://www.github.com"
                },
            ]
            return NextResponse.json({dataWork});
        default : 
        return NextResponse.json({error: "파라미터 에러 발생"})
    }
}