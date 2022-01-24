import apple from '../images/apple.svg';
import wifi from '../images/wifi.svg';
import search from '../images/search.svg';
import battery from '../images/battery.100.svg';
import switch_img from '../images/switch.svg';

export const menu = {
  left: [
    {
      image: apple,
      child: [
        {
          label: "About This Mac"
        },
        {
          label: "-"
        },
        {
          label: "System Preferences..."
        },
        {
          label: "App Store..."
        },
        {
          label: "-"
        },
        {
          label: "Recent Items..."
        },
        {
          label: "Force Quit Finder",
          shortcut: "⌥⇧⌘Q"
        },
        {
          label: "-"
        },
        {
          label: "Sleep..."
        },
        {
          label: "Restart..."
        },
        {
          label: "Shut Down..."
        },
        {
          label: "-"
        },
        {
          label: "Lock Screen...",
          shortcut: "⌃⌘Q"
        },
        {
          label: "Log Out Big Sur...",
          shortcut: "⇧⌘Q"
        }
      ]
    },
    {
      label: "Finder",
      child: [
        {
          label: "About Finder"
        },
        {
          label: "-"
        },
        {
          label: "Preferences...",
          shortcut: "⌘,"
        },
        {
          label: "-"
        },
        {
          label: "Empty Trash..."
        },
        {
          label: "-"
        },
        {
          label: "Hide Finder",
          shortcut: "⌘H"
        },
        {
          label: "Hide Others",
          shortcut: "⌥⌘H"
        },
      ]
    },
    {
      label: "File",
      child: [
        {
          label: "New Finder Window",
          shortcut: "⌘N"
        },
        {
          label: "New Folder",
          shortcut: "⇧⌘N"
        },
        {
          label: "New Folder with Selection",
          shortcut: "ˆ⌘N"
        },
        {
          label: "New Smart Folder"
        },
        {
          label: "New Tab",
          shortcut: "⌘T"
        },
        {
          label: "Open",
          shortcut: "⌘O"
        },
        {
          label: "Print",
          shortcut: "⌘P"
        },
        {
          label: "Close Window",
          shortcut: "⌘W"
        },
        {
          label: "-"
        },
        {
          label: "Get Info",
          shortcut: "⌘I"
        },
        {
          label: "Rename"
        },
        {
          label: "-"
        },
        {
          label: "Compress"
        },
        {
          label: "-"
        },
        {
          label: "Duplicate",
          shortcut: "⌘D"
        },
        {
          label: "Make Alias",
          shortcut: "ˆ⌘A"
        },
        {
          label: "Quick Look",
          shortcut: "⌘Y"
        },
        {
          label: "Show Original"
        },
        {
          label: "Add Dock"
        },
        {
          label: "-"
        },
        {
          label: "Move to Trash"
        },
        {
          label: "Eject",
          shortcut: "⌘E"
        },
        {
          label: "-"
        },
        {
          label: "Find",
          shortcut: "⌘F"
        },
      ]
    },
    {
      label: "Edit",
      child: [
        {
          label: "Undo",
          shortcut: "⌘Z"
        },
        {
          label: "Redo",
          shortcut: "⇧⌘Z"
        },
        {
          label: "-"
        },
        {
          label: "Cut",
          shortcut: "⌘X"
        },
        {
          label: "Copy",
          shortcut: "⌘C"
        },
        {
          label: "Paste",
          shortcut: "⌘V"
        },
        {
          label: "Select All",
          shortcut: "⌘A"
        },
        {
          label: "-"
        },
        {
          label: "Show Clipboard"
        },
        {
          label: "-"
        },
        {
          label: "Start Dictation…"
        },
        {
          label: "Emoji 	&amp; Symbols",
          shortcut: "ˆ⌘Space"
        },
      ]
    },
    {
      label: "View",
      child: [
        {
          label: "as Icon",
          shortcut: "⌘1"
        },
        {
          label: "as List",
          shortcut: "⌘2"
        },
        {
          label: "as Columns",
          shortcut: "⌘3"
        },
        {
          label: "as Gallery",
          shortcut: "⌘4"
        },
        {
          label: "-"
        },
        {
          label: "Use Stacks",
          shortcut: "ˆ⌘O"
        },
        {
          label: "Sorte by",
          child: [
            {
              label: "None"
            },
            {
              label: "-"
            },
            {
              label: "Snap to Grid"
            },
            {
              label: "-"
            },
            {
              label: "Name"
            },
            {
              label: "Kind"
            },
            {
              label: "Date Last Opened"
            },
            {
              label: "Date Added"
            },
            {
              label: "Date Modified"
            },
            {
              label: "Date Created"
            },
            {
              label: "Size"
            },
            {
              label: "Tags"
            }
          ]
        },
        {
          label: "Clear Up"
        },
        {
          label: "Clear Up By"
        },
        {
          label: "-"
        },
        {
          label: "Hide SideBar",
          shortcut: "⌥⌘S"
        },
        {
          label: "Hide Preview",
          shortcut: "⇧⌘P"
        },
        {
          label: "-"
        },
        {
          label: "Hide Toolbar",
          shortcut: "⌥⌘T"
        },
        {
          label: "Show All Tabs",
          shortcut: "⇧⌘\\"
        },
        {
          label: "Hide Tab Bar",
          shortcut: "⇧⌘T"
        },
        {
          label: "Hide Path Bar",
          shortcut: "⌥⌘P"
        },
        {
          label: "Hide Status Bar",
          shortcut: "⌘/"
        },
        {
          label: "-"
        },
        {
          label: "Customization ToolBar..."
        },
        {
          label: "-"
        },
        {
          label: "Show View Options",
          shortcut: "⌘J"
        },
        {
          label: "Show Preview Options"
        },
        {
          label: "-"
        },
        {
          label: "Enter Full Screen",
          shortcut: "ˆ⌘F"
        },
      ]
    },
    {
      label: "Go",
      child: [
        {
          label: "Back",
          shortcut: "⌘["
        },
        {
          label: "Forward",
          shortcut: "⌘]"
        },
        {
          label: "Select Startup Disk"
        },
        {
          label: "-",
        },
        {
          label: "Recent",
          shortcut: "⇧⌘F"
        },
        {
          label: "Documents",
          shortcut: "⇧⌘O"
        },
        {
          label: "Desktop",
          shortcut: "⇧⌘D"
        },
        {
          label: "Dowloads",
          shortcut: "⇧⌘F"
        },
        {
          label: "Home",
          shortcut: "⇧⌘H"
        },
        {
          label: "Library",
          shortcut: "⇧⌘L"
        },
        {
          label: "Computer",
          shortcut: "⇧⌘C"
        },
        {
          label: "AirDrop",
          shortcut: "⇧⌘R"
        },
        {
          label: "Network",
          shortcut: "⇧⌘K"
        },
        {
          label: "iCloud Drive",
          shortcut: "⇧⌘I"
        },
        {
          label: "Application",
          shortcut: "⇧⌘A"
        },
        {
          label: "Utilities",
          shortcut: "⇧⌘U"
        },
        {
          label: "-"
        },
        {
          label: "Go to Folder...",
          shortcut: "⇧⌘G"
        },
        {
          label: "Connect to Server...",
          shortcut: "⌘K"
        },
      ]
    },
    {
      label: "Window",
      child: [
        {
          label: "Minimize",
          shortcut: "⌘M"
        },
        {
          label: "Zoom"
        },
        {
          label: "Cycle Through Windows",
          shortcut: "⌘`"
        },
        {
          label: "-"
        },
        {
          label: "Show Previous Tab",
          shortcut: "^⌘->"
        },
        {
          label: "Show Next Tab",
          shortcut: "^->"
        },
        {
          label: "Move Tab to New Window"
        },
        {
          label: "Merge All Windows"
        },
        {
          label: "-"
        },
        {
          label: "Bring All to Front"
        },
      ]
    },
    {
      label: "Help",
      child: [
        {
          label: "macOS Help",
          shortcut: "⌘?"
        },
      ]
    }
  ],
  right: [
    {
      image: battery
    },
    {
      image: switch_img
    },
    {
      image: search
    },
    {
      image: wifi
    },
    {
      label: "Seg Jun 22"
    },
    {
      label: "9:41 AM"
    }
  ]
}