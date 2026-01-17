import React from "react";
import Logo from "../../helper/Logo";

export default function Footer() {
    return (
        <div className="pt-16 pgb-16">
           <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
               {/*1st part*/}
               <div>
                   <Logo/>
                   <p>Conditions Terms of Use Ours feturesin Services ew Guests LisitThe Team List Guests LisitThe Team List
                   </p>
               </div>
           </div>
        </div>
    );
}