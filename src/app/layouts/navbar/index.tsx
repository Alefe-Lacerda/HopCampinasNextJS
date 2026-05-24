"use client";
import Image from "next/image";
import style from "./navbar.module.css";
import { InfoIcon, CalendarCheckIcon, ImagesIcon, NoteIcon } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <div className={style.bg}>
      <Image
        style={{ cursor: "pointer", margin: "12px" }}
        alt="Logo HOP"
        src="/logoHop.png"
        width={175}
        height={78}
        loading="eager"
      />
      <div className={style.line} />
      <div className={style.menu}>
        <a className={style.menuItem}>
          <InfoIcon size={28} />
          <span>Sobre nós</span>
        </a>
        <a className={style.menuItem}>
          <CalendarCheckIcon size={28} />
          <span>Eventos</span>
        </a>
        <a className={style.menuItem}>
          <ImagesIcon size={24} />
          <span>Mídias</span>
        </a>
        <a className={style.menuItem}>
          <NoteIcon size={24} />
          <span>Blog</span>
        </a>
      </div>
      <div style={{ top: "50px" }} className={style.line} />
    </div>
  );
};

export default Navbar;
