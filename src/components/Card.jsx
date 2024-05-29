import './card.css'
import Img01 from "../assets/003.png"

const Card = () => {
  
 return   <>
    <div className={"card"}>
        <img src={Img01} alt="" />
        <p className="pokemon_id">#0001</p>
        <h2 className="pokemon_name">Bulbasaur</h2>
        <div className="pokemon_class_wrapper">
            <span style={{backgroundColor: "#9CCD50" , }}>Grass</span>
            <span style={{backgroundColor: "#BA7FC9"}}>Poison</span>
        </div>
    </div>
    
    </>
    
}
export default Card