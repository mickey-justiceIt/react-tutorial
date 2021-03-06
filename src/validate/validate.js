export const authValidate = (values) => {
  const currentUserInfo =JSON.parse(localStorage.getItem("CURRENT USER")) || null;
  const errors = {};
  // Sign up
  if (values.firstName.length < 6) {
    errors.firstName = "Must be 6 characters or more";
  } else if (values.lastName.length < 6) {
    errors.lastName = "Must be 6 characters or more";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
      values.password
    )
  ) {
    errors.password =
      "Password must have 1 number,1 small letter,1 big letter and 1 symbol";
  } else if (values.password !== values.repeatPassword) {
    errors.password = "Password mismatch";
  }
  return errors;
};

export const cabinetValidate = (values) => {
  const errors = {};

  if (values.firstName.length < 6) {
    errors.firstName = "Must be 6 characters or more";
  }
  if (values.lastName.length < 6) {
    errors.lastName = "Must be 6 characters or more";
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email";
  }
  if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
          values.password
      )
  ) {
    errors.password =
        "Password must have 1 number,1 small letter,1 big letter and 1 symbol";
  }
  if (values.password !== values.repeatPassword) {
    errors.password = "Password mismatch";
  }
  return errors;
};
