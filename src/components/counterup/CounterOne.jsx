"use client"; 
import React from 'react'
import CounterUp from "@/components/funfacts/CounterGlobal"
function Counter() {
  return (
    <div>
        
        {/* tmp counterup section area start */}
        <div className="tmp-section-gapTop tmp-counterup-area">
            <div className="container">
            <div className="row g-5">
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="single-counterup-area-agency">
                    <div className="icon">
                    <img src="assets/images/counter/05.svg" alt="agency-service" />
                    </div>
                    <div className="information">
                    <div className="counter-details">
                        <CounterUp end={435}/>
                        <p className="disc">Successful Projects</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="single-counterup-area-agency">
                    <div className="icon">
                    <img src="assets/images/counter/08.svg" alt="agency-service" />
                    </div>
                    <div className="information">
                    <div className="counter-details">
                        <CounterUp end={858}/>
                        <p className="disc">Happy Clients</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="single-counterup-area-agency">
                    <div className="icon">
                    <img src="assets/images/counter/06.svg" alt="agency-service" />
                    </div>
                    <div className="information">
                    <div className="counter-details">
                        <CounterUp end={6320}/>
                        <p className="disc">Media Active</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="single-counterup-area-agency">
                    <div className="icon">
                    <img src="assets/images/counter/07.svg" alt="agency-service" />
                    </div>
                    <div className="information">
                    <div className="counter-details">
                        <CounterUp end={232}/>
                        <p className="disc">Skill Experience</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* tmp counterup section area end */}

    </div>
  )
}

export default Counter