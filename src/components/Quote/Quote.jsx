// src/components/Quote/Quote.jsx
import styles from "./Quote.module.scss";

const quotes = [
  {
    text: "Books are a uniquely portable magic.",
    author: "Stephen King",
  },
  {
    text: "A reader lives a thousand lives before he dies.",
    author: "George R.R. Martin",
  },
  {
    text: "Reading is essential for those who seek to rise above the ordinary.",
    author: "Jim Rohn",
  },
];

const Quote = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className={styles.quote}>
      <svg className={styles.icon}>
        <use href="/sprite.svg#icon-quote"></use>
      </svg>
      <p className={styles.text}>{randomQuote.text}</p>
      <p className={styles.author}>— {randomQuote.author}</p>
    </div>
  );
};

export default Quote;
