import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import LatestRelease from './components/LatestRelease';
import horrors from './data/horror.json'
import scifi from './data/scifi.json'
import romance from './data/history.json'
import MyFooter from './components/MyFooter';

function App() {
  return (
    <>
       <MyNav/>
      <Welcome/>
      <LatestRelease horror ={horrors} romance={romance} scifi={scifi}/>
      <MyFooter/>
   </>
  );
}

export default App;
