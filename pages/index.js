import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import Image from 'next/image'
import abd from '../public/abd2.png'
import net from '../public/net.png'
import todo from '../public/todo.png'
import nvidia from '../public/nvidia.png'
import { useState } from 'react'
export default function Home() {
  const [DarkMode, setDarkMode] = useState(true)
  return (
    <div className={DarkMode ? "dark" : "" }>
      <Head>
        <title>Akash Boby Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' bg-white  dark:bg-gray-900' >
        <section className=' min-h-screen'>
          <nav className=" py-10 mb-12 flex justify-between" >
            <h1 className=' text-xl font-burtons m-10 mt-8'>Akash Boby dB</h1>
            <ul className=' flex items-center'>
              <li className=' cursor-pointer text-xl'><BsFillMoonStarsFill onClick={()=>{setDarkMode(!DarkMode)}}/></li>
              <li className='  bg bg-gradient-to-r from-red-800 to-amber-300 py-2 px-4 text-white rounded-md ml-8 '><a href=''/>Resume</li>
            </ul>
          </nav>
          <div className=' text-center p-10'>
            <h1 className=' text-4xl py-2 text-cyan-400 font-burtons md:text-6xl'>Akash B</h1>
            <h3 className=' text-2xl py-2 md:3xl'>Web Developer</h3>
            <p className=' text-md py-6 leading-8 text-gray-700 md:xl mx-w-s'>To be part of an organization, which will allow me to learn, develop,
innovate and utilize the skills to contribute towards the success and
growth of the company through my key strengths and unique
abilities, thereby excel and direct my career to the pinnacle through
the concerned organization and industry.
</p>
          </div>
          <div className=' text-5xl flex  justify-center gap-10 text-sky-600'>
            <AiFillGithub/>
            <AiFillLinkedin/>
          </div>
          <div className='relative mx-auto mt-20  object-center   bg bg-gradient-to-b from-green-400  to-green-100 rounded-full w-80 h-80  overflow-hidden md:h-96 w-96'>
            <Image layout='fill' objectFit='cover' src={abd}/>
          </div>

        </section>
        <section>
          <div>
            <h1 className=' text-3xl py-1 ml-9'>My Projects:</h1>
          </div>
          <div className='lg:flex gap-10'>
            <div className=' text-center shadow-lg p-10 rounded-xl ml-10'>
              <Image src={todo} width={100} height={100}/>
              <h1 className=' py-2 text-lg font-medium pt-8 pb-2' >To-Do</h1>
              <p className='py-3 '>it's a list of tasks you need to complete or things that you want to do. Most typically, they're organised in order of priority.</p>
              <h4 className='py-4  text-sky-500'>Tools I use:</h4>
              <p className=' py-1 text-gray-600'>ReactJS</p>
              <p className=' py-1 text-gray-600'>HTML5</p>
              <p className=' py-1 text-gray-600'>Bootstrap</p>
            </div>
            <div className=' text-center shadow-lg p-10 rounded-xl ml-10'>
              <Image src={net} width={100} height={100}/>
              <h1 className=' py-2 text-lg font-medium pt-8 pb-2' >Netflix</h1>
              <p className='py-3'>A huge selection of movies and TV shows old and new, tons of high-quality original programs, and an easy-to-navigate interface.</p>
              <h4 className='py-4  text-sky-500'>Tools I use:</h4>
              <p className=' py-1 text-gray-600'>ReactJS</p>
              <p className=' py-1 text-gray-600'>HTML5</p>
              <p className=' py-1 text-gray-600'>Bootstrap</p>
            </div>
            <div className=' text-center shadow-lg p-10 rounded-xl ml-10'>
              <Image src={nvidia} width={100} height={100}/>
              <h1 className=' py-2 text-lg font-medium pt-8 pb-2' >Nvidia</h1>
              <p className='py-3'>Developing integrated circuits, which are used in everything from electronic game consoles to personal computers.</p>
              <h4 className='py-4  text-sky-500'>Tools I use:</h4>
              <p className=' py-1 text-gray-600'>ReactJS</p>
              <p className=' py-1 text-gray-600'>HTML5</p>
              <p className=' py-1 text-gray-600'>Bootstrap</p>
              <p className=' py-1 text-gray-600'>Tailwind Css</p>

            </div>
            <div className=' text-center shadow-lg p-10 rounded-xl ml-10'>
              <Image src={nvidia} width={100} height={100}/>
              <h1 className=' py-2 text-lg font-medium pt-8 pb-2' >Nvidia</h1>
              <p className='py-3'>Developing integrated circuits, which are used in everything from electronic game consoles to personal computers.</p>
              <h4 className='py-4  text-sky-500'>Tools I use:</h4>
              <p className=' py-1 text-gray-600'>ReactJS</p>
              <p className=' py-1 text-gray-600'>HTML5</p>
              <p className=' py-1 text-gray-600'>Bootstrap</p>
              <p className=' py-1 text-gray-600'>Tailwind Css</p>

            </div>
            
          </div>
        </section><br/>
        <div className=' max-w-full bg-slate-500 '>
          <div className=' ml-9'>
          <footer >
          <h1 className=' text-lime-50'> Mail Adress:akashdinakumar@gmail.com</h1>
          <h3>All Right Reserved</h3>
        </footer>
          </div>
        
        </div>
       
      
      </main>
       
    </div>
  )
}
