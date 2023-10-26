import Carousel from "react-multi-carousel";
import { MdExpandLess } from 'react-icons/md'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import "react-multi-carousel/lib/styles.css";
import { OUR_PRODUCTS } from "../../constant";
import './style.css';

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState } = rest;
    return (
        <div className="carousel-button-group">
            <button type="button" className="carousel-btn shadow carousel-btn-prev " onClick={() => previous()} >
                <GrFormPrevious className="carousel-icons" />
            </button>
            <button type="button" className="carousel-btn carousel-btn-next shadow" onClick={() => next()} >
                <GrFormNext className="carousel-icons" />
            </button>
        </div>
    );
};

export function ProductCarousal() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    }

    return (
        <Carousel
            responsive={responsive}
            itemClass="me-3"
            style={{ whiteSpace: "nowrap" }}
            autoPlay={true}
            arrows={false}
            customButtonGroup={<ButtonGroup />}
            renderButtonGroupOutside={true}
            // showDots={true}
        >
            {OUR_PRODUCTS.map(data => <div key={data.heading} className="card" style={{ width: "auto" }}>
                <img src={data.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="fs-4">{data.heading}</h5>
                    <p className=" text-secondary fs-normal">{data.subHeading}</p>
                    <a href="#" className="card-link text-decoration-none">Learn More <MdExpandLess style={{ transform: 'rotate(90deg)' }} /></a>
                </div>
            </div>)}

        </Carousel>
    )
}