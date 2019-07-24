import React from 'react'
import { connect } from 'react-redux'
import './css/app.css'

const Count = props => {
  return (
    <div>
      <div class="blocks"><h1 class="heading1">Store</h1>
        <hr/>
        <button class="heart" value={props.subscriptionBlock ? 'unsubscribe' : 'subscribe'} onClick={() => props.read({name: 'subscribe', i: props.activeIndex})}>{props.subscriptionBlock ? 'unsubscribe' : 'subscribe'}</button>
        <button class="heart" value={props.likesBlock} onClick={() => props.read({name: 'like', i: props.activeIndex})}>LikeMe  {props.likesBlock}</button><hr/><hr/>
        <div>{props.subscriptionBlock}
          <div><h3 class="heading2">Description</h3></div>
          <div class="info">
          {props.description}
          </div>
          {props.extensions.map( (extension, index) => 
            <div class="extensions"><div class="extensionname" onClick={() => props.read({name: extension.name, i: index})}>{extension.name}</div><hr/>
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
  activeIndex: state.select.activeIndex,
  likesBlock: state.select.likesBlock,
  subscriptionBlock: state.select.subscriptionBlock,
  extensions: state.select.extensions,
  description: state.select.description,
  added: state.select.added,
})

const mapDispatch = dispatch => ({
  read: (data) => dispatch.select.read(data) 
})

export default connect(mapState, mapDispatch)(Count)