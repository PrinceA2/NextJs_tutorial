import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const userinfo = () => {
    const [userinfo,setuserinfo] = useState([]);
    const router = useRouter();

    console.log(userinfo);

    useEffect(() =>{
        const id = router.query.id;
        async function getuserbyId(id)
        {
           const data = await fetch(`https://dummyjson.com/users/${id}`);
           setuserinfo(await data.json());
        }
        getuserbyId(id);
    },[router.query.id]);

    return(
        <div>
            <h1>{userinfo.firstName}</h1>
            <h1>{userinfo.lastName}</h1>
        </div>
    )
};

export default userinfo;