import React from "react";
import styles from "./Posts.module.css";
import { APIData } from "../../global/APIData";
import { Spinner } from "../../components/spin/Spinner";

export const Posts = () => {
    const { error, isLoading, data } = APIData.useAllpostsQuery();

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
                    {data && data.posts.map((post) => (
                        <section key={post.id} className={styles.post}>
                            <h1>{post.title}</h1>
                        </section>
                    ))}
                </main>
            )}
        </React.Fragment>
    );
};


