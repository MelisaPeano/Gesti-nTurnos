import styled from 'styled-components'
const Container = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    height: 80vh;
    background-color: white;
    padding: 20px;
    h1 {
        font-family: 'Caveat', sans-serif;
        text-align: center;
    }
`
export const Card = styled.div`
    font-family: 'Poetsen One', sans-serif;
    color: #333;
    background: #b95829;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 20px;
    align-items: center;
    padding: 15px;
    margin: 10px;
    cursor: pointer;
    border: 7px solid transparent;
    transition: all .75s ease-out;
    @media (min-width: 769px) {
        width: 100vh;
        height: 2vh;
        margin-bottom: 10px;
    }
    button {
        background: #9899a7;
        border-radius: 30px;
        border: 1px solid transparent;
        font-family: 'Poetsen One', sans-serif;
    }
    &:hover{
        background: #ce8a69;
        border-radius: 30px;
        box-shadow: 0px 0px 50px white;
        transition: all .3s ease-out;
    }
    h1{
        display: flex; 
        position: relative;
        font-size: 1rem;
        text-align: center;
        justify-content: center;
     
    }
`
export default Container;