import React from "react"
import Instagram from "../logos/instagram.svg"
import Github from "../logos/github.svg"
import LinkedIn from "../logos/linkedin.svg"
import Twitter from "../logos/twitter.svg"
import Gmail from "../logos/gmail.svg"
import Switch from "./Switch"
import { handleMail } from "./utils"

export default function Navbar(props) {

    const {alert, darkMode, setDarkMode} = props

    // useEffect(()=>{
    //     toggleSwitch()
    // }, [darkMode])

    // const toggleSwitch = () => {
    //     let switchBtn = document.getElementById('dark-mode-switch')
    //     if(darkMode){
    //         switchBtn.classList.add('translate-x-4')
    //     }else{
    //         switchBtn.classList.remove('translate-x-4')
    //     }
    // }

    const handleDarkMode = () => {
        setDarkMode(prevDarkMode=>!prevDarkMode)
    }
    
    const handleMailNavbar = (event) => {
        handleMail(alert)
    }

    return(
        <div id="topbar" className="container flex fixed bottom-0 sm:sticky sm:top-2 mx-auto p-2 justify-around sm:divide-x sm:divide-current text-lg">
            <div id="logo-text" className="flex-grow self-start font-semibold transition-all duration-700 truncate text-center" style={{width: "0px"}}>
                Krish Chilvery
            </div>  
            <div id="links" className="flex flex-grow self-center justify-center dropdown px-5 sm:w-1/4">
                <div className="flex flex-col sm:flex-row sm:space-x-4 dropdown-content font-semibold">
                    <div><span className="navbar-link">Portfolio</span></div>
                    <div><span className="navbar-link">Blog</span></div>
                    <div><span className="navbar-link">Projects</span></div>
                </div>
                <div className="dropdown-btn flex items-center font-semibold sm:hidden">
                    blah
                    <svg className="w-4 h-4 transition-transform transform origin-center rotate-180 dropdown-icon" fill="currentColor" strokeWidth="1" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                    </svg>
                </div>
            </div>
            <div id="contact-links" className="flex justify-center dropdown px-5 sm:w-1/4">
                <div className="flex flex-col sm:flex-row sm:space-x-4 dropdown-content social-links">
                    <div>
                        <a href="https://github.com/krish1237" target="_blank" rel="noopener noreferrer">
                        <img className="social-icon dark:filter dark:invert" src={Github} width="24px" alt="Github"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/krish_chilvery" target="_blank" rel="noopener noreferrer">
                        <img className="social-icon" src={Instagram} width="24px" alt="Instagram"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/saikrishnachilvery" target="_blank" rel="noopener noreferrer">
                        <img className="social-icon" src={LinkedIn} width="24px" alt="LinkedIn"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://twitter.com/krish_chilvery" target="_blank" rel="noopener noreferrer">
                        <img className="social-icon" src={Twitter} width="24px" alt="Twitter"/>
                        </a>
                    </div>
                    <div onClick={handleMailNavbar} onKeyDown={() => {}} role="button" tabIndex={0}>
                        <img className="social-icon cursor-pointer" src={Gmail} width="24px" alt="Gmail"/>
                    </div>
                </div>
                <div className="contact-btn flex flex-wrap rounded-md shadow sm:hidden" style={{width:"30px"}}>
                    <img src={Github} className="dark:filter dark:invert" width="14px" alt="Github"/>
                    <img src={LinkedIn} width="14px" alt="LinkedIn"/>
                    <img src={Instagram} width="14px" alt="Instagram"/>
                    <img src={Twitter} width="14px" alt="Twitter"/>
                </div>
            </div>
            <div className="hidden sm:flex flex-grow items-center justify-center space-x-1">
                <svg className="h-5 w-5 text-gray-900 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                {/* <div onClick={handleDarkMode} className="flex w-10 h-6 bg-gray-300 dark:bg-blue-900 rounded-full self-center items-center p-1 cursor-pointer">
                    <div id="dark-mode-switch" className="absolute block rounded-full w-4 h-4 bg-white transition-transform duration-300 transform"></div>
                </div> */}
                <Switch on={darkMode} onClick={handleDarkMode}/>
                <svg className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            </div>
            <div className="flex flex-shrink sm:hidden rounded-full justify-center items-center shadow-sm cursor-pointer" onClick={handleDarkMode} onKeyDown={()=>{}} role="button" tabIndex={0}>
                <svg className="h-5 w-5 hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <svg className="h-5 w-5 dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            </div>
        </div>
    )
}