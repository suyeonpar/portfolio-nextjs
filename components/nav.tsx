'use client'
import Link from "next/link"
import { useEffect, useState } from "react";
import Logo from '/public/images/120x50.png';
import Image from "next/image";
import { faUser,faCode,faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface NavItem{
    name: string,
    link: string,
    icon: IconDefinition
}

export default function Nav(){

    //const icons = [faUser,faCode,faWindowMaximize];
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const [menuList, setMenuList] = useState<NavItem[]>([]);

    useEffect(()=>{
        const fetchdata = async () =>{
            try{
                const res = await fetch('/api/nav')
                const data = await res.json();
                setMenuList(data.data);
            }catch(error){
                console.log(error)
            }
        }
        fetchdata();
    },[])

    const toggleMenu = ()=>{
        setMenuActive(!menuActive);
    }   

    return(
        <>
        <div className="w-full dark:border-b px-[2%] sticky top-0 bg-white py-2.5 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href='/'>
                    <h1>
                        <Image width={120} height={50} src="https://via.placeholder.com/120x50" alt="로고" title="로고" />
                    </h1>
                </Link>
                <div className="basis-3/4 hidden md:block">
                    <ul className="flex justify-around">
                        {
                            menuList.map((e,i)=>{
                                return(
                                    <li key={i} className="relative hover:font-bold after:absolute after:w-full after:h-0.5 after:bg-black after:bottom-0 after:left-0 after:transition-all after:duration-500 after:scale-x-0 hover:after:scale-x-100"><Link href={e.link}>{e.name}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
            <div onClick={toggleMenu} className="fixed right-5 top-5 transition-all duration-500 z-[51] cursor-pointer md:hidden">
                <div className={`${menuActive ? `rotate-45 translate-y-[10px]` : ``} w-[30px] h-[5px] bg-black dark:bg-[#ebf4f1] rounded m-[5px] transition-all duration-500`}></div>
                <div className={`${menuActive ? `opacity-0` : ``} w-[30px] h-[5px] bg-black dark:bg-[#ebf4f1] rounded m-[5px] transition-all duration-500`}></div>
                <div className={`${menuActive ? `-rotate-45 -translate-y-[10px]` : ``} w-[30px] h-[5px] bg-black dark:bg-[#ebf4f1] rounded m-[5px] transition-all duration-500`}></div>
            </div>
            <div className={`${menuActive ? `right-0` : `-right-72`} w-72 h-full fixed top-0 bg-gray-100 z-50 p-12 box-border transition-all duration-500 md:hidden`}>
                <div className="text-center mt-6">
                    <img src="https://via.placeholder.com/100" alt="100x100" title="100x100" width={100} height={100} className="mx-auto rounded-full mb-4" />
                    <p>프론트엔드 개발자 박수연</p>
                </div>
                <ul className="mt-12">
                    {
                        menuList.map((e,i)=>{
                            return(
                                <li className="pt-5 pb-5 border-b hover:font-bold" key={i}><FontAwesomeIcon icon={e.icon} className="mr-2" /><Link href={e.link}>{e.name}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}