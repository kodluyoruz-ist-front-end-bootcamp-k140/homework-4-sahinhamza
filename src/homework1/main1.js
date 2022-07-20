import React from "react";
import { Routes, Route } from "react-router-dom"
import { Home } from "./home";
import { About } from "./about";
import { Contact } from "./contact";
import { Nomatch } from "./nomatch";
import { Navbar } from "./navbar";
import "./style.css"


export function Main1() {
    return (
        <div className="Main">
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='about' element={<About />}></Route>
                <Route path='contact' element={<Contact />}></Route>
                <Route path='*' element={<Nomatch />}></Route>
            </Routes>
        </div>
    )
}