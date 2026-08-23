import React from "react";
import styles from "./AllUsers.module.css";
import { Link } from "react-router";
import { APIData } from "../../global/APIData";
import { Spinner } from "../../components/spin/Spinner";

export const AllUsers = () => {
    const { error, isLoading, 
        data } = APIData.useAllusersQuery();
    
    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };

    return (
        <React.Fragment>
            {isLoading ? (
                <Spinner />
            ) : (
                <main>
                    {data && data.users.map((user) => (
                        <aside 
                            key={user.id} 
                            className={styles.user}
                        >
                            <Link to={`/user/${user.id}`}>
                                <h1>{user.firstName}</h1>
                            </Link>
                        </aside>
                    ))}                
                </main>
            )}
        </React.Fragment>
    );
};


