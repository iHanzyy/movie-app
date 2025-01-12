import { useEffect, useState } from 'react';
import './App.css';
import api from './api';
import LoaderSkeleton from './component/loader';
import Card from './component/card';
import styles from './home.module.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setpage] = useState(1);

  const getMovies = async (page) => {
    setIsLoading(true);
    const response = await api.get(`/titles?page=${page}`);
    setMovies(response.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies(page);
  }, [page]);

  return (
    <div className={styles.home}>
      <div className={styles.navbar}>
        <div className={styles.navcontainer}>
          <h1>DU MOVIE</h1>
        </div>
      </div>
      <img className={styles.banner} src="/movies.jpg" alt="banner" />
      <div className={styles.container}>
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <LoaderSkeleton
                key={index}
                radius={10}
                width={220}
                height={320}
              />
            ))
          : movies.map((movie, index) => {
              return (
                <Card
                  key={index}
                  text={movie.originalTitleText.text}
                  thumbnail={movie.primaryImage}
                  onClick={() => alert(movie.originalTitleText.text)}
                />
              );
            })}
      </div>
      {!isLoading && (
        <div className={styles.pagination}>
          {page > 1 && (
            <button onClick={() => setpage((prev) => prev - 1)}>
              Prev Page
            </button>
          )}
          {movies?.length > 0 && (
            <button onClick={() => setpage((prev) => prev + 1)}>
              Next Page
            </button>
          )}
        </div>
      )}
      <div style={{ textAlign: 'center' }}>
        <p>&copy; Dunia Coding {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default App;
