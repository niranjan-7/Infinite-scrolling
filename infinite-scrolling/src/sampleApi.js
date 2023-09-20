
const mockData = Array.from({ length: 150 }, (_, index) => ({
  id: index + 1,
  name: `Item ${index + 1}`,
}));

export const fetchMockData = (offset, limit) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.slice(offset, offset + limit));
    }, 1000); 
  });
};
