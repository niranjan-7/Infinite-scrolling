import photo from './assets/photo.jpg'


const mockData = Array.from({ length: 150 }, (_, index) => ({
  id: index + 1,
  name: `Item ${index + 1}`,
  description:`Description for Item ${index+1}`,
  image:photo
}));

export const fetchMockData = (offset, limit) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.slice(offset, offset + limit));
    }, 1000); 
  });
};
