import React from "react"
import { connect } from "react-redux"
import './css/app.css'

const Count = props => {
  return (
    <div>
      <div class="blocks"><h1 class="heading1">Store</h1>
        <hr/>
        <button id="subscribe" value="voting" onClick={() => props.read({name: 'subscribe', rowno: 0})}>subscribeMe{props.subscription}</button><hr/>
        <div>
        <h3 class="heading2">Description</h3>
          <div id="info">
          {props.description}
          </div><hr/>
          {props.extensions.map( (extension, index) => 
            <div class="extensions"><div class="extensionname" onClick={() => props.read({name: extension.name, rowno: index})}>{extension.name}</div><hr/>
            <button id={extension.name} class="addbutton" value={extension.name} onClick={() => props.read(index)}>{extension.added ? "Remove" : "Add"}</button>
            </div>    
          )}
          <hr/>
        </div>
      </div>
      <div class="blocks"><h1 class="heading1">Desktop</h1>
        {props.added.map(extension => 
          <div>{extension}</div>  
        )}
      </div>
    </div>    
  )
}
const mapState = state => ({
  choise: state.select.choise,
  subscription: state.select.subscription,
  extensions: state.select.extensions,
  description: state.select.description,
  added: state.select.added,
})

const mapDispatch = dispatch => ({
  read: (data) => dispatch.select.read(data) 
})

export default connect(mapState, mapDispatch)(Count)