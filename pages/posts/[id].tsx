import { useRouter } from 'next/router';
import Post from '../../components/Post';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import commonStyles from '../../app/common.module.css';

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;


  return (
    <div className={commonStyles.container}>
      <Header onHomeClick={() => router.push('/')} />
      <div className={commonStyles.maincontainer}>
        <main className={commonStyles.main}>
          <Post title={`Post ${id}`} content={'This is the content of the post'} />
        </main>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default PostPage;