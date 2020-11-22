import { useState } from 'react'
import Navigation from './Navigation'
import Social from './Social'
import { FiMenu } from 'react-icons/fi'


export default function Sidebar() {
    return (
        <div className="hidden w-screen flex-1 md:flex flex-col md:w-64 overflow-y-auto h-screen bg-white">
            <Social />
            <Navigation />
        </div >
    )
}