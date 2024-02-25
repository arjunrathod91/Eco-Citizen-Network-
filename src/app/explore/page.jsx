"use client"
import CustomBtn from '@/components/CustomBtn'
import CustomCard from '@/components/CustomCard'
import React, { useState, useRef, useEffect } from 'react'
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from 'next/link';

function Explore() {
    const mapRef = useRef(null);

    useEffect(() => {
        const map = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: [0, 0],
                zoom: 2
            })
        });

        return () => map.dispose();
    }, []);

    return (
        <div className='bg-cover bg-center bg-no-repeat h-[100vh] w-[100vw]' style={{ backgroundImage: 'url(Img/exploreTheme.jpeg)' }}>
            <div className='navbar container-fluid bg-white h-[60px] flex justify-center items-center sticy top-[0%] left-[0%]'>
                <img src={'./Img/earth.png'} alt="" className='w-10 h-10 text-white p-2 rounded-full' />
                <span className="ml-3 font-bold">Explore</span>
                <div className='h-[40px] w-[60%] flex justify-center items-center'>
                    <div className='w-[100%] h-[100%] bg-white rounded flex justify-start items-center gap-3 pl-3'>
                        <SearchIcon />
                        <input type="text" name="" id="" className='w-[90%] h-[100%] text-[gray] focus:outline-none' placeholder='Search' />
                    </div>
                </div>
                <div className='gap-3 flex list-none mx-3'>
                    <li className='hover:underline hover:font-bold cursor-pointer'><Link href=''>Home</Link></li>
                    <li className='hover:underline hover:font-bold cursor-pointer'><Link href=''>Connect</Link></li>
                    <li className='hover:underline hover:font-bold cursor-pointer'><Link href=''>Donate</Link></li>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='hover:bg-[gray] cursor-pointer rounded h-[36px] w-[36px] flex justify-center items-center'>
                        <NotificationsIcon sx={{fontSize:'22px'}} />
                    </div>
                    <img src={'./Img/profile.gif'} alt="" className='w-12 h-12 text-white p-2 rounded-full' />
                </div>
            </div>
            <div className='h-[100vh] w-[100vw] flex'>
                <div className='flex-1 h-[100%] w-[100%]'>
                   <div className=' p-[10px] w-[90%] h-[85%] bg-[#f3f3f3] rounded-[10px] m-auto mt-[30px] overflow-auto'>
                     {/* 
                        <strong className='text-2xl'>Nearby Challenges</strong>

                        <div className='mt-3 gap-3 flex flex-wrap'>
                            <CustomCard />
                            <CustomCard />
                            <CustomCard />
                        </div>
                        here is only after click the button
                        */}
                        <div className='text-xl ml-[20px] font-semibold'>
                        Categories
                    </div>
                    <div className='flex flex-wrap mt-7 gap-[30px] justify-center'>

                        <div className=' w-[260px] h-[150px] relative cursor-pointer'>
                            <img src={'Img/solar.jpg'} alt="" className='h-[100%] w-[100%] rounded-[10px]'/>
                            <div className='absolute top-[0%] left-[0%] h-[100%] w-[100%] flex justify-center items-center text-white text-bold text-xl bg-[#000000ad] zindex-[2] rounded-[10px]'>Green Actions</div>
                        </div>

                        <div className=' w-[260px] h-[150px] relative cursor-pointer'>
                            <img src={'Img/solar.jpg'} alt="" className='h-[100%] w-[100%] rounded-[10px]'/>
                            <div className='absolute top-[0%] left-[0%] h-[100%] w-[100%] flex justify-center items-center text-white text-bold text-xl bg-[#000000ad] zindex-[2] rounded-[10px]'>Community Cleanup</div>
                        </div>

                        <div className=' w-[260px] h-[150px] relative cursor-pointer'>
                            <img src={'Img/solar.jpg'} alt="" className='h-[100%] w-[100%] rounded-[10px]'/>
                            <div className='absolute top-[0%] left-[0%] h-[100%] w-[100%] flex justify-center items-center text-white text-bold text-xl bg-[#000000ad] zindex-[2] rounded-[10px]'>Sustainable Projects</div>
                        </div>
                        <div className=' w-[260px] h-[150px] relative cursor-pointer'>
                            <img src={'Img/solar.jpg'} alt="" className='h-[100%] w-[100%] rounded-[10px]'/>
                            <div className='absolute top-[0%] left-[0%] h-[100%] w-[100%] flex justify-center items-center text-white text-bold text-xl bg-[#000000ad] zindex-[2] rounded-[10px]'>Youth Actions</div>
                        </div>
                    </div>
                    </div>

                </div>

                <div className='flex-1 h-[100%] w-[50%]'>

                    <div className='flex h-[100px] w-[100%] justify-center items-center gap-[20px]'>
                        <div className='h-[40px] w-[60%] flex justify-center items-center'>
                            <div className='w-[100%] h-[100%] bg-white rounded flex justify-start items-center gap-3 pl-3'>
                                <SearchIcon />
                                <input type="text" name="" id="" className='w-[90%] h-[100%] text-[gray] focus:outline-none' placeholder='Search' />
                            </div>
                        </div>
                        <div className='p-[8px] bg-white text-black rounded w-[80px]'>
                            Filter
                        </div>
                    </div>
                    <div className=' h-[500px] w-[80%] rounded-[10px] m-auto mt-[px] flex justify-center items-center rounded'>
                        <div className=" rounded" id='map' ref={mapRef} style={{ width: '100%', height: '100%' }} ></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Explore
