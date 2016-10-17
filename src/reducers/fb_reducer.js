import {
USER
} from '../actions/type';

const INITIAL_STATE = {
                      user:'no user yet'
                    };
export default function(state = INITIAL_STATE,action){
  switch(action.type){
    case USER:
        return { ...state,user:action.payload}
  }
 return state;
}
