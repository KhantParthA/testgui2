import React from "react"
import { connect } from "react-redux"
import './css/app.css'

const Count = props => {
  return (
    <div>
      <div id="block1">
        <hr />
        <button id="like" value={props.choise} onClick={() => props.userChoise(props.choise)}>{props.choise}</button>
        <button id="subscribe" value="voting" onClick={() => props.userChoise('vote')}>subscribeMe {props.language.vote}</button><hr />
        <div>
          <div id="info">{props.description}</div>
          <button id="ably" value={props.language[0].name} onClick={() => props.read('Ably')}>{props.language[0].name}</button>
          <button id="pusher" value={props.language[1].name} onClick={() => props.read('Pusher')}>{props.language[1].name}</button>
          <button id="fanouts" value={props.language[2].name} onClick={() => props.read('Fanouts')}>{props.language[2].name}</button>
          <button id="hydna" value={props.language[3].name} onClick={() => props.read('Hydna')}>{props.language[3].name}</button>
          <button id="pubnub" value={props.language[4].name} onClick={() => props.read('Pubnub')}>{props.language[4].name}</button>
          <button id="realtime.co" value={props.language[5].name} onClick={() => props.read('Realtime.co')}>{props.language[5].name}</button>
          <button id="reappt" value={props.language[6].name} onClick={() => props.read('Reappt')}>{props.language[6].name}</button>
          <button id="streamdata.io" value={props.language[7].name} onClick={() => props.read('Streamdata.io')}>{props.language[7].name}</button>
          <button id="tambur.io" value={props.language[8].name} onClick={() => props.read('Tambur.io')}>{props.language[8].name}</button>
          <button id="convergence" value={props.language[9].name} onClick={() => props.read('Convergence')}>{props.language[9].name}</button>
          <button id="Meteor" value={props.language[10].name} onClick={() => props.read('Meteor')}>{props.language[10].name}</button><br/>
          <hr />
        </div>
      </div>
    </div>    
  )
}
const mapState = state => ({
  choise: state.select.choise,
  vote: state.select.vote,
  language: state.select.language,
  description: state.select.description
})

const mapDispatch = dispatch => ({
  userChoise: (data) => dispatch.select.choise(data),
  read: (subject) => dispatch.select.read(subject) 
})

export default connect(mapState, mapDispatch)(Count)