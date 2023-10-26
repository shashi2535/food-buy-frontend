import React from 'react'
import { ProductCarousal } from '../../component';
import { DocSection } from './docs';
import { PartnersFeatures } from './features';
import { RestaurantNavBar } from './nabar';
import { TopSection } from './topSection';
import { Workings } from './workings';
import './style.css';

export const PartnerLanding = () => {
    return (
        <>
            <div className='partner-container'>
                <div className='overlay'>
                    <RestaurantNavBar />
                    <TopSection />
                </div>
                <DocSection />
                <PartnersFeatures />
                <Workings />
                <div className='d-flex align-items-center justify-content-center flex-column restaurant-exits' style={{ backgroundColor: 'rgb(233, 233, 233)', height: '18rem' }}>
                    <span className='fs-3 fw-medium text-center d-block mb-3'>
                        Already have your restaurant listed?
                    </span>
                    <span className='d-block text-secondary mb-3'>
                        Search here and claim the ownership of your restaurant
                    </span>
                    <div className='rounded d-flex p-3' style={{ width: '65%', backgroundColor: 'white', height: '3.5rem' }}>
                        <input placeholder='Delhi NCR' style={{ fontSize: '15px', border: 'none', borderRight: '1px solid gray' }} />
                        <input className='border-0' placeholder='Search for your restaurant, eg. Greenland Cafe' style={{ fontSize: '15px', width: 'inherit' }} />
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center '>
                    <span className='mb-4 mt-4 heading'>Our products</span>
                    <div style={{ width: '70.8%' }} className='d-flex align-items-center justify-content-center'>
                        <div style={{ width: '90%' }} className="position-relative">
                            <ProductCarousal />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
