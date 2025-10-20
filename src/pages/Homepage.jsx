import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'

const Homepage = () => {

    const [manga, setManga] = useState([])

    const endpoint = 'http://localhost:8080/api/manga'

    // fetch all manga via axios
    const fetchManga = () => {
        axios.get(endpoint)
            .then((response) => {
                console.log(response.data)
                setManga(response.data)
            })
            .catch((error) => {
                console.error('Error fetching manga:', error)
            })
    }

    useEffect(() => {
        fetchManga()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="jumbotron mt-4">
                            <h1 className="display-4">Welcome to the Manga Homepage!</h1>

                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                autoplay={{ delay: 3000 }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, Pagination]}
                                loop={true}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide>
                                    <div className="col-12 d-flex justify-content-center">
                                        <img src="https://www.pixartprinting.it/blog/wp-content/uploads/2021/04/IMMAGINE-2.jpg" className="img-fluid" alt="Banner 1" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="col-12 d-flex justify-content-center">
                                        <img src="https://imgproxy.domestika.org/unsafe/w:1200/rs:fill/plain/src://blog-post-open-graph-covers/000/008/954/8954-original.png?1633462854" className="img-fluid" alt="Banner 2" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="col-12 d-flex justify-content-center">
                                        <img src="https://www.quotidiano.net/image-service/view/acePublic/alias/contentid/MDM0NTI4YmUtNWFmMi00/0/1663397817-manga.webp" className="img-fluid" alt="Banner 3" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                    <div className="row mb-4">

                        <div className="col-12 my-3">
                            <h2>Explore our collection of manga series.</h2>
                        </div>


                        {manga.map((mangaItem) => (
                            <div className="col-md-4 my-3">
                                <Card key={mangaItem.id} manga={mangaItem} />
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </>
    )
}

export default Homepage