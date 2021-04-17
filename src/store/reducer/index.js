const INITIAL_STATE={
   users: [{name:"Asad Iqbal", email:"aiakhokhar@gmail.com"}]
}
export default (state=INITIAL_STATE,action)=>{
   switch (action.type){
       case "SETDATA":
           return({
               ...state,
               users:[...state.users,action.payload]
           })
   }
    return state;
    
}