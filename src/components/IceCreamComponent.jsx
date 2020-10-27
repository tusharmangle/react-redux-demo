import React from 'react'
import { connect } from "react-redux";
import { buyIceCream } from '../redux';

function IceCreamComponent(props) {

    const {numberOfIceCreams} = props

    return (
        <div>
             <br/>
            <div> ***Redux without Hoooks***</div>
            <h2>
               Number Of IceCreams:  {numberOfIceCreams}
                </h2>
            <button disabled={numberOfIceCreams <= 0} onClick={()=>props.buyIceCream()}> Buy IceCream</button>
        
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        numberOfIceCreams : state.iceCream.numberOfIceCreams
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
    buyIceCream : ()=> dispatch(buyIceCream())
    }
}


export default  connect(mapStateToProps,mapDispatchToProps)(IceCreamComponent)
