import style from "./about.module.css"
import Image from "next/image"
import Menu from "../components/menu/menu";

export default function About()
{
    return(
        <> 
            <div className={style.menu}>
                <Menu/>
            </div> 
            <div className={style.about}>
                <div className={style.timeline}>
                    <div className={`${style.container} ${style.left_container}`}>
                        <Image src={"/image/esmia_logo.jpg"} alt="ESMIA logo" width={40} height={40}/>
                        <div className={style.textbox}>
                            <h2>Ecole Supérieur de Management et Informatique Appliquée</h2>
                            <small>In progress</small>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis alias aut repudiandae quia sed, molestias dignissimos esse! Sunt consectetur aperiam enim velit temporibus, omnis assumenda mollitia earum in, ab quis.</p>
                            <span className={style.left_container_arrow}></span>
                        </div>
                    </div>
                    <div className={`${style.container} ${style.right_container}`}>
                        <Image src={"/image/esmia_logo.jpg"} alt="ESMIA logo" width={40} height={40}/>
                        <div className={style.textbox}>
                            <h2>Ecole Supérieur de Management et Informatique Appliquée</h2>
                            <small>2021 - 2024</small>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis alias aut repudiandae quia sed, molestias dignissimos esse! Sunt consectetur aperiam enim velit temporibus, omnis assumenda mollitia earum in, ab quis.</p>
                            <span className={style.right_container_arrow}></span>
                        </div>
                    </div>
                    <div className={`${style.container} ${style.left_container}`}>
                        <Image src={"/image/ltc.jpg"} alt="ESMIA logo" width={40} height={40}/>
                        <div className={style.textbox}>
                            <h2>Lycée Technique Professionnelle Ampefiloha</h2>
                            <small>2019 - 2021</small>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis alias aut repudiandae quia sed, molestias dignissimos esse! Sunt consectetur aperiam enim velit temporibus, omnis assumenda mollitia earum in, ab quis.</p>
                            <span className={style.left_container_arrow}></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}