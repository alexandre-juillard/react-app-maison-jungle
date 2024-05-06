import '../Styles/Cart.css'

const Cart = () => {
    const monsteraPrice = 8;
    const lierrePrice = 10;
    const bouquetFleurs = 15;
    return (
      <div className="lmj-cart">
      <h2>Panier</h2>
      <ul>
        <li>Monstera : {monsteraPrice} €</li>
        <li>Lierre : {lierrePrice} €</li>
        <li>Bouquet de fleurs : {bouquetFleurs} €</li>
      </ul>
      <p>Total panier : {monsteraPrice + lierrePrice + bouquetFleurs} €</p>
      </div>
    );
  };

  export default Cart;