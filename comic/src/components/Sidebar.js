import React from 'react';
import styles from '../styles/Sidebar.module.css';
import Image from 'next/image';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.homeSection}>
                <Image src="/images/home.png" alt="Home Icon" width={50} height={50} />
                <h2 className={styles.sidebarTitle}>Home</h2>
            </div>
            <input
                type="text"
                placeholder="漫画タイトル"
                className={styles.searchBar}
            />
            <h3 className={styles.publisherTitle}>出版社選択</h3>
            <input
                type="text"
                placeholder="出版社検索"
                className={styles.searchBar}
            />
            <ul className={styles.publisherList}>
                <li className={styles.publisherItem}>・集英社</li>
                <li className={styles.publisherItem}>・講談社</li>
                <li className={styles.publisherItem}>・KADOKAWA</li>
                <li className={styles.publisherItem}>・小学館</li>
                <li className={styles.publisherItem}>・秋田書店</li>
                <li className={styles.publisherItem}>・白泉社</li>
                <li className={styles.publisherItem}>・スクウェア・エニックス</li>
                <li className={styles.publisherItem}>・双葉社</li>
                <li className={styles.publisherItem}>・徳間書店</li>
                <li className={styles.publisherItem}>・芳文社</li>
            </ul>
            <button className={styles.sidebarButton}>
                <Image src="/images/ranking.png" alt="Ranking Icon" width={70} height={70} />
                ランキング
            </button>
            <button className={`${styles.sidebarButton} ${styles.likeButton}`}>
                <img src="/images/like.png" alt="Like"/>
                保存した作品
            </button>
            <button className={styles.logoutButton}>Logout</button>
        </div>
    );
}
