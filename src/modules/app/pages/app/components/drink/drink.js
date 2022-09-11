export const Drink = ({
  name, price, onRemove,
}) => (
  <div>
    { `${name}: ${price}р` }
    <button type="button" onClick={onRemove}>Удалить</button>
  </div>
);
