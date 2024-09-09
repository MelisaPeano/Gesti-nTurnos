import styled from "styled-components";


const ServicesStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100vh;
  background: white;
  font-family: 'Poetsen One', sans-serif;
  
  .services{
    place-items: center; 
    height: 40vh;
    margin-left: 2vw;
    margin-right: 3vw;
    margin-top: 7vh;
    margin-bottom: 7vh;
    background:#f2efef;
    border-radius: 20px;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
    text-align: center;
    justify-content: center;
    padding: 1rem;
    color: #333;
  }

  h2{
    color: #b95829;
    font-size: 1.5rem;
    padding: 1rem;
  }
  p{
    font-size: 1rem;
  }
  .services:hover{
    background: #D3D3D3;
    color: black;

    h2{
      font-size: 1.8rem;
    }
    p{
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin-top: 0.5rem;
    margin-bottom: 3rem;
    .services{
      width: 80vw;
      height: 18vh;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      padding: 0.5rem;
    }
    h2{
      padding: 0.2rem;
      font-size: 1rem;
    }
    p{
      padding: 0.2rem;
      font-size: .7rem;
    }
    .services:hover{
      h2{
        font-size: 1rem;
      }
      p{
        font-size: .8rem;
      }
    }
  }
  
  `


export default ServicesStyle