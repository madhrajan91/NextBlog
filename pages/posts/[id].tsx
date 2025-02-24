// filepath: /Users/madhavrajan/Documents/nextjs/NextBlog/pages/posts/[id].tsx
import { useRouter } from 'next/router';
import Post from '../../components/Post';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import commonStyles from '../../app/common.module.css';
import withTheme from '../../context/withTheme';

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header onHomeClick={() => router.push('/')} />
      <div className={commonStyles.maincontainer}>
        <main className={commonStyles.main}>
          <Post title={`Post ${id}`} content={'This is the content of the post'} />
        </main>
        <Sidebar />
      </div>
      <Footer />
    </>
  );
};

export default withTheme(PostPage);