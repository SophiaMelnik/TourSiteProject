tours = [
    {
      name: 'Mystical Bali Adventure', 
      description: 'Explore the enchanting island of Bali, with its lush jungles, vibrant culture, and ancient temples. Visit the iconic Tanah Lot temple, hike to the summit of Mount Batur, and unwind on the pristine beaches of Nusa Dua.',
      price: 2000,
      duration: 7,
    },
    {
      name: 'Futuristic Tokyo Odyssey',
      description: 'Discover the captivating blend of tradition and innovation in Tokyo. Experience the city\'s bustling streets and neon-lit nights, visit ancient temples and shrines, and savor the exquisite flavors of Japanese cuisine.',
      price: 2000,
      duration: 7,
    },
    {
      name: 'Alaskan Wilderness Expedition', 
      description: 'Immerse yourself in the rugged beauty of Alaska, a land of towering mountains, pristine glaciers, and lush forests. Explore untouched wilderness, witness awe-inspiring wildlife, and experience unforgettable adventures.',
      price: 3500,
      duration: 10,
    },
    {
      name: 'Enigmatic Egyptian Odyssey', 
      description: 'Uncover the mysteries of ancient Egypt, from the iconic pyramids and Sphinx to the bustling markets and vibrant cities along the Nile River. Delve into the history, art, and culture that have captivated the world for millennia.',
      price: 1800,
      duration: 8,
    },
    {
      name: 'Scenic New Zealand Adventure', 
      description: 'Traverse the stunning landscapes of New Zealand, from the lush rainforests and pristine beaches to the dramatic mountains and glaciers. Experience the adventure and natural beauty that make this destination truly unique.', 
      price: 2800,
      duration: 12,
    },
    {
      name: 'Mystical Machu Picchu Trek',
      description: 'Venture deep into the heart of the Andes, where you\'ll uncover the ancient secrets of Machu Picchu, the lost city of the Incas. Hike through breathtaking landscapes and immerse yourself in the rich history and culture of Peru.', 
      price: 2200,
      duration: 9,
    },
    {
      name: 'Vibrant Rio de Janeiro Carnival',
      description: 'Experience the energy and excitement of Rio de Janeiro\'s world-famous Carnival, where colorful parades, pulsating samba rhythms, and lively street parties come together in a dazzling celebration of life.',
      price: 2500,
      duration: 5,
    },
    {
      name: 'Majestic African Safari', 
      description: 'Embark on a thrilling journey through the African wilderness, where you\'ll encounter diverse wildlife, breathtaking landscapes, and vibrant cultures. Discover the untamed beauty of the African savanna.',
      price: 3000,
      duration: 10,
    }
  ];
  
const maxPrice = 2500;

/*
function filterToursByPrice(maxPrice, tours){
      const filteredTours = [];
      for(const tour of tours){
          if (tour.price <= maxPrice){
              filteredTours.push(tour);
          }    
      }
      return filteredTours;
  }
  
//console.log(filterToursByPrice(maxPrice, tours)); */
  
// або можна записати функцію filterToursByPrice таким чином:
//function filterToursByPrice(maxPrice, tours = []) {
//    return tours.filter((item) => item.price <= maxPrice);
//}
//console.log(filterToursByPrice(maxPrice, tours));
 


 
function sortToursByName(tours) {
    return tours.slice().sort((a, b) => a.name.localeCompare(b.name));
}

const sortedTours = sortToursByName(tours);
console.log(sortedTours);
  
  
