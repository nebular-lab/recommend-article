import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <p>HOME</p>
      <Link href="/post/1">
        <button>記事1へ</button>
      </Link>
    </div>
  );
}
