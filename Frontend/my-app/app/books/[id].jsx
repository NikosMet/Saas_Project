import { useRouter } from 'next/router';

const BookDetailPage = () => {
  const router = useRouter();
  const { id } = router.query; // This will give you the value of [id] from the URL

  // You can use the 'id' value to fetch data or perform other operations

  return (
    <div>
      <h1>Book Detail Page</h1>
      <p>Book ID: {id}</p>
    </div>
  );
};

export default BookDetailPage;
