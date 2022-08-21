import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import { Provider } from 'react-redux';
import store from './store';

const Experience = () => {
  return (
    <Provider store={store}>
      <div>
        <Page1 />
        <Page2 />
      </div>
    </Provider>
  );
};

export default Experience;
