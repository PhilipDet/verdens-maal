import { NavbarStyled } from "./navbar.styled";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <NavbarStyled>
            <ul>
                <li>
                    <img src="./src/assets/logo.png" alt="Logo" />
                </li>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-active" : ""
                        }
                    >
                        Verdensmålene
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/education"
                        className={({ isActive }) =>
                            isActive ? "nav-active" : ""
                        }
                    >
                        Undervisning
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/own-goal"
                        className={({ isActive }) =>
                            isActive ? "nav-active" : ""
                        }
                    >
                        Byg dit eget mål
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/faq"
                        className={({ isActive }) =>
                            isActive ? "nav-active" : ""
                        }
                    >
                        FAQ
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "nav-active" : ""
                        }
                    >
                        Kontakt os
                    </NavLink>
                </li>
            </ul>
        </NavbarStyled>
    );
};
