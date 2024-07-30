import React, { useEffect } from 'react';
import './style.css';

const LandingPage = () => {
    return (
        <div>
            <div class="app">
                <div class="header-container">
                    <div className='temp-head'></div>
                    <div className='image-head'>
                        <img className='image1' src="https://i1-english.vnecdn.net/2023/03/12/badmin-1678608765-5266-1678608789.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=gA0MRcZj3LUNB1D5pkZR3A" alt='slide 1'></img>
                        <h2 className='text3'> No Pain</h2>
                        <h2 className='text2'> No Gain</h2>
                        <img className='text1' src="https://i1-english.vnecdn.net/2023/03/12/badmin-1678608765-5266-1678608789.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=gA0MRcZj3LUNB1D5pkZR3A" alt='slide 1'></img>
                    </div>
                </div>
                <h1 class="heading">
                    <span>f</span>
                    <span>e</span>
                    <span>a</span>
                    <span>t</span>
                    <span>u</span>
                    <span>r</span>
                    <span>e</span>
                    <span>s</span>
                </h1>
                <div class="container__feature-layout">

                    <div data-aos="fade-up">
                        <div class="feature-item ">
                            < div class="feature-item-header">
                                <h2 class="feature-item-header-title">User-Friendly Interface</h2>
                            </div>
                            <p className='text-item'>A user-friendly interface is the cornerstone of a successful badminton court booking system. With its intuitive
                            design and straightforward navigation, even those unfamiliar with technology can effortlessly explore and engage. Clear labels, well-organized
                            menus, and simple controls create an accessible platform for users to search for available courts, select preferred timings, and finalize
                            reservations. This intuitive interface ensures a seamless experience, minimizing user frustration and maximizing efficiency. Whether a beginner
                            or a seasoned player, everyone can easily interact with the system, making the process of booking a badminton court a hassle-free and enjoyable endeavor.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <div class="feature-item" >
                            <div class="feature-item-header">
                                <h2 class="feature-item-header-title">Court Availability and Real-Time Booking</h2>
                            </div>
                            <p className='text-item'>Court availability is the linchpin of a smooth badminton experience. Knowing when a court is open for play is crucial
                            for enthusiasts seeking to engage in their favorite sport. A reliable court availability feature provides real-time information about open slots
                            , empowering players to plan their games effectively. This feature eliminates the uncertainty of showing up at a facility only to find all courts
                            occupied. Whether for impromptu matches or pre-planned games, the ability to instantly check court availability ensures that players can make the 
                            most of their time on the court, enhancing the overall satisfaction and convenience of their badminton journey.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <div class="feature-item" >
                            <div class="feature-item-header">
                                <h2 class="feature-item-header-title">Reviews and Ratings</h2>
                            </div>
                            <p className='text-item'>Reviews and ratings are the compass guiding badminton enthusiasts towards exceptional experiences. They offer firsthand
                            insights into the quality of facilities and services. Positive reviews build trust and attract players, while constructive feedback highlights areas
                            for improvement. This feature creates a sense of community among players, fostering an environment where shared experiences contribute to better
                            choices. Ratings act as a barometer of excellence, enabling players to make informed decisions when selecting venues. As players contribute their 
                            opinions and experiences, the reviews and ratings feature enhances accountability, elevates standards, and ensures that every badminton session is
                            backed by the collective wisdom of the community..</p>
                        </div>
                    </div>
                </div>

                <h1 class="heading">
                    <span>s</span>
                    <span>e</span>
                    <span>r</span>
                    <span>v</span>
                    <span>i</span>
                    <span>c</span>
                    <span>e</span>
                    <span>s</span>
                </h1>
                <div class="services" id="services">


                    <div class="box-container">
                        <div class="box" data-aos="zoom-in">
                            <i class="fa-solid fa-heart-pulse"></i>
                            <h3 style={{ color: "black" }}>Physical health training</h3>
                            <p>Badminton is one of the best sports to help improve health, muscle, flexibility, and increase reflexes for players.</p>

                        </div>
                        <div class="box" data-aos="zoom-in">
                            <i class="fa-solid fa-users-rectangle"></i>
                            <h3 style={{ color: "black" }}>Coaching team</h3>
                            <p>Here we have a team of professional trainers ready to assist you from beginner to advanced level.</p>
                        </div>
                        <div class="box" data-aos="zoom-in">
                            <i class="fas fa-hotel"></i>
                            <h3 style={{ color: "black" }}>Gymnasiums</h3>
                            <p>Gymnasiums and training ground are invested with modern and diverse facilities with many prices from affordable to high-end for you to choose from.</p>
                        </div>
                        <div class="box" data-aos="zoom-in">
                            <i class="fa-solid fa-thumbs-up"></i>
                            <h3 style={{ color: "black" }}>Best rating</h3>
                            <p>Selecting the best products and services to help bring customers the best experience.</p>
                        </div>
                        <div class="box" data-aos="zoom-in">
                            <i class="fa-solid fa-medal"></i>
                            <h3 style={{ color: "black" }}>Organize a tournament</h3>
                            <p>The yard clusters meet international standards. Regularly organeizes movement, semi-professional badminton tournaments.</p>
                        </div>


                    </div>

                </div>
                <h1 class="heading">
                    <span>H</span>
                    <span>O</span>
                    <span>T</span>
                    <span>N</span>
                    <span>E</span>
                    <span>W</span>
                    <span>S</span>
                </h1>
                <div class="container__news">
                    <div class="news-header"></div>
                    <div class="news-list ">
                        <div class="news-list-item">
                            <div class="news-list-item-img">
                                <a href="https://vietnamnet.vn/viktor-axelsen-chuyen-co-tich-o-olympic-2020-762196.html" >
                                    <img class="news-list-item-img" src="https://vnn-imgs-f.vgcloud.vn/2021/08/03/00/viktor-axelsen-olympic-2020-hcv-2.jpg"></img>
                                </a>
                            </div>
                            <div class="news-list-item-content">
                                <div class="news-list-item-content-title">
                                    <a href="https://vietnamnet.vn/viktor-axelsen-chuyen-co-tich-o-olympic-2020-762196.html">
                                        Viktor Axelsen, a fairy tale at the 2020 Olympics
                                    </a>
                                </div>
                                <div class="news-list-item-content-summary">
                                    A fairy tae from Denmark has just appeared at the 2020 Olympic, not by writer Andersen but written by Viktor Axelsen...
                                </div>
                            </div>
                        </div>
                        <div class="news-list-item">
                            <div class="news-list-item-img">
                                <a href="https://ithethao.vn/cau-long/kento-momota-xac-nhan-tro-lai-tai-giai-cau-long-malaysia-mo-rong-2022-tt45735.html">
                                    <img class="news-list-item-img" src="https://cdn.ithethao.vn/uploads/2022/06/06/kento-momota-xac-nhan-tro-lai-tai-malaysia-mo-rong-2022_96231.jpg"></img>
                                </a>
                            </div>
                            <div class="news-list-item-content">
                                <div class="news-list-item-content-title">
                                    <a href="https://ithethao.vn/cau-long/kento-momota-xac-nhan-tro-lai-tai-giai-cau-long-malaysia-mo-rong-2022-tt45735.html">
                                        Kento Momota confirmed to return at the Malaysian Open 2022
                                    </a>
                                </div>
                                <div class="news-list-item-content-summary">
                                    Japan's Kento Momota will return to complete at the Malaysian Open, which runs June 28 to July 03...
                                </div>
                            </div>
                        </div>
                        <div class="news-list-item">
                            <div class="news-list-item-img">
                                <a href="https://vnexpress.net/nguyen-tien-minh-cay-truong-sinh-o-olympic-4326355.html">
                                    <img class="news-list-item-img" src="https://vcdn-thethao.vnecdn.net/2021/07/17/tien-minh-jpeg-7325-1626535797.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=u7yGSsmfbF_5AbjODTWcnw"></img>
                                </a>
                            </div>
                            <div class="news-list-item-content">
                                <div class="news-list-item-content-title">
                                    <a href="https://vnexpress.net/nguyen-tien-minh-cay-truong-sinh-o-olympic-4326355.html">
                                        Nguyễn Tiến Minh - The tree of life at the Olympics
                                    </a>
                                </div>
                                <div class="news-list-item-content-summary">
                                    Without a commensurate successor, Nguyen Tien Minh, 38, still represents Vietnam's badminton for the 2021 Olympics as the oldest Badminton player...
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="news-header"></div>
                </div>


            </div>
        </div >
    );
};
export default LandingPage;