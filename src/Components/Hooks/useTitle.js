import { useState } from 'react';

export const useTitle = () => {
  const [title, setTitle] = useState('MrDonalds');

  const changeTitle = title => {
    setTitle(title);
    document.getElementsByTagName('title').textContent = title;
  };

  return {title, changeTitle};
};
