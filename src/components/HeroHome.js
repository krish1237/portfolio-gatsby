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

    return (
        <div className="flex flex-col h-screen justify-center items-center px-5">
            <div className="container">
                <div id="hero-avatar-div" className="md:flex h-full">
                    <div id="hero-avatar" className="rounded-md overflow-hidden transition-all duration-700 center-avatar">
                        <StaticImage
                            src="../images/hero_avatar.jpg"
                            alt="Krish, Chilvery"
                        />
                    </div>
                    <div id="hero-description" className="rounded-md h-full md:w-4/6 p-4 mx-auto">
                        <div id="brand" className="text-lg sm:text-4xl font-medium mb-4 typewriterAnimation" style={{"--typewriter-speed": "1s", "--typewriter-length": "16"}}>
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