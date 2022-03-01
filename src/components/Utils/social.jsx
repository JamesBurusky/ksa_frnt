import wpImg from "../../assets/imgs/whatsapp.png";
import trImg from "../../assets/imgs/twitter.png";
import fbImg from "../../assets/imgs/facebook.png";
import igImg from "../../assets/imgs/instagram.png";

export default function Social(props) {
  return (
    <div className="social">
      <img src={fbImg} alt="" />
      <img src={wpImg} alt="" />
      <img src={trImg} alt="" />
      <img src={igImg} alt="" />
    </div>
  );
}
