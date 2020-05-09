import React from 'react';
import Menu from './components/Menu.js'
import './App.scss';

export default function App() {
  return (
    <div>
      <Menu />
      <main>
        <section className="food-content">
          Hello, I am a the main section
        </section>
      </main>
    </div>
  );
}
