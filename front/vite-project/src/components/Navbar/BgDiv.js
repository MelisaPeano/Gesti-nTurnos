import styled from "styled-components"
// Este es mi div que se desplaza en la Barra
const BgDiv = styled.div`
    background-color: #333;
    position: absolute;
    top: -700px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .7s ease-out;
    &.active{
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
       
     }
     @media (min-width: 769px) {
      &.active {
      display: none;
    }
  }
`
export default BgDiv;