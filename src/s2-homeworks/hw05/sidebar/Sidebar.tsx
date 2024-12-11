import React, { FC, HTMLAttributes } from "react";
import { NavLink } from "react-router-dom";
import s from "./Sidebar.module.css";
import { PATH } from "../Pages";
import closeIcon from "./closeOutline.svg";

type PropsType = {
  open: boolean;
  handleClose: () => void;
};
type NavLinkType = {
  id: string;
  path: string;
  title: string;
};

const navLinks: NavLinkType[] = [
  { id: "hw5-pre-junior-link", path: PATH.PRE_JUNIOR, title: "Pre-junior" },
  { id: "hw5-junior-link", path: PATH.JUNIOR, title: "Junior" },
  { id: "hw5-junior-plus-link", path: PATH.JUNIOR_PLUS, title: "Junior Plus" },
];

export const Sidebar: FC<PropsType> = ({ open, handleClose }) => {
  const sidebarClass = s.sidebar + (open ? " " + s.open : "");

  return (
    <>
      {/*затемнение справа от открытого меню*/}
      {open && <div className={s.background} onClick={handleClose} />}

      <aside className={sidebarClass}>
        <button className={s.close} onClick={handleClose}>
          <img src={closeIcon} alt="close sidebar" id={"hw5-menu-close"} />
        </button>

        <nav id={"hw5-menu"} className={s.nav}>
          {navLinks.map(({ id, path, title }) => (
            <NavLink
              key={id}
              id={id}
              to={path}
              onClick={handleClose}
              className={({ isActive }) => (isActive ? s.active : "")}
            >
              {title}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};
