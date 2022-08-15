import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import Navbar from './Navbar';
import Seo from './Seo';
import { useAlert } from "react-alert";

function Layout(props, ref) {

    //props processing
    const {children, ...forwardProps} = props
    //Alerts
    const alert = useAlert()

    useImperativeHandle(ref, () => ({
        toggleDarkMode: (newDarkMode) => {
            setDarkMode(newDarkMode)
        },
        darkMode: darkMode
    }))

    //Dark Mode
    const [darkMode, setDarkMode] = useState(true)
    useEffect(() => {
        setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }, [])
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return (
        <div ref={ref} {...forwardProps}>
            <Seo title={props.title}/>
            <Navbar alert={alert} darkMode={darkMode} setDarkMode={setDarkMode} />
            {children}
        </div>
    )
}

export default forwardRef(Layout)