import React from "react";
import classes from "./Navbar.module.css";
import { Link, Outlet } from "react-router";
import { Sun, Moon } from "lucide-react";
import { UAS, UAD } from "../global/Hooks";
import { toggleTheme } from "../global/ThemeSlice";
import LOGO from "@public/star.png";

export const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const dispatch = UAD();
    const mode = UAS((state) => state.theme.mode);
    const handleClick = () => setOpen(!open);
    const closeMenu = () => setOpen(false);

    return (
        <React.Fragment>
            <header className={classes.nav__header}>
                <nav className={classes.nav}>
                    <Link
                        to={"/"}
                        className={classes.nav__logo}
                    >
                        <img 
                            alt="CSS" 
                            src={LOGO}
                            className={classes.nav__img}
                        />
                    </Link>

                    {/* THEME TOGGLE */}
                    <button
                        className={classes.nav__theme}
                        type="button"
                        aria-label={mode === "dark"
                            ? "Switch to Light Mode"
                            : "Switch to Dark Mode"
                        }
                        title={mode === "dark"
                            ? "Switch to Light Mode"
                            : "Switch to Dark Mode"
                        }
                        onClick={() => dispatch(toggleTheme())}
                    >
                        {mode === "dark" ? (
                            <Sun className={classes.nav__icon} />
                        ) : (
                            <Moon className={classes.nav__icon} />
                        )}
                    </button>

                    {/* NAV MENU BUTTON */}
                    <button
                        className={classes.nav__button}
                        type="button"
                        aria-label="toggle"
                        aria-expanded={open}
                        onClick={handleClick}
                    >
                        <aside className={`
                            ${classes.nav__burger} 
                            ${open ? classes.open : ""}
                        `}>
                            <span className={classes.nav__line} />
                            <span className={classes.nav__line} />
                            <span className={classes.nav__line} />
                        </aside>
                    </button>

                    {/* SIDEBAR AND CONTAINER QUERIES */}
                    <menu className={open ?
                        `${classes.nav__menu} ${classes.active}`
                        : `${classes.nav__menu}`
                    }> 
                        <li className={classes.nav__item}>
                            <Link
                                to={"/posts"}
                                className={classes.nav__links}
                                onClick={closeMenu}
                            >
                                Posts
                            </Link>
                        </li>

                        <li className={classes.nav__item}>
                            <Link
                                to={"/login"}
                                className={classes.nav__links}
                                onClick={closeMenu}
                            >
                                Login
                            </Link>
                        </li>

                        {/* Protected Links */}
                        <li className={classes.nav__item}>
                            <Link
                                to={"/users"}
                                className={classes.nav__links}
                                onClick={closeMenu}
                            >
                                All Users
                            </Link>
                        </li>
                    </menu>
                </nav>
            </header>
            <Outlet />
        </React.Fragment>
    );
};



