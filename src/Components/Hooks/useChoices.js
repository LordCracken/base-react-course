import { useState } from 'react';

export const useChoices = openItem => {
  const [choice, setChoice] = useState(openItem.choice ? openItem.choice : null);
  const changeChoices = e => setChoice(e.target.value);

  return {choice, changeChoices}
};
