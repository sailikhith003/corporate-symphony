import "../assets/css/Testimonals.css"; 
 function Testimonial() {
        return ( 
            <>
            <section className="testimonials">
          <div className="testimonials__content">
            <div className="testimonials__head w-105">
              <img src="src/assets/images/quote.svg" alt="Quote" className="testimonials__quote" />
              <h2 className="testimonials__title">What our clients say about our Corporate Symphony</h2>
            </div>
            <div className="testimonials__body">
              <div className="testimonials__list">
                <div className="testimonial">
                  <div className="testimonial__profile">
                    <div className="testimonial__img">
                      <img src="src/assets/images/testimonial.png" alt="Testimonial" />
                    </div>
                    <div className="testimonial__info">
                      <h4 className="testimonial__name"> Fernando Soler</h4>
                      <h4 className="testimonial__title">Event Planner</h4>
                    </div>
                  </div>
                  <p className="testimonial__description">
                  “The professionalism and attention to detail from Corporate Symphony's team made our corporate event a huge success. Highly recommended!”
                  </p>
                </div>
                <div className="testimonial">
                  <div className="testimonial__profile">
                    <div className="testimonial__img">
                      <img src="src/assets/images/testimonial.png" alt="Testimonial" />
                    </div>
                    <div className="testimonial__info">
                      <h4 className="testimonial__name"> Ilone Pickford</h4>
                      <h4 className="testimonial__title">Event Coordinator</h4>
                    </div>
                  </div>
                  <p className="testimonial__description">
                  “Corporate Symphony's team went above and beyond to ensure our corporate event ran smoothly. Their creativity and dedication are unmatched.”
        
                  </p>
                </div>
                <div className="testimonial">
                  <div className="testimonial__profile">
                    <div className="testimonial__img">
                      <img src="src/assets/images/testimonial.png" alt="Testimonial" />
                    </div>
                    <div className="testimonial__info">
                      <h4 className="testimonial__name"> John Doe</h4>
                      <h4 className="testimonial__title">Corporate Client</h4>
                    </div>
                  </div>
                  <p className="testimonial__description">
                  “Working with them was a fantastic experience. They exceeded our expectations, delivering a flawless event tailored to our company's needs.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
            </>
         );
    }
    
    export default Testimonial;      