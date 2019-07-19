import React, { useReducer } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Select from 'react-select'
import state from '../models/employeesModel'
import validator from '../validator/validation'
import '../css/employeeRegistration.css'

//const initialState = state
const validate = validator

const initialState = {
    firstName: '',
    lastName: '',
    mobileNo: '',
    pincode: '',
    address: '',
    city: '',
    state: '',
    country: '',
    userName: '',
    email: '',
    password: '',
    outputScreen: 'none' 
}

const changeState = (state1, action) => { 
  console.log('data:', action.type, action.text)
  switch (action.type) {
    case 'firstName':
      console.log('firstName update inprogress', state1.firstName);  
      return Object.assign({}, state1, {
        firstName: action.text
      })
    case 'lastName':  
      return Object.assign({}, state1, {
        lastName: action.text
      })
    case 'mobileNo':
      return Object.assign({}, state1, {
        mobileNo: action.text
      })
    case 'pincode':
      return Object.assign({}, state1, {
        pincode: action.text
      })
    case 'address':
      return Object.assign({}, state1, {
        address: action.text
      })
    case 'city':
      return Object.assign({}, state1, {
        city: action.text
      })
    case 'state':
      return Object.assign({}, state1, {
        state: action.text
      })
    case 'country':
      return Object.assign({}, state1, {
        country: action.text
      })
    case 'userName':
      return Object.assign({}, state1, {
        userName: action.text
      })
    case 'email':
      return Object.assign({}, state1, {
        email: action.text
      })
    case 'password':
      return Object.assign({}, state1, {
        password: action.text
      })
    default :
      return state1    
  }
}

const validateData = (e, state1) => {
  e.preventDefault();
  let errLog = [];  
  // firstName Validation
  if(validate.firstName['exp'].test(state1.firstName)) {  
    document.getElementById('firstnameerr').style.display = 'none'
  } else {
    errLog.push('firstName');
    document.getElementById('firstnameerr').style.display = 'block'
  }
  // lastName Validation
  if(validate.lastName['exp'].test(state1.lastName)) {  
    document.getElementById('lastnameerr').style.display = 'none'
  } else {
    errLog.push('lastName');
    document.getElementById('lastnameerr').style.display = 'block'
  }
  // mobileNo Validation
  if(validate.mobileNo['exp'].test(state1.mobileNo)) {  
    document.getElementById('mobilenoerr').style.display = 'none'
  } else {
    errLog.push('mobileNo');
    document.getElementById('mobilenoerr').style.display = 'block'
  }
  // pincode Validation
  if(validate.pincode['exp'].test(state1.pincode)) {  
    document.getElementById('pincodeerr').style.display = 'none'
  } else {
    errLog.push('pincode');
    document.getElementById('pincodeerr').style.display = 'block'
  }
  // userName Validation
  if(validate.userName['exp'].test(state1.userName)) {  
    document.getElementById('usernameerr').style.display = 'none'
  } else {
    errLog.push('userName');
    document.getElementById('usernameerr').style.display = 'block'
  }
  // email Validation
  if(validate.email['exp'].test(state1.email)) {  
    document.getElementById('emailerr').style.display = 'none'
  } else {
    errLog.push('email');
    document.getElementById('emailerr').style.display = 'block'
  }
  // password Validation
  if(validate.password['exp'].test(state1.password)) {  
    document.getElementById('passworderr').style.display = 'none'
  } else {
    errLog.push('password');
    document.getElementById('passworderr').style.display = 'block'
  }

  if(errLog.length === 0){
    document.getElementById('outputscreen').style.display = 'block'
  } else {
    document.getElementById('outputscreen').style.display = 'none'
  }
}

const city = [
  {value: 'Choose...', label: 'Choise'}, 
  {value: 'Hyderabad', label: 'Hyderabad'}, 
  {value: 'Mumbai', label: 'Mumbai'}, 
  {value: 'Noida', label: 'Noida'}, 
  {value: 'Delemont', label: 'Delemont'}, 
  {value: 'Schattdorf', label: 'Schattdorf'}, 
  {value: 'Hawaii', label: 'Hawaii'},
  {value: 'other', label: 'other'}, 
]

const stats = [
  {value: 'Choose...', label: 'Choise'}, 
  {value: 'Telangana', label: 'Telangana'}, 
  {value: 'Karnataka', label: 'Karnataka'}, 
  {value: 'Maharastra', label: 'Maharastra'}, 
  {value: 'Uttar Pradesh', label: 'Uttar Pradesh'}, 
  {value: 'Jura', label: 'Jura'}, 
  {value: 'Uri', label: 'Uri'},
  {value: 'New-Maxico', label: 'New-Maxico'},
  {value: 'New-York', label: 'New-York'},
]

const country = [
  {value: 'Choose...', label: 'Choise'}, 
  {value: 'Indiaaaa', label: 'India'},
  {value: 'Switzerland', label: 'Switzerland'},
  {value: 'US', label: 'US'},
]

