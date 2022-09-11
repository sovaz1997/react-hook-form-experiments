import { useFieldArray, useFormContext } from 'react-hook-form';
import { AddDrinkForm } from '../add-drink-form';
import { useDrinks } from '../../../../../../hooks/use-drinks';
import { FormBlock, useFormHelpers } from '../../../../../form';
import { Drink } from '../drink';

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

  console.log({ fields });

  if (loading) {
    return null;
  }

  return (
    <div>
      <AddDrinkForm onSubmit={onAddDrink} />
      {
        fields.map((field, index) => (
          <FormBlock name={`${name}.${index}`} key={field.id}>
            <Drink onRemove={() => remove(field.id)} name={field.name} price={field.price} />
          </FormBlock>
        ))
      }
    </div>
  );
};
