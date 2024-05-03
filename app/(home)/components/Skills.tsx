"use client";
import React from 'react' 
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiNextdotjs, SiPython, SiReact ,SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si'

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
                text:"JavaScript",
                Icon: SiJavascript,
            }

            ,
            {
                text:"HTML",
                Icon: SiHtml5,
            }
            ,
            {
                text:"CSS",
                Icon: SiCss3,
            }
            
    ]
  return (
    <div>
        <HoverEffect items={skills} />
       
    </div>
    
  )
}
