import React from 'react';
import { connect } from 'react-redux';

// Import Link to allow redirect user to another pages
import { Link } from 'react-router-dom';

// Import from react-icons, shopping cart Icon
import { MdShoppingBasket } from 'react-icons/md';
import logo from '../../assets/images/logo.png';

// Import components created at .styles
import { Container, Cart } from './styles';

// Created Function Component
function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
