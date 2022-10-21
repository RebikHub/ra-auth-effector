import { responseUser } from "../effector/user";

// export async function fetchPostAuth(input) {
//   console.log(input);
//     await fetch(process.env.REACT_APP_AUTH, {
//       method: 'POST',
//       body: JSON.stringify(input)
//       })
//       .then(resp => {
//         if(resp.status === 400) {
//           localStorage.removeItem('token');
//           throw new Error('user not found');
//         }
//         return resp.json();
//       })
//       .then(token => {
//         localStorage.setItem('token', JSON.stringify(token));
//         fetchGetUser(token);
//       })
//       .catch(() => console.log('user not found'));
// };

// export async function fetchGetUser(token) {
//     fetch(process.env.REACT_APP_ME, {
//       method: 'GET',
//       headers: {
//         'Authorization': 'Bearer ' + token.token
//       }
//     })
//       .then(resp => {
//         if(resp.status === 401) {
//           localStorage.removeItem('token');
//           throw new Error('401 Unauthorized');
//         }
//         return resp.json();
//       })
//       .then(json => {
//         responseUser(json)
//         console.log(json);
//         // dispatch(getUserSuccess(json));
//         fetchGetNews(token);
//       })
//       .catch(() => console.log('401 Unauthorized'));
// };

export function fetchGetNews(token) {
  return (dispatch) => {
    // dispatch(getNewsRequest());
    fetch(process.env.REACT_APP_NEWS, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token.token
      }
    })
      .then(resp => {
        if(resp.status === 401) {
          localStorage.removeItem('token');
          throw new Error('401 Unauthorized not news');
        };
        return resp.json();
      })
      // .then(json => dispatch(getNewsSuccess(json)))
      .catch(() => console.log('401 Unauthorized not news'));
  };
};