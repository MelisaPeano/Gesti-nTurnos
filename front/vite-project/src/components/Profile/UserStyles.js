import styled from "styled-components";
const UserStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    margin: 20px;
    outline: none;

    .title{
        text-align: center;
        margin: 0.4rem 0.4rem;   
        color:  #b95829;   
        font-family: 'Poetsen One', sans-serif;
        font-size: 1.5rem;
    }
    
    img{
        width: 15vw;
        height: 25vh;
        border-radius: 30%;
        border: 5px solid #b95829;
        margin: 2rem 3.5rem 0rem 3.5rem;
        object-fit: cover;
    }
    span {
        font-weight: bold;
        color: #333;
    }
    h1{
       
       text-align: start;
        margin: 0.4rem 0.4rem;   
        color:  #b95829;   
        font-family: 'Poetsen One', sans-serif;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }
    p{
        grid-column: span 6;
        align-self: center; 
        padding: 0.5rem;
        margin: 0.4rem 0.4rem;   
        color:  #b95829;   
        font-family: 'Poetsen One', sans-serif;
        font-size: 1rem;
    }
    form{
        justify-items: center;
        align-items: center;
    }
    button{
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
        @media (max-width: 768px) {
            .title{
                font-size: 1.2rem;
                text-align: left;
            }
           
            img{
                width: 20vw;
                height: 20vh;
                margin: 0.5rem;
                justify-self: left;
                margin-top : 0.5rem;
            }
            p{
                font-size: 0.8rem;
                margin: 0.2rem;
                padding: 0.2rem;
            }
            button{
                
                font-size: 0.8rem;
                width: 150px;
                height: 20px;
            }
            .div{
                text-align: center; 
            }
        }

        
    

    `
  
export default UserStyle;