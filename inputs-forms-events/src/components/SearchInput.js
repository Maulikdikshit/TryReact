import React from 'react';

class SearchInput extends React.Component{

    constructor(){
        super();
        // this.onFormSubmit = this.onFormSubmit.bind(this); First way of binding this(class object)
    }

    state={entry:''};

    // second way of binding this object i.e creation of arrow function
    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.entry);
        this.props.onSearchSubmit(this.state.entry);
    }

    // onFormSubmit(event){
    //     event.preventDefault();
    //     console.log(this.state.entry);
    // }

    onInputChange(event){
        // event.target.value
    }

    render(){
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form' action="">
                    <div className='field'>
                        <div className='ui massive icon input'>
                        <input type="text" placeholder='search...' 
                            onChange={(event) => this.setState({entry:event.target.value})}
                            value={this.state.entry}/>
                        <i className='search icon'></i>
                        </div>
                    </div>                    
                </form>
            </div>
        )
    }
}

export default SearchInput;