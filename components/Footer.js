import style from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div>
      <div className={style.footer}>
        <div className={style.content}>
          <div>
            <span>TIENDITECH</span>
          </div>

          <div>
            <span>
              <PhoneIcon className={style.icon} />
              +55 55 55 55 55
            </span>

            <span>
              <MailOutlineIcon className={style.icon} />
              example@tienditech.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}