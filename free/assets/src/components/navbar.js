import React, { useState } from "react";
import { Menu, Image, Icon } from "semantic-ui-react";
import './styles/navbar.css'

// The /**/ before the function name is important.
// It serves as an annotation to export the react component to use in django.
/**/function NavBarReactComponent(props) {
  const [visible, setVisible] = useState(false)
  const headerIconSize = <Icon name={ headerIcon } size="large" />;
  const items = [
        ['Home', '/experiment'],
        ['Cavity', '/cavity'],
        ['Pendulum', '/pendulum'],
      ]
  const headerIcon = 'sitemap'

  const menuItems = [];
  
  const onItemClick = (item) => {
    console.log('onItemClick item', item.target.innerText)
  }

  const onToggle = () => {
    setVisible(!visible);
  }

  menuItems.push(
    <Menu.Item key="logo">
      <div>
        <Image style={{ backgroundColor: 'white', padding: '4px' }} size="small" src="http://e-lab.ist.eu/rec.web/javax.faces.resource/elab_logo.png.faces?ln=images" rounded/>
      </div>
    </Menu.Item>
  );

  menuItems.push(
    <Menu.Item key="icon" onClick={onToggle}>
      <Icon 
         name="sidebar"
         size="large" 
      />
    </Menu.Item>
  );

  for (let i = 0; i < items.length; i++) {
    if (items[i].length !== 2) {
      console.error('HeaderMenu: items format should be ["name", "route", "active"]');
      break;
    }

    const name = items[i][0];
    const route = items[i][1];

    menuItems.push(
      <Menu.Item
        key={"item-" + i}
        index={i}
        href={route}
        header={i === 0}
        active={route === window.location.pathname}
        onClick={onItemClick}
      >
        {i === 0 ? headerIconSize : ""}
        {name}
      </Menu.Item>
    );
  }

  return (
    <Menu className="navbar" fixed="top" inverted>
      { menuItems }
    </Menu>
  );
}
