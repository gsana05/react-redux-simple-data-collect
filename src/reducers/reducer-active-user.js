export default function (state=null, action ) { // when the app boots up it returns state which is no user selected 
    switch(action.type) { // when user is clicked on returns data which is the payload from reducer-user 
        case "USER_SELECTED":
        return action.payload;
        default: return state; 
    }
    //return state; 

}

//switch is better way than using if statements 
// case --- If this is triggered return something 