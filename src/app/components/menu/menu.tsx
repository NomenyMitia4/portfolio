import style from "./menu.module.css"
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
    return (
        <>
            <div className={style.header}>
                <div className={style.items}>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/achievement"}>Achievement</Link>
                    <Link href={"/about"}>About</Link>
                </div>
            </div>
        </>
    )
}

export default Menu;


