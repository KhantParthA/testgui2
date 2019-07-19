import state from '../models/employeesModel'

const initialState = state;

//console.log(initialState);
const rootReducer = (state = initialState, action) => {
    if(action.type === 'STORE_STATE') {
        alert(action.type)
        console.log(JSON.stringify(state))
        // return Object.assign({}, state, action.text)
        return state
    }
}    
    // switch(action.type) {
    //     case 'CHANGE_FIRSTNAME':
    //         return Object.assign({}, state, {
    //             firstName: action.text
    //         })
    //     case 'CHANGE_LASTNAME':
    //         return Object.assign({}, state, {
    //             lastName: action.text
    //         })
    //     case 'CHANGE_MOBILENO':
    //         return Object.assign({}, state, {
    //             mobileNo: action.text
    //         })
    //     case 'CHANGE_PINCODE':
    //         return Object.assign({}, state, {
    //             pincode: action.text
    //         })
    //     case 'CHANGE_ADDRESS':
    //         return Object.assign({}, state, {
    //             address: action.text
    //         })                
    //     case 'CHANGE_CITY':
    //         return Object.assign({}, state, {
    //             city: action.text
    //         })
    //     case 'CHANGE_STATE':
    //         return Object.assign({}, state, {
    //             state: action.text
    //         })
    //     case 'CHANGE_COUNTRY':
    //         return Object.assign({}, state, {
    //             country: action.text
    //         })   
    //     case 'CHANGE_USERNAME':
    //         return Object.assign({}, state, {
    //             userName: action.text
    //         })    
    //     case 'CHANGE_EMAIL':
    //         return Object.assign({}, state, {
    //             email: action.text
    //         })    
    //     case 'CHANGE_PASSWORD':
    //         return Object.assign({}, state, {
    //             password: action.text
    //         })
    //     case 'REGULAR_EXPRESSION': 
    //         console.log(state)
    //         alert("ok Form Submited Sucessfully")
    //         return state;    
    //     default: 
    //         return state;    


export default rootReducer