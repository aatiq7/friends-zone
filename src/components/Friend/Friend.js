import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Friend.css'


const Friend = (props) => {
    const {name, img, email, salary, phone} = props.user;
    const handleOnClick = props.handleOnClick;
    const friendStyle = {
        display: 'flex', 
        width: '100%',
        borderBottom: '1px solid gray',
        margin: '10px 20px'
    }
    const imgStyle = {
        height:'150px',
        width: '150px', 
        borderRadius: '50%',
        marginTop: '15px',
        marginLeft: '50px'
    }
    return (
        <div style ={friendStyle}>
           <img style={imgStyle} src={img} alt=""/>
           <div style = {{marginLeft: '20px'}}>
               <h3>Name: {name}</h3>
                <p><small>Phone: </small> {phone}</p>
                <p><small>Email: </small> {email}</p>
                <p>Yearly Salary: {salary * 12}</p>
           </div>
           <div style ={{display: 'flex', alignItems: 'center', marginLeft: 'auto'}}>
           <button className="main-btn" style={{height:'30px'}} onClick={() => handleOnClick(props.user)}><FontAwesomeIcon icon={faUserPlus} /> Add Friend</button>
           </div>
        </div>
    );
};

export default Friend;