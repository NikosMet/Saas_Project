import BookDetailPage from "./book";


const BookDetail = () => {

  const book = [
    {
      "id": "1",
      "title": "The Silent Ocean",
      "author": "Sarah Johnson",
      "description": "A gripping tale of adventure on the high seas, where a group of sailors confronts the mysteries of the silent ocean.",
      "price": 12.99,
      "coverImage": "/book1.jpg"
    },
    {
      "id": "2",
      "title": "Echoes of Eternity",
      "author": "Michael Williams",
      "description": "A thought-provoking exploration of the concept of time and existence, delving into the echoes of eternity.",
      "price": 15.99,
      "coverImage": "/book2.jpg"
    },
    {
      "id": "3",
      "title": "In the Shadow of the Moon",
      "author": "Emily Walker",
      "description": "A romantic novel set in the enchanting city of Venice, where two star-crossed lovers find love under the shadow of the moon.",
      "price": 10.49,
      "coverImage": "/book3.jpg"
    },
    {
      "id": "4",
      "title": "The Quantum Paradox",
      "author": "David Smith",
      "description": "An exploration of the mysterious world of quantum physics and the intriguing paradoxes that continue to puzzle scientists.",
      "price": 14.99,
      "coverImage": "/book4.jpg"
    },
    {
      "id": "5",
      "title": "Lost in the Wilderness",
      "author": "Melissa Turner",
      "description": "An exciting adventure of survival as a group of hikers must find their way back home after getting lost in the wilderness.",
      "price": 9.99,
      "coverImage": "/book5.jpg"
    },
    {
      "id": "6",
      "title": "The Art of Cooking",
      "author": "James Baker",
      "description": "A culinary masterpiece that teaches the art of cooking delicious meals with step-by-step instructions and secret recipes.",
      "price": 19.99,
      "coverImage": "/book6.jpg"
    },
    {
      "id": "7",
      "title": "Whispers in the Wind",
      "author": "Sophia Clark",
      "description": "A heartwarming story of family, love, and redemption, set against the backdrop of a small, quiet town.",
      "price": 11.99,
      "coverImage": "/book7.jpg"
    },
    {
      "id": "8",
      "title": "Beyond the Stars",
      "author": "Alex Roberts",
      "description": "An epic space opera that takes readers on a thrilling journey beyond the stars, with intergalactic battles and ancient mysteries.",
      "price": 16.99,
      "coverImage": "/book8.jpg"
    },
    {
      "id": "9",
      "title": "The Enchanted Forest",
      "author": "Ella Green",
      "description": "A magical fantasy tale of a young girl's adventure through an enchanted forest, meeting mythical creatures and discovering her destiny.",
      "price": 13.49,
      "coverImage": "/book9.jpg"
    },
    {
      "id": "10",
      "title": "Murder in the Manor",
      "author": "Robert Anderson",
      "description": "A suspenseful murder mystery that unravels in a grand manor, with unexpected twists and a brilliant detective on the case.",
      "price": 12.99,
      "coverImage": "/book10.jpg"
    }
  ];
  return (
    <div>
      {book.map((book, index) => (
        <BookDetailPage key={index} book={book} />
      ))}
    </div>
  );
};

export default BookDetail;