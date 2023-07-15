"use client"

import Container from "./Container";
// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SingleCourse from "./SingleCourse";


export default function Courses() {
    return (
        <div className="bg-gray-200 py-3">
            <Container>
                <div>
                    <h1 className="text-4xl font-semibold text-gray-900 text-center py-5 underline decoration-4 underline-offset-8 
                    decoration-yellow-500">আমাদের কোর্স সমূহ</h1>
                    <div className="py-3">
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={25}
                            slidesPerView={1}
                            loop={true}
                            navigation
                            pagination={{ clickable: true }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                900: {
                                    slidesPerView: 3,
                                    spaceBetween: 25,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 25,
                                },
                            }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <SingleCourse />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SingleCourse />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SingleCourse />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SingleCourse />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SingleCourse />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SingleCourse />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SingleCourse />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SingleCourse />
                            </SwiperSlide>
                            ...
                        </Swiper>
                    </div>
                </div>
            </Container>
        </div>
    )
}
