import { Link } from "lucide-react";
import React from "react"; 
import { SiInstagram, SiLeetcode, SiLinkedin, SiX } from "react-icons/si";

export default function Navbar() {
     const socials =[

            {
                Link:"https://leetcode.com/adityaarora12/",
                label:"LeetCode",
                Icon : SiLeetcode,
            },
            {
                Link:"https://www.linkedin.com/in/aditya-arora-50b294255/",
                label:"LinkedIn",
                Icon : SiLinkedin,
            },
            {
                Link:"https://www.instagram.com/adi.a404a/",
                label:"LeetCode",
                Icon : SiInstagram,
            }
        ]

    return (

        

        <nav className= "py-10 flex justify-between items-center ">
            <h1 className="  text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2 "> Aditya </h1>
            <div className = "flex items-center gap-5">
                
                    {
                    socials.map((social,index) => {
                        const Icon = social.Icon;
                        return (
                            <a key={index} href={social.Link} target="_blank" rel="noreferrer" className="text-2x1">
                                <Icon className="w-5 h-5 hover:scale-125 transition-all" />
                            </a>
                        );
                      
                    })}
            </div>
                
        </nav>

        


    );
}
