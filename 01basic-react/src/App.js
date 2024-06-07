
import CountClick from "./CountClick";
import MyButton from "./MyButton";
import { useState } from 'react'
function App() {

  const [count, setCount] = useState(0);

  function clickCount() {
    setCount(count + 1);
  }

  const products = [
    { id: 1, title: "Binjal", isFruit: false },
    { id: 4, title: "Lichi", isFruit: true },
    { id: 2, title: "tomato", isFruit: false },
    { id: 3, title: "Mango", isFruit: true },

  ];

  const listItems = products.map((product) => {
    return (
      <li key={product.id}
        style={{
          color: product.isFruit ? "magenta" : "green"
        }}
      >
        {product.title}
      </li>
    )

  })
  return (
    <>
      <ul>
        {listItems}
      </ul>

      <br />
      <CountClick count={count} onClick={clickCount} />

      <CountClick count={count} onClick={clickCount} />
    </>
  );
}

export default App;
