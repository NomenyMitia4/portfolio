import style from "./home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Home()
{
  return(
    <>
      <div className={style.header}></div>
      <div className={style.home}>

        {/* Container starts here */}
        <div className={style.container}>
          <div className={style.menu}>
            <div className={style.item}>Home</div>
            <div className={style.item}>About</div>
            <div className={style.item}>Services</div>
            <div className={style.item}>Contact</div>
          </div>
          <div className={style.burger}>
            <FontAwesomeIcon icon={faBars} size="2x" width={30} height={30}/>
          </div>
          <h2>Hi, I am</h2>
          <h1>Nomeny Mitia</h1>
          <p>FullStack Developer</p>
          <div className={style.links}>
            <div className={style.btn}>
              <button className={style.btn_link}><a href="http://">DOWNLOAD CV</a></button>
              <div className={style.social_media}>
                <p>Join me here</p>
                <div className={style.social_media_icons}>
                  <FontAwesomeIcon icon={faFacebook} size="2x" width={40} height={40}/>
                  <FontAwesomeIcon icon={faLinkedin} size="2x" width={40} height={40}/>
                  <FontAwesomeIcon icon={faGithub} size="2x" width={40} height={40}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Container ends here */}

        <div className={style.scrolldown}>
          <div className={style.services}></div>

        </div>
      </div>
    </>
  )
}