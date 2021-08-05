import "./App.css";
import Layout from "./components/Layout/index.jsx";
import Contacts from "./components/Contact/contacts.jsx";

function App() {
  return (
    <div className="App">
      <Layout>
        <Contacts />
      </Layout>
    </div>
  );
}

export default App;
