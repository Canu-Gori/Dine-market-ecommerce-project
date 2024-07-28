import Image from "next/image";
// import { IconName } from "react-icons/fa6";
export default function Details(){
    return(
<div className="bg-gray-100">
      <div className=" flex justify-center  ">
          <div className="flex flex-row gap-12 pt-12 justify-center">
              <div>
                  <Image src = "/nancy.png"width={100} height={100} alt="nancy"/>
              </div>
              <div>
                  <Image src = "/nancy.png"width={600} height={700} alt="nancy"/>
              </div>
              <div className="pt-12">
                  <h1 className="text-4xl text-black font-normal">Brushed Raglan Sweatshirt<br></br><p className="text-xl text-gray-400 font-normal">Sweaters</p><br></br><p className="text-sm  font-bold text-black">Select Size</p></h1>
                  <br></br>
                <div className="flex flex-row gap-8">
                <h2 className="font-bold  text-gray-400 hover:bg-white  hover:rounded-full px-2 py-2 drop-shadow-lg">XS</h2>
                  <h2 className="font-bold text-gray-400 hover:bg-white hover:rounded-full px-3 py-2 drop-shadow-lg">S</h2>
                  <h2 className="font-bold text-gray-400 hover:bg-white hover:rounded-full px-3 py-2 drop-shadow-lg">M</h2>
                  <h2 className="font-bold text-gray-400 hover:bg-white hover:rounded-full px-4 py-2 drop-shadow-lg">L</h2>
                  <h2 className="font-bold text-gray-400 hover:bg-white hover:rounded-full px-3 py-2 drop-shadow-lg">XL</h2>
                </div>
                <div className="pt-6">
                  <h2 className="text-black text-normal text-xl font-bold ">Quantity:</h2>
                  
                </div>
              </div>
          </div>
      </div>
</div>
        );
}