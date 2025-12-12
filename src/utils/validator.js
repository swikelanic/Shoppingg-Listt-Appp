export const validateItem = (text) => {
  return typeof text === 'string' && text.trim().length > 0;
};
