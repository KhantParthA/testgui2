import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import '../css/employeeRegistration.css';
import { connect } from 'react-redux';
import validator from '../validator/validation'
import { updateFirstName, updateLastName, updateMobileNo, updatePincode, updateAddress, updateCity, updateState, updateCountry, updateUserName, updateEmail, updatePassword, validateData } from '../actions'

//const initialState = state;
const validationObj = validator;

const RegistrationForm = ({firstName, lastName, mobileNo, pincode, address, city, state, country, userName, email, password, outputScreen, onChangeFirstName, onChangeLastName, onChangeMobileNo, onChangePincode, onChangeAddress, onChangeCity, onChangeState, onChangeCountry, onChangeUserName, onChangeEmail, onChangePassword, validate = validationObj, handleClick }) => {
  return (
    <div>
      <div id="formboundry">
        <Form name="employeeForm" onSubmit={handleClick}>
        <h2 class="headings">Registration</h2>
          <Form.Row>
            <Form.Group as={Col} controlId="firstName">
              <Form.Label>FirstName</Form.Label>
                <Form.Control name="firstName" value={firstName} type="text" onChange={onChangeFirstName} placeholder="Enter FirstName" required="true" />
                <span class="errormessage" style={{display: validate.firstName.appeared}}>{validate.firstName.errMsg}</span>
            </Form.Group>

            <Form.Group as={Col} controlId="lastName">
              <Form.Label>LastName</Form.Label>
              <Form.Control name="lastName" value={lastName}  type="text" onChange={onChangeLastName} placeholder="Enter LastName" required="true" />
              <span class="errormessage" style={{display: validate.lastName.appeared}}>{validate.lastName.errMsg}</span>
            </Form.Group>
          </Form.Row>

          <Form.Row>
          <Form.Group as={Col} controlId="mobileNo">
              <Form.Label>MobileNo</Form.Label>
              <Form.Control name="mobileNo" value={mobileNo} type="text" onChange={onChangeMobileNo} placeholder="MobileNo" required="true" />
              <span class="errormessage" style={{display: validate.mobileNo.appeared}}>{validate.mobileNo.errMsg}</span>
            </Form.Group>
            <Form.Group as={Col} controlId="pincode">
              <Form.Label>Pincode</Form.Label>
              <Form.Control name="pincode" value={pincode}  type="text" onChange={onChangePincode} placeholder="Pincode" required="true" />
              <span class="errormessage" style={{display: validate.pincode.appeared}}>{validate.pincode.errMsg}</span>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control name="address" value={address} type="text" onChange={onChangeAddress} placeholder="Address" required="true" />
            </Form.Group>
          </Form.Row>
          
          <Form.Row>
            <Form.Group as={Col} controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control name="city" value={city} as="select" onChange={onChangeCity} required="true">
                <option selected="false">Choose...</option>
                <option>Hyderabad</option>
                <option>Bangalore</option> 
                <option>mumbai</option> 
                <option>Noida</option> 
                <option>Delemont</option> 
                <option>Schattdorf</option> 
                <option>Hawaii</option>
                <option>other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control name="state" value={state} as="select" onChange={onChangeState} required="true">
                <option selected="true">Choose...</option>
                <option>Telangana</option>
                <option>Karnataka</option>
                <option>Maharastra</option>
                <option>Uttar Pradesh</option>
                <option>Jura</option>
                <option>Uri</option>
                <option>New-Maxico</option>
                <option>New-York</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control name="country" value={country} as="select" onChange={onChangeCountry} required="true">
                <option selected="true">Choose...</option>
                <option>India</option>
                <option>Switzerland</option>
                <option>US</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="userName">
              <Form.Label>UserName</Form.Label>
              <Form.Control name="userName" value={userName} type="text" onChange={onChangeUserName} placeholder="UserName" required="true" />
              <span class="errormessage" style={{display: validate.userName.appeared}}>{validate.userName.errMsg}</span>
            </Form.Group>
            <Form.Group as={Col} controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" value={email} type="email" onChange={onChangeEmail} placeholder="Email" required="true" />
              <span class="errormessage" style={{display: validate.email.appeared}}>{validate.email.errMsg}</span>
            </Form.Group>
            <Form.Group as={Col} controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" value={password} type="password" onChange={onChangePassword} placeholder="Password" required="true" />
              <span class="errormessage" style={{display: validate.password.appeared}}>{validate.password.errMsg}</span>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group id="Finish">
              <Form.Check name="agreeBox" type="checkbox" label="Agree" style={{float:"left"}} checked="true" />
              <Button id="submitbutton" name="submit" variant="primary"  type="submit">Submit</Button>
            </Form.Group>
          </Form.Row>
        </Form>
      </div>
      <div id="outputscreen" style={{display: outputScreen}}>
        <h2 class="headings">Result</h2>
        <Registerd 
          firstName={firstName} 
          lastName={lastName} 
          mobileNo={mobileNo} 
          pincode={pincode}
          address={address}
          city={city}
          state={state}
          country={country}
          userName={userName}
          email={email}
          password={password}
        />
      </div>
    </div>  
  );
}

