"use client"; 
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function AboutThree() {

  return (
    <div>
        

        {/* Start About Area  */}
        <div className="about-area about-style-three tmp-section-gap">
            <div className="container">
            <div className="row align-items-center">
                <div
                className="col-lg-6" data-aos="move-right" data-aos-delay="100">
                <div className="about-inner">
                    <div className="thumbnail">
                    <img src="assets/images/about/about-4.jpg" alt="about" />
                    </div>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="about-inner">
                    <div className="section-head pb--30  text-align-left">
                    <span className="subtitle color-gradiant">About Us</span>
                    <h2 className="title split-collab">
                        Find out more about our <br /> business consulting
                    </h2>
                    </div>
                    <div className="tab-section tab-style-one">
                        <Tabs>
                            <Tab eventKey="home" title="Company Goal">
                            <p className="description">
                                If you don know the answer to this question, how do you
                                know if your product or service is working? It is one of the
                                most basic questions that every business owner should ask
                                himself, even before he launches his business. thumbnail
                            </p>
                            <div className="small-meta">
                                <div className="thumbnail">
                                <img
                                    src="assets/images/about/about-meta.jpg"
                                    alt="about-meta"
                                />
                                </div>
                                <div className="content">
                                <div className="name">Jons Martin</div>
                                <div className="designation">CEO &amp; Founder</div>
                                </div>
                            </div>
                            <div className="btn-group">
                                <a href="#" className="tmp-btn btn-gradiant">
                                Explore More
                                </a>
                            </div>
                            </Tab>
                            <Tab eventKey="profile" title="Company Value">
                            <p className="description">
                                If you don know the answer to this question, how do you
                                know if your product or service is working? It is one of the
                                most basic questions that every business owner should ask
                                himself, even before he launches his business. thumbnail
                            </p>
                            <div className="small-meta">
                                <div className="thumbnail">
                                <img
                                    src="assets/images/about/about-meta.jpg"
                                    alt="about-meta"
                                />
                                </div>
                                <div className="content">
                                <div className="name">Jons Martin</div>
                                <div className="designation">CEO &amp; Founder</div>
                                </div>
                            </div>
                            <div className="btn-group">
                                <a href="#" className="tmp-btn btn-gradiant">
                                Explore More
                                </a>
                            </div>
                            </Tab>
                            <Tab eventKey="longer-tab" title="Need Help?">
                            <p className="description">
                                If you don know the answer to this question, how do you
                                know if your product or service is working? It is one of the
                                most basic questions that every business owner should ask
                                himself, even before he launches his business. thumbnail
                            </p>
                            <div className="small-meta">
                                <div className="thumbnail">
                                <img
                                    src="assets/images/about/about-meta.jpg"
                                    alt="about-meta"
                                />
                                </div>
                                <div className="content">
                                <div className="name">Jons Martin</div>
                                <div className="designation">CEO &amp; Founder</div>
                                </div>
                            </div>
                            <div className="btn-group">
                                <a href="#" className="tmp-btn btn-gradiant">
                                Explore More
                                </a>
                            </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* End About Area  */}


    </div>
  )
}

export default AboutThree