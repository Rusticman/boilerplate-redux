import axios from 'axios';
import { browserHistory } from 'react-router';
import {
    USER
} from './types';

const ROOT_URL = 'http://localhost:3000';

export function signinUser() {
  return function(dispatch) {
    // Submit email/password to the server
    axios.get(`${ROOT_URL}/auth/facebook`)
      .then(response => {
    console.log('was i successful:', response.data.success)


      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        console.log('bad login info');


      });
  }
}
