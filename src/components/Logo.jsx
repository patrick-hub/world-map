import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return  <Link to='/app' className={styles.main}>
  <img src="/icon.png" alt="Worldmap logo" className={styles.logo} />
  {/* <small>World Map</small> */}
  </Link>
}

export default Logo;
