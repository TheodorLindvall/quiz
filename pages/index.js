import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Quiz App</h1>
      <nav>
        <ul>
          <li>
            <Link href="/admin">Admin Page</Link>
          </li>
          <li>
            <Link href="/quiz">Quiz Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
