import React, { Component }  from 'react';
const validation = {
  usertype: {
    presence: {
      allowEmpty: false,
      message: '^ Select your type'
    }
  },
  username: {
    presence: {
      allowEmpty: false,
      message: '^Username is required'
    }
  },
  orgname: {
    presence: {
      allowEmpty: false,
      message: '^Organisation name is required'
    }
  },
  email: {
    presence: {
      allowEmpty: false,
      message: '^Email address is required'
    },
    email: {
      message: '^Please enter a valid email address'
    }
  },
  
  phone: {
    presence: {
      allowEmpty: false,
      message: "^Phone number is required"
    },
    format: {
      pattern: /^[0-9]\d{9}$/,
      message: "^Phone number must be in 10-digits"
    }
  },
  
  address: {
    presence: {
      allowEmpty: false,  
      message: '^Address is required'
    },
    length: {
      maximum: 100,
    }
  },

  landmark: {
    presence: {
      allowEmpty: true,  
    }
  },

  password: {
    presence: {
      allowEmpty: false,  
      message: '^Password is required'
    },
    length: {
      minimum: 6,
      maximum: 16,
      message: '^Your password must be at least 6 characters and maximum of 16 characters'
    }
  },

   confirmPassword: {
     equality: {
       attribute: 'password',
       message: " didn't match",
       comparator: function(v1, v2) {
        return JSON.stringify(v1) === JSON.stringify(v2);
              }
     }
  }
}

export default validation;