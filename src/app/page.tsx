import style from "./home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import Menu from "./components/menu/menu";

export default function Home()
{
  return(
    <>
      <div className={style.header}></div>
      <div className={style.menu}>
        <Menu/>
      </div>
      <div className={style.home}>
        {/* Container starts here */}
        <div className={style.container}>
          <h2>Hi, I am</h2>
          <h1>Nomeny Mitia</h1>
          <p>Fullstack Developer</p>
          <div className={style.links}>
            <div className={style.btn}>
              <button className={style.btn_link}><a href="http://">RESUME</a></button>
              <div className={style.social_media}>
                <p>Join me here</p>
                <div className={style.social_media_icons}>
                  <FontAwesomeIcon className={style.icon} icon={faFacebook} size="2x" width={40} height={40}/>
                  <FontAwesomeIcon className={style.icon} icon={faLinkedin} size="2x" width={40} height={40}/>
                  <FontAwesomeIcon className={style.icon} icon={faGithub} size="2x" width={40} height={40}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Container ends here */}

        <div className={style.scrolldown}>
          <div className={style.services}>
            <div className={style.arrow_left}>
              <FontAwesomeIcon className={style.arrow} icon={faArrowAltCircleLeft} size="2x" width={70} height={70}/>
            </div>
            <div className={style.services_sections}>
              <div className={style.caption}>
                <h2>SERVICES</h2>
                <p>Struggling to keep up with the fast-paced world of technology?</p>
              </div>
              <div className={style.list_services}>
                <div className={style.service}>
                  <div className={style.service_logo}>
                    <img src={"/image/python.jpg"} alt="python logo" width={150} height={150}/>
                  </div>
                  <p className={style.title}>Backend Developer</p>
                  <p className={style.description}>In a fast-paced tech world, a skilled Python Backend Developer ensures your applications are built on a strong, scalable foundation. Whether launching a new product, scaling up, or optimizing performance, a Python developer delivers precision and expertise to help you succeed.</p>
                </div>
                <div className={style.service}>
                  <div className={style.service_logo}>
                    <img src={"/image/next.jpg"} alt="python logo" width={150} height={150}/>
                  </div>
                  <p className={style.title}>Frontend Developer</p>
                  <p className={style.description}>In a world where user experience is everything, a Next.js Developer can transform your web applications into fast, dynamic, and SEO-friendly platforms. Built on React, Next.js is the ultimate framework for modern web development, offering server-side rendering, static site generation, and seamless scalability.</p>
                </div>
                <div className={style.service}>
                  <div className={style.service_logo}>
                    <img src={"/image/ai.jpg"} alt="python logo" width={150} height={150}/>
                  </div>
                  <p className={style.title}>AI implementation</p>
                  <p className={style.description}>The future belongs to those who embrace AI today. By integrating AI into your business, you can unlock new opportunities, solve complex problems, and create smarter, more efficient systems. Don’t get left behind—harness the power of AI to drive innovation and growth.</p>
                </div>
              </div>
            </div>
            <div className={style.arrow_right}>
            <FontAwesomeIcon className={style.arrow} icon={faArrowAltCircleRight} size="2x" width={70} height={70}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}