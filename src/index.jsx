import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './assets/scss/style.css'
import { Provider } from 'react-redux';
import App from './App'
import configureStore from './store/configureStore';
import { getBlogsFromDatabase } from './actions/blogActions';
import './firebase/firebaseConfig'





const store=configureStore()

  const app=(
    
    <Provider store={store} >
    <App />
      </Provider>
  )
  
  ReactDOM.createRoot(document.getElementById('root'));
  store.dispatch(getBlogsFromDatabase()).then(() => {
    ReactDOM.render(app, document.getElementById('root'));
  })


