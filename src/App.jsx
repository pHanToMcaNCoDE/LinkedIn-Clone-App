import logo from './logo.svg';
import './App.css';
import Feed from './Components/Feed/Feed';
import Rightbar from './Components/Rightbar/Rightbar';
import Leftbar from './Components/Leftbar/Leftbar';
import Topbar from './Components/Topbar/Topbar';
// import { Posts } from "../src/data"

function App() {
  return (
    <div className="App">
        <Topbar></Topbar>
        <div className='max-width'>
          <Leftbar></Leftbar>
            <Feed></Feed>
          <Rightbar></Rightbar>
        </div>
    </div>
  );
}

export default App;
