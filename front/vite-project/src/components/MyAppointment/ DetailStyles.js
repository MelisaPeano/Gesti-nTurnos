import styled from "styled-components";

const DetailStyle = styled.div`
 display: grid;
 grid-template-columns: repeat(2, 2fr);
 width: 60%;
 margin-left: 20%;
justify-items: center;
button{
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    width: 20vh;
    border-radius: 10%;
}
`
export default DetailStyle;