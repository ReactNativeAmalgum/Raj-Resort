import '../css/attaction.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from 'antd';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { imagePath } from '../images/imagePath';
const beach = imagePath.beach_kelva;
const dam = imagePath.beach_kelva
const panj = imagePath.panjkot;


// import required modules

function Attraction() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="attrac-bdy">

                        <h2 className="trraction-title">Attractions RAJ RESORT KELVA BEACH</h2>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            // freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="attrac-imgg">
                                    <Image src={imagePath.shrigaon_attraction} />
                                </div>
                                <div className="attract-p">
                                    <h3>Kelva - Shrigaon Killa</h3>
                                    <p>
                                        Shirgaon Fort / Shirgao Fort is a fort located 6.5km from Palghar, in Palghar district, of Maharashtra. This fort is in very good condition. The outer walls, steps, parapets, bastions etc. in solid masonry are in excellent order and worth seeing. The fort is located in the Shirgaon village.
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="attrac-imgg">
                                    <Image src={panj} />
                                </div>
                                <div className="attract-p">
                                    <h3>Kelva-Panjkot Janjira</h3>
                                    <p>
                                        Kelva beach in western suburbs is famous. Kelva Pankot is at some distance from the beach to the south, amidst sea and can be visited only during low tide. This was built on a rock where Danda creek meets the sea. From the location, the Portuguese could keep a watch on the creek as well as sea.
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="attrac-imgg">
                                    <Image src={beach} />
                                </div>
                                <div className="attract-p">
                                    <h3>Kelva Beach</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="attrac-imgg">
                                    <Image src={dam} />
                                </div>
                                <div className="attract-p">
                                    <h3>Kelva dam</h3>
                                    <p>
                                        Kelva Dam built many years back to supply water to the ranchers of the Palghar region. This has been a dam used to store water in the Kelva zone.
                                    </p>
                                </div>
                            </SwiperSlide>

                        </Swiper>



                    </div>
                </div>



            </section>
        </>
    )
}

export default Attraction
