import "./App.css";
import FormControl from "./components/FormControl";
import Sidebar from "./components/Sidebar";
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import stepStore from "./store";



function App() {
  return (
    <BrowserRouter>
    <Provider store={stepStore}>
    <section className="main">
      <Sidebar />
      <FormControl />
    </section>
    </Provider>
    </BrowserRouter>
    
  );
}

export default App;
