import React from 'react';
import Layout from '../../layout';
import '../../styles/home.css';
import presidentImg from '../../images/president-png.png';
import { Card, Video, Slider } from '../../components';
import piaicLogo from '../../images/partnerlogopiaic.svg';
import saylaniLogo from '../../images/saylaniLogo.c2a52d0a.png'
import sliderImgOne from '../../images/sliderone.jpg';
import sliderImgTwo from '../../images/slidertwo.jpg';
import sliderImgThree from '../../images/sliderthree.jpg';
const Home = () => {
    const cardData = [
        {
            headingOne: "Artificial Intelligence",
            headingTwo: "Artificial Intelligence",
            para: "A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI.",
        },
        {
            headingOne: "Cloud Native and Mobile app",
            headingTwo: "Cloud Native and Mobile Web Computing Specialist",
            para: "A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING."
        },
        {
            headingOne: "Blockchain",
            headingTwo: "Blockchain Specialist",
            para: "A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH AND SMART CONTRACTS"
        },
        {
            headingOne: "Internet of Things and AI",
            headingTwo: "Internet of Things and AI Specialist",
            para: "A FIFTEEN MONTHS IOT AND AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF INTERNET OF THINGS AND AI "
        },
    ]
    const videoData = [
        {
            url: "m4g0zd4E_bo",
            heading: "PIAIC Offering Free First Quarter Classes Online",
            des: "The mission of PIAIC is to reshape Pakistan by revolutionizing education,"
        },
        {
            url: "NPGapK5aMII",
            heading: "PIAIC OFFICIAL COVID-19 Coronavirus Policy",
            des: "The mission of PIAIC is to reshape Pakistan by revolutionizing education"
        },
        {
            url: "_rUQ301EJAo",
            heading: "PIAIC Classes Coming Soon!",
            des: "The mission of PIAIC is to reshape Pakistan by revolutionizing education"
        },
        {
            url: "RuYbBHHF4VM",
            heading: "Teaser 2: PIAIC Classes Coming Soon",
            des: "The mission of PIAIC is to reshape Pakistan by revolutionizing education,"
        },
        {
            url: "sqtc7s1KZEg",
            heading: "PIAIC Intro - Full Version",
            des: "Official intro video of the PIAIC. Messages from President Dr. Arif Alvi, Kazi Rahat Ali, Hunaid Lakhani, Sulaiman"
        },
        {
            url: "kHLdqsLWnEM",
            heading: "PTV Coverage of PIAIC Entry Test",
            des: "PTV News coverage of 1st Entrance Exam of the PIAIC in Karachi"
        },
        {
            url: "7fjcWkDFbcg",
            heading: "PIAIC Launch - President Arif Alvi Address",
            des: "Presidential address at the launch of the Presidential Initiative for Artificial"
        },
        {
            url: "C5iWrmShgv0",
            heading: "Zia Khan Interview on Bol News",
            des: "Published on Dec 31, 2018"
        },
        {
            url: "5p8oJVVg2P4",
            heading: "PTV Coverage of PIAIC Launch Event",
            des: "PTV Coverage of PIAIC Launch Event on December 9, 2018"
        },
        {
            url: "dRm0Y7n7xzU",
            heading: "LIVE: President of Pakistan Dr Arif Alvi's exclusive interview",
            des: "Streamed live on Oct 29, 2018"
        }
    ]
    const slides = [
        {
            image: sliderImgOne,
            title: 'President launching the PIAIC website',
            description: 'First official PIAIC meeting on November 1st, 2018. From left to right: Mr. Zia Ullah Khan (CEO Panacloud), Mr. Kazi Rahat Ali (General Secretary PIAIC), President Dr. Arif Alvi, Mr. Yousuf Lakhani (Presdent Saylani Welfare Trust, Mr. Muhammad Ghazzal (COO Saylani Welfare Trust).',
        },
        {
            image: sliderImgTwo,
            title: 'First meeting with the President.',
            description: 'President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani Welfare Trust).',
        },
        {
            image: sliderImgThree,
            title: 'Meeting with Chief Secretary Sindh.',
            description: 'Meeting with Chief Secretary of Sindh, Mr. Mumtaz Ali Shah on December 28th, where he assured the PIAIC management team of his full support for the national cause and offered space at all the public universities in Sindh.',
        },
    ];
    return (
        <Layout footerHide={false}>
            <div className='container-fluid home-main'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-sm-4 hero-img-div' >
                            <img src={presidentImg} alt='presidentImg' />
                        </div>
                        <div className='col-12 col-sm-8 hero-data'>
                            <h1 className='hero-sec-heading'>Presidential Initiative</h1>
                            <h5 className='hero-sec-heading-two'>for Artificial Intelligence & Computing (PIAIC)</h5>
                            <p className='hero-sec-para'>The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.</p>
                            <div className='hero-data-two'>
                                <button>APPLY</button>
                                <span></span>
                                <div>
                                    <h1>100K.</h1>
                                    <p>Applications Received</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid home-sec-two'>
                <Card cardData={cardData} id="card" />
            </div>
            <div className='container-fluid' id='youtube-video'>
                <Video videoData={videoData} />
            </div>
            <div className='container-fluid slider-main'>
                <Slider slides={slides}/>
            </div>
            <div className='container-fluid Partners-main'>
                <div className='container Strategic-Partners'>
                    <h1>Strategic Partners</h1>
                    <div>
                        <img src={piaicLogo} alt='piaic logo' />
                        <img src={saylaniLogo} alt='saylani logo' />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home;
