/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alert';

// export const updateSettings=async(name,email)=>{
//     try{
//     const res=await axios({
//         method:'patch',
//         url:'http://localhost:3000/api/v1/users/updateMe',
//         data:{
//             name,
//             email
//         }
//     })
//     if(res.data.status==='success'){
//         showAlert('success','Data Updated Sucessfully')
//     }
//     }catch(err){
//        showAlert('error',err.response.data.message)
//     }
// }

export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? 'http://localhost:3000/api/v1/users/updateMyPassword'
        : 'http://localhost:3000/api/v1/users/updateMe';

   const  res = await axios({
      method: 'patch',
      url,
      data
    });
    if (res.data.status === 'success') {
      showAlert('success', `${type} Updated Sucessfully`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
