import '../assets/css/Carousal.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
function CorporateEventCarousel () {
    return ( 
        <>
        <Carousel className='carousal'  showArrows={true} interval={1000} autoPlay={true} infiniteLoop={true} dynamicHeight={true} showIndicators={false} showThumbs={false} animationHandler={"fade"} swipeable={false}>
                    <div>
                        <img src="src/assets/images/food.jpg" />
                    </div>
                    <div>
                    <img src="src/assets/images/partyhall.jpg" />
                        
                    </div>
                    <div>
                    <img src="src/assets/images/glass.jpg" />
                        
                    </div>
                </Carousel>
        </>
     );
}

export default CorporateEventCarousel ;