import { useEffect, useState } from "react";
import Link from "next/link";


const Userdata = () => {    
    const [users, setUsers] = useState([]);

    console.log(users);

    useEffect(() => {
      async function fetchUsers() {
            const data = await fetch('https://dummyjson.com/users');
            setUsers(await data.json());
        }
        fetchUsers()
    },[]);

return (
<div>
<h1>Users</h1>
{users && 
    users.users &&
    users.users.map((emp) => <Link href={`/users/${emp.id}`} key={emp.id}> 
    <div>
    {emp.firstName}
    </div>
    </Link> 
)}
</div>
    );
};

export default Userdata;