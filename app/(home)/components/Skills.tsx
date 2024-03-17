"use client";
import React from 'react' 
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiNextdotjs, SiPython, SiReact } from 'react-icons/si'

export default function Skills() {

    const skills = [
        {
            text:"React",
            Icon: SiReact,
        }
         ,
         {
            text:"Next.js",
            Icon: SiNextdotjs,

         }
         ,
            {
                text:"Python",
                Icon: SiPython,
            },
            
            {
                text:"Python",
                Icon: SiPython,
            }

            ,
            {
                text:"Python",
                Icon: SiPython,
            }
            ,
            {
                text:"Python",
                Icon: SiPython,
            }
            ,
            {
                text:"Python",
                Icon: SiPython,
            }, 
            {
                text:"Python",
                Icon: SiPython,
            }




        
    ]
  return (
    <div>
        <HoverEffect items={skills} />
       
    </div>
    
  )
}