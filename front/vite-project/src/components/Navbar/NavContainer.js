import styled from "styled-components"
// Aca esta mi NavBar y los enlaces
const NavContainer = styled.nav`
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Poetsen One', sans-serif;
    font-size: 1.5rem;
    padding: 1rem;
    .logo-container {
        margin-top: 0;
        display: flex;
        align-items: center;
    }
    img{
        width: 150px;
        height: 150px;
        margin: 0;
        padding: 0;
    }
    h2{ 
        color: #9899a7;
        font-weigth: 400;
        span{
            color: #b95829;
            font-weigth: 700;
        }
    }
  
    a{
        font-weigth: 400;
        text-decoration: none;
        color: white;
        margin-right: 1rem;
        font-size: 1rem;
        margin-left: 1rem;
    
    }
    .burguer{
        margin: 10 0 10 1vw;
        @media (min-width: 768px) {
            display: none;
        }
    }
`
export default NavContainer