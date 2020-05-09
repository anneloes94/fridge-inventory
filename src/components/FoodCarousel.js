import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import FoodItem from './FoodItem.js';

export default function FoodCarousel () {

  const foodItems = [
    {
      id: 0,
      name: "eggs",
      image: "https://images.unsplash.com/photo-1536816579748-4ecb3f03d72a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      validUntil: "05/12/2020"
    },
    {
      id: 1,
      name: "more eggs",
      image: "https://images.unsplash.com/photo-1536816579748-4ecb3f03d72a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      validUntil: "06/12/2020"
    },
    {
      id: 2,
      name: "even more eggs",
      image: "https://images.unsplash.com/photo-1536816579748-4ecb3f03d72a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      validUntil: "07/12/2020"
    }
  ]

  return (
    <div className="food-carousel">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={3}
        visibleSlides={3}
      >
        <Slider>
          {foodItems.map(foodItem =>
            <Slide 
              index={foodItem.id}>
              <FoodItem 
                name={foodItem.name}
                image={foodItem.image}
                validUntil={foodItem.validUntil}
              />
            </Slide>
          )}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </div>
  );
}