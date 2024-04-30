import './fullDisplay.css'
function FullDisplay(props){
    

    return <div id="full-display" className={props.show}>
                <button onClick={props.closeDisplay}>Close</button>
                <img id="full-image" src={props.element} alt="Failed to load"/>  
            </div>
}
export default FullDisplay;