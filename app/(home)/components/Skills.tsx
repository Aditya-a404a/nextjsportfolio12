"use client";
import React from 'react' 
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiNextdotjs, SiPython, SiReact ,SiJavascript, SiHTML5, SiCSS3 } from 'react-icons/si'

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
                Icon: SiHTML5,
            }
            ,
            {
                text:"CSS",
                Icon: SiCSS3,
            }
            
    ]
  return (
    <div>
        <HoverEffect items={skills} />
       
    </div>
    
  )
}
