import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider, useSelector } from 'react-redux'
import thunk from 'redux-thunk'
import firebase from 'firebase/app'
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore'
import { getFirebase, ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import PageLoader from './components/loaders/PageLoader';




const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore})),
    reduxFirestore(fbConfig, {attachAuthIsReady: true})
  )
);



const props = {
  firebase,
  config: (fbConfig, {useFirestoreForProfile: true,userProfile: 'users', attachAuthIsReady: true}),
  dispatch: store.dispatch,
  createFirestoreInstance //if you are using firestore
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <PageLoader />;
      return children
}
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...props}>
          <AuthIsLoaded>
            <App />
          </AuthIsLoaded>
          
        </ReactReduxFirebaseProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  serviceWorker.unregister();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
