import styled from "styled-components";


const Formulario = styled.div`

    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: 10vh;
    margin-bottom: 10vh;
    font-family: 'Poetsen One', sans-serif;
    font-size: 1.5rem;
    color: #333;
    max-height: 600px;
    background: #333;
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

    input {
        font-family: 'Poetsen One', sans-serif;
        width: 60vw;
        height: 5vh;
        margin: 10px;
        padding-top: 10px;
        border-radius: 10px;
        border: none;
        outline: none;
        font-size: 1rem;
    }

    .error {
        color: red;
        font-size: 0.8rem;
    }

    .exito {
        color: green;
        font-size: 0.8rem;
    }

    button {
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
    .formLogin {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    
    p{
        color: white;
    }
    @media (min-width: 768px) {
        width: 68vw;
       display: flex; 
       justify-content: center;
       margin-left: 10vw;
       margin-right: 10vw;
       margin-top: 5vh;
    }
`

export default Formulario;