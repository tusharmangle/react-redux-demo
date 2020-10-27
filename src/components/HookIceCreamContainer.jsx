import React from 'react'
import { useSelector, useDispatch}from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'

function HookIceCreamContainer() {
    
    const numberOfIceCreams = useSelector(state => state.iceCream.numberOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <br/>
            <div> ***Redux with Hoooks***</div>
            <h1>{numberOfIceCreams}</h1>
            <button disabled={numberOfIceCreams <=0 } onClick={()=>dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    )
}

export default HookIceCreamContainer
