import FooterStyle from "./FooterStyle";
import miLogo from "../../assets/milogo.png";
import LogoLinkedin from "../../assets/lin.png";
import LogoGitHub from "../../assets/gith.png";
const Footer = () => {
    return (
        <FooterStyle>
            <div>
                <img src={miLogo} alt='café y código'></img>
                <h1>Melisa Peano || Full Stack Developer</h1>
            </div>
            <div>
                <img src={LogoLinkedin} ></img>
                <a href="https://www.linkedin.com/in/melisa-peano-b264822b9/">Linkedin</a>
                <img src={LogoGitHub}></img>
                <a href="https://github.com/MelisaPeano">GitHub</a>
            </div>
           
        </FooterStyle>
    )
}
export default Footer;