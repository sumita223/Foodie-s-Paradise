import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import {addItem} from "../utils/cartSlice"

const ItemList=({items,dummy})=>{

    const dispatch= useDispatch();

    const handleAddItem=(item)=>{
        //dispatch an action
        dispatch(addItem(item));
    }
    console.log(items);
    return(
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between ">
                    {/**<img src={CDN_URL + item.card.info.imageId} className="w-16"/>*/}
                    <div className="w-9/12">
                    <div className="text-md py-2">
                        <span>{item.card.info.name}</span>
                        <span> - ₹{item.card.info.price ? item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                    </div>
                  
                       <p className="text-s">{item.card.info.description}</p> 
                       </div>
                    <div className="w-3/12 p-4">

                    <div className="absolute">
                        <button className="p-2 rounded-lg bg-black text-white m-auto shadow-lg "
                        onClick={()=>handleAddItem(item)}>Add+</button>
                    </div>
                    <img src={CDN_URL + item.card.info.imageId} className="w-36"/>

                    </div>

                </div>
            ))}
        </div>
    );
};

export default ItemList;