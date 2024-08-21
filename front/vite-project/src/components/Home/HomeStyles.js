import styled from "styled-components";
const HomeStyles = styled.div`
    background: white;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 10px;  
    width: 100%;
    font-family: 'Poetsen One', sans-serif;
    font-size: 1.5rem;
    color: #b95829;
    text-align: center;  
    justify-content: space-between;
.img{
    grid-column: span 6;
    width: 60vw;
    height: 70vh;
    border-radius: 30%;
    margin: 2rem 3.5rem 0rem 3.5rem;    
    border: 5px solid #b95829;
    object-fit: cover;
}
p{
    grid-column: span 6;
    align-self: center; 
    margin: 0rem 2rem; 
    
}
.text{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 3vw;
    margin-right: 3vw;
}
@media (max-width: 768px) {
        .img {
            grid-column: span 12;
            width: 80vw;
            height: 40vh;
        }
        .text{
            grid-column: span 12;
            margin: 2rem 2rem;
        }
        p{
            grid-column: span 12;
            margin: 3rem 3rem 0 3rem;
            font-size: 1.5rem;
            align-self: center; ∫
        }
    }
`
export default HomeStyles