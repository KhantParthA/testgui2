import { bindActionCreators } from 'redux';

export const updateFirstName = firstName => ({ type: 'CHANGE_FIRSTNAME', payload: firstName })
export const updateLastName = lastName => ({ type: 'CHANGE_LASTNAME', payload: lastName })
export const updateMobileNo = mobileNo => ({ type: 'CHANGE_MOBILENO', payload: mobileNo })
export const updatePincode = pincode => ({ type: 'CHANGE_PINCODE', payload: pincode })
export const updateAddress = address => ({ type: 'CHANGE_ADDRESS', payload: address })
export const updateCity = city => ({ type: 'CHANGE_CITY', payload: city })
export const updateState = state => ({ type: 'CHANGE_STATE', payload: state })
export const updateCountry = country => ({ type: 'CHANGE_COUNTRY', payload: country })
export const updateUserName = userName => ({ type: 'CHANGE_USERNAME', payload: userName })
export const updateEmail = email => ({ type: 'CHANGE_EMAILID', payload: email })
export const updatePassword = password => ({ type: 'CHANGE_PASSWORD', payload: password })
//export const validateData = validationObj => ({ type: 'REGULAR_EXPRESSION', payload: validationObj })

// export const actionCreators = bindActionCreators(
//   { updateFirstName, updateLastName, updateMobileNo, updatePincode, updateAddress, updateCity, updateState, updateCountry, updateUserName, updateEmail, updatePassword }, 
//   store.dispatch
// ) 
