import React from 'react';

import { useTheme } from '../../context/ThemeContext';
import {
  Header,
  IconThemeContainer,
  MainContainer,
  Title,
  TodoContainer,
  TodoFooter,
} from './todoList.styled';

import audioOn from '../../assets/sounds/switch-on.mp3';
import audioOff from '../../assets/sounds/switch-off.mp3';
import IconSun from '../../assets/images/icon-sun.svg';
import IconMoon from '../../assets/images/icon-moon.svg';
import TodoForm from '../../components/TodoForm';

const audioOnObject = new Audio(audioOn);
const audioOffObject = new Audio(audioOff);

export default function TodoList(props) {
  const { theme, toggle } = useTheme();

  const handleThemeChange = () => {
    theme.mode === 'dark' ? audioOnObject.play() : audioOffObject.play();

    toggle();
  };

  return (
    <MainContainer>
      {/*remind to use react-spring for drag and drop reorder list*/}

      <TodoContainer>
        <Header>
          <Title>Todo</Title>
          <IconThemeContainer onClick={handleThemeChange}>
            {theme.mode === 'dark' ? (
              <img src={IconSun} alt={'Light theme'} />
            ) : (
              <img src={IconMoon} alt={'Dark theme'} />
            )}
          </IconThemeContainer>
        </Header>

        <TodoForm />

        <TodoFooter>Drag and drop to reorder list</TodoFooter>
      </TodoContainer>
    </MainContainer>
  );
}
