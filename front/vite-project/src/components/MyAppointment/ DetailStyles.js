import styled from "styled-components";

const DetailStyle = styled.div`
 display: grid;
 grid-template-columns: repeat(2, 2fr);
 gap: 10px;
 width: 60%;
 margin-left: 20%;
button{
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
}
`
export default DetailStyle;