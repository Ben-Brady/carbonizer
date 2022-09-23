import React from "react";
import Image from "next/future/image";
import Link from "next/link";
import styles from "./navbar.module.css";

export default React.memo(function NavigationBar() {
    return (
        <nav id={styles.navbar}>
            <Section
                name="Home"
                href="/"
                image="/images/home.svg"
            />
            <Section
                name="About"
                href="/about"
                image="/images/info.svg"
            />
        </nav>
    );
})


function Section({ href, image, name }) {
    return (
        <Link href={href}>
            <a className={styles.section}>
                <div className={styles.icon}>
                    <Image src={image} alt={name} height="24" width="24"  />
                </div>
                <span className="navbar-button-text">{name}</span>
            </a>
        </Link>
    );
    
}