const RegistrationForm = () => {
  const [state1, dispatch1] = useReducer(changeState, initialState)
  return (
    <div>
      <div id="formboundry">
        <Form name="employeeForm" onSubmit={(e) => validateData(e, state1)}>
        <h2 class="headings">Registration</h2>
          <Form.Row>
            <Form.Group as={Col} controlId="firstName">
              <Form.Label>FirstName</Form.Label>
                <Form.Control name="firstName" value={state1.firstName} type="text" onChange={(e) => dispatch1({type: e.target.id, text: e.target.value})} placeholder="Enter FirstName" required="true" />
                <span class="errormessage" id="firstnameerr" style={{display: validate.firstName.appeared}}>{validate.firstName.errMsg}</span>
            </Form.Group>
            <Form.Group as={Col} controlId="lastName">
              <Form.Label>LastName</Form.Label>
              <Form.Control name="lastName" value={state1.lastName}  type="text" onChange={(e) => dispatch1({type: e.target.id, text: e.target.value})} placeholder="Enter LastName" required="true" />
              <span class="errormessage" id="lastnameerr" style={{display: validate.lastName.appeared}}>{validate.lastName.errMsg}</span>
            </Form.Group>
          </Form.Row>

          <Form.Row>
          <Form.Group as={Col} controlId="mobileNo">
              <Form.Label>MobileNo</Form.Label>
              <Form.Control name="mobileNo" value={state1.mobileNo} type="text" onChange={(e) => dispatch1({type: e.target.id, text: e.target.value})} placeholder="MobileNo" required="true" />
              <span class="errormessage" id="mobilenoerr" style={{display: validate.mobileNo.appeared}}>{validate.mobileNo.errMsg}</span>
            </Form.Group>
            <Form.Group as={Col} controlId="pincode">
              <Form.Label>Pincode</Form.Label>
              <Form.Control name="pincode" value={state1.pincode}  type="text" onChange={(e) => dispatch1({type: e.target.id, text: e.target.value})} placeholder="Pincode" required="true" />
              <span class="errormessage" id="pincodeerr" style={{display: validate.pincode.appeared}}>{validate.pincode.errMsg}</span>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control name="address" value={state1.address} type="text" onChange={(e) => dispatch1({type: e.target.id, text: e.target.value})} placeholder="Address" required="true" />
            </Form.Group>
          </Form.Row>
          
          <Form.Row>
            <Form.Group as={Col} controlId="city">
              <Form.Label>City</Form.Label>
              <Select name="city" required="true" value={city.label} onChange={(city) => dispatch1({type: 'city', text: city.label})} options={city} />
            </Form.Group>
            <Form.Group as={Col} controlId="state">
              <Form.Label>State</Form.Label>
              <Select name="state" required="true" value={stats.label} onChange={(stats) => dispatch1({type: 'state', text: stats.label})} options={stats} />
            </Form.Group>
            <Form.Group as={Col} controlId="country">
              <Form.Label>Country</Form.Label>
              <Select name="country" required="true" value={country.label} onChange={(country) => dispatch1({type: 'country', text: country.label})} options={country} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="userName">
              <Form.Label>UserName</Form.Label>
              <Form.Control name="userName" value={state1.userName} type="text" onChange={(e) => dispatch1({type: e.target.id, text: e.target.value})} placeholder="UserName" required="true" />
              <span class="errormessage" id="usernameerr" style={{display: validate.userName.appeared}}>{validate.userName.errMsg}</span>
            </Form.Group>
            <Form.Group as={Col} controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" value={state1.email} type="email" onChange={(e) => dispatch1({type: e.target.id, text: e.target.value})} placeholder="Email" required="true" />
              <span class="errormessage" id="emailerr" style={{display: validate.email.appeared}}>{validate.email.errMsg}</span>
            </Form.Group>
            <Form.Group as={Col} controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" value={state1.password} type="password" onChange={(e) => dispatch1({type: e.target.id, text: e.target.value})} placeholder="Password" required="true" />
              <span class="errormessage" id="passworderr" style={{display: validate.password.appeared}}>{validate.password.errMsg}</span>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group id="Finish">
              <Form.Check name="agreeBox" type="checkbox" label="Agree" style={{float:"left"}} checked="true" />
              <Button id="submitbutton" name="submitButton" variant="primary"  type="submit">Submit</Button>
            </Form.Group>
          </Form.Row>
        </Form>
      </div>
      <div id="outputscreen" style={{display: state1.outputScreen}}>
        <h2 class="headings">Result</h2>
        <div id="outputscreenblock">
          FirstName: {state1.firstName}<br/>
          LastName: {state1.lastName}<br/>
          MobileNo: {state1.mobileNo}<br/>
          Pincode: {state1.pincode}<br/>
          Address: {state1.address}<br/>
          City: {state1.city}<br/>
          State: {state1.state}<br/>
          Country: {state1.country}<br/>
          UserName: {state1.userName}<br/>
          Email: {state1.email}<br/>
          Password: {state1.password}<br/>
        </div>
        <button id="storebutton" type="submit">Store</button>
      </div>
    </div>  
  );
}
export default RegistrationForm