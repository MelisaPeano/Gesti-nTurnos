import styled from "styled-components";
const HomeStyles = styled.div`
    background: white;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    font-family: 'Poetsen One', sans-serif;
    font-size: 1.5rem;
    color: #b95829;
    text-align: center;  
    justify-content: space-between;
    height: 100vh;
    
.img{
    width: 60vw;
    height: 60vh;
    border-radius: 30%;
    margin: 2rem 3.5rem 0rem 3.5rem;    
    border: 5px solid #b95829;
    object-fit: cover;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
}
h1{
    display: flex;
    flex-direction: row;
    font-size: 2rem;
    margin: 3rem 2rem 0rem 2rem;
}
p{
    font-size: 1.5rem;
    margin: 3rem 2rem 0rem 2rem;
}
button{ 
    font-family: 'Poetsen One', sans-serif;
   font-size: 1.5rem;
   background-color: #b95829;
   color: white;
   border: none;
   border-radius: 5px;
   padding: 1rem;
   margin-top: 2rem;
   margin-bottom: 2rem;
   cursor: pointer;
}
.text{
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    place-items: center; 
    height: 60vh;
    margin-left: 2vw;
    margin-right: 3vw;
    margin-top: 7vh;
    margin-bottom: 7vh;
    background:#f2efef;
    border-radius: 20px;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
}
   
    /* Breakpoint para tablets y pantallas más pequeñas */
    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        height: 100vh;
        .img {
            width: 70vw;
            height: 35vh;
            margin-top: 0.5rem;
        }
        .text {
            display: flex;
            flex-direction: column;
            width: 80vw;
            height: 21vh;
        }
        h1{
            font-size: 1rem;
            position: absolute;
            margin-top: .5rem;
        }
        p {
            position: relative;
            padding: .5rem;
            font-size: 1rem;
        }
        button{
            font-size: .7rem;
            position: relative;
            margin-top: 0.2rem;
        }
    }

    /* Breakpoint para pantallas móviles */
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        height: 100vh;
        .img {
            width: 80vw;
            height: 40vh;
            margin-top: 0.5rem;
        }
        .text {
            display: flex;
            flex-direction: column;
            width: 80vw;
            height: 21vh;
        }
        h1{
            font-size: 1rem;
            position: absolute;
            margin-top: .5rem;
        }
        p {
            font-size: 1rem;
            margin-top: 1rem;
        }
        button{
            font-size: .7rem;
            position: relative;
            margin-top: 0.2rem;
            margin-bottom: .5rem;
        }
    }

    /* Breakpoint para smartphones pequeños */
    @media (max-width: 480px) {
        .img {
            width: 90vw;
            height: 30vh;
        }
        .text {
            display: flex;
            flex-direction: row;
            width: 80vh;
            height: 40vh;
            padding-button: 8rem;
        }
        button {
            position: absolute;
            top: 0;
            font-size: .2rem;
            padding: .5rem;
            margin-button: .5rem;
        }
        h1{
            font-size: 1rem;
            margin-top: .2rem;
        }
        p {
            font-size: 1rem;
        }
    } 
`
export default HomeStyles