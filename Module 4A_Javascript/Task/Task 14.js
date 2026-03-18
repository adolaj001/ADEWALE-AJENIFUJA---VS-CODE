// Create a book object
const book = {
    title: "The Law of Proper Speech",
    author: "David Ogbuelli",
    reading: true,

    // Method to toggle reading status
    toggleReadingStatus: function () {
        this.reading = !this.reading;
        console.log("Reading status:", this.reading);
    }
};

// Test the method
book.toggleReadingStatus(); // Reading status: false
book.toggleReadingStatus(); // Reading status: true