import './App.css';
import Header from "./components/sections/Header";
import Layout from "./components/Layout";
import './App.css';
import './sass/main.scss';
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import {useEffect, useState} from "react";
import Contact from "./components/sections/Contact";
import Certificates from "./components/sections/Certificates";

function App(){
    const [canScroll, setCanScroll] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setCanScroll(true);
        }, 6000)
    }, [])

    return(
        <>
            <Layout>
                <Header />
                <Hero/>
                {canScroll ?
                    <>
                        <About/>
                        <Projects/>
                        <Certificates/>
                        <Contact/>
                    </>
                    : ''}
            </Layout>
        </>
    )
}

export default App;
