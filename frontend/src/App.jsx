import { useEffect, useState } from "react";
import "./App.css"; // Import the CSS

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://shopping-backend-env.eba-7sj2fdji.us-west-2.elasticbeanstalk.com/api/products/") 
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div id="root">
      <h1 className="header">Shopping Store</h1>
      <div className="products">
        {products.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.name}</h3>
            <p className="description">{p.description}</p>
            <p className="price">₹{p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
