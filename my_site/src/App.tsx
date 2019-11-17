import React from 'react';
import './App.css';
import avatar from './assets/avatar.png';
import Button, { ButtonType } from './Button';

const App: React.FC = () => {
  const [buttonType, setButtonType] = React.useState<ButtonType>(ButtonType.ok)

  const onClickButton = (e: React.SyntheticEvent) => {
    console.log(e);
    if (buttonType === ButtonType.ok) {
      setButtonType(ButtonType.cancel)
    } else {
      setButtonType(ButtonType.ok)
    }
  }

  return (
    <div>
      <div className="App">
        <div>
          <img src={avatar} alt="avatar" className="header--avatar" />
        </div>
        <Button type={buttonType} onClick={onClickButton}>Hello</Button>

        <div className='App--rightColumn'>
          <p className='rightColumn--text'>Hello, my name is Danila Leontyev, I am a frontend developer at UI/UX designer</p>
          <ul className='rightColumn--link'>
            <li>
              <a href='https://www.instagram.com/ne_pro_web/'>
                <span role='img' aria-label='instagram'>📷</span>  instagramm
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/ne_pro_web/'>
                <span role='img' aria-label='instagram'>📌</span>  instagramm
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/ne_pro_web/'>
                <span role='img' aria-label='instagram'>🍪</span>  instagramm
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/ne_pro_web/'>
                <span role='img' aria-label='instagram'>👋</span>  instagramm
              </a>
            </li>
          </ul>
        </div>
      </div >
    </div>
  );
}

export default App;
