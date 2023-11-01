'use client'
import React, { useEffect, useState } from "react"

interface AboutItem{
    title: string,
    desc?: string,
    desc2?: string,
    date?: string[],
    dateDesc?: string[];
}

export default function About(){
    
    const [itemList, setItemList] = useState<AboutItem[]>([]);

    useEffect(()=> {
        const fetchdata = async () =>{
            try{
                const res = await fetch('/api/about')
                const data = await res.json();
                setItemList(data.data);
            }catch(error){
                console.log(error)
            }
        }
        fetchdata();
    },[])

    
    return(
        <>
            {
                itemList.map((e,i) =>{
                    return(
                        <React.Fragment key={i}>
                        <div className="bg-white rounded-md border dark:bg-[#272929] dark:text-[#ebf4f1] p-5 mb-8 last:mb-0">
                            <h3 className="text-base md:text-xl mb-4">{e.title}</h3>
                            {
                             e.desc && <p className="mb-2 last:mb-0 text-sm md:text-base"><span className="font-bold">`{e.desc}`</span>{e.desc2}</p>
                            }
                            {
                                e.date && e.date.map((el,idx) =>{
                                    return(
                                        <p className="mb-2 last:mb-0 text-sm md:text-base" key={idx}>{el} : {e.dateDesc && e.dateDesc[idx]}</p>
                                    )
                                })
                            }
                        </div>
                        </React.Fragment>
                    )
                })
            }

        </>
    )
}