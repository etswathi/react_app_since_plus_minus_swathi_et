import React from 'react';
import Allproducts from './product/Allproducts'
import {Switch,Route} from 'react-router-dom'
import Login from './login/login';
import Home from './home/home';
import Register from './register/register';
import Lifecycle from '../../lifecycle';
import Blogs from '../../blogs';
import Friend from '../../Friend';
import AddFriend from '../../Addfriend';
import EditFriend from '../../Editfriend';
class Content extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div><h1>content</h1>

<Switch>

<Route exact path="/" component={Home}></Route>
<Route path="/products" component={Allproducts}></Route>
<Route path="/login" component={Login}></Route>
<Route path="/register" component={Register}></Route>
<Route path="/lifecycle" component={Lifecycle}></Route>
<Route path="/blogs" component={Blogs}></Route>
<Route path="/friends" component={Friend}></Route>
<Route path="/addfriend" component={AddFriend}></Route>
<Route path="/editfriend" component={EditFriend}></Route>
</Switch>




            {/* <Allproducts></Allproducts> */}
            
            </div>
         );
    }
}
 
export default Content;