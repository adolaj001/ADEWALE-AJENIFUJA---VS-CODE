// 1. Create the books array
const books = [
    {
        title: "JavaScript Essentials",
        description: "A beginner-friendly guide to JavaScript.",
        numberOfPages: 250,
        author: "Adewale Fujah",
        reading: true
    },
    {
        title: "CSS Mastery",
        description: "Advanced techniques for styling websites.",
        numberOfPages: 180,
        author: "Ajenifuja Wales",
        reading: false
    },
    {
        title: "HTML Foundations",
        description: "Understanding the structure of the web.",
        numberOfPages: 150,
        author: "Fujah United",
        reading: true
    }
];

// 2. Loop through the array and log books where reading === true
for (let i = 0; i < books.length; i++) {
    if (books[i].reading === true) {
        console.log(books[i]);
    }
}