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
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const data = useSelector((store) => store.design);
  useEffect(() => {
    store.dispatch(fetchInitialState());
  }, []);

  return (
    <div className="row">
      {data.data.design.header.enable && <Header></Header>}
      {data.data.design.title.enable && <Titlebar></Titlebar>}
      <Form></Form>
      {data.data.design.tableimage.enable && <Sidetable></Sidetable>}
      <Resultbox></Resultbox>
      {data.data.design.footer.enable && <Footer></Footer>}
    </div>
  );
}

export default App;
