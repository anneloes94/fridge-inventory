import React from 'react';
import FoodCarousel from './FoodCarousel'
import { Button } from 'semantic-ui-react'

export default function Main (props) {
  return(
    <div id="main" >
      <div className="addButtonsGroup">
        
        <Button color='olive'>
          New ingredient
        </Button>
        <Button color='olive'>
          New product
        </Button>
        <Button color='olive'>
          New category
        </Button>

      </div>
      
      <FoodCarousel />

    </div>
  )
}