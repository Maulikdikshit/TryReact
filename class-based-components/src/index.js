import React from 'react';
import ReactDom from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';

// const App = () => {

//     window.navigator.geolocation.getCurrentPosition((position) => {console.log(position)},(error) => {console.log(error)});

//     return (
//         <div>
//             Hello World!
//         </div>
//     )
// }


class App extends React.Component{

    // constructor(props){
    //     super(props);
    //     console.log('constructor');
    //     this.state = { latitude: null,errorMessage:'' };        
    // }

    state = { latitude: null,errorMessage:'' };

    componentDidMount(){
        console.log('componentDidMount');
        window.navigator.geolocation.
        getCurrentPosition(
            (position) => {this.setState({latitude:position.coords.latitude})},
        (error) => {this.setState({errorMessage:error.message})}
        );
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    component


    render(){

        console.log('render');

        if(this.state.errorMessage && !this.state.latitude){
            return <div>{this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.latitude){
            return <div><HemisphereDisplay latitude = {this.state.latitude}></HemisphereDisplay></div>
        }
        else{
            return <div>Loading...</div>
        }
    }
}

ReactDom.render(
    <App/>,
    document.querySelector('#root')
)