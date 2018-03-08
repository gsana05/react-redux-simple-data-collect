import React, { Component } from 'react';
import {bindActionCreators} from 'redux'; 
import { connect } from 'react-redux'; 
import { selectUser } from '../actions/index'; 


class UserList extends Component {

    createListItems() {
        return this.props.users.map((user) => {
            return (
                <li 
                key={user.id}
                onClick={() => this.props.selectUser(user)}
                >
                {user.first} {user.last}
                </li> 
            )
        })
    }

     render() {
         return(
             <ul>
                 {this.createListItems()}
             </ul> 
         );
     }
}

//considered the container section  
function mapStateToProps(state) {
   return {
       users: state.users 
   }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectUser:selectUser}, dispatch)
}

 //connects function with class component to call on data
export default connect(mapStateToProps, matchDispatchToProps)(UserList); 
