//action creator 

export const selectUser = (user) => {
    console.log('wowwww you clicked on user', user.first)
   return {
       type: "USER_SELECTED",
       payload: user
   }
};