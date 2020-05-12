import React from 'react';
import FoodCarousel from './FoodCarousel'
import { Button, Icon } from 'semantic-ui-react'
import { searchIngredient, searchProduct } from '../helpers/selectors';

export default function Main (props) {
  return(
    <div id="main" >
      <div className="addButtonsGroup">
        
        <Button onClick={searchIngredient}> 
          <Icon color="olive" size="large" name="add circle" /> New ingredient
        </Button>

        <Button onClick={searchProduct}>
        <Icon color="olive" size="large" name="add circle" /> New product
        </Button>
        
        <Button >
        <Icon color="olive" size="large" name="add circle" /> New category
        </Button>

      </div>
      
      <FoodCarousel />

    </div>
  )
}