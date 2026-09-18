"use client"; 
import Link from 'next/link';

function CtaTwo() {
  return (
    <div>
        
        <div className="join-us-one mt--120">
            <div className="container">
                <div className="join-us-one__inner">
                <div className="join-us-one__shape-1">
                    <img src="assets/images/shapes/join-us-one-shape-1.png" alt="" />
                </div>
                <div className="join-us-one__shape-2">
                    <img src="assets/images/shapes/join-us-one-shape-2.png" alt="" />
                </div>
                <div className="join-us-one__title-box">
                    <h2 className="join-us-one__title">
                    Get Update Subscribe <br /> to Newsletter
                    </h2>
                </div>
                <div className="join-us-one__form-box">
                    <form
                    className="join-us-one__contact-form"
                    data-url="MC_FORM_URL"
                    noValidate="novalidate"
                    >
                    <div className="contact-form-2">
                        <input
                        type="email"
                        placeholder="Enter Your Email"
                        name="EMAIL"
                        required=""
                        />
                        <button type="submit" className="tmp-btn btn-primary">
                        Subscribe Now
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CtaTwo