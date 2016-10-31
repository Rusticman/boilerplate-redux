import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions'
const Homepage = () =>{

  return(

    <div >   I'm a homepage    </div>
  )


}


export default connect(null,actions)(Homepage);
