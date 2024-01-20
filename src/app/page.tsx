import Image from 'next/image';
import styles from './page.module.css';
import AlertBanner from '@/components/AlertBanner/AlertBanner';
import ReactAlertBanner from '@/reusableComponents/ReactAlertBanner/AlertBanner';
export default function Home() {
  return (
    <main className={styles.main}>
      <AlertBanner text={{ header: 'This is Header', message: 'hello People' }} />
      <ReactAlertBanner
        fullWidth
        type="info"
        text={{
          message: <AlertBanner fullWidth text={{ header: 'This is Header', message: 'hello People' }} />,
        }}
      />
    </main>
  );
}