const Registerd = ({state}) => {
  return (
    <div id="outputscreenblock">
      FirstName: {state.firstName}<br/>
      LastName: {state.lastName}<br/>
      MobileNo: {state.mobileNo}<br/>
      Pincode: {state.pincode}<br/>
      Address: {state.address}<br/>
      City: {state.city}<br/>
      State: {state.state}<br/>
      Country: {state.country}<br/>
      UserName: {state.userName}<br/>
      Email: {state.email}<br/>
      Password: {state.password}<br/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    mobileNo: state.mobileNo,
    pincode: state.pincode,
    address: state.address,
    city: state.city,
    state: state.state,
    country: state.country,
    userName: state.userName,
    email: state.email,
    password: state.password,
    outputScreen: state.outputScreen
  }
}

const mapDispatchToProps = dispatch => ({
  onChangeFirstName: firstName => {
    // firstName.preventDefault();
    dispatch({type: 'CHANGE_FIRSTNAME', text: document.getElementById('firstName').value});
  },
  onChangeLastName: lastName => {
    // lastName.preventDefault(); 
    // dispatch(updateLastName(lastName));
    dispatch({type: 'CHANGE_LASTNAME', text: document.getElementById('lastName').value});
  },
  onChangeMobileNo: mobileNo => {
    // mobileNo.preventDefault();
    dispatch({type: 'CHANGE_MOBILENO', text: document.getElementById('mobileNo').value})
  },  
  onChangePincode: pincode => {
    // pincode.preventDefault();
    dispatch({type: 'CHANGE_PINCODE', text: document.getElementById('pincode').value});
  },  
  onChangeAddress: address => {
    // address.preventDefault();
    dispatch({type: 'CHANGE_ADDRESS', text: document.getElementById('address').value});
  },  
  onChangeCity: city => {
    // city.preventDefault();
    dispatch({type: 'CHANGE_CITY', text: document.getElementById('city').value});
  },   
  onChangeState: state => {
    // state.preventDefault();
    dispatch({type: 'CHANGE_STATE', text: document.getElementById('state').value});
  },  
  onChangeCountry: country => {
    // country.preventDefault(); 
    dispatch({type: 'CHANGE_COUNTRY', text: document.getElementById('country').value});
  },  
  onChangeUserName: userName => {
    // userName.preventDefault();
    dispatch({type: 'CHANGE_USERNAME', text: document.getElementById('userName').value});
  },  
  onChangeEmail: email => {
    // email.preventDefault();
    dispatch({type: 'CHANGE_EMAIL', text: document.getElementById('email').value});
  },  
  onChangePassword: password => {
    // password.preventDefault();
    dispatch({type: 'CHANGE_PASSWORD', text: document.getElementById('password').value});
  },
  handleClick: (validationObj) => {
    validationObj.preventDefault();
    dispatch({ type: 'REGULAR_EXPRESSION' })
  }
});

export default connect( mapStateToProps, mapDispatchToProps )(RegistrationForm)
//export default RegistrationForm