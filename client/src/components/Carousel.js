const Carousel = () => {
    return (
        <div id="cleaningTestimonies" className="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div className="carousel-item active">
                    <div className="d-block w-100">
                        <div className="testimonial">
                            <div><span className="quote">"</span>Rocio is extremely thorough, pays attention to little details that even I overlook! It's not just a surface/superficial clean like I've gotten from some providers in the past, but deep! She helped with some spring cleaning and from that experience I'm having her come back on the regular.<span className="quote"></span></div>

                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-block w-100">
                        <div className="testimonial">
                            <div><span className="quote">"</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span className="quote">"</span></div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-block w-100">
                        <div className="testimonial">
                            <div><span className="quote">"</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span className="quote">"</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#cleaningTestimonies" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#cleaningTestimonies" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Carousel;


