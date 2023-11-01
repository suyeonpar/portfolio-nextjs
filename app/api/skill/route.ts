import { NextResponse } from "next/server";
import { faUser,faCode,faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SkillItem{
    title: string,
    progressBefore: number,
    progressAfter: number,
    desc: string;
}

interface SkillData{
    data: SkillItem[];
}

export async function GET() : Promise<NextResponse>{
    const data: SkillItem[] = [
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
    return NextResponse.json({data} as SkillData);
}