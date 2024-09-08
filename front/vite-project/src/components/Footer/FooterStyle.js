import styled from "styled-components";
const FooterStyle = styled.div`
    height: 15vh;
    background-color: #333;
    color: white;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    justify-content: center;
    align-items: center;
    height: 10vh;
    font-family: 'Poetsen One', sans-serif;
    font-size: .8rem;
    padding: 1rem;

    div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
    img {
        margin: 1rem;
        height: 7vh;
        width: 7vh;
    }
    a {
    margin: 5px 0;
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 10vh;
    font-family: 'Poetsen One', sans-serif;
    font-size: .8rem;
    padding: 1rem;

    div {
      flex-direction: row;
      justify-content: center;
    }
    h1{
      font-size: 1rem;
    }
    img {
      height: 5vh; 
      width: 5vh;
    }
  }
  
  @media(max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 10vh;
    font-family: 'Poetsen One', sans-serif;
    font-size: .8rem;
    padding: 1rem;

    div {
      flex-direction: row;
      justify-content: center;
    }
    h1{
      font-size: 1rem;
    }
    img {
      height: 5vh; 
      width: 5vh;
    }
  }
  
`
export default FooterStyle;