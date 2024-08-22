import Burguer from './BurgerClick'
function BurguerButton (props) {
    return (
        <Burguer>
            <div onClick={props.handleClick}
                 className ={`icon nav-icon-6 ${props.cliked ? 'open' : ''}`}
                >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Burguer>
    )
}
export default BurguerButton