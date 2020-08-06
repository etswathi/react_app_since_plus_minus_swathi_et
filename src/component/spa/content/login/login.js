import React from 'react';
class Login extends React.Component {

    constructor(){
        super()
        this.state={

            friendName:'',
            renderCount:0
        }
    }



getName=(event)=>{



console.log(event)
this.setState({
    friendName:event.target.value
})

}

    render() { 

      
        return ( 

<div>
<form>

    <label>Name</label>
    <input type="text" id="friendName" onChange={this.getName}></input>
</form>
{this.state.friendName}


</div>




         );
    }
}
 
export default Login;