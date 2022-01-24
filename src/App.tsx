import React, { useState } from 'react';
import logo from './limpo.jpeg';
import { MenuMac } from './components/MenuMac';
import { Dock, DockItem } from './components/DockContainer';
import './App.css';
import { menu } from './data/menu';
import { Desktop } from './components/Desktop';

function App() {
  const [list, setList] = useState<Array<number>>([]);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />


      <MenuMac data={menu} />
      <Desktop finders={list}></Desktop>
      <Dock>
        <DockItem onClick={() => setList((oldState) => [...oldState, list.length])} source="/dock/finder.png" ></DockItem>
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

      {/*<AppleImage src={apple} alt="logo" />*/}
      {/* <MenuLeft>
      
          <NavBar >
            <NavUnordList>
              <NavListItem><AppleImage src={apple} alt="logo" />
                <NavUnordListSub>
                  <div>
                    <NavListItemSub><NavLabelSub>Undo Typing</NavLabelSub></NavListItemSub>
                    <NavListItemSub><NavLabelSub>Redo</NavLabelSub></NavListItemSub>
                    <NavListItemSubSeparete><div></div></NavListItemSubSeparete>
                    <NavListItemSub><NavLabelSub>Cut</NavLabelSub></NavListItemSub>
                    <NavListItemSub><NavLabelSub>Copy</NavLabelSub></NavListItemSub>
                    <NavListItemSub><NavLabelSub>Paste</NavLabelSub></NavListItemSub>
                    <NavListItemSub><NavLabelSub>Select All</NavLabelSub></NavListItemSub>
                    <NavListItemSubSeparete><div></div></NavListItemSubSeparete>
                    <NavListItemSub><NavLabelSub>Show Clipboard</NavLabelSub></NavListItemSub>

                    <NavListItemSub><NavLabelSub>Complete</NavLabelSub></NavListItemSub>
                    <NavListItemSub><NavLabelSub>Select All</NavLabelSub></NavListItemSub>
                    <NavListItemSubSeparete><div></div></NavListItemSubSeparete>
                    <NavListItemSub><NavLabelSub>Start Dictation…</NavLabelSub></NavListItemSub>
                    <NavListItemSub><NavLabelSub>Emoji 	&amp; Symbols</NavLabelSub></NavListItemSub>
                  </div>
                </NavUnordListSub>
              </NavListItem>
              <NavListItem><NavLabel>Finder</NavLabel></NavListItem>
              <NavListItem><NavLabel>File</NavLabel></NavListItem>
              <NavListItem><NavLabel>Edit</NavLabel>
                <NavUnordListSub>
                  <div>
                    <NavListItemSub><NavLabelSub>Undo Typing</NavLabelSub></NavListItemSub>
                    <NavListItemSub><NavLabelSub>Redo</NavLabelSub></NavListItemSub>
                    <NavListItemSubSeparete><div></div></NavListItemSubSeparete>
                    <NavListItemSub><NavLabelSub>Cut</NavLabelSub></NavListItemSub>
                    <NavListItemSub><NavLabelSub>Copy</NavLabelSub></NavListItemSub>
                    <NavListItemSub><NavLabelSub>Paste</NavLabelSub></NavListItemSub>
                    <NavListItemSub><NavLabelSub>Select All</NavLabelSub></NavListItemSub>
                    <NavListItemSubSeparete><div></div></NavListItemSubSeparete>
                    <NavListItemSub><NavLabelSub>Show Clipboard</NavLabelSub></NavListItemSub>

                    <NavListItemSub><NavLabelSub>Complete</NavLabelSub></NavListItemSub>
                    <NavListItemSub><NavLabelSub>Select All</NavLabelSub></NavListItemSub>
                    <NavListItemSubSeparete><div></div></NavListItemSubSeparete>
                    <NavListItemSub><NavLabelSub>Start Dictation…</NavLabelSub></NavListItemSub>
                    <NavListItemSub><NavLabelSub>Emoji 	&amp; Symbols</NavLabelSub></NavListItemSub>
                  </div>
                </NavUnordListSub>
              </NavListItem>
              <NavListItem><NavLabel>View</NavLabel>
                <NavUnordListSub>
                  <div>
                    <NavListItemSub><NavLabelSub>as Icon</NavLabelSub></NavListItemSub>
                    <NavListItemSub><NavLabelSub>as List</NavLabelSub></NavListItemSub>
                    <NavListItemSub><NavLabelSub>as Columns</NavLabelSub></NavListItemSub>
                    <NavListItemSub><NavLabelSub>as Gallery</NavLabelSub></NavListItemSub>
                    <NavListItemSubSeparete><div></div></NavListItemSubSeparete>
                    <NavListItemSub><NavLabelSub>Use Stacks</NavLabelSub></NavListItemSub>
                    <NavListItemSub><NavLabelSub>Sorte by</NavLabelSub>
                      <NavUnordListSubLast>
                        <div>
                          <NavListItemSub><NavLabelSub>Undo Typing</NavLabelSub></NavListItemSub>
                          <NavListItemSub><NavLabelSub>Redo</NavLabelSub></NavListItemSub>
                          <NavListItemSub><NavLabelSub>Cut</NavLabelSub></NavListItemSub>
                          <NavListItemSub><NavLabelSub>Copy</NavLabelSub></NavListItemSub>
                          <NavListItemSub><NavLabelSub>Paste</NavLabelSub></NavListItemSub>
                          <NavListItemSub><NavLabelSub>Sorte by</NavLabelSub>
                            <NavUnordListSubLast>
                              <div>
                                <NavListItemSub><NavLabelSub>Undo Typing</NavLabelSub></NavListItemSub>
                                <NavListItemSub><NavLabelSub>Redo</NavLabelSub></NavListItemSub>
                                <NavListItemSub><NavLabelSub>Cut</NavLabelSub></NavListItemSub>
                                <NavListItemSub><NavLabelSub>Copy</NavLabelSub></NavListItemSub>
                                <NavListItemSub><NavLabelSub>Paste</NavLabelSub></NavListItemSub>
                              </div>
                            </NavUnordListSubLast>
                          </NavListItemSub>
                        </div>
                      </NavUnordListSubLast>
                    </NavListItemSub>
                    <NavListItemSub><NavLabelSub>Clear Up</NavLabelSub></NavListItemSub>
                    <NavListItemSub><NavLabelSub>Clear Up By</NavLabelSub></NavListItemSub>
                  </div>
                </NavUnordListSub>

              </NavListItem>
              <NavListItem><NavLabel>Go</NavLabel></NavListItem>
              <NavListItem><NavLabel>Window</NavLabel></NavListItem>
              <NavListItem><NavLabel>Help</NavLabel></NavListItem>
            </NavUnordList>
          </NavBar>
        </MenuLeft> */}
      {/* <MenuRight>

          <AppleImage src={battery} alt="logo" />
          <AppleImage src={switch_img} alt="logo" />
          <AppleImage src={search} alt="logo" />
          <AppleImage src={wifi} alt="logo" />
          <LabelTitle>Seg Jun 22</LabelTitle>
          <LabelTitle>9:41 AM</LabelTitle>
        </MenuRight> */}

      {/* <header className="App-header">


      </header> */}
    </div>
  );
}

export default App;
