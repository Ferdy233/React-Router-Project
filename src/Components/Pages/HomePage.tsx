import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

function HomePage() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (count === 3) {
      navigate("/thankyou");
    }
  }, [count, navigate]);

  return (
    <>
      <div>
        <nav style={{ marginBottom: "2rem" }}>
          <a href="/" style={{ marginRight: "1rem" }}>Home</a>
          <a href="/about">About</a>
        </nav>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default HomePage;