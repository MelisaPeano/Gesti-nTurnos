import styled from "styled-components"
const links = styled.div`
    font-family: 'Poetsen One', sans-serif;
    position: absolute;
    top: -700px;
    left: -1000px;
    right: 0;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
    transition: all .6s ease-out;
    z-index: 2;
    
    @media (min-width: 768px) {
      position: static;
      margin: 15 1 15 1vw;
      display: flex;
      justify-content: space-around;
      top: initial;
      left: initial;
      right: initial;
      a {
        font-size: 1rem;
        color: white;
        position: relative;
        margin-top: 0;
      }
    }
    
    &.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right:auto;
    top: 30%;
    left: 0;
    right: 0;
    transition: all .7s ease-out;
    a{
        font-size: 2rem;
        margin-top: 1rem;
        color: white;
        display: block;
    }
}
`
export default links;