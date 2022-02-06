import logo from './limpo.jpeg';
import { MenuMac } from './components/MenuMac';
import { Dock, DockItem } from './components/DockContainer';
import './App.css';
import { menu } from './data/menu';
import { RootState } from "./store";
import { useDispatch, useSelector } from 'react-redux';
import { increment } from "./store/store";
import { Desktop } from './components/Desktop';

function App() {

  const dispatch = useDispatch();
  const listFinders = useSelector((state: RootState) => state.list)

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <MenuMac data={menu} />
      <Desktop finders={listFinders ? listFinders : []}></Desktop>
      <Dock>
        <DockItem onClick={() => dispatch(increment())} source="/dock/finder.png" ></DockItem>
        <DockItem source="/dock/Chrome.png" ></DockItem>
        <DockItem source="/dock/AppStore.png" ></DockItem>
        <DockItem source="/dock/Messages.png" ></DockItem>
        <DockItem source="/dock/maps.png" ></DockItem>
        <DockItem source="/dock/contacts.png" ></DockItem>
        <DockItem source="/dock/email.png" ></DockItem>
        <DockItem source="/dock/podcasts.png" ></DockItem>
        <DockItem source="/dock/Reminders.png" ></DockItem>
        <DockItem source="/dock/notes.png" ></DockItem>
        <DockItem source="/dock/SystemPreferences.png" ></DockItem>
        <DockItem source="/dock/bin.png" ></DockItem>
      </Dock>
    </div>
  );
}

export default App;
