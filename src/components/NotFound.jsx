import styled from 'styled-components'


const StyledNotFound=styled.div `

display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgb(68, 68, 68);
  min-height: 80vh;

  h2{
    font-size: 55px;
  }

  p{
    font-size: 20px;
  }

`


const NotFound = () => {
    return ( 
        <StyledNotFound>

            
       <h2>404</h2>
       <p>page not found</p>

        </StyledNotFound>
     );
}
 
export default NotFound;