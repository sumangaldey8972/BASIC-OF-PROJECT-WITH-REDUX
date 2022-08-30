import React from "react"

export const User=(props)=>{
    return (
      <div>
        <h2> {props.data.name} </h2>
        <h2> {props.data.age} </h2>
      </div>
    );
}