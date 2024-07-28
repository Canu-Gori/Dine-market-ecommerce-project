import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  




export default function Middle(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return(
    <>
        <div className="text-center mt-24">
            <p className="text-sm text-blue-600 font-semibold">PROMOTIONS</p>
        </div>
        <div className="text-center mt-6">
            <p className="text-3xl font-bold">Our Promotions Events</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
            
            <div className="grid grid-row-1 md:grid-row-2 gap-2">

                <div className="flex bg-neutral-300">
                    <div>
                        <p className="flex text-3xl font-extrabold mt-16 pl-8">GET UP TO 60%</p>
                        <p className="text-xl pl-8 mt-2">For the summer season</p>
                    </div>
                    <div className="flex justify-end items-end pl-24">
                        <Image  src="/event1.png" height={250} width={250} alt="image"/>
                    </div>    
                </div>

                <div className="flex bg-black">
                    <div>
                        <p className="text-3xl font-bold mt-16 pl-4"><b>GET UP TO 60%</b></p>
                        <p className="text-lg pl-4 mt-2 ">For the summer season</p>
                    </div>
                    <div>
                        <Image src="/event1.png" height={250} width={250} alt="image"/>
                    </div>
                </div>
            </div>



            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                    <div className="bg-orange-200 pl-4">
                        <div>
                            <p className="">Flex Sweatshirt</p>
                            <p>$100.00 $75.00</p>
                        </div>
                        <Image src="/event2.png" height={300} width={280} alt="image"/>
                    </div>
                </div>
                <div className="bg-neutral-300">
                    <p >Flex Push Button Bomber</p>
                    <p>$225.00 $190.00</p>
                    <Image src="/a.png" height={400} width={300} alt="image"/>
                </div>

            </div>
            
        </div>











        <div className="mt-24">
            <div className='flex flex-col gap-[1rem] mb-[2rem] align-middle'>
                <span className='flex tracking-wide justify-center font-semibold text-12px text-[#0062f5]'>PRODUCTS</span>
                <h2 className='flex  justify-center font-bold text-3xl tracking-wider'>Check What We Have</h2>
            </div>






            <Carousel>
                    <CarouselContent>
                        <CarouselItem>
                            <div className="flex flex-row gap-40">
                                <div 
                                    className="h-[565px] transition-transform relative w-[250px] flex-shrink-0">
                                    <Link href={"#"}>
                                        <div className='flex flex-col align-middle mt-10 h-[500px] w-[432px] transition pl-10 duration-500 hover:scale-110'>
                                            <Image src = "/a.png" width={280} height={220} alt='pic' className='bg-[#ffece3] w-[360px] h-[380px] '></Image>
                                            <p className='flex justify-start font-semibold leading-6 mt-[0.5rem] text-[1.1rem] tracking-wide '>Brushed-Raglan-Sweatshirt</p>
                                            <p className='flex justify-start text-[1.2rem] font-semibold '>$195</p>
                                        </div>
                                    </Link>
                                </div>
                                <div 
                                    className="h-[565px] transition-transform relative w-[250px] flex-shrink-0">
                                    <Link href={"#"}>
                                        <div className='flex flex-col align-middle mt-10 h-[500px] w-[432px] transition pl-14 duration-500 hover:scale-110'>
                                            <Image src = "/b.png" width={280} height={220} alt='pic' className='bg-[#ffece3] w-[360px] h-[380px] '></Image>
                                            <p className='flex justify-start font-semibold leading-6 mt-[0.5rem] text-[1.1rem] tracking-wide '>Cameryn Sash Tie Dress</p>
                                            <p className='flex justify-start text-[1.2rem] font-semibold '>$545</p>
                                        </div>
                                    </Link>
                                </div>                            <div 
                                    className="h-[565px] transition-transform relative w-[250px] flex-shrink-0">
                                    <Link href={"#"}>
                                        <div className='flex flex-col align-middle mt-10 h-[500px] w-[432px] transition pl-16 duration-500 hover:scale-110'>
                                            <Image src = "/c.png" width={280} height={220} alt='pic' className='bg-[#ffece3] w-[360px] h-[380px] '></Image>
                                            <p className='flex justify-start font-semibold leading-6 mt-[0.5rem] text-[1.1rem] tracking-wide '>Flex Sweatshirt</p>
                                            <p className='flex justify-start text-[1.2rem] font-semibold '>$175</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </CarouselItem>












                        <CarouselItem>
                        <div className="flex flex-row gap-40">
                                <div 
                                    className="h-[565px] transition-transform relative w-[250px] flex-shrink-0">
                                    <Link href={"#"}>
                                        <div className='flex flex-col align-middle mt-10 h-[500px] w-[432px] transition pl-10 duration-500 hover:scale-110'>
                                            <Image src = "/d.png" width={280} height={220} alt='pic' className='bg-[#ffece3] w-[360px] h-[380px] '></Image>
                                            <p className='flex justify-start font-semibold leading-6 mt-[0.5rem] text-[1.1rem] tracking-wide '>Flex Sweatpants</p>
                                            <p className='flex justify-start text-[1.2rem] font-semibold '>$175</p>
                                        </div>
                                    </Link>
                                </div>
                                <div 
                                    className="h-[565px] transition-transform relative w-[250px] flex-shrink-0">
                                    <Link href={"#"}>
                                        <div className='flex flex-col align-middle mt-10 h-[500px] w-[432px] transition pl-14 duration-500 hover:scale-110'>
                                            <Image src = "/e.png" width={280} height={220} alt='pic' className='bg-[#ffece3] w-[360px] h-[380px] '></Image>
                                            <p className='flex justify-start font-semibold leading-6 mt-[0.5rem] text-[1.1rem] tracking-wide '>Pink Fleece Sweatpants</p>
                                            <p className='flex justify-start text-[1.2rem] font-semibold '>$195</p>
                                        </div>
                                    </Link>
                                </div>                            <div 
                                    className="h-[565px] transition-transform relative w-[250px] flex-shrink-0">
                                    <Link href={"#"}>
                                        <div className='flex flex-col align-middle mt-10 h-[500px] w-[432px] transition pl-16 duration-500 hover:scale-110'>
                                            <Image src = "/f.png" width={280} height={220} alt='pic' className='bg-[#ffece3] w-[360px] h-[380px] '></Image>
                                            <p className='flex justify-start font-semibold leading-6 mt-[0.5rem] text-[1.1rem] tracking-wide '>Lite Sweatpants</p>
                                            <p className='flex justify-start text-[1.2rem] font-semibold '>$150</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </CarouselItem>









                        <CarouselItem>
                        <div className="flex flex-row gap-40">
                                <div 
                                    className="h-[565px] transition-transform relative w-[250px] flex-shrink-0">
                                    <Link href={"#"}>
                                        <div className='flex flex-col align-middle mt-10 h-[500px] w-[432px] transition pl-10 duration-500 hover:scale-110'>
                                            <Image src = "/g.png" width={280} height={220} alt='pic' className='bg-[#ffece3] w-[360px] h-[380px] '></Image>
                                            <p className='flex justify-start font-semibold leading-6 mt-[0.5rem] text-[1.1rem] tracking-wide '>Imperial Alpaca Hoodie</p>
                                            <p className='flex justify-start text-[1.2rem] font-semibold '>$525</p>
                                        </div>
                                    </Link>
                                </div>
                                <div 
                                    className="h-[565px] transition-transform relative w-[250px] flex-shrink-0">
                                    <Link href={"#"}>
                                        <div className='flex flex-col align-middle mt-10 h-[500px] w-[432px] transition pl-14 duration-500 hover:scale-110'>
                                            <Image src = "/i.png" width={280} height={220} alt='pic' className='bg-[#ffece3] w-[360px] h-[380px] '></Image>
                                            <p className='flex justify-start font-semibold leading-6 mt-[0.5rem] text-[1.1rem] tracking-wide '>Flex Push Button Bomber</p>
                                            <p className='flex justify-start text-[1.2rem] font-semibold '>$225</p>
                                        </div>
                                    </Link>
                                </div>                            <div 
                                    className="h-[565px] transition-transform relative w-[250px] flex-shrink-0">
                                    <Link href={"#"}>
                                        <div className='flex flex-col align-middle mt-10 h-[500px] w-[432px] transition pl-16 duration-500 hover:scale-110'>
                                            <Image src = "/k.png" width={280} height={220} alt='pic' className='bg-[#ffece3] w-[360px] h-[380px] '></Image>
                                            <p className='flex justify-start font-semibold leading-6 mt-[0.5rem] text-[1.1rem] tracking-wide '>Muscle Tank</p>
                                            <p className='flex justify-start text-[1.2rem] font-semibold '>$75</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
            </Carousel>














            <section>
                <section className='pt-16'>
                    <div className='flex flex-col font-bold leading-[49px] absolute-bottom-[2500px] pl-[770px] text-5xl'>Unique and  Authentic<p> Vintage Designer </p><p className="absolute mt-24">Jewellery</p></div>
                    <div className=' pl-20 pr-20 bg-[#fbfcff] grid h-[884] w-[220] pt-24'>
                        {/* left div */}
                        <div className=' grid grid-cols-2 gap-[2rem]'>
                            <div className='font-bold leading-[110px] text-[6.875rem] absolute opacity-0.07 z-[1] text-[#ecedef]'>Different from others</div>
                            <div className='w-[100%] z-[2]'>
                                <h3 className='font-[600] text-[1.125rem] leading-5 tracking-[0.03em] mb-[1rem] h-[426] w-[20]'>Using Good Quality Materials</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className='w-[100%] z-[2]'>
                                <h3 className='font-[600] text-[1.125rem] leading-5 tracking-[0.03em] mb-[1rem] h-[426] w-[20]'>100% Handmade Products</h3>
                                <p className='block font-[300] leading-[22px] text-[1rem] text-[black] margin-block-start-[1em] margin-block-end-[1em]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className='w-[100%] z-[2]'>
                                <h3 className='font-[600] text-[1.125rem] leading-5 tracking-[0.03em] mb-[1rem] h-[426] w-[20]'>Modern Fashion Design</h3>
                                <p className='block font-[300] leading-[22px] text-[1rem] text-[#212121] margin-block-start-[1em] margin-block-end-[1em]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            </div>
                            <div className='w-[100%] z-[2]'>
                                <h3 className='font-[600] text-[1.125rem] leading-5 tracking-[0.03em] mb-[1rem] h-[426] w-[20]'>Discount for Bulk Orders</h3>
                                <p className='block font-[300] leading-[22px] text-[1rem] text-[#212121] margin-block-start-[1em] margin-block-end-[1em]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        {/* right div */}
                        <div className='flex justify-center align-middle gap-[2.5rem] pt-10'>
                            <Image src="/feature.png" height={350} width={350} alt='fttr' className='aspect-auto h-[350px] overflow-clip'></Image>
                            <div>
                                <p className='font-light text-[1rem] text-justify leading-[26px] pt-32'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                                <button className='bg-black text-white text-[.875rem]  font-semibold leading-[18px] pt-[10px] pb-[10px] w-[279px] h-[40px] mt-4'><Link href={"./products"}>See All Products</Link></button>
                            </div>
                        </div>
                    </div>
                </section>
            </section >

        </div >



        {/* <div>
            <p className="font-bold leading-[110px] text-[6.875rem] absolute opacity-0.07 z-[1] text-[#ecedef]">Newsletter</p> 
        </div> */}
        <div className="mt-36 text-center">
            <p className="text-4xl font-bold">Subscribe Our Newsletter</p>
            <p className="mt-8">Get the latest information and promo offers directly</p>
           
        </div>
       
        <div className="flex items-center justify-center mt-8">
            <div className="flex w-full max-w-md space-x-2">
                    <Input className="" type="email" placeholder="Email" />
                    <Button className="" type="submit">Subscribe</Button>
            </div>
        </div> 
        
        </>
    )
}