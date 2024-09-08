import styled from "styled-components";
const UserStyle = styled.div`
    margin: 0;
    padding: 0;
    display: grid;
    text-align: center;
    justify-content: center;
   
    div {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 15px;
        justify-items: center;
        align-items: center;
        margin: 20px;
        outline: none;
    }
    img{
        margin: 10px;;
        grid-column: span 12; 
        justify-self: end;
        align-items: center;
        width: 20vw;
        height: 20vh;
        border-radius: 30%;
        margin: 2rem 3.5rem 0rem 3.5rem;
        object-fit: cover;
    }
    h1{
       
        grid-column: span 6;
        margin: 0.4rem 0.4rem;   
        color:  #b95829;   
        font-family: 'Poetsen One', sans-serif;
        font-size: 1rem;
        justify-items: end;
        align-items: start; 
    }
    p{
        grid-column: span 6;
        align-self: center; 
        margin: 0.4rem 0.4rem;   
        color:  #b95829;   
        font-family: 'Poetsen One', sans-serif;
        font-size: 1rem;
    }
    form{
        grid-column: span 12;
        margin: 0.2rem 0.2rem 0.2rem 0.2rem;
        justify-items: center;
        align-items: center;
    }
    button{
        font-family: 'Poetsen One', sans-serif;
        width: 200px;
        height: 30px;
        margin: 10px;
        padding: 10 5 10 5px;
        border-radius: 10px;
        border: none;
        outline: none;
        font-size: 1rem;
        background-color: #b95829;
        color: white;
        cursor: pointer;
    }
    `
  
export default UserStyle;