import { Link } from "react-router-dom";
import styled from 'styled-components'
import { useSelector } from "react-redux";

const  StyledNav=styled.nav`
 height: 70px;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;

  a{
    text-decoration: none;
  color: white;

  }

  h2{
    font-size: 40px;
  }

 div{
  display: flex;
  align-items: center; 
 }

 .bag-quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background: yellow;
  font-size: 14px;
  font-weight: 700;
  color: black;
  margin-left: 5px;
}


`


const NavBar = () => {
    
    const cartTotalQuantity = useSelector((state) => state.cart.cartTotalQuantity);

    return ( 
        <StyledNav>
            <Link to='/'>
            <h2>Cocktails</h2>
            </Link>

           <Link to='/cart'>
           <div>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="bi bi-handbag-fill"
          >
            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
          </svg> 

          <span className="bag-quantity"> 
          <span>{cartTotalQuantity}</span>
          </span>
            </div>
           </Link>
        </StyledNav>
     );
}
 
export default NavBar;