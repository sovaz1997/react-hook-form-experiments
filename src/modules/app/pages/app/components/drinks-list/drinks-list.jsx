import { useFieldArray, useFormContext } from 'react-hook-form';
import { AddDrinkForm } from '../add-drink-form';
import { useDrinks } from '../../../../../../hooks/use-drinks';
import { useFormHelpers } from '../../../../../form';
import { Drink } from '../drink';
import FieldArray from '../../../../../form/components/field-array';

export const DrinksList = ({ name }) => {
  const { control } = useFormContext();
  const { data, loading } = useDrinks();
  const { getName } = useFormHelpers();

  const { append, fields, remove } = useFieldArray({
    control,
    name: getName(name),
  });

  const onAddDrink = ({ drink }) => {
    append(data.find((v) => v.id === drink));
  };

  if (loading) {
    return null;
  }

  return (
    <div>
      <AddDrinkForm onSubmit={onAddDrink} />
      <FieldArray
        name={name}
        fields={fields}
        render={(field, index) => (
          <Drink
            onRemove={() => remove(index)}
            name={field.name}
            price={field.price}
          />
        )}
      />
    </div>
  );
};
