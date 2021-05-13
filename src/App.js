import { useState } from 'react';
import styled from 'styled-components';
function App() {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [openItemsList, setOpenItemsList] = useState([]);
  function onSubmitForm(event) {
    event.preventDefault();
    const form = event.target;
    const inputField = form.item;
    const shoppingItem = {
      name: inputField.value,
      isDone: false,
    };
    setShoppingItems([shoppingItem, ...shoppingItems]);
    form.reset();
    inputField.focus();
  }

  function toggleCheckbox(itemToToggle) {
    const updatedShoppingItems = shoppingItems.map((item) => {
      if (item.name === itemToToggle.name) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setShoppingItems(updatedShoppingItems);
  }

  function renderOpenItems(openCurrywurst) {
    const openItems = shoppingItems.filter(
      (shoppingItems) => shoppingItems.isDone === false
    );
    setOpenItemsList(shoppingItems);
    setShoppingItems(openItems);
  }

  function renderAllItems() {
    setShoppingItems(openItemsList);
  }

  function renderItems(items) {
    return items.map((item, index) => (
      <ShoppingItem key={index}>
        <label>
          <input
            type="checkbox"
            checked={item.isDone}
            onChange={() => toggleCheckbox(item)}
          />
          {item.name}
        </label>
      </ShoppingItem>
    ));
  }
  return (
    <main>
      <Headline>Magic Shopping App</Headline>
      <Form onSubmit={onSubmitForm}>
        <input type="text" name="item" />
        <Button>Add to List!</Button>
      </Form>
      <Button onClick={renderAllItems}>Show all</Button>
      <Button onClick={renderOpenItems}>Shop open</Button>
      <ul>{renderItems(shoppingItems)}</ul>
    </main>
  );
}
export default App;

const Headline = styled.h1`
  font-family: sans-serif;
  text-align: center;
`;
const Form = styled.form`
  display: grid;
  place-items: center;
  gap: 0.5rem;
`;
const Button = styled.button`
  background: none;
  border: 2px solid #999;
  border-radius: 100vw;
  display: flex;
`;
const ShoppingItem = styled.li`
  list-style: none;
  padding: 0;
  input {
    transform: scale(1.2);
  }
`;
