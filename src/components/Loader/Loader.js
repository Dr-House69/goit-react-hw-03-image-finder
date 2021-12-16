import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "./Loader.module.scss";

function Spinner() {
  return (
    <>
      <Loader type="Bars" color="#037024" height={100} width={100} />
      <h2 className={s.text}>Loading...</h2>
    </>
  );
}

export default Spinner;
