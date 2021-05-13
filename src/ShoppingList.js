import styled from 'styled-components';
export default function ShoppingList({ items }) {
  return (
    <Ul>
      {items.map((item, index) => (
        <li key={index}>
          <label>
            <input type="checkbox" />
            {item}
          </label>
        </li>
      ))}
    </Ul>
  );
}
const Ul = styled.ul`
  list-style-type: none;
  li {
    left: 0;
  }
  input {
    transform: scale(1.2);
    margin: 0 0.5rem;
  }
`;
