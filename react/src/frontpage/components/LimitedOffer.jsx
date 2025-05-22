import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function LimitedOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Check if there's an existing end date in localStorage
    let endDate = localStorage.getItem('limitedOfferEndDate');
    
    if (!endDate) {
      // If no end date exists, set a new one (7 days from now)
      endDate = new Date();
      endDate.setDate(endDate.getDate() + 7);
      localStorage.setItem('limitedOfferEndDate', endDate.getTime().toString());
    } else {
      // Convert stored string back to number
      endDate = new Date(parseInt(endDate));
      
      // If the stored end date has passed, set a new one
      if (endDate.getTime() - new Date().getTime() <= 0) {
        endDate = new Date();
        endDate.setDate(endDate.getDate() + 7);
        localStorage.setItem('limitedOfferEndDate', endDate.getTime().toString());
      }
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      // Calculate time units
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // Timer has ended
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        // Reset the timer for another 7 days
        const newEndDate = new Date();
        newEndDate.setDate(newEndDate.getDate() + 7);
        localStorage.setItem('limitedOfferEndDate', newEndDate.getTime().toString());
      } else {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <section
        id="limited-offer"
        className="padding-large"
        style={{
          backgroundImage: "url(src/images/banner-image-bg-1.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: 800
        }}
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 text-center">
              <div className="image-holder">
                <img
                  src="src/images/banner-image3.png"
                  className="img-fluid"
                  alt="banner"
                />
              </div>
            </div>
            <div className="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start">
              <h2>30% Discount on all items. Hurry Up !!!</h2>
              <div
                id="countdown-clock"
                className="text-dark d-flex align-items-center my-3"
              >
                <div className="time d-grid pe-3">
                  <span className="days fs-1 fw-normal">{timeLeft.days}</span>
                  <small>Days</small>
                </div>
                <span className="fs-1 text-primary">:</span>
                <div className="time d-grid pe-3 ps-3">
                  <span className="hours fs-1 fw-normal">{timeLeft.hours}</span>
                  <small>Hrs</small>
                </div>
                <span className="fs-1 text-primary">:</span>
                <div className="time d-grid pe-3 ps-3">
                  <span className="minutes fs-1 fw-normal">{timeLeft.minutes}</span>
                  <small>Min</small>
                </div>
                <span className="fs-1 text-primary">:</span>
                <div className="time d-grid ps-3">
                  <span className="seconds fs-1 fw-normal">{timeLeft.seconds}</span>
                  <small>Sec</small>
                </div>
              </div>
              <NavLink to="/shop" className="btn mt-3">
                Shop Collection
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
