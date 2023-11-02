import { NextResponse } from "next/server";
import { faUser,faCode,faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

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

interface WorkData{
    data: WorkItem[];
}

export async function GET() : Promise<NextResponse>{
    const data: WorkItem[] = [
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
    return NextResponse.json({data} as WorkData);
}