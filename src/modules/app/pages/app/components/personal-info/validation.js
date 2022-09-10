const isValidSymbols = (v) => /^[а-яёА-ЯЁa-zA-Z-]*$/.test(v);
const isCyrillic = (v) => /^[а-яё-]*$/.test(v.toLowerCase());
const isLatin = (v) => /^[a-z-]*$/.test(v.toLowerCase());

const validateUppercaseFirst = (word) => /^[А-ЯЁA-Zа-яёa-z][а-яёa-z]*$/.test(word);

const isOnlyOneAlphabet = (word) => isCyrillic(word) || isLatin(word);

const Errors = {
  DifferentAlphabets: 'DifferentAlphabets',
  HyphenInBeginOrEnd: 'HyphenInBeginOrEnd',
  PartHaveIncorrectUppercase: 'PartHaveIncorrectUppercase',
  AllHaveIncorrectUppercase: 'AllHaveIncorrectUppercase',
  NotValidSymbols: 'NotValidSymbols',
};

export const validation = (value, labels) => {
  if (!isValidSymbols(value)) {
    return labels[Errors.NotValidSymbols];
  }

  if (!isOnlyOneAlphabet(value)) {
    return labels[Errors.DifferentAlphabets];
  }

  if (value[0] === '-' || value[value.length - 1] === '-') {
    return labels[Errors.HyphenInBeginOrEnd];
  }

  const nameParts = value.split('-');

  let isUppercaseFirst = true;

  nameParts.forEach((part) => {
    if (!validateUppercaseFirst(part)) {
      isUppercaseFirst = false;
    }
  });

  if (!isUppercaseFirst) {
    if (nameParts.length === 1) {
      return labels[Errors.AllHaveIncorrectUppercase];
    }
    return labels[Errors.PartHaveIncorrectUppercase];
  }

  return null;
};
