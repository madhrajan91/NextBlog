import { useRouter } from 'next/router';
import Post from '../../components/Post';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Comments from '../../components/Comments';
import styles from '../../app/page.module.css';

const postContent = [
  "This is a sample modern web page built with Next.js. Below, you will find a grid of cards displaying some sample content.",
  "Each card is styled to look clean and modern, fitting perfectly within the grid layout. Enjoy exploring the content!"
];

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <Header onHomeClick={() => router.push('/')} />
      <main className={styles.main}>
        <Post title={`Post ${id}`} content={postContent} />
        <Comments />
      </main>
      <Footer />
    </div>
  );
};

export default PostPage;