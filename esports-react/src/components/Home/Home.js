import React, {useEffect, useContext} from 'react';
import {useHistory} from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function Home() {
    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if(!userData.user) history.push("/login");
    }); // if gives issues add => ,[userData]

    return (
        <div>
             Home
        </div>
    )
}