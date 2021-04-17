const set_users=()=>{
    
    return (dispatch)=>{
        dispatch({
            type: "SETDATA",
            payload:{name:"Ahmad ",email:"Ahmad@gmail.com"}
             
        })
    }
  }
  export {set_users}
  