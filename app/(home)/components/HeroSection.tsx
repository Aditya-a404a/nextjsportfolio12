
import React from 'react'; 


export default function HeroSection() {

    return <div className=" min-h-[60vh] flex flex-col-reverse  gap-14 lg:gap-0 lg:flex-row flex items-center justify-between "> 
        
        
             <div className= " space-y-10  text-center lg:text-left">
                <h1 className= " text-4xl lg:text-7xl font-bold"> Namaste 🙏 , Nice to Meet you <br/>Im
                 
                  <span className=" underline underline-offset-8 decoration-green-500"> { "Aditya Arora"} </span> </h1>
                  <p className="md:w-96 text-lg text-gray-300">
                    {
                        "Im a Aspiring Software Developer and a Competitive Programmer. I'm currently pursuing my B.Tech in Computer Science and Engineering from DIT. Im passionate about learning new technologies and building cool projects. Im also a huge fan of Competitive Programming and love challenges."
                    }
                  </p>

                  <a href={"aditya789arora@gmail.com"} className= " inline-block ">
                    <div className=" flex gap-20">
                    <div className="">
                    {/* <h1 className="text-3xl font-bond hover:text-green-300  scale-100"> Get in Touch </h1> */}
                    <div className="w-40 h-2 bg-green-500 rounded-full translate-x-2"> </div>
                    <div className="w-40 h-2 bg-indigo-500 rounded-full"> </div>
                    </div>
                    
                    </div>
                  </a>

            
            </div> 

            <div>
                 <div className="w-72 h-72 space-y-3 -rotate-[30deg]">
                    <div className='flex gap-3 translate-x-8'>
                        <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
                        <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
                    </div>
                    <div className='flex gap-3 -translate-x-8'>
                        <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
                        <div className="w-32 h-32 rounded-full bg-green-500"></div>
                    </div>
                    


                </div>
                

                
             </div>
                
 

        </div>


}
