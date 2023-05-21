import React from 'react';

class Card extends React.Component{

    componentDidMount(){
        console.log(this.props);
        // let user = this.props.match.params.user;

    }


    render(){
        return (
            <div className='ui raised very padded text container segment'
            style={{marginTop:'80px'}}
            >       
            <h3 className='ui header'>Card</h3>
        
        </div>
        )
    }
}

export default Card;