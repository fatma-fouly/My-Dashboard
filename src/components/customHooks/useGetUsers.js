import { useEffect, useState} from "react";



export const useGetUsers = () => {
    const [users, setUsers] = useState([]);
     const GetUsers=   async ()=>{
        const response = await fetch(`https://dummyjson.com/users`);
        const data = await response.json();
        setUsers(data.users);
      } 
    
     useEffect(()=>{
       GetUsers();
     } , []) 

     return users;
    }