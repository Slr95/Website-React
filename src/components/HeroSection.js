import React from 'react'
import '../App.css'
import { Button } from './Button';
import './HeroSection.css'
import myVideo1 from '../videos/video-1.mp4'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src={myVideo1} autoPlay loop muted />
            <h1>La aventura espera</h1>
            <p>Que estas esperando?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Empezar
                </Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    Mirar trailer <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
