import { useSelector, useDispatch } from "react-redux";
import { myCart, removeOneEvent, addEvent } from "../../Redux/Reducers/Cart";

import "./Cart.css";

const Cart = () => {
  const thisCart = useSelector(myCart) || [];
  const dispatch = useDispatch();
  const removeAnElement = (name) => {
    dispatch(removeOneEvent(name));
  };
  const addElement = (event) => {
    dispatch(addEvent(event));
  };
  // Crear un objeto para contar la cantidad de cada producto
  const productCount = thisCart.reduce((countObj, currentProduct) => {
    const productName = currentProduct.name;
    countObj[productName] = (countObj[productName] || 0) + 1;
    return countObj;
  }, {});

  // Filtrar productos únicos basados en el nombre
  const uniqueCart = thisCart.filter(
    (product, index, self) =>
      index === self.findIndex((p) => p.name === product.name)
  );

  const total = thisCart.reduce((accumulator, currentProduct) => {
    return accumulator + currentProduct.price;
  }, 0);

  return (
    <div className="cart-space">
      <div className="cart-container">
        <div className="cart-product">
          <div className="cart-product-container">
            <div className="cart-headers">
              <h1>Event</h1>
              <h1>Quantity</h1>
              <h1>Total Amount</h1>
              <h1>Actions</h1>
            </div>
            {uniqueCart.length > 0
              ? uniqueCart.map((c, index) => (
                  <div key={index} className="cart-product-space">
                    <div className="cart-product-name">
                      <h1>{c.name}</h1>
                    </div>
                    <div className="cart-product-quantity">
                      <p>{productCount[c.name]}</p>
                    </div>
                    <div className="cart-product-price">
                      <h2>${productCount[c.name] * c.price}</h2>
                    </div>
                    <div className="cart-buttons">
                      <button
                        onClick={() => removeAnElement(c.name)}
                        className="eraseButton"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() =>
                          addElement({ name: c.name, price: c.price })
                        }
                        className="AddButton"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))
              : "No se ha añadido nada al carrito"}
          </div>
          <div className="cart-product-total">
            <div className="total-word">
              <h3>Total:</h3>
            </div>
            <div className="price-total">${total}</div>
          </div>
          <div className="buttons-cart">
            <div className="button-deleteAll">
              <button className="button-deleteAllA">Discharge All</button>
            </div>
            <div className="button-buy">
              <button className="button-buyA"> Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
