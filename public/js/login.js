/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alert';
export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'post',
      url: 'http://localhost:3000/api/v1/users/login',
      data: {
        email,
        password
      }
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Login Sucessfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 5500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async() => {
  try {
    const res =  await axios({
      method: 'get',
      url: 'http://localhost:3000/api/v1/users/logout'
    });
    if ((res.data.status = 'success')) location.reload(true);
  } catch (err) {
    console.log(err.response)
    showAlert('error', 'logout fail!Please Try Again');
  }
};
