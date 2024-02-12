import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormList, Imput, Submit, Forma } from './RegisterFormStyled';

const RegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = values => {
    // Тут ви можете реалізувати логіку обробки даних форми, наприклад, відправку їх на сервер або локальне збереження.
    console.log('Submitted:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Forma>
          <FormList>
            <li>
              <Imput type="text" id="name" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" />
            </li>
            <li>
              <Imput type="email" id="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </li>
            <li>
              <Imput
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
              />
              <ErrorMessage name="password" component="div" />
            </li>
          </FormList>
          <Submit type="submit">Submit</Submit>
        </Forma>
      )}
    </Formik>
  );
};

export default RegistrationForm;

// const RegisterForm = () => {
//   return (
//     <form>
//       <input id="Name" name="name" type="text" placeholder="Name" />
//       <input id="Email" name="email" type="email" placeholder="Email" />
//       <input
//         id="Password"
//         name="password"
//         type="password"
//         placeholder="Password"
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default RegisterForm;
