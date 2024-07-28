import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { ShoppingBag, ShoppingCart } from "lucide-react";

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
      <div className="">

          <div className="w-1/6 mt-10">
            <p className="text-blue-700 font-bold pl-4 p-2 bg-blue-100 rounded-xl ">Sale 70%</p>
          </div>

          <h1 className="scroll-m-20 text-4xl font-bold lg:text-6xl gap-4 mt-10">
            An Industrial Take <br />on Streetwear
          </h1>

          <p className="leading-7 [&:not(:first-child)]:mt-6 text-gray-600 mt-12">
            Anyone can beat you but no one can beat your <br />outfit as long as you
            wear Dine outfits.
          </p>
          
          <div className="mt-12">
          <Link href = "/products" >
            <Button className=" p-8 ">
              <ShoppingCart/><p className="pl-4 font-bold text-lg">Start Shopping</p>
            </Button>
          </Link>
          <div className="flex gap-12 mt-24">
            <Image src = "/Featured1.png" width={100} height={100} alt="image"/>
            <Image src = "/Featured2.png" width={100} height={100} alt="image"/>
            <Image src = "/Featured3.png" width={100} height={100} alt="image"/>
            <Image src = "/Featured4.png" width={100} height={100} alt="image"/>
          </div>
            
          </div>
      </div>


      <div className="bg-orange-100 rounded-full ">
        { <Image
          src = "/header1.png"
          width={700}
          height={300}
          alt="image"
        /> }
      </div>

    </div>
  );
}

export default Hero;