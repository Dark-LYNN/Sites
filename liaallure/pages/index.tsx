import React, { useEffect, useState } from 'react';
import Img from 'next/image';
import Head from 'next/head';
import '../public/style.css';
import Script from 'next/script';



const Index = () => {
    console.log(`
    Site made by LynnuxDev => https://lynnux.xyz/
    
    ⣿⡟⠙⠛⠋⠩⠭⣉⡛⢛⠫⠭⠄⠒⠄⠄⠄⠈⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⡇⠄⠄⠄⠄⣠⠖⠋⣀⡤⠄⠒⠄⠄⠄⠄⠄⠄⠄⠄⠄⣈⡭⠭⠄⠄⠄⠉⠙
    ⣿⡇⠄⠄⢀⣞⣡⠴⠚⠁⠄⠄⢀⠠⠄⠄⠄⠄⠄⠄⠄⠉⠄⠄⠄⠄⠄⠄⠄⠄
    ⣿⡇⠄⡴⠁⡜⣵⢗⢀⠄⢠⡔⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⣿⡇⡜⠄⡜⠄⠄⠄⠉⣠⠋⠠⠄⢀⡄⠄⠄⣠⣆⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸
    ⣿⠸⠄⡼⠄⠄⠄⠄⢰⠁⠄⠄⠄⠈⣀⣠⣬⣭⣛⠄⠁⠄⡄⠄⠄⠄⠄⠄⢀⣿
    ⣏⠄⢀⠁⠄⠄⠄⠄⠇⢀⣠⣴⣶⣿⣿⣿⣿⣿⣿⡇⠄⠄⡇⠄⠄⠄⠄⢀⣾⣿
    ⣿⣸⠈⠄⠄⠰⠾⠴⢾⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⢁⣾⢀⠁⠄⠄⠄⢠⢸⣿⣿
    ⣿⣿⣆⠄⠆⠄⣦⣶⣦⣌⣿⣿⣿⣿⣷⣋⣀⣈⠙⠛⡛⠌⠄⠄⠄⠄⢸⢸⣿⣿
    ⣿⣿⣿⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠈⠄⠄⠄⠄⠄⠈⢸⣿⣿
    ⣿⣿⣿⠄⠄⠄⠘⣿⣿⣿⡆⢀⣈⣉⢉⣿⣿⣯⣄⡄⠄⠄⠄⠄⠄⠄⠄⠈⣿⣿
    ⣿⣿⡟⡜⠄⠄⠄⠄⠙⠿⣿⣧⣽⣍⣾⣿⠿⠛⠁⠄⠄⠄⠄⠄⠄⠄⠄⠃⢿⣿
    ⣿⡿⠰⠄⠄⠄⠄⠄⠄⠄⠄⠈⠉⠩⠔⠒⠉⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠐⠘⣿
    ⣿⠃⠃⠄⠄⠄⠄⠄⠄⣀⢀⠄⠄⡀⡀⢀⣤⣴⣤⣤⣀⣀⠄⠄⠄⠄⠄⠄⠁⢹⠀
    ⣿⣿⣿⠏⠉⠉⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⠀⠀⢀⣿⣿⣿⠿⠿⢿⠿⠿⢿⠿⠿⠿⠿⠿⣿⣿⠿⠿⠿⠿⠿⣿⣿⣿
    ⣿⣿⡟⠀⠀⣸⣿⣿⡏⠀⠀⣿⠀⠀⣸⠀⠀⠀⠀⠀⢸⡿⠀⠀⠀⠀⠀⣹⣿⣿⣿⣿
    ⣿⣿⡇⠀⠀⠛⠛⠛⡇⠀⠀⠇⠀⠀⡟⠀⠀⡞⠀⠀⠼⠇⠀⠀⡇⠀⠀⢿⣿⣿⣿⣿
    ⣿⣿⡃⠀⠀⠀⠀⢠⡇⠀⠀⠀⠀⢀⣇⣀⣀⣧⡀⠀⣀⣀⣀⣠⣆⠀⠀⣸⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠈⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⣤⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    `)

      return (
        <>
            <div>
                <div className="header">
                    <div className='nav center-x'>
                        <div className="logo">
                            <Img src="/liaallure.png" alt="liaallure" width={150} height={150}/>
                        </div>
                    </div>

                    <div className="text-title">
                        <h1 className='text-name center-x center-text'>Allure Commisions</h1>
                        <p className='center-x center-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/> tempor incidunt ut labore et magna aliqua.</p>
                    </div>
                    <div>
                        <div className="btn center-x">
                            <button><a href="./">Order a commission</a></button>
                        </div>
                    </div>
                </div>
                <div className='body'>
                    <p className="recently">Recently work</p>
                    <div className="galery center-x">
                        <ul className="galery-list has-scrollbar">
                            <li className="galery-item">
                                <a href="./">
                                    <Img id="responsive-image" src="/image1.jpg" alt="Temp" height={250} width={231}  placeholder = 'empty' priority={true}/>
                                </a>
                            </li>
                            <li className="galery-item">
                                <a href="./">
                                    <Img id="responsive-image" src="/image2.jpg" alt="Temp" height={250} width={212}  placeholder = 'empty' priority={true}/>
                                </a>
                            </li>
                            <li className="galery-item">
                                <a href="./">
                                    <Img id="responsive-image" src="/image3.jpg" alt="Temp" height={250} width={246}  placeholder = 'empty' priority={true}/>
                                </a>
                            </li>
                            <li className="galery-item">
                                <a href="./">
                                    <Img id="responsive-image" src="/image4.jpg" alt="Temp" height={250} width={168}  placeholder = 'empty' priority={true}/>
                                </a>
                            </li>
                            <li className="galery-item">
                                <a href="./">
                                    <Img id="responsive-image" src="/image5.jpg" alt="Temp" height={250} width={171}  placeholder = 'empty' loading="lazy" priority={false}/>
                                </a>
                            </li>
                            <li className="galery-item">
                                <a href="./">
                                    <Img id="responsive-image" src="/image6.jpg" alt="Temp" height={250} width={152}  placeholder = 'empty' loading="lazy" priority={false}/>
                                </a>
                            </li>
                            <li className="galery-item">
                                <a href="./">
                                    <Img id="responsive-image" src="/image7.jpg" alt="Temp" height={250} width={180}  placeholder = 'empty' loading="lazy" priority={false}/>
                                </a>
                            </li>
                            <li className="galery-item">
                                <a href="./">
                                    <Img id="responsive-image" src="/image8.jpg" alt="Temp" height={250} width={171}  placeholder = 'empty' loading="lazy" priority={false}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p className="recently"></p>
                    <br/>
                    <div className='info-buttons'>
                        <div className="info-buttons">
                            <div className="former center-x">
                                <div className="center-x">
                                    <div className="btn2 center-x"><button><a href="./">Terms</a></button></div>
                                </div>
                                <div className="center-x">
                                    <div className="btn2 center-x"><button><a href="./">Pricing</a></button></div>
                                </div>
                                <div className="center-x">
                                    <div className="btn2 center-x"><button><a href="./">Portfolio</a></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="recently2"></p>
                    <br/>
                    <div className='footer-icons center-x'>
                        <div className='twitch pl-10'>
                            <a href='https://twitch.tv/'>
                                <Img src="/twitch-logo.svg" alt="Twitch Logo" height={50} width={50}/>
                            </a>
                        </div>
                        <div className='x pl-5'>
                            <a href='https://x.com/'>
                                <Img src="/x-logo.svg" alt="X Logo" height={50} width={50}/>
                            </a>
                        </div>
                        <div className='patreon pl-5'>
                            <a href='https://patreon.com/'>
                                <Img src="/patreon-logo.svg" alt="Patreon Logo" height={50} width={50}/>
                            </a>
                        </div>
                        <div className='kofi pl-5'>
                            <a href='https://ko-fi.com/'>
                                <Img src="/kofi-logo.svg" alt="Patreon Logo" height={50} width={50}/>
                            </a>
                        </div>
                        <div className='throne pl-5'>
                            <a href='https://throne.com/'>
                                <Img src="/throne-logo.svg" alt="Patreon Logo" height={50} width={50}/>
                            </a>
                        </div>
                        <br/>
                    </div>
                    <br/>
                </div>
            </div>
        </>
    );
}
export default Index;