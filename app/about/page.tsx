import Image from "next/image";
import AboutCom from '@/components/about'

export default function About(){
    return(
        <>
        <div className="w-full pt-12 mt-16 px-[2%] pb-8">
            <div className="max-w-7xl mx-auto p-5 bg-white rounded-md border dark:bg-[#272929] dark:text-[#ebf4f1]">
                <h3 className="text-center font-bold text-xl sm:text-2xl lg:text-3xl">프로필</h3>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="h-auto flex overflow-hidden mt-8 flex-wrap justify-between">
                    <div className="basis-full md:basis-[30%] py-12 px-4 bg-white rounded-md dark:bg-[#272929] dark:text-[#ebf4f1] text-center border">
                        <Image src="https://via.placeholder.com/300" alt="300x300" className="rounded-full mx-auto" width={300} height={300}/>
                        <ul>
                            <li className="pl-5 box-border pt-6"><span className="font-bold">박수연</span> / Park Su Yeon</li>
                            <li className="pl-5 box-border pt-6">1997.07.15</li>
                            <li className="pl-5 box-border pt-6"><a href="mailto:sksrbdpdy@naver.com"></a>sksrbdpdy@naver.com</li>
                        </ul>
                    </div>
                    <div className="basis-full md:basis-[67.5%] mt-8 md:mt-0">
                        <AboutCom />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}