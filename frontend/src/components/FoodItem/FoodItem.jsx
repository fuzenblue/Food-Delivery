import React, { useContext /* , useState */} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id, name, price, description, image})=> {

  // const [itemCount, setItemCount] = useState(0)
  const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);

  
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={url+"/image/"+image} alt={name} />
        {!cartItems[id]
          ? <img className="add" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
          // <img className="add" onClick={() => setItemCount(prev => prev + 1)} src={assets.add_icon_white} alt="" /> use the useStage
          : <div className="food-item-counter">
              {/* <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />   use the useStage  */}
              <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              {/* <p>{itemCount}</p>   use the useStage  */}
              <p>{cartItems[id]}</p>
              <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
              {/* <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />  use the useStage  */}
            </div>
        }
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem