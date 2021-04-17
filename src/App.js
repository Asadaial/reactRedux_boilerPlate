import './App.css';
import { connect } from 'react-redux';
import {set_users} from './store/action/index'
import react,{useEffect} from 'react'
function App(props) {
  useEffect(()=>{
    console.log("here is the added props",props.users)
  })

  return (
    <div>
     <h2>This is Redux boiler plate</h2>
     <button onClick={()=>props.set_users()}>Update</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
users:state.users
})
const mapDispatchToProp = (dispatch) => ({
  set_users: () => dispatch(set_users())
})


export default connect(mapStateToProps,mapDispatchToProp)(App);
