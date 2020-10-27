import React from 'react'
import { buyCake, addCake } from '../redux'
import { connect } from "react-redux";

function CakeContainer(props) {
     const { numberOfCakes, buyCake ,addCake } = props
    return (
        <div>
          <br/>
            <div> ***Redux without Hoooks***</div>
            <h1>Number of cakes - {numberOfCakes}</h1>
            <button disabled={ numberOfCakes <=0 } onClick={()=> buyCake()}>Buy Cake</button>
            <button onClick={()=> addCake()}>Add  Cake</button>
            <hr/>
        </div>
    )
}

const mapStateToProps = (state)=>{
  return {
    numberOfCakes : state.cake.numberOfCakes
  }
}

const mapActionsToProps = (dispatch)=>{
  return {
    buyCake : ()=> dispatch(buyCake()),
    addCake : ()=> dispatch(addCake())
  }
}

export default connect(mapStateToProps, mapActionsToProps)(CakeContainer)
