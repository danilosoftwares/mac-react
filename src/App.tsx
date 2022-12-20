import logo from './limpo.jpeg';
import { MenuMac } from './components/MenuMac';
import { Dock, DockItem } from './components/DockContainer';
import './App.css';
import { menu } from './data/menu';
import { RootState } from "./store";
import { useDispatch, useSelector } from 'react-redux';
import { increment } from "./store/store";
import { Desktop } from './components/Desktop';
import { useEffect, useState } from 'react';
import moment from 'moment/moment.js'

function App() {

  const dispatch = useDispatch();
  const listFinders = useSelector((state: RootState) => state.list);
  const [menuChanged, setMenuChanged] = useState(menu);

  useEffect(()=>{
    const newValue = {...menu};
    newValue.right[4].label = moment().format('ddd MMM DD');    
    newValue.right[5].label = moment().format('h:mm a');    
    setMenuChanged(newValue);
  },[]);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <MenuMac data={menuChanged} />
      <Desktop finders={listFinders ? listFinders : []}></Desktop>
      <Dock>
        <DockItem onClick={() => dispatch(increment())} source="/dock/Finder.png" ></DockItem>
        <DockItem source="/dock/Chrome.png" ></DockItem>
        <DockItem source="/dock/AppStore.png" ></DockItem>
        <DockItem source="/dock/Messages.png" ></DockItem>
        <DockItem source="/dock/maps.png" ></DockItem>
        <DockItem source="/dock/Contacts.png" ></DockItem>
        <DockItem source="/dock/email.png" ></DockItem>
        <DockItem source="/dock/Podcasts.png" ></DockItem>
        <DockItem source="/dock/Reminders.png" ></DockItem>
        <DockItem source="/dock/Notes.png" ></DockItem>
        <DockItem source="/dock/SystemPreferences.png" ></DockItem>
        <DockItem source="/dock/Bin.png" ></DockItem>
      </Dock>
    </div>
  );
}

export default App;
