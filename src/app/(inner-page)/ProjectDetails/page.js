
import HeaderInner from "@/components/header/HeaderInner"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import FooterOne from "@/components/footer/FooterOne"
import BackTop from "@/components/footer/BackToTop"

function page() {
  return (
    <div className="service-details">
        <HeaderInner/>
        <Breadcrumb title="Project Details" activeItem="Project Details" />
         

        {/* Start Projects Details area  */}
        <div className="projects-details-area tmp-section-gap">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="projects-details-inner">
                    <div className="thumbnail position-relative">
                    <img
                        src="assets/images/projects-details/projects-details.jpg"
                        alt="projects-details"
                    />
                    </div>
                    <div className="clients-projects-details">
                    <div className="clients-details-inner">
                        <h3 className="title text-center">CLIENT PROJECT DETAILS</h3>
                        <div className="single-projects-details">
                        <div className="info">
                            <div className="icon">
                            <i className="fa-solid fa-user" />
                            </div>
                            <div className="content">
                            <h4 className="subtitle">Clients:</h4>
                            <h5 className="category">Alex Brands</h5>
                            </div>
                        </div>
                        <div className="info">
                            <div className="icon">
                            <i className="fa-sharp fa-light fa-layer-group" />
                            </div>
                            <div className="content">
                            <h4 className="subtitle">Category:</h4>
                            <h5 className="category">Business Solution</h5>
                            </div>
                        </div>
                        <div className="info">
                            <div className="icon">
                            <i className="fa-light fa-calendar-days" />
                            </div>
                            <div className="content">
                            <h4 className="subtitle">Date:</h4>
                            <h5 className="category">05 May 2023</h5>
                            </div>
                        </div>
                        <div className="info">
                            <div className="icon">
                            <i className="fa-regular fa-map-location" />
                            </div>
                            <div className="content">
                            <h4 className="subtitle">Address:</h4>
                            <h5 className="category">+880123456678</h5>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="projects-details-wrapper">
                        <h3 className="title">Business Planing &amp; Solution</h3>
                        <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget
                        viverra pretium, dolor tellus aliquet nunc, vitae ultricies
                        erat elit eu lacus. Vestibulum non justo consectetur, cursus
                        ante, tincidunt sapien. Nulla quis diam sit amet turpis
                        interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh
                        egestas elementum. Mauris et bibendum dui. Aenean consequat
                        pulvinar luctus. Suspendisse consectetur tristique tortorLorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        vulputate vestibulum Phasellus rhoncus, dolor eget viverra
                        pretium, dolor tellus aliquet nunc, vitae ultricies erat elit
                        eu lacus.
                        </p>
                        <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget
                        viverra pretium, dolor tellus aliquet nunc, vitae ultricies
                        erat elit eu lacus. Vestibulum non justo consectetur, cursus
                        ante, tincidunt sapien. Nulla quis diam sit amet turpis
                        interdum.
                        </p>
                    </div>
                    <div className="projects-details-wrapper">
                        <h3 className="title">The Challenge Of Project</h3>
                        <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget
                        viverra pretium, dolor tellus aliquet nunc, vitae ultricies
                        erat elit eu lacus. Vestibulum non justo consectetur, cursus
                        ante, tincidunt sapien. Nulla quis diam sit amet turpis
                        interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh
                        egestas elementum. Mauris et bibendum dui. Aenean consequat
                        pulvinar luctus.
                        </p>
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="challenge-details">
                            <div className="icon">
                                <i className="fa-solid fa-check" />
                            </div>
                            <p className="description">
                                It Essential To Work With Business Consultants Who
                                Have
                            </p>
                            </div>
                            <div className="challenge-details">
                            <div className="icon">
                                <i className="fa-solid fa-check" />
                            </div>
                            <p className="description">
                                It Essential To Work With Business Consultants Who
                                Have
                            </p>
                            </div>
                            <div className="challenge-details">
                            <div className="icon">
                                <i className="fa-solid fa-check" />
                            </div>
                            <p className="description">
                                It Essential To Work With Business Consultants Who
                                Have It Essential To Work With Business Consultants
                                Who Have
                            </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="challenge-details">
                            <div className="icon">
                                <i className="fa-solid fa-check" />
                            </div>
                            <p className="description">
                                With Business Consultants Who Have
                            </p>
                            </div>
                            <div className="challenge-details">
                            <div className="icon">
                                <i className="fa-solid fa-check" />
                            </div>
                            <p className="description">
                                Work With Business Consultants Who Have
                            </p>
                            </div>
                            <div className="challenge-details">
                            <div className="icon">
                                <i className="fa-solid fa-check" />
                            </div>
                            <p className="description">
                                Who Have It Essential To Work
                            </p>
                            </div>
                        </div>
                        </div>
                        <p className="description mt--30">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget
                        viverra pretium, dolor tellus aliquet nunc, vitae ultricies
                        erat elit eu lacus. Vestibulum non justo consectetur, cursus
                        ante, tincidunt sapien. Nulla quis diam sit amet turpis
                        interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh
                        egestas elementum. Mauris et bibendum dui. Aenean consequat
                        pulvinar luctus. Suspendisse consectetur tristique tortorLorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        vulputate vestibulum Phasellus rhoncus, dolor eget viverra
                        pretium, dolor tellus aliquet nunc, vitae ultricies erat elit
                        eu lacus. Vestibulum non justo consectetur, cursus ante,
                        tincidunt sapien.
                        </p>
                        <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="thumbnail">
                            <img
                                src="assets/images/projects-details/challen-1.jpg"
                                alt="project details"
                            />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="thumbnail">
                            <img
                                src="assets/images/projects-details/challen-2.jpg"
                                alt="project details"
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Start Projects Details area  */}



        <FooterOne/>
        <BackTop/>
        
    </div>
  )
}

export default page