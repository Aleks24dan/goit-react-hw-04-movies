import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function App()  {

  return(
  <div className="loaderContainer">
  <Loader type="Puff" color="#00BFFF" height={80} width={80} />
  </div>)
  }