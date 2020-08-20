import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './UserList.css'

function UserList () {
const [listOfUser, setListOfUser] = useState([]);

useEffect (() => {
    const fetchData = async () => {
        const result = await axios.get( "https://jsonplaceholder.typicode.com/users");
        console.log(result.data);
 setListOfUser(result.data);
    }
    fetchData();
}, []);
  return (
    <ul>
      {listOfUser.map((item)=> (
     <div className='List'>
     <li>name: {item.name}</li>
     <li>useName: {item.userName}</li>
     <li>email :{item.name}</li>
     <li>address: 
         <ul>
     <li>street: {item.address.street}</li>
     <li>suite: {item.address.suite}</li>
     <li>city: {item.address.city}</li>
     <li>zip code: {item.address.zipcode}</li>
     <li>geo: 
         <ul>
     <li>lat: {item.address.geo.lat}</li>
     <li>lng: {item.address.geo.ing}</li>
    </ul></li>
      </ul></li>
      <li>phone: {item.phone}</li>
      <li>webSite: {item.webSite}</li>
      <li>company: 
          <ul>
      <li>name: {item.company.name}</li>
      <li>catchtPhrase: {item.company.catchtPhrase}</li>
      <li>bs: {item.company.bs}</li>
      </ul>
      </li>
      </div>
      ))}
          </ul>
      )
}

export default UserList
