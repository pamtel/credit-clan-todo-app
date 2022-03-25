import React, { useEffect, useState } from 'react';
import {
  CheckboxContainer,
  FilterOptions,
  InputText,
  ItemGroup,
  ListContainer,
  ListFooter,
  SmallButton,
  Text,
} from './todoForm.styled';

import { TaskItem } from '../TaskItem';

export default function TodoForm() {
  const [newCheckItem, setNewCheckItem] = useState('');
  const [list, setList] = useState([]);
  const [leftItemsAmount, setLeftItemsAmount] = useState(0);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setList([
      { name: 'Complete online JavaScript course', isCompleted: true },
      { name: 'Jog around the park 3x', isCompleted: false },
      { name: '10 minutes meditation', isCompleted: false },
      { name: 'Read for 1 hour', isCompleted: false },
      { name: 'Pick up groceries', isCompleted: false },
      { name: 'Complete Todo App on Frontend Mentor', isCompleted: false },
    ]);
  }, []);

  useEffect(() => {
    let countLeft = 0;

    list.forEach((item) => {
      if (!item.isCompleted) {
        countLeft += 1;
      }
    });

    setLeftItemsAmount(countLeft);
  }, [list, leftItemsAmount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCheckItem.trim() !== '') {
      setList((prevList) => [
        ...prevList,
        { name: newCheckItem, isCompleted: false },
      ]);
      setNewCheckItem('');
    }
  };

  const handleCheck = (index) => {
    setList((prevList) => {
      let newList = [...prevList];

      // find and change specific item by its index
      let item = newList[index];
      item.isCompleted = !item.isCompleted;

      return newList;
    });
  };

  const handleDelete = (index) => {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const clearCompleted = () => {
    setList((prevList) =>
      prevList.filter((item) => {
        return !item.isCompleted;
      })
    );
  };

  const createVisibleList = () => {
    let visibleTaskList = list.map((item, index) => {
      if (
        filter === 'all' ||
        (filter === 'active' && !item.isCompleted) ||
        (filter === 'completed' && item.isCompleted)
      ) {
        return (
          <TaskItem
            key={index}
            index={index}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        );
      } else {
        return false;
      }
    });

    return visibleTaskList.length > 0 ? (
      visibleTaskList
    ) : (
      <ItemGroup className={'list-item'}>
        <Text>No items found</Text>
      </ItemGroup>
    );
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} method="POST">
        <ItemGroup className={'individual'}>
          <CheckboxContainer>
            <input name={'newCheckItem'} type={'checkbox'} disabled />
            <span> </span>
            <InputText
              type={'text'}
              name={'todoItem'}
              value={newCheckItem}
              onChange={(e) => setNewCheckItem(e.target.value)}
              placeholder={'Create a new todo...'}
            />
          </CheckboxContainer>
        </ItemGroup>
      </form>

      <ListContainer>
        {createVisibleList()}

        <ListFooter>
          <span>{leftItemsAmount} items left</span>

          <FilterOptions>
            <SmallButton
              type={'button'}
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              All
            </SmallButton>
            <SmallButton
              type={'button'}
              className={filter === 'active' ? 'active' : ''}
              onClick={() => setFilter('active')}
            >
              Active
            </SmallButton>
            <SmallButton
              type={'button'}
              className={filter === 'completed' ? 'active' : ''}
              onClick={() => setFilter('completed')}
            >
              Completed
            </SmallButton>
          </FilterOptions>

          <SmallButton type={'button'} onClick={clearCompleted}>
            Clear Completed
          </SmallButton>
        </ListFooter>
      </ListContainer>
    </>
  );
}
