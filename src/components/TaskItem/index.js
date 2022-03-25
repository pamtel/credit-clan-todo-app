import {
  CheckboxContainer,
  ItemGroup,
  Text,
} from '../TodoForm/todoForm.styled';
import deleteIcon from '../../assets/images/icon-cross.svg';
import React, { useState } from 'react';
import { DeleteButton } from './taskItem.styled';

export function TaskItem({ index, item, handleCheck, handleDelete }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleHovering = () => {
    setIsHovering(!isHovering);
  };

  return (
    <ItemGroup
      key={index}
      className={'list-item'}
      onMouseEnter={handleHovering}
      onMouseLeave={handleHovering}
    >
      <CheckboxContainer>
        <input
          type={'checkbox'}
          name={'checkbox1'}
          checked={item.isCompleted}
          onChange={() => handleCheck(index)}
        />
        <Text>{item.name}</Text>
      </CheckboxContainer>
      <DeleteButton
        className={isHovering && 'active'}
        onClick={() => handleDelete(index)}
      >
        <img src={deleteIcon} alt="delete icon" width={'80%'} />
      </DeleteButton>
    </ItemGroup>
  );
}
