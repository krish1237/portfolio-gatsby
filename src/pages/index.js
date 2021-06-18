import React, { useEffect, useRef, useState } from "react"
import Layout from "../components/Layout"
import HeroHome from "../components/HeroHome"
import Timeline from "../components/Timeline"
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from "../components/AlertTemplate"

export default function IndexPage(){

  const scroll = window.requestAnimationFrame || function(callback){window.setTimeout(callback, 1000/60)}
  let avatarWidth = 400 
  let avatarHeight = 400
  let navbarHeight = 40
  let globalHeroAnimationId = null
  let textLogoWidth = 100

  const setAvatarHeigthWidth = () => {
    if(window.innerWidth > 1024){
      avatarWidth = 400
      avatarHeight = 400
    }
    else if(window.innerWidth > 768){
      avatarWidth = 300
      avatarHeight = 300
    }else{
      avatarWidth = 200
      avatarHeight = 200
    }
  }

  setAvatarHeigthWidth()

  const avatarAnimation = () => {
    let avatarDiv = document.getElementById('hero-avatar-div');
    let avatar = document.getElementById('hero-avatar');
    let logoText = document.getElementById('logo-text')
    const avatarRect = avatarDiv.getBoundingClientRect();
    if(avatarRect.y <= 0){
      if(!avatarDiv.style.height){
        avatarDiv.style.height=avatarHeight+"px"
      }
      avatar.classList.add('navbar-logo')
      const pageScroll = window.scrollY || 0
      const height = Math.max((avatarHeight+avatarDiv.offsetTop-pageScroll), navbarHeight)
      avatar.style.height = height.toString()+"px"
      if(height<=navbarHeight){
        if(avatar.firstChild.classList.contains("gatsby-image-wrapper")){
          avatar.style.width = ""
          avatar.classList.add("container")
          setTimeout(() => {
            avatar.classList.add("opacity-0")
            
            //FADE-IN LOGO
            // logoText.classList.remove("opacity-0")
            
            //EXPAND LOGO
            // logoText.classList.remove("scale-0")

            //SLIDE LOGO
            logoText.classList.add("flex-grow")
            logoText.style.width=textLogoWidth+"px"
          },300)
        }
      }
    }else{
      avatar.style.width = avatarWidth+"px"
      // logoText.classList.add("opacity-0")
      // logoText.classList.add("scale-0")
      logoText.classList.remove("flex-grow")
      logoText.style.width="0px"
      avatar.classList.remove("opacity-0")
      avatar.classList.remove('container')
      avatar.classList.remove('navbar-logo')
      avatar.style.height=avatarHeight+"px"
      avatarDiv.style.height=""
    }
    globalHeroAnimationId = scroll(avatarAnimation)
  }

  const scrollSnap = () => {
    const sections = document.querySelectorAll('.scroll-snap-child')
    const options = {
      rootMargin: '0px',
      threshold: 0.02
    }
    const callback = (entries) => {
      const entry = entries[0]
      if(entry.intersectionRatio >= 0.02){
        window.scrollTo({
          top: entry.target.offsetTop,
          left: 0,
          behavior: 'smooth'
        })
        if(entry.target.id === "content-div"){
          setTimeout(()=>{window.cancelAnimationFrame(globalHeroAnimationId)}, 1000)
        }else{
          scroll(avatarAnimation)
        }
      }
    }
    const observer = new IntersectionObserver(callback, options)
    sections.forEach((section, index) => {
      observer.observe(section)
    })
  }

  const alertOptions = {
    position: 'top right',
    offset: '30px',
    timeout: 3000,
    transition: 'scale',
    type: 'info'
  }
  
  useEffect(() => {
    console.log("here")
    scroll(avatarAnimation)
    scrollSnap()
  })

  // Dark Mode for HeroHome
  const layoutRef = useRef(null)
  const [darkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
  useEffect(()=>{
    if(layoutRef.current){
      layoutRef.current.toggleDarkMode(darkMode)
    }
  }, [darkMode])

  return (
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <div id="main-div" className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <div className="scroll-snap-child">
          {/* <HeroHome avatarHeight={avatarHeight} avatarWidth={avatarWidth}/> */}
          <HeroHome darkMode={darkMode} setDarkMode={setDarkMode}/>
        </div>
        <Layout ref={layoutRef} className="scroll-snap-child" id="content-div" title="Portfolio">
          <div className="h-screen">
            {/* <Timeline timelineData={{years:[2000,2001,2002,2003]}}/> */}
          </div>
        </Layout>
      </div>    
    </AlertProvider>
  )
}