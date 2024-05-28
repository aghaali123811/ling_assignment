import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

// Local Import
import {store, persistor} from './src/store/Store';
import SearchScreen from './src/screens/SearchScreen';

const App = props => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SearchScreen />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
