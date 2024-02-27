import "./App.css";
import Header from "./components/Header";
import Titlebar from "./components/Titlebar";
import Form from "./components/Form";
import Sidetable from "./components/Sidetable";
import Resultbox from "./components/Resultbox";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import { fetchInitialState } from "./store/designSlice";
import store from "./store/index";
import { useEffect,useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const data = useSelector((store) => store.design);
  const dataView = useSelector((store) => store.result);
  const resultBox = useRef(null);

  useEffect(() => {
    store.dispatch(fetchInitialState());
  }, []);

  const handleButtonClick = () => {
    // Set focus to the input element when the button is clicked
    resultBox.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="row">
      {data.data.design.header.enable && <Header></Header>}
      {data.data.design.title.enable && <Titlebar></Titlebar>}
      {(data.data.design.tableimage.enable && (
        <div className="col-md-7 col-12 d-flex justify-content-center justify-content-md-end">
          <Form handleButtonClick={handleButtonClick}></Form>
        </div>
      )) || (
        <div className="col-md-11 col-12 d-flex justify-content-center justify-content-md-end">
          <Form></Form>
        </div>
      )}

      {data.data.design.tableimage.enable && (
        <div className="col-md-5 col-12 d-flex justify-content-center justify-content-md-start">
          <Sidetable></Sidetable>
        </div>
      )}
      
      { dataView.data.resultview && <Resultbox></Resultbox> }
      <div ref={resultBox}></div>
      {data.data.design.footer.enable && <Footer></Footer>}
    </div>
  );
}

export default App;
