import { NextResponse } from "next/server";
import { faUser,faCode,faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface NavItem{
    name: string,
    link: string,
    icon: IconDefinition
}

interface NavData{
    data: NavItem[];
}

export async function GET() : Promise<NextResponse>{
    const data: NavItem[] = [
        {
            name: "소개",
            link: "/about",
            icon: faUser
        },
        {
            name: "스킬",
            link: "/skill",
            icon: faCode
        },
        {
            name: "포트폴리오",
            link: "/work",
            icon: faWindowMaximize
        }
    ]
    return NextResponse.json({data} as NavData); // as = 덮어쓰기
}