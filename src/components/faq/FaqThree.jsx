
"use client"; 
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
function FaqThree() {
  return (
    <div>
        
  {/* Tmp FAQ area Start  */}
  <div className="faq-area faq-style-one faq-bg-image bg_image tmp-section-gap mt-dec--180">
    <div className="container pt--180">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-head">
            <div className="section-sub-title center-title">
              <img
                src="assets/images/services/section-custom-menubar.png "
                alt="Corporate_service"
              />
              <span className="subtitle">QUESTION AND ANSWERS</span>
            </div>
            <h2 className="title split-collab">Frequency Asked Questions</h2>
          </div>
        </div>
      </div>
      <div className="row align-items-center g-5">
        <div className="col-lg-6 pr--30">
          <div className="thumbnail-faq-cons">
            <img  data-aos="move-right" data-aos-delay="100"
              src="assets/images/faq/faq-3.jpg"
              alt="Business Consulting FAQ"
            />
          </div>
        </div>
        <div className="col-lg-6">
          
          <div className="faq-accordion">
            <div className="faq-accordion">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                        <div className="accordion-button-left">
                                <i className="fa-regular fa-question" />
                                <span>Why is collaborative learning so important</span>
                                </div>
                                <div className="accordion-button-right">
                                <i className="fa-sharp fa-light fa-arrow-right" />
                                </div>
                        </Accordion.Header>
                        <Accordion.Body>
                                Companions shy had solicitude favorable own. Which could saw
                                guest man now heard but. Lasted my coming uneasy marked so
                                should. Gravity letters it amongst herself dearest an
                                windows by. Wooded ladies she.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <div className="accordion-button-left">
                                <i className="fa-regular fa-question" />
                                <span>Do you offer free trials</span>
                                </div>
                                <div className="accordion-button-right">
                                <i className="fa-sharp fa-light fa-arrow-right" />
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                                Companions shy had solicitude favorable own. Which could saw
                                guest man now heard but. Lasted my coming uneasy marked so
                                should. Gravity letters it amongst herself dearest an
                                windows by. Wooded ladies she.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <div className="accordion-button-left">
                                <i className="fa-regular fa-question" />
                                <span>
                                    Can I share my courses with non-registered users
                                </span>
                                </div>
                                <div className="accordion-button-right">
                                <i className="fa-sharp fa-light fa-arrow-right" />
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                                Companions shy had solicitude favorable own. Which could saw
                                guest man now heard but. Lasted my coming uneasy marked so
                                should. Gravity letters it amongst herself dearest an
                                windows by. Wooded ladies she.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            <div className="accordion-button-left">
                                <i className="fa-regular fa-question" />
                                <span>
                                    Can I share my courses with non-registered users
                                </span>
                                </div>
                                <div className="accordion-button-right">
                                <i className="fa-sharp fa-light fa-arrow-right" />
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                                Companions shy had solicitude favorable own. Which could saw
                                guest man now heard but. Lasted my coming uneasy marked so
                                should. Gravity letters it amongst herself dearest an
                                windows by. Wooded ladies she.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div className="faq-buttom">
                <h4 className="title">Still Have More Questions?</h4>
                <p>
                    Contact Our <a href="#">Expert Support Team</a>
                </p>
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  {/* Tmp FAQ area Start  */}


    </div>
  )
}

export default FaqThree