import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {buyCake, addCake} from "../redux"
function HooksCakeContainer() {
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()
    
    return (
        <div>
            <br/>
            <div> ***Redux with Hoooks***</div>
             <h1>Number of cakes - {numberOfCakes}</h1>
            <br/>
            <button disabled={numberOfCakes <=0} onClick={()=> dispatch(buyCake())}> BuyCake</button>
            <button onClick={()=> dispatch(addCake())}> Add Cake</button>
        <hr/>
        </div>
    )
}

export default HooksCakeContainer
