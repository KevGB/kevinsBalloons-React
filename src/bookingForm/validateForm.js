export const validateForm = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!validEmail.test(values.email)) {
    errors.email = "Check that this is a valid email address";
  }

  if(!values.phone){
    errors.phone = "Required";
  }else if (!validPhone.test(values.phone)){
    errors.phone = "Only use numbers and spaces (and a + if you're including a country code)"
  }
  

};

const validPhone = /^(?:(\+\d+)[ -])?\(?\d{3}\)?[ -]?(\d{3})[ -]?(\d{4})$/g;
const validEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z.]+$/i;
