import './category.css'
import { gallery } from "../Data";

function Categories(props){
    return (
        <div id="categories-container">
            {gallery.map((category,index)=>(
                <div id={category.name.split(' ').join('-')} key={index}>
                    <h1 id="category-name" key={category.id}>{category.name}</h1>
                    <hr />
                    <div id="image-container-grid" className="image-container">
                        {category.data.map((photos)=>(
                            <button id="image-button"  onClick={props.showDisplay}><img id="image-icons" src={photos.url} alt={photos.name}/></button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );}
  export default Categories

