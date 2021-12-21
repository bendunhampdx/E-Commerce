import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { auth } from '../../firebase/firebase.utils';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink  } from "./header.styles";

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
          <OptionDiv to="/shop">
            SHOP
          </OptionDiv>
          <OptionLink to="/contact">
            CONTACT
          </OptionLink>
          {
            currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
            ) : (
            <Link className="option" to="/signin">SIGN IN</Link>
            )}
          <CartIcon />
        </OptionsContainer>
        {
        hidden ? null : <CartDropdown />
        }
        
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
