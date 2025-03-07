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

export function maskCpfOrRg(document) {
  if (document.length > 9) {
    return document.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  } else {
    return document.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4");
  }
}

export function validaEmail(email) {
  return email;
}

export const maskPhone = (phone) => {
  const noMask = phone.replace(/\D/g, "");
  const { length } = noMask;
  if (length <= 11) {
    return noMask
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(length === 11 ? /(\d{5})(\d)/ : /(\d{4})(\d)/, "$1-$2");
  }
  return phone;
};
