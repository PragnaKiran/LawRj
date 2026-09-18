
import HeaderInner from "@/components/header/HeaderInner"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import FooterOne from "@/components/footer/FooterOne"
import BackTop from "@/components/footer/BackToTop"
import Link from 'next/link';


function page() {
  return (
    <div className="">
        <HeaderInner/>
        <Breadcrumb title="Our Pricing" activeItem="Our Pricing" />
          {/* tmp breadcrumb area start */}
          <div className="error-page-area tmp-section-gap">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="error-inner text-center">
                                <div className="thumbnail">
                                <img src="assets/images/error/group2.png" alt="error" />
                                <img src="assets/images/error/404.png" alt="error" />
                                <img src="assets/images/error/group1.png" alt="error" />
                                </div>
                                <h2 className="title">Oops! Nothing Was Found</h2>
                                <p className="description text-center">
                                Household shameless incommode at no objection behaviour.
                                Especially do at he possession insensible sympathize boisterous
                                it. Songs he on an widen me event truth.
                                </p>
                                <Link href={'/'} className="tmp-btn btn-primary">
                                Back To Home
                                </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* tmp breadcrumb area end */}
          
        <FooterOne/>
        <BackTop/>
        
    </div>
  )
}

export default page