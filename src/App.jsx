import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Progress from "./components/Progress/Progress";
import Ticket from "./components/Ticket/Ticket";

function App() {
  return (
    <>
      <div className="bg-gray-50">
        <Header></Header>
        <Ticket></Ticket>
        <Footer> </Footer>
      </div>
    </>
  );
}

export default App;
