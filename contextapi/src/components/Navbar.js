import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import {AuthContext} from '../contexts/AuthContext';
class Navbar extends React.Component{

    // static contextType = ThemeContext;

    render(){
        // const { isDarkTheme , darkTheme , lightTheme } = this.context;
        // const theme = isDarkTheme ? darkTheme : lightTheme ;
        return(
            <AuthContext.Consumer>{(authContext) => {
                return(
                    <ThemeContext.Consumer>{(context) => {
                        const { isDarkTheme , darkTheme , lightTheme } = context;
                        const { isLoggedIn, changeAuthStatus } =  authContext;
                        const theme = isDarkTheme ? darkTheme : lightTheme ;
                      return (
                        <nav style= {{background:theme.background, color: theme.text , height: '120px'}}>
                        <h2 style= {{textAlign: 'center'}}>
                            Oak Academy
                        </h2>
                        <p onClick={changeAuthStatus} style= {{textAlign: 'center'}}>{ isLoggedIn ? 'Logged In' : 'Logged out'}</p>
                        <div className='ui three buttons'>
                            <button className='ui button'>Overview</button>
                            <button className='ui button'>Contact</button>
                            <button className='ui button'>Support</button>
                        </div>
                    </nav>
                      )  
                    }}
        
                    </ThemeContext.Consumer>
                )
            }}

            </AuthContext.Consumer>
            
        )
    }
}


export default Navbar;