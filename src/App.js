import './App.scss';
import Header from './pages/Header/Header';
import Navbar from './pages/Navbar/Navbar';
import Profile from './pages/Profile/Profile';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  )
}

export default App;