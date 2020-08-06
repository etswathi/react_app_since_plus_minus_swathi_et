import React from 'react';
import Header from './spa/header/Header';
import Content from './spa/content/Content'

class RootComponent extends React.Component{

render(){


    return(


        <div><h1>Hello</h1>
        <Header></Header>
        <Content></Content>
        </div>
    )
}


}
export default RootComponent