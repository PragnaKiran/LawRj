"use client"; 
import Link from 'next/link';
function CounterTwo() {
  return (
    <div>
        
        {/* tmp counterup section area start */}
        <div className="tmp-section-gapBottom tmp-counterup-area">
            <div className="container">
            <div className="row g-5 counter_animation">
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 counter__anim wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".1s">
                <div className="single-counterup-area-agency">
                    <div className="icon">
                    <img src="assets/images/counter/05.svg" alt="agency-service" />
                    </div>
                    <div className="information">
                    <div className="counter-details">
                        <h2 className="title">
                        <span className="counter animated fadeInDownBig">858</span>+
                        </h2>
                        <p className="disc">Successful Projects</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 counter__anim wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".3s">
                <div className="single-counterup-area-agency">
                    <div className="icon">
                    <img src="assets/images/counter/08.svg" alt="agency-service" />
                    </div>
                    <div className="information">
                    <div className="counter-details">
                        <h2 className="title">
                        <span className="counter animated fadeInDownBig">858</span>k+
                        </h2>
                        <p className="disc">Happy Clients</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 counter__anim wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".5s">
                <div className="single-counterup-area-agency">
                    <div className="icon">
                    <img src="assets/images/counter/06.svg" alt="agency-service" />
                    </div>
                    <div className="information">
                    <div className="counter-details">
                        <h2 className="title">
                        <span className="counter animated fadeInDownBig">758</span>+
                        </h2>
                        <p className="disc">Media Active</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 counter__anim wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".7s">
                <div className="single-counterup-area-agency">
                    <div className="icon">
                    <img src="assets/images/counter/07.svg" alt="agency-service" />
                    </div>
                    <div className="information">
                    <div className="counter-details">
                        <h2 className="title">
                        <span className="counter animated fadeInDownBig">258</span>+
                        </h2>
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

export default CounterTwo