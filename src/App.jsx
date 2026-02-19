import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        // price >= 10
        const filtered = data.products.filter(p => p.price >= 10)
        setProducts(filtered)
      })
  }, [])

  return (
  <div className="app">
    <h1>Luxury Product Catalogue</h1>

    <div className="table-wrapper">
      <table className="lux-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Thumbnail</th>
            <th>Return</th>
            <th>Shipping</th>
          </tr>
        </thead>

        <tbody>
          {products.map(prod => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.title}</td>
              <td>${prod.price}</td>
              <td>{prod.rating} ⭐</td>

              <td>
                <img
                  src={prod.thumbnail}
                  alt={prod.title}
                  onClick={() => window.open(prod.thumbnail, "_blank")}
                />
              </td>

              <td>7 Days</td>
              <td>Free</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

}

export default App
