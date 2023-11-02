'use client';
import { Flamenco } from "next/font/google";
import { useState, useEffect } from "react";

interface SkillItem {
    title: string,
    progressBefore: number,
    progressAfter: number,
    desc: string;
}

export default function Skills(){

    const [skillList, setSkillList] = useState<SkillItem[]>([]);
    const [gauge, setGauge] = useState<boolean>(false);

    useEffect(()=>{
        const fetchdata = async () => {
            try{
                const res = await fetch('/api/skill')
                const data = await res.json();
                setSkillList(data.data);
                
                setTimeout(()=>{
                    setGauge(true);
                }, 500);
            }catch(error){
                console.log(error)
            }
        }
        fetchdata();
    },[])


    return(
        <>
        {
            skillList.map((e,i)=>{
                return(
                    <div key={i} className="w-full h-20">
                        <div className="w-full h-5 bg-[#eee] rounded-[50px]">
                            <div className="h-full bg-pink-300 rounded-[50px] text-right duration-1000 ease-out relative mb-3 first:mt-10" style={{width: !gauge ? e.progressBefore : e.progressAfter+"%"}}>
                                <p className="absolute font-bold -top-6 md:-top-7 left-1 text-sm md:text-lg">{e.title}</p>
                            </div>
                            <p className="text-sm md:text-base">{e.desc}</p>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}