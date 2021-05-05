import React from "react";


function Contact() {

    return (
      <section className="container" id="Contact-Me">
       <div className="title">
         <h1>Contact Information</h1>
       </div>
       <div className="content">
            <div id="contact-wrapper">
                    <div className="contact-tile">
                        <a href="tel:206-240-1927">
                            <i className="phone-img"></i>
                        </a>
                            <p>206-240-1927</p>
                    </div>

                    <div className="contact-tile">
                        <a href="mailto:damicklo5@gmail.com">
                            <i className="email-img"></i>
                        </a>
                            <p>damicklo5@gmail.com</p>
                    </div>

                    <div className="contact-tile">
                        <a href="https://www.linkedin.com/in/dustinmicklos/">
                            <i className="linkedin-img"></i>
                        </a>
                            <p>Linkedin</p>
                    </div>

                    <div className="contact-tile">
                        <a href="https://github.com/Dustymick">
                            <i className="github-img"></i>
                        </a>
                            <p>Github</p>
                    </div>

            </div> 
       </div>
      </section>
    )
  }
  
  export default Contact