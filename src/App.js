import React from 'react';
import './App.scss';

export default function App() {
  return (
    <main className="layout">
      <section className="sidebar">
        <div>I AM THE SIDEBAR</div>
        <nav className="sidebar__menu">
          <span>hello I am a category</span>
          <span>hello I am another category</span>
        </nav>
      </section>
      <section className="food-content">
        Hello, I am a the main section
      </section>
    </main>
  );
}
