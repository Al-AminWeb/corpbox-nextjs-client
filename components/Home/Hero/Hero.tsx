import Image from "next/image";

export default function Hero() {
    return (
        <div className="w-full h-[80vh] bg-[1f242c] flex justify-center flex-col">
            <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                <div>
                    <h1 className="text-4xl md:text-7xl font-bold text-white">Crafting your digital story with
                        passion</h1>
                    <p className="ml-0 md:ml-12 md:mt-10 mt-5 text-sm md:text-base font-semibold text-white">Payment
                        solutions enable businesses to accept payments Payment solutions enable businesses to accept
                        payments from customers conveniently securely from customers conveniently and securely.</p>
                    <button
                        className="px-8 py-3 rounded-full mt-10 ml-0 md:ml-12 text-white font-semibold cursor-pointer hover:bg-[#9f7c4e] transition-all duration-300 outline-2 outline-gray-300">
                        Discover More
                    </button>
                </div>
<div className="absolute top-0 right-48 hidden lg:block">
    <Image src="/images/hero.png" width={550} height={550} alt="img"/>
</div>

            </div>
        </div>
    );
}