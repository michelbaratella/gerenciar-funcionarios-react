export function notEmpty(value) {
  return value.trim() !== "";
}

export function isUniquePhone(newPhone, phoneList) {
  if (phoneList.length > 0) {
    if (phoneList.filter((item) => item.phone === newPhone).length !== 0) {
      return false;
    }
  }
  return true;
}

export function firstLetterUpper(word) {
  const firstLetter = word.charAt(0).toUpperCase();
  const remainingLetters = word.slice(1);
  return firstLetter + remainingLetters;
}
