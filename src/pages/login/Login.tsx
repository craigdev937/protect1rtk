import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import { APIData } from "../../global/APIData";
import { UAD } from "../../global/Hooks";
import { setUser } from "../../global/AuthSlice";
import { LSchema } from "../../validation/Schema";
import type { LType } from "../../validation/Schema";

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [logUser, { isLoading, error }] = APIData.useLogMutation();
    const dispatch = UAD();
    const navigate = useNavigate();
    const { register, handleSubmit,
        formState: { errors }} = useForm<LType>({
        resolver: zodResolver(LSchema)
    });

    const onSubmit = async (data: LType) => {
        const result = await logUser(data);
        if (result.data) {
            dispatch(setUser(result.data));
            alert("The User has successfully logged in!");
            navigate("/");
        }
    };

    const errorMessage = error
        ? ("data" in error &&
            typeof error.data === "object" &&
            error.data !== null &&
            "message" in error.data
            ? String((error.data as { message: unknown }).message)
            : "Invalid username or password")
        : null;

    return (
        <main className={styles.form}>
            <section className={styles.card}>
                <div className={styles.avatar}>
                    <User size={32} />
                </div>
                <h1 className={styles.title}>Login</h1>
                <p className={styles.subtitle}>
                    Sign in to continue to your account
                </p>

                {errorMessage &&
                    <p className={styles.formError}
                        >{errorMessage}
                    </p>
                }

                <form
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <section className={styles.field}>
                        <label
                            className={styles.label}
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <aside className={styles.inputWrapper}>
                            <User
                                className={styles.inputIcon}
                                size={18}
                            />
                            <input
                                id="username"
                                className={styles.input}
                                placeholder="Enter your username"
                                autoComplete="username"
                                {...register("username")}
                            />
                        </aside>
                        {errors.username &&
                            <p className={styles.fieldError}>
                                {errors.username?.message}
                            </p>}
                    </section>

                    <section className={styles.field}>
                        <label
                            className={styles.label}
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <aside className={styles.inputWrapper}>
                            <Lock
                                className={styles.inputIcon}
                                size={18}
                            />
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                className={styles.input}
                                placeholder="Enter your password"
                                autoComplete="current-password"
                                {...register("password")}
                            />
                            <button
                                type="button"
                                className={styles.toggleBtn}
                                aria-label={showPassword ?
                                    "Hide password" : "Show password"}
                                onClick={() =>
                                    setShowPassword((prev) => !prev)}
                            >
                                {showPassword ?
                                    <EyeOff size={18} /> :
                                    <Eye size={18} />}
                            </button>
                        </aside>
                        {errors.password &&
                            <p className={styles.fieldError}>
                                {errors.password?.message}
                            </p>}
                    </section>

                    <section className={styles.options}>
                        <label className={styles.checkboxLabel}>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a
                            className={styles.forgotLink}
                            href="#"
                        >
                            Forgot password?
                        </a>
                    </section>

                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={isLoading}
                    >
                        {isLoading ? "Logging in..." : "Log In"}
                    </button>
                </form>
            </section>
        </main>
    );
};


