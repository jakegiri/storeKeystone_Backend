export const currentTimeStamp = async () => {
  const currentTime = new Date(Date.now());
  return currentTime.toISOString();
};
