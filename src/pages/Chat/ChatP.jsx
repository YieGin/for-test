import '../../App.css';
import Sidebar from '../../components/Sidebar';
import ChatPage from './ChatPage';

function App() {
  return (
    <div className="App">
      <div className="AppGlassChat">
        <Sidebar/>
        <ChatPage/>
      </div>
    </div>
  );
}

export default App;
