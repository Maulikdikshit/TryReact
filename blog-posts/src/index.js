import React from 'react';
import ReactDom from 'react-dom';
import SingleComment  from './SingleComment';
import profile1 from './images/giely.jpg';
import profile2 from './images/yuji.jpg';
import profile3 from './images/images.jpg';
import UserCard from './UserCard';


const App = () => {
    return (
        <div className='ui comments'>
            <UserCard>
                <SingleComment 
                    name='Sara' 
                    date='Today at 5:00 pm' 
                    text='It is amazing' 
                    dp={profile1}>
                </SingleComment>
            </UserCard>
            
            <SingleComment name='Yuji' date='Today at 6:00 pm' text='Great job' dp={profile2}></SingleComment>
            <SingleComment name='Saaskenra' date='Today at 7:00 pm' text='Thanks' dp={profile3}></SingleComment>
            
        </div>
    )
}

ReactDom.render(
    <App/>,
    document.querySelector('#root')
)