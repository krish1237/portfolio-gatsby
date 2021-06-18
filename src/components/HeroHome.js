import React from 'react'
import Emoji from './Emoji.js'
import { StaticImage } from "gatsby-plugin-image"
import Instagram from "../logos/instagram.svg"
import Github from "../logos/github.svg"
import LinkedIn from "../logos/linkedin.svg"
import Twitter from "../logos/twitter.svg"
import Gmail from "../logos/gmail.svg"
import { handleMail } from './utils';
import { useAlert } from 'react-alert';

export default function HeroHome(props) {
    const alert = useAlert()
    const handleMailHero = (event) => {
        handleMail(alert)
    }
    const { darkMode, setDarkMode } = props
    const handleDarkMode = (event) => {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

    // const animateHello = () => {
    //     var paths = document.querySelectorAll(".line-animated")
    //     console.log(paths)
    //     paths.forEach((path) => {
    //         var length = path.getTotalLength()
    //         path.style.transition = path.style.WebkitTransition = 'none';
    //         path.style.strokeDasharray = length + ' ' + length
    //         path.style.strokeDashoffset = length
    //         path.getBoundingClientRect()
    //         path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out'
    //         path.style.strokeDashoffset = '0'
    //     })
    // }
    // useEffect(()=>{
    //     animateHello()
    // }, [])

    return (
        <div className="flex flex-col h-screen justify-center items-center px-5">
            <div className="container">
                <div id="hero-avatar-div" className="md:flex h-full">
                    <div id="hero-avatar" className="rounded-md overflow-hidden transition-all duration-700 center-avatar">
                        <StaticImage
                            src="../images/hero_avatar.jpg"
                            alt="Krish, Chilvery"
                        // height={props.avatarHeight}
                        // width={props.avatarWidth}
                        />
                    </div>
                    <div id="hero-description" className="rounded-md h-full md:w-4/6 p-4 mx-auto">
                        {/* <div id="hello-animated">
                            <svg className="hello-image h-20" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 263.17 60.53">
                                <g>
                                    <path className="line-animated line-animated-dark" d="M0,59.74V3.19h7.96V27.8h20.71V3.19h7.97v56.55h-7.97V35.37H7.96v24.37H0z"/>
                                    <path className="line-animated line-animated-dark" d="M70.17,60.53c-7.2,0-12.75-1.89-16.67-5.67c-3.92-3.78-5.87-9.22-5.87-16.31c0-6.9,1.66-12.27,4.98-16.09
                                        c3.32-3.82,8-5.73,14.06-5.73c5.71,0,10.12,1.73,13.24,5.18c3.12,3.45,4.68,8.47,4.68,15.05c0,1.94-0.08,3.74-0.24,5.42H55.83
                                        c0.74,3.53,2.42,6.21,5.02,8.02c2.6,1.82,6.03,2.73,10.28,2.73c1.75,0,3.48-0.1,5.18-0.3c1.7-0.2,3.42-0.47,5.18-0.82l1.04,7.41
                                        c-2.5,0.48-4.78,0.78-6.85,0.92C73.6,60.47,71.77,60.53,70.17,60.53z M66.75,24.13c-3.27,0-5.87,1.02-7.81,3.07
                                        c-1.94,2.04-3.08,4.95-3.42,8.72h21.43c0-3.8-0.9-6.71-2.71-8.74C72.43,25.15,69.93,24.13,66.75,24.13z"/>
                                    <path className="line-animated line-animated-dark" d="M119.8,60.53c-4.88,0-8.42-1.33-10.59-3.98c-2.18-2.65-3.27-6.9-3.27-12.74V6.93H93.51V0h20.87v43.41
                                        c0,2.23,0.21,4.05,0.64,5.46c0.42,1.41,1.25,2.44,2.49,3.11c1.23,0.66,3.06,1,5.47,1c2.2,0,5.02-0.5,8.44-1.51l0.96,7.41
                                        c-2.15,0.58-4.21,1.01-6.19,1.27C124.21,60.4,122.08,60.53,119.8,60.53z"/>
                                    <path className="line-animated line-animated-light" d="M167.59,60.53c-4.88,0-8.42-1.33-10.59-3.98c-2.18-2.65-3.27-6.9-3.27-12.74V6.93H141.3V0h20.87v43.41
                                        c0,2.23,0.21,4.05,0.64,5.46c0.42,1.41,1.25,2.44,2.49,3.11c1.23,0.66,3.06,1,5.48,1c2.2,0,5.02-0.5,8.44-1.51l0.96,7.41
                                        c-2.15,0.58-4.21,1.01-6.19,1.27C172,60.4,169.87,60.53,167.59,60.53z"/>
                                    <path className="line-animated line-animated-light" d="M209.48,60.53c-5.84,0-10.38-1.91-13.62-5.73c-3.24-3.82-4.86-9.21-4.86-16.17c0-6.98,1.62-12.38,4.86-16.19
                                        c3.24-3.81,7.78-5.71,13.62-5.71c5.87,0,10.41,1.91,13.64,5.71c3.23,3.81,4.84,9.21,4.84,16.19c0,6.96-1.61,12.35-4.84,16.17
                                        C219.9,58.62,215.35,60.53,209.48,60.53z M209.48,52.97c3.11,0,5.5-1.25,7.19-3.74c1.69-2.5,2.53-6.03,2.53-10.59
                                        c0-4.59-0.84-8.13-2.53-10.61c-1.69-2.48-4.08-3.72-7.19-3.72s-5.5,1.24-7.19,3.72c-1.69,2.48-2.53,6.02-2.53,10.61
                                        c0,4.57,0.84,8.1,2.53,10.59C203.98,51.72,206.38,52.97,209.48,52.97z"/>
                                    <path className="line-animated line-animated-light" d="M257.27,60.53c-1.62,0-3.01-0.58-4.16-1.73c-1.15-1.15-1.73-2.54-1.73-4.16c0-1.65,0.58-3.04,1.73-4.18
                                        c1.16-1.14,2.54-1.71,4.16-1.71c1.65,0,3.04,0.57,4.18,1.71c1.14,1.14,1.71,2.54,1.71,4.18c0,1.62-0.57,3.01-1.71,4.16
                                        C260.31,59.96,258.92,60.53,257.27,60.53z"/>
                                </g>
                            </svg>
                        </div> */}
                        <div id="brand" className="text-lg sm:text-4xl font-medium mb-4 typewriterAnimation" style={{"--typewriter-speed": "2s", "--typewriter-length": "16"}}>
                            Hello I'm <span className="text-blue-400 dark:text-red-400">Krish.</span> 
                            {/* <Emoji label="wave" symbol="👋" /> */}
                        </div>
                        <div className="text-sm sm:text-md md:text-lg w-5/6">
                            I'm a software developer with a passion for learning and working with latest technologies.
                            Currently I'm looking into <span className="px-1 border-b-2">AI</span> and <span className="px-1 border-b-2">Blockchain</span>.
                            My go-to language is <span className="px-1 border-b-2">Python</span>.
                            My learning model is <span className="px-1 border-b-2">learn through code</span>, So I can pretty much learn to work with all constraints.
                            This portfolio is my shot at <span className="px-1 border-b-2">UI Design</span> and I really had fun working with <span className="px-1 border-b-2">Gatsby</span> and <span className="px-1 border-b-2">TailwindCSS</span>.
                        </div>
                        {/* TODO <button onClick={handleDarkMode}>dark mode</button> */}
                    </div>
                </div>
            </div>
            <div className="flex flex-col animate-bounce items-center mt-5 sm:mt-10 md:mt-20">
                <svg className="w-6 h-6 relative top-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 0" />
                </svg>
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 0" />
                </svg>
                <p>Scroll down</p>
            </div>
            <div style={{ marginTop: 0 }} className="hidden sm:flex flex-col absolute right-10 px-2 space-y-8 w-16 lg:w-20 h-full justify-center">
                <div>
                    <a href="https://github.com/krish1237" target="_blank" rel="noopener noreferrer">
                        <img src={Github} className="dark:filter dark:invert home-social-icon" alt="Github" />
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/krish_chilvery" target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} className="home-social-icon" alt="Instagram" />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/saikrishnachilvery" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedIn} className="home-social-icon" alt="LinkedIn" />
                    </a>
                </div>
                <div>
                    <a href="https://twitter.com/krish_chilvery" target="_blank" rel="noopener noreferrer">
                        <img src={Twitter} className="home-social-icon" alt="Twitter" />
                    </a>
                </div>
                <div className="cursor-pointer" onClick={handleMailHero} onKeyDown={()=>{}} role="button" tabIndex={0}>
                    <img src={Gmail} className="home-social-icon" alt="Gmail" />
                </div>
            </div>
            <div ariaLabel="dark-mode-switch" className="absolute flex space-x-2 rounded-full right-10 top-10 justify-center items-center shadow-inner cursor-pointer p-1" onClick={handleDarkMode} onKeyDown={()=>{}} role="checkbox" tabIndex={0} aria-checked={darkMode?"true":"false"}>
                <div className="md:w-14 md:h-14 transition-all duration-500 rounded-full">
                    <svg className="hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <svg className="dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}