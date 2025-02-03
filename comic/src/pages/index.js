import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('/api/books');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                setBooks(data.Items || []);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };
        fetchBooks();
    }, []);

    return (
        <div className={styles.container}>
            <h1>漫画一覧</h1>
            <div className={styles.bookGrid}>
                {books.map((book, index) => (
                    <div key={index} className={styles.bookItem}>
                        <img src={book.Item.mediumImageUrl} alt={book.Item.title} />
                        <h3>{book.Item.title}</h3>
                        <p>著者: {book.Item.author}</p>
                        <p>出版社: {book.Item.publisherName}</p>
                        <p>価格: {book.Item.itemPrice} 円</p>
                        <a href={book.Item.itemUrl} target="_blank" rel="noopener noreferrer">
                            詳細を見る
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
