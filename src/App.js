import React from 'react';

const App = () => {
  let img = ['😹', '👾', '‍💻️', '😀', '👠', '👊']

  function shuffle(array) {
    array = [...array, ...array]
    return array.sort(() => Math.random() - 0.5);
  }
  let newArrayImage = shuffle(img)

  let initialCards = []
  for (let i = 0; i < newArrayImage.length; i++) {
    initialCards.push(
        {
          id: Math.random(),
          image: newArrayImage[i],
          open: false
        }
    )
  }


  return (
      <div>
        {initialCards.map(el => <li>{el.image}</li>)}
      </div>
  );
};

export default App;
