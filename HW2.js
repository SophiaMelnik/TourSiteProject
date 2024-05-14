const tour = {
    name: 'Mystical Bali Adventure',
    description: 'Explore the enchanting island of Bali, with its lush jungles, vibrant culture, and ancient temples. Visit the iconic Tanah Lot temple, hike to the summit of Mount Batur, and unwind on the pristine beaches of Nusa Dua.',
    price: 300,
    duration: '7 days',
    displayInfo(){
        console.log(this.name);
        console.log(this.description);
        console.log(this.price + "$");
        console.log(this.duration);
    }
}

tour.displayInfo();

function calculateTotalCost(tour, travellers){
    const totalCost = tour.price * travellers;
    return totalCost;
}

const result = calculateTotalCost(tour, 2);
console.log('Total cost:', result + "$");

