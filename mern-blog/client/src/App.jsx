import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Projects from './pages/Projects'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="Dashboard" element={<Dashboard />}/>
            <Route path="About" element={<About />}/>
            <Route path="Projects" element={<Projects />}/>
            <Route path="SignUp" element={<SignUp />}/>
            <Route path="SignIn" element={<SignIn />}/>
        </Routes>
        <Footer />
        </BrowserRouter>
    )
}