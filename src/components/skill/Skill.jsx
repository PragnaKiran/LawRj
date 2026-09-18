
"use client"; 
import React, { useState , useEffect }  from 'react';





function SkillOne() {

  return (
    <div>
        



            {/* Start Skill Area  */}
            <div className="skill-area skills-bg-color tmp-section-gap bg_image">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 ">
                    <div className="skill-inner pr--30">
                        <div
                        className="section-head pb--30  text-align-left">
                        <span className="subtitle color-gradiant">Our Skills</span>
                        <h2 className="title">
                            Find out more about our <br /> business consulting
                        </h2>
                        </div>
                        <p
                        className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        eget ornare quam. Sed sit amet sem sollicitudin, condimentum diam
                        sed, consequat tellus. Quisque ac odio eget ligula gravida
                        efficitur. Nunc facilisis sagittis magna, non venenatis luctus.
                        </p>
                        <div
                        className="row g-5">
                        <div className="col-lg-6">
                            <div className="single-progress-area progress-style-two">
                            <div className="progress-top">
                                <span className="parcent">85%</span>
                                <p className="name">Marketing</p>
                            </div>
                            <div className="progress bg-color-purple">
                                <div
                                className="progress-bar wow fadeInLeft bg-gradient-two"
                                role="progressbar"
                                style={{ width: "85%" }}
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            </div>
                            <div className="single-progress-area progress-style-two">
                            <div className="progress-top">
                                <span className="parcent">96%</span>
                                <p className="name">Social Assistant</p>
                            </div>
                            <div className="progress bg-color-purple">
                                <div
                                className="progress-bar wow fadeInLeft bg-gradient-two"
                                role="progressbar"
                                style={{ width: "96%" }}
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-progress-area progress-style-two">
                            <div className="progress-top">
                                <span className="parcent">75%</span>
                                <p className="name">Consulting</p>
                            </div>
                            <div className="progress bg-color-purple">
                                <div
                                className="progress-bar wow fadeInLeft bg-gradient-two"
                                role="progressbar"
                                style={{ width: "75%" }}
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            </div>
                            <div className="single-progress-area progress-style-two">
                            <div className="progress-top">
                                <span className="parcent">90%</span>
                                <p className="name">Design &amp; Development</p>
                            </div>
                            <div className="progress bg-color-purple">
                                <div
                                className="progress-bar bg-gradient-two wow fadeInLeft"
                                role="progressbar"
                                style={{ width: "90%" }}
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div
                    className="col-lg-6 pl--60 pl_sm--10">
                    <div className="skill-inner">
                        <div className="thumbnail" data-aos="move-right" data-aos-delay="100">
                        <img src="assets/images/about/about-5.jpg" alt="about" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* End Skill Area  */}





    </div>
  )
}

export default SkillOne