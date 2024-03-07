export const useCountDown = () => {
  const countDown = new Date(2024, 8, 14, 15, 0, 0, 0);
  return {
    'countDown': countDown,
  }
}
