
"use client"
import Link from 'next/link';
import Image from 'next/image';
import React from "react";


export default function Female (){
    return(
        <>
        <div>
        <div className="flex gap-16  px-12 pt-12 flex-row ">
            <div>
                <div>
                 <Link href=""> <Image src = "/a.png"width={250} height={260} alt="nancy"/></Link>
                </div>
                <div className="pt-2 flex-col">
                    <Link href=""><h2 className="font-bold text-black text-lg  ">Brushed Raglan Sweatshirt<br></br><p className="font-bold text-gray-400 text-sm">Sweater</p></h2></Link>
                    <div className="flex pt-2">
                    <Link href=""><p className="text-black font-bold text-xl">$ 195</p></Link>
                    </div>
                </div>
            </div>

            <div>
                <div>
                 <Link href=""> <Image src = "/b.png"width={250} height={260} alt="nancy"/></Link>
                </div>
                <div className="pt-2 flex-col">
                    <Link href=""><h2 className="font-bold text-black text-lg  ">Cameryn Sash Tie Dress<br></br><p className="font-bold text-gray-400 text-sm">Dress</p></h2></Link>
                    <div className="flex pt-2">
                    <Link href=""><p className="text-black font-bold text-xl">$ 105</p></Link>
                    </div>
                </div>
            </div>

            <div>
                <div>
                 <Link href=""> <Image src = "/c.png"width={250} height={260} alt="nancy"/></Link>
                </div>
                <div className="pt-2 flex-col">
                    <Link href=""><h2 className="font-bold text-black text-lg  ">Flex Sweatshirt<br></br><p className="font-bold text-gray-400 text-sm">Sweater</p></h2></Link>
                    <div className="flex pt-2">
                    <Link href=""><p className="text-black font-bold text-xl">$ 320</p></Link>
                    </div>
                </div>
            </div>

            <div>
                <div>
                 <Link href=""> <Image src = "/d.png"width={250} height={260} alt="nancy"/></Link>
                </div>
                <div className="pt-2 flex-col">
                    <Link href=""><h2 className="font-bold text-black text-lg  ">Flex Sweatpants<br></br><p className="font-bold text-gray-400 text-sm">Pants</p></h2></Link>
                    <div className="flex pt-2">
                    <Link href=""><p className="text-black font-bold text-xl">$ 425</p></Link>
                    </div>
                </div>
            </div>
        </div>




        <div className="flex flex-row gap-16 px-12 pt-12">
        <div>
                <div>
                   <Link href=""> <Image src = "/e.png"width={250} height={260} alt="nancy"/></Link>
                </div>
                <div className="pt-2 flex-col">
                   <Link href=""> <h2 className="font-bold text-black text-lg  ">Pink Fleece Sweatpants<br></br><p className="font-bold text-gray-400 text-sm">Pants</p></h2></Link>
                    <div className="flex pt-2">
                    <Link href=""><p className="text-black font-bold text-xl">$ 100</p></Link>
                </div>
                </div>
            </div>

            <div>
                <div>
                 <Link href="" ><Image src = "/f.png"width={250} height={260} alt="nancy"/></Link>  
                </div>
                <div className="pt-2 flex-col">
                    <Link href=""><h2 className="font-bold text-black text-lg  ">Lite Sweatpants<br></br><p className="font-bold text-gray-400 text-sm">Pants</p></h2></Link>
                    <div className="flex pt-2">
                    <Link href=""><p className="text-black font-bold text-xl">$ 230</p></Link>
                    </div>
                </div>
            </div>

            <div>
                <div>
                   <Link href=""> <Image src = "/g.png"width={250} height={260} alt="nancy"/></Link>
                </div>
                <div className="pt-2 flex-col">
                    <Link href=""><h2 className="font-bold text-black text-lg  ">Imperial Alpaca Hoodie<br></br><p className="font-bold text-gray-400 text-sm">Jackets</p></h2></Link>
                    <div className="flex pt-2">
                    <Link href=""><p className="text-black font-bold text-xl">$ 200</p></Link>
                    </div>
                </div>
            </div>

            <div>
                <div>
                   <Link href=""> <Image src = "/k.png"width={250} height={260} alt="nancy"/></Link>
                </div>
                <div className="pt-2 flex-col">
                   <Link href=""> <h2 className="font-bold text-black text-lg  ">Muscle Tank<br></br><p className="font-bold text-gray-400 text-sm">T-shirts</p></h2></Link>
                    <div className="flex pt-2">
                    <Link href=""><p className="text-black font-bold text-xl">$ 115</p></Link>
                    </div>
                </div>
            </div>
        </div>

        <div className=" pt-12 px-12">
                <div>
                   <Link href=""> <Image src = "/l.png"width={250} height={260} alt="nancy"/></Link>
                </div>
                <div className="pt-2 flex-col">
                    <Link href=""><h2 className="font-bold text-black text-lg  ">Brushed Bomber<br></br><p className="font-bold text-gray-400 text-sm">Jackets</p></h2></Link>
                    <div className="flex pt-2">
                   <Link href=""><p className="text-black font-bold text-xl">$ 215</p></Link>
                    </div>
                </div>
            </div>
        

</div>
        
        </>
    )
}