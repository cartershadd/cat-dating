import React, {Component} from 'react';
import Slide from "./Slide";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

class ImageSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [
                "C:\\Users\\Carter\\WebstormProjects\\cat-dating\\client\\src\\images\\baby1.jpg",
                "C:\\Users\\Carter\\WebstormProjects\\cat-dating\\client\\src\\images\\baby2.jpg",
                "C:\\Users\\Carter\\WebstormProjects\\cat-dating\\client\\src\\images\\baby3.jpg",
                "C:\\Users\\Carter\\WebstormProjects\\cat-dating\\client\\src\\images\\baby4.jpg"
            ],
            currentIndex: 0,
            translateValue: 0
        }
    }

    goToPrevSlide = () => {
        if(this.state.currentIndex === 0)
            return;

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }))
    };

    goToNextSlide = () => {
        if(this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        // This will not run if we met the if condition above
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    };

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    };

    render() {
        return (
            <div className="slider">
                <div className="slider-wrapper"
                style={{
                    transform: `translateX(${this.state.translateValue}px)`,
                    transition: `transform east-out 0.45s`
                }}>
                    {
                        this.state.images.map((image, i) => (
                        <Slide kay={i} image={image}/>
                        ))
                    }
                </div>

            <LeftArrow
                goToPrevSlide={this.goToPrevSlide}
            />
            <RightArrow
                goToNextSlide={this.goToNextSlide}
            />
            </div>
        );
    }
}

export default ImageSlider;