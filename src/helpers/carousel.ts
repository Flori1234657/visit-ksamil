export const reorderCards = <T>(clickedIndex: number, cardsArray: T[]): T[] => {
  const newOrder = [...cardsArray];
  const clickedCard = newOrder.splice(clickedIndex, 1)[0]; // Remove the clicked card

  // Move the first card to the end of the array
  const rotatedFirstCard = newOrder.shift()!;
  newOrder.push(rotatedFirstCard);

  // Insert the clicked card in the second position
  newOrder.splice(1, 0, clickedCard);

  return newOrder;
};
