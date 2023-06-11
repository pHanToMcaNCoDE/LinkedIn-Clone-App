import logo from './logo.svg';
import './App.css';
import Feed from './Components/Feed/Feed';
import Rightbar from './Components/Rightbar/Rightbar';
import Leftbar from './Components/Leftbar/Leftbar';
import Topbar from './Components/Topbar/Topbar';

function App() {
  return (
    <div className="App">
      <>
        <Topbar></Topbar>
        <Leftbar></Leftbar>
        <Feed></Feed>
        <Rightbar></Rightbar>
      </>
    </div>
  );
}

export default App;
