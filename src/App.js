import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  const [fixed, setFixed] = useState(false);
  function handleScroll(e) {
    if (window.scrollY > 550) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }
  window.addEventListener("scroll", handleScroll);

  return (
    <div className="App">
      <Outlet />
      <section className={fixed ? 'fixed' : 'unfixed' }>
        <nav>DONATE</nav>
        <nav>VOLUNTEER</nav>
        <nav>CONTEST</nav>
        <nav>VOTE</nav>
      </section>
    </div>
  );
}

export default App;
