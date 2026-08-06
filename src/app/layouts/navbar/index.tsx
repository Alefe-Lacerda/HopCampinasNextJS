"use client";
import Image from "next/image";
import style from "./navbar.module.css";
import {
  InfoIcon,
  CalendarCheckIcon,
  ImagesIcon,
  NoteIcon,
  InstagramLogoIcon,
  FacebookLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <div className={style.bg}>
      <Image
        style={{ cursor: "pointer", margin: "12px" }}
        alt="Logo HOP"
        src="/images/logoHop.png"
        width={175}
        height={78}
        loading="eager"
        onClick={() => window.scrollTo({ top: 0 })}
      />
      <div className={style.line} />
      <div className={style.menu}>
        <a href="#sobre-nos">
          <InfoIcon size={28} />
          <span>Sobre nós</span>
        </a>
        <a href="#events">
          <CalendarCheckIcon size={28} />
          <span>Eventos</span>
        </a>
        <a>
          <ImagesIcon size={28} />
          <span>Mídias</span>
        </a>
        <a>
          <NoteIcon size={28} />
          <span>Blog</span>
        </a>
      </div>
      <div style={{ marginTop: "auto" }} className={style.line} />
      <div className={style.socialMediaMenu}>
        <a href="https://www.instagram.com/hopcampinas/" target="_blank" rel="noopener noreferrer">
          <InstagramLogoIcon size={32} />
        </a>
        <a href="https://www.facebook.com/hopcampinas" target="_blank" rel="noopener noreferrer">
          <FacebookLogoIcon size={32} />
        </a>
        <a
          href="https://www.youtube.com/@hopcampinas2818"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeLogoIcon size={32} />
        </a>
      </div>
      <span className={style.email}>contato@hopcampinas.com.br</span>
    </div>
  );
};

export default Navbar;
