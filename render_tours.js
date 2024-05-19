tours = [
    {
      name: 'Mystical Bali Adventure', 
      imageUrl: './IMG/bali.jpg',
      description: 'Explore the enchanting island of Bali, with its lush jungles, vibrant culture, and ancient temples. Visit the iconic Tanah Lot temple, hike to the summit of Mount Batur, and unwind on the pristine beaches of Nusa Dua.',
      price: 2000,
      duration: 7,
    },
    {
      name: 'Romantic Paris Escape',
      imageUrl: './IMG/paris.jpg',
      description: 'Immerse yourself in the beauty and charm of the City of Love. Stroll along the Seine, marvel at the architectural masterpiece of the Eiffel Tower, and indulge in the world-famous French cuisine at charming cafés and bistros.',
      price: 2000,
      duration: 7,
    },
    {
      name: 'Alaskan Wilderness Expedition', 
      imageUrl: './IMG/Alaska.jpg',
      description: 'Immerse yourself in the rugged beauty of Alaska, a land of towering mountains, pristine glaciers, and lush forests. Explore untouched wilderness, witness awe-inspiring wildlife, and experience unforgettable adventures.',
      price: 3500,
      duration: 10,
    },
    {
      name: 'Enigmatic Egyptian Odyssey', 
      imageUrl: './IMG/Egypt_pyramids.jpg',
      description: 'Uncover the mysteries of ancient Egypt, from the iconic pyramids and Sphinx to the bustling markets and vibrant cities along the Nile River. Delve into the history, art, and culture that have captivated the world for millennia.',
      price: 1800,
      duration: 8,
    },
    {
      name: 'Scenic New Zealand Adventure', 
      imageUrl: './IMG/New_Zealand.jpg',
      description: 'Traverse the stunning landscapes of New Zealand, from the lush rainforests and pristine beaches to the dramatic mountains and glaciers. Experience the adventure and natural beauty that make this destination truly unique.', 
      price: 2800,
      duration: 12,
    },
    {
      name: 'Mystical Machu Picchu Trek',
      imageUrl: './IMG/Machu_Picchu.jpg',
      description: 'Venture deep into the heart of the Andes, where you\'ll uncover the ancient secrets of Machu Picchu, the lost city of the Incas. Hike through breathtaking landscapes and immerse yourself in the rich history and culture of Peru.', 
      price: 2200,
      duration: 9,
    },
    {
      name: 'Vibrant Rio de Janeiro Carnival',
      imageUrl: './IMG/Rio_Carnival.jpg',
      description: 'Experience the energy and excitement of Rio de Janeiro\'s world-famous Carnival, where colorful parades, pulsating samba rhythms, and lively street parties come together in a dazzling celebration of life.',
      price: 2500,
      duration: 5,
    },
    {
      name: 'Majestic African Safari',
      imageUrl: './IMG/African_safari.jpg', 
      description: 'Embark on a thrilling journey through the African wilderness, where you\'ll encounter diverse wildlife, breathtaking landscapes, and vibrant cultures. Discover the untamed beauty of the African savanna.',
      price: 3000,
      duration: 10,
    }
  ];


const toursContainer = document.getElementById('order_tour');
toursContainer.innerHTML = '';
tours.forEach(tour => {
    const tourCard = document.createElement('div');
    tourCard.classList.add('tour-card');
    const tourImage = document.createElement('img');
    tourImage.classList.add('tour-card__image');
    tourImage.setAttribute('src', tour.imageUrl);
    tourImage.setAttribute('alt', tour.name);
    const tourTitle = document.createElement('h3');
    tourTitle.classList.add('tour-card__title');
    tourTitle.textContent = tour.name;
    const tourDescription = document.createElement('p');
tourDescription.classList.add('tour-card__description');
tourDescription.textContent = tour.description;
const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('tour-card__buttons');
const buyButton = document.createElement('button');
buyButton.classList.add('tour-card__button', 'tour-card__button-buy');
buyButton.textContent = 'Buy Tour';
const infoButton = document.createElement('button');
infoButton.classList.add('tour-card__button', 'tour-card__button-info');
infoButton.textContent = 'More Info';
buttonsContainer.appendChild(buyButton);
buttonsContainer.appendChild(infoButton);

tourCard.appendChild(tourImage);
tourCard.appendChild(tourTitle);
tourCard.appendChild(tourDescription);
tourCard.appendChild(buttonsContainer);

toursContainer.appendChild(tourCard);

});





function generateModalId() {
    return 'modal-' + Math.random().toString(36).substr(2, 9);
}


function createModal(content) {
    const modalId = generateModalId();
    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal');
    modalWrapper.id = modalId;
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.style.fontSize = '18px';
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.textContent = '×';
    closeButton.addEventListener('click', () => {
        modalWrapper.style.display = 'none';
    });
    modalContent.innerHTML = content;
    modalContent.appendChild(closeButton);
    modalWrapper.appendChild(modalContent);
    document.body.appendChild(modalWrapper);
    return modalId;
}


document.querySelectorAll('.tour-card__button-info').forEach((button) => {
    button.addEventListener('click', (event) => {
        const clickedButton = event.currentTarget;
        const tourCard = clickedButton.closest('.tour-card');
        const tourName = tourCard.querySelector('.tour-card__title').textContent;
        const tour = tours.find(tour => tour.name === tourName);
        const modalContent = `
            <h2>${tour.name}</h2>
            <p>${tour.description}</p>
            <p>Price: $${tour.price}</p>
            <p>Duration: ${tour.duration} days</p>
        `;
        
        const modalId = createModal(modalContent);
        document.getElementById(modalId).style.display = 'block';
    });
});



// Код нижче реалізує обробник подій для кнопок "Buy Tour"
document.querySelectorAll('.tour-card__button-buy').forEach((button, index) => {
    button.addEventListener('click', () => {
        const tour = tours[index];
        const message = `Tour "${tour.name}" with price $${tour.price} has been successfully added to the cart. Duration of the tour is: ${tour.duration} days.`;
        alert(message);
    });
});
