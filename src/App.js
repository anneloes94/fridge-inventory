import React from 'react';
import Menu from './components/Menu.js'
import FoodCarousel from './components/FoodCarousel'
import './App.scss';

export default function App() {
  return (
    <div>
      <Menu />
      <main>
        <FoodCarousel />
      </main>
    </div>
  );
}
