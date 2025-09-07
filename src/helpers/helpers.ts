const $handleErrorMessage = (payload: any) => {
  const message = payload?.error?.response?.data?.message ?? "<UNK>";
  return {
    success: false,
    error: message,
  };
};

const $generateUUID = () => {
  return crypto.randomUUID();
};
const $generateRandomID = (length: number) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const randomArray = new Uint8Array(length);
  crypto.getRandomValues(randomArray);
  randomArray.forEach((number) => {
    result += chars[number % chars.length];
  });
  return "item-" + result;
};

const $handleError = (error: object) => {
  return {
    success: false,
    error: error,
  };
};

const $slugify = (text: string) => {
  return text
    .toString() // convert to string
    .toLowerCase() // lowercase
    .trim() // remove leading/trailing spaces
    .replace(/\s+/g, "-") // replace spaces with -
    .replace(/[^\w-]+/g, "") // remove all non-word chars
    .replace(/--+/g, "-"); // collapse multiple dashes
};

export {
  $handleErrorMessage,
  $handleError,
  $generateUUID,
  $generateRandomID,
  $slugify,
};
