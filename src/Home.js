import React from 'react'
import './Home.css';
import Product from './Product';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home'>
            <img
                // src='https://wallpapercave.com/wp/wp5357594.jpg'
                src='https://wallpapercave.com/wp/wp3145989.jpg '
                alt='/'
                className='home_image'
            />

            <h1 className='image-h1'>Want a good CHANGE ?</h1>
            <h1 className='image-h1'>Be a good CHANGE !!</h1>
            {/* <Link to='./login'>
                <button className='banner-button'>Sign-Up</button>
            </Link> */}
            <div className='home_row'>
                <Product
                    id='1234561'
                    title='Tata SIC005 Hand Sickles for Garden'
                    price={176}
                    rating={5}
                    image='https://5.imimg.com/data5/XY/YT/CD/SELLER-2147847/13-250x250.jpg'
                />
                <Product
                    id='1234552'
                    title='Mild Steel Sugarcane Bud Chipper'
                    price={1500}
                    rating={3} 
                    image='https://5.imimg.com/data5/MF/SA/MY-35123561/bud-chipper-250x250.jpg'
                />
            </div>

            <div className='home_row'>
                <Product
                    id='123454343'
                    title='Rank Ms Tractor Attach Harrow Disc'
                    price={69500}
                    rating={4}
                    image='https://5.imimg.com/data5/QO/KP/MY-3997168/tractor-attach-harrow-disc-250x250.jpg'
                />
                <Product
                    id='1234534'
                    title='Pickaxe'
                    price={165}
                    rating={2}
                    image='https://5.imimg.com/data5/PI/ET/MY-35417731/iron-pickaxe-250x250.jpg'
                />
                <Product
                    id='1234525'
                    title='HPL Mild Steel Tractor Land Leveler, Above 45 Hp, 500-1000 Kg'
                    price={208000.00}
                    rating={5}
                    image='https://5.imimg.com/data5/YR/VG/MY-3288907/tractor-land-leveler-250x250.jpg'
                />
                
            </div>
            <div className='home_row'>
                <Product
                    id='1234516'
                    title='Carbon Fiber Agriculture Drone'
                    price={500000}
                    rating={5}
                    image='https://5.imimg.com/data5/PT/XD/BS/SELLER-51055290/agriculture-drone-10-liter-capacity-price-5-5-l-500x500.jpg'
                />
            </div>
        </div>
    )
}
export default Home