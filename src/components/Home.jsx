import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../Features/productSlice";
import { productsFetch } from "../api/cocktails";
import { useEffect } from "react";
import { styled } from "styled-components";
import { addToCart } from "../Features/cartSlice";


const StyledProducts =styled.section`

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;

article{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 15px;
  width: 300px;
  max-width: 100%;
  height: 500px;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    2px 2px 5px rgba(94, 104, 121, 0.3); 
    overflow:scroll;
}


h3{
    font-size: 25px;
  font-weight: 400;
}

img{
    width: 80%;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
}

.details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.instr{
    height:65px;
    overflow:scroll;
}


.price {
  font-size: 20px;
  font-weight: 700;
}


 button {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  margin-top: 2rem;
  font-weight: 400;
  letter-spacing: 1.15px;
  background-color: #4b70e2;
  color: #f9f9f9;
  border: none;
  outline: none;
  cursor:pointer;

  &:hover{
    box-shadow: 0 0 20px gray;
  }
}

`


const Home = () => {

  const dispatch = useDispatch();
  const { isLoading, isError, items } = useSelector((state) => state.products);

  useEffect(() => {
    productsFetch().then((res) => dispatch(addItems(res)));

  }, [dispatch]);


  if (isLoading) return <div>Loading ...</div>;
  if (isError) return <div>Error ...</div>;


  const handleAddToCart=(product)=>{
  dispatch(addToCart(product))

  }

    return ( 
        <StyledProducts>
        {items?.map((product)=>{
           const {idDrink,strDrink, strInstructions,strDrinkThumb}=product;
           return(
            <article key={idDrink}>
              <h3>{strDrink}</h3>  
               <img src={strDrinkThumb} alt={strDrink}/>
               <div className="details">
                <span className="instr">{strInstructions}</span>
                <span className="price">$22</span>
               </div>
               <button onClick={()=>handleAddToCart(product)}>ADD TO CART</button>
            </article>
           )
        })}
        </StyledProducts>
     );
}
 
export default Home;