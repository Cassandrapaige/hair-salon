import React, {useState, useEffect} from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom'


import Navbar from './components/navbar/navbar.component'
import Layout from './pages/layout/layout.component'
import ModalContainer from './components/modal/modal-container/modal-container.component'
import Video from './components/video/video.component'
import NavList from './components/nav-list/nav-list/nav-list.component'

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true)
    }, 1500)
  },[])

  const activateModal = () => setIsActive(false);

  return (
    <div className="App">
      <Navbar/>
      {isActive ? 
        <ModalContainer handleClick = {activateModal} />
        : ''
      }
      <Switch>
          <Route exact path='/' component={Layout} />
      </Switch>
</div>
  );
}

export default App;
