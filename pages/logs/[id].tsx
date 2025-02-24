import { useRouter } from 'next/router';
import Log from '../../components/Log';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import commonStyles from '../../app/common.module.css';
import withTheme from '../../context/withTheme';

const LogPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header onHomeClick={() => router.push('/')} />
      <div className={commonStyles.maincontainer}>
        <main className={commonStyles.main}>
          <Log
            id={id as string}
            title={`Log ${id}`}
            content={'This is the content of the log'}
          />
        </main>
        <Sidebar />
      </div>
      <Footer />
    </>
  );
};

export default withTheme(LogPage);