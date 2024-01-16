import { useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ["A", "n", "d", "r", "e", "w", " ", "B", "a", "s", "i", "l", "-", "J", "o", "n", "e", "s"] 
    const jobArray = ["S", "o", "f", "t", "w", "a", "r", "e", " ", "E", "n", "g", "i", "n", "e", "e", "r"]
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    
        return () => clearTimeout(timer);
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} 
                    strArray={nameArray}
                    index={15}/>
                    <br/><br/>
                    <AnimatedLetters letterClass={letterClass} 
                    strArray={jobArray}
                    index={33}/>
                </h1>
                <h2>
                    Passionate About Building
                </h2>
                <Link to="/projects" className='flat-button'>
                    PROJECTS
                </Link>
            </div>

        </div>
    )
}

export default Home