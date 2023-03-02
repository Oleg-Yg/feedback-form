export const checkValid = (arrayValid: boolean[]) => {
  return !arrayValid.includes(false);
};

export const convertPhoneNumbers = (phoneNumber: string) => {
  return phoneNumber
    .split("")
    .filter(
      (element) =>
        element !== "(" &&
        element !== ")" &&
        element !== "-" &&
        element !== " " &&
        element !== "_"
    )
    .join("");
};

export const isValidNumberPhone = (
  phoneNumber: string,
  lengthPhoneNumber = 12
) => {
  return convertPhoneNumbers(phoneNumber).length === lengthPhoneNumber;
};
