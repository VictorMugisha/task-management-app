import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Home from "./Home"
import AllTasks from './AllTasks'

export default function Layout() {
    return (
        <main>
            <Navbar />
            <>
                {/* <Home /> */}
                <AllTasks />
            </>
        </main>
    )
}
