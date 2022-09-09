import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import SSRProvider from 'react-bootstrap/SSRProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { store } from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SSRProvider>
  );
}

export default MyApp
