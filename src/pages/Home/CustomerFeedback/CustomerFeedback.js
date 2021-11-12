import React, { useEffect, useState } from 'react';
import { Box, Grid, Rating, Typography } from '@mui/material';
import reviewImg from '../../../image/banner/review_.png';
import quote from '../../../image/banner/quote.png';
import './CustomerFeedback.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);

const CustomerFeedback = () => {
    const [allFeedback, setAllFeedback] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8888/customerReview')
            .then(res => res.json())
            .then(data => {
                setAllFeedback(data);
            })
    }, [])
    return (
        <Box sx={{ mt: 5, py: 5, mx: 5, background: '#fff' }}>
            <Typography variant="h4" style={{ fontWeight: 600, fontSize: '38px', textAlign: 'center', marginLeft: '100px' }}>Customer Feedback</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <img width="100%" src={reviewImg} alt="" />
                </Grid>
                <Grid item xs={12} md={7}>
                    <hr style={{ width: '80px', textAlign: 'left', marginLeft: '0px', marginBottom: '50px', height: '3px', background: '#1DD2FF', border: '0' }} />
                    <img width="80px" src={quote} alt="" />
                    <Box>
                        <Swiper spaceBetween={30} pagination={{
                            "clickable": true
                        }} className="mySwiper">
                            {
                                allFeedback.map(singleFb =>
                                    <Box key={singleFb._id}>
                                        <SwiperSlide style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingBottom: '50px' }}>
                                            <Typography style={{ fontSize: '28px', fontWeight: 600, color: '#1DD2FF', marginTop: '20px' }}>{singleFb.carModel}</Typography>
                                            <Box>
                                                <Rating name="read-only" value={singleFb.ratting} readOnly />
                                            </Box>
                                            <Typography>{singleFb.feedback}</Typography>
                                            <Box sx={{ mt: 5 }} style={{ display: 'flex', alignItems: 'center' }}>
                                                <hr style={{ width: '40px', textAlign: 'left', height: '1px', background: '#000', border: '0', marginRight: '10px' }} />
                                                <Typography style={{ fontSize: '20px', fontWeight: 600, color: '#1DD2FF' }}>{singleFb.customerName}</Typography>
                                            </Box>
                                        </SwiperSlide>
                                    </Box>
                                )
                            }
                        </Swiper>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CustomerFeedback;