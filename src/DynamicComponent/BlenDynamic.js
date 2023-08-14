import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BlenDynamic.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import studyImgGirl from '../asset/pexels-george-study-girl.jpg';
import peopleGroupImage from '../asset/people-Group.jpg';
import laptopGirl from '../asset/laptop-girl.jpg';
import BookImg from '../asset/pexels-book.webp';
import ClassroomImage from '../asset/pexels-photo-classroom.webp';
import Physicsimage from '../asset/Physical-img.jpg';
import MathsImg from '../asset/math-science-Img.avif';
// import sideImage5 from '../asset/physics-6.svg'
// import sideImage6 from '../asset/s_-psychology.svg'

function BlenDynamicCard() {

    const sliderSettings = {
        infinite: true,
        dots: false,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 10000,
        arrows: false,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             speed: 1200,
        //             arrows: false,
        //         },
        //     },
        // ],
    };

    return (
        <section className="section-2">
            <div className="dynamic-card">
                <div className="dynamic-card-Images">
                    {
                        <Slider {...sliderSettings}>
                            <img className="dynamic-card-image-one" alt="study girl" src={studyImgGirl}></img>
                            <img className="dynamic-card-image-one" alt="Maths Image" src={MathsImg}></img>
                            <img className="dynamic-card-image-one" alt="group study image" src={peopleGroupImage}></img>
                            <img className="dynamic-card-image-one" alt="Physics Image" src={Physicsimage}></img>
                            <img className="dynamic-card-image-one" alt="laptop Girl" src={laptopGirl}></img>
                            <img className="dynamic-card-image-one" alt="Book Image" src={BookImg}></img>
                            <img className="dynamic-card-image-one" alt="classroom Image" src={ClassroomImage}></img>
                        </Slider>
                    }
                </div>
                <div className="overlay-img"></div>
                <div className="dynamic-card-text">
                    <div className="dynamic-card-text-exam">
                        <h2 className="dynamic-card-text-IBDP">Welcome to Mindsetters</h2>
                        <h3 className="dynamic-card-text-Teaching">where a world of possibilities in mathematics education awaits! Meet Ashutosh, your passionate and dedicated mathematics teacher, who brings a wealth of expertise to the table. With a vision to empower young minds, Ashutosh spearheads our educational journey at Mindsetters, making us the go-to destination for IGCSE, A level, and IBDP math tutoring.   </h3>
                        <div className="dynamic-card-text-btn">
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default BlenDynamicCard;