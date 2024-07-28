import React from "react";
import Link from "next/link";
import Image from "next/image";

function Male() {
  return <div className="min-h-screen">
<div>
        <div className="flex gap-24 px-32 pt-12 flex-row ">
            <div>
                <div>
                 <Link href=""> <Image src = "/i.png"width={250} height={260} alt="nancy"/></Link>
                </div>
                <div className="pt-2 flex-col">
                    <Link href=""><h2 className="font-bold text-black text-lg  ">Flex Push Button Bomber<br></br><p className="font-bold text-gray-400 text-sm">Jackets</p></h2></Link>
                    <div className="flex pt-2">
                    <Link href=""><p className="text-black font-bold text-xl">$ 195</p></Link>
                    </div>
                </div>
            </div>

            <div>
                <div>
                 <Link href=""> <Image src = "/h.png"width={250} height={260} alt="nancy"/></Link>
                </div>
                <div className="pt-2 flex-col">
                    <Link href=""><h2 className="font-bold text-black text-lg  ">Raglan Sweatshirt<br></br><p className="font-bold text-gray-400 text-sm">Sweaters</p></h2></Link>
                    <div className="flex pt-2">
                    <Link href=""><p className="text-black font-bold text-xl">$ 125</p></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </div>;
}

export default Male;