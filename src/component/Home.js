import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Shop from './Shop'
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import DashboardBlog from './DashboardBlog';
import DashboardHelp from './DashboardHelp';
import DashboardContact from './DashboardContact';
import DashboardFooter from './DashboardFooter';
import style from '../App.module.css'

function Home() {
    return (
        <div>
            {/* shop now button */}
            <section id={style.main}>
                <h1>WELCOME TO FARMEASY</h1>
                <h3>MAKING FARMING PATTERN EASY</h3>
                <h3><strong>prouducts required for special farming is available</strong> </h3>
                <h3><strong>shop products and it will reach at your door in a CLICK</strong></h3>
                <div className={style.button}>
                    SHOP NOW
                </div>

            </section>
            <DashboardBlog />

               {/* help */}
            <DashboardHelp />

            <DashboardContact />
            {/* contact us */}


            <DashboardFooter />
            {/* footer */}


        </div>

    )
}

export default Home
