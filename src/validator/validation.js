export default {
    validated: false,
    firstName: {
      exp: /^[A-Za-z]{5,10}$/, 
      errMsg: '*firstName contain only letter and firstName length is 5 to 10',
      appeared: 'none'
    },
    lastName: {
      exp: /^[A-Za-z]{5,10}$/, 
      errMsg: '*lastName contain only letter and lastName length is 5 to 10',
      appeared: 'none'
    },
    mobileNo: {
      exp: /^\d{10}$/, 
      errMsg: '*mobileNo contains fix 10 digits number only',
      appeared: 'none'
    },
    pincode: {
      exp: /^\d{6}$/, 
      errMsg: '*pincode cotains fix 6 digits number only',
      appeared: 'none'
    },
    userName: {
      exp: /^[A-Za-z0-9_-]{3,15}$/, 
      errMsg: '*Input userName with 7 to 14 characters',
      appeared: 'none'
    },
    email: {
      exp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
      errMsg: '*Email not in format',
      appeared: 'none'
    },
    password: {
      exp: /^[A-Za-z0-9]\w{7,14}$/, 
      errMsg: '*Input Password with 7 to 14 characters',
      appeared: 'none'
    }
  }