//==========Reduser=======================================

// const initialState = 0;

// const reducer = (state = 0, action) => {
//     switch(action.type) {
//         case 'INC': return state + 1;
//         default: return state;
//     }
// };

// let state = reducer(undefined, {});
// console.log(state)

// state = reducer(initialState, {type: 'INC'});
// console.log(state);

// state = reducer(state, {type: 'INC'});
// console.log(state);

//======================Store=============================

// import {createStore} from 'redux';
// //1. Импортируем функцию createStore
// const reducer = (state = 0, action) => {
//     switch(action.type) {
//         case 'INC': return state + 1;
//         default: return state;
//     }
// };

// const store = createStore(reducer);// создаем store
// store.subscribe(() => {//store.subscribe позволяет получать нoтификации, когда store изменился
//     console.log(store.getState());//выводим состояние приложения store.getState
// })

// const action = {
//     type: 'INC'
// }

// store.dispatch(action);//исполнить одно из действий store.dispatch
// store.dispatch({type: 'INC'});


//=====================UI для REDUX==============================

// import {createStore} from 'redux';
// //1. Импортируем функцию createStore
// const reducer = (state = 0, action) => {
//     switch(action.type) {
//         case 'INC': return state + 1;
//         case 'DEC': return state - 1;
//         default: return state;
//     }
// };

// const store = createStore(reducer);// создаем store

// document.getElementById('inc')
//         .addEventListener('click', () => {
//             store.dispatch({type: 'INC'})//store.dispatch используется для обновления состояния
//         });

// document.getElementById('dec')
//         .addEventListener('click', () => {
//             store.dispatch({type: 'DEC'})
//         });

// const update = () => {
//     document.getElementById('counter')
//             .innerHTML = store.getState();
//             console.log(store.getState());
// };

// store.subscribe(update);//store.subscribe используется для обновления UI


//==========================localStorage=============================

// import {createStore} from 'redux';
// //1. Импортируем функцию createStore

// window.onload = () => {
//         // console.log(localStorage.getItem('inc'))
//         if(localStorage.getItem('counter')!==null){
//             let counter = localStorage.getItem('counter');
//             document.getElementById('counter').innerHTML = counter;
//         }

//         // document.getElementById('inc').onclick = () => {
//         //     document.getElementsByTagName('body')[0].style.background = 'green';//getElementsByTagName возвращает массив
//         //     localStorage.setItem('inc', 'green');
//         // }
//         // document.getElementById('dec').onclick = () => {
//         //     document.getElementsByTagName('body')[0].style.background = 'red';//getElementsByTagName возвращает массив
//         //     localStorage.setItem('inc', 'red');
//         // }
//     const initialState = +(localStorage.getItem('counter'));
//     const reducer = (state = initialState, action) => {
//         switch(action.type) {
//             case 'INC': return state + 1;
//             case 'DEC': return state - 1;
//             case 'RND': return state + action.payload;
//             default: return state;
//         }
//     };

//     const store = createStore(reducer);// создаем store

//     document.getElementById('inc')
//             .addEventListener('click', () => {
//                 store.dispatch({type: 'INC'});//store.dispatch используется для обновления состояния
//                 localStorage.setItem('counter', store.getState());
//             });

//     document.getElementById('dec')
//             .addEventListener('click', () => {
//                 store.dispatch({type: 'DEC'});
//                 localStorage.setItem('counter', store.getState());
//             });

//     document.getElementById('rnd')
//             .addEventListener('click', () => {
//                 const payload = Math.floor(Math.random()*10)//имя переменной, для передачи дополнительных параметров
//                 store.dispatch({
//                     payload,
//                     type: 'RND'
//                 });
//                 localStorage.setItem('counter', store.getState());
//             });

//     const update = () => {
//         document.getElementById('counter')
//                 .innerHTML = store.getState();
//                 console.log(store.getState());
//     };

//     store.subscribe(update);//store.subscribe используется для обновления UI

// }



//============================ACTION CREATOR====================================

// import {createStore} from 'redux';
// //1. Импортируем функцию createStore
// import reducer from './reducer';
// import {inc, dec, rnd} from './actions';

// window.onload = () => {
//         // console.log(localStorage.getItem('inc'))
//         if(localStorage.getItem('counter')!==null){
//             let counter = localStorage.getItem('counter');
//             document.getElementById('counter').innerHTML = counter;
//         }

// //  const inc = () => ({type: 'INC'});//ACTION CREATOR - функция которая создает объект action
// //  const dec = () => ({type: 'DEC'});//ACTION CREATOR
// //  const rnd = (payload) => ({type: 'RND', payload});//ACTION CREATOR

//     const store = createStore(reducer);// создаем store

//     document.getElementById('inc')
//             .addEventListener('click', () => {
//                 store.dispatch(inc());//store.dispatch используется для обновления состояния
//                 localStorage.setItem('counter', store.getState());
//             });

//     document.getElementById('dec')
//             .addEventListener('click', () => {
//                 store.dispatch(dec());
//                 localStorage.setItem('counter', store.getState());
//             });

//     document.getElementById('rnd')
//             .addEventListener('click', () => {
//                 const payload = Math.floor(Math.random()*10)//имя переменной, для передачи дополнительных параметров
//                 store.dispatch(rnd(payload));
//                 localStorage.setItem('counter', store.getState());
//             });

//     const update = () => {
//         document.getElementById('counter')
//                 .innerHTML = store.getState();
//                 console.log(store.getState());
//     };

//     store.subscribe(update);//store.subscribe используется для обновления UI

// }

//===============================bindActionCreators=======================



// import {createStore, bindActionCreators} from 'redux';
// //1. Импортируем функцию createStore
// //2. Импортируем функцию bindActionCreators
// import reducer from './reducer';
// // import {inc, dec, rnd} from './actions';
// import * as actions from './actions';

// window.onload = () => {
//         // console.log(localStorage.getItem('inc'))
//         if(localStorage.getItem('counter')!==null){
//             let counter = localStorage.getItem('counter');
//             document.getElementById('counter').innerHTML = counter;
//         }

//     const store = createStore(reducer);// создаем store

//     const {dispatch} = store;

//     // const bindActionCreator = (creator, dispatch) => (...args) => {
//     //     dispatch(creator(...args));
//     // }

//     // const incDispatch = () => dispatch(inc());
//     // const decDispatch = () => dispatch(dec());
//     // const rndDispatch = (payload) => dispatch(rnd(payload));
//     // const incDispatch = bindActionCreators(inc, dispatch);
//     // const decDispatch = bindActionCreators(dec, dispatch);
//     // const rndDispatch = bindActionCreators(rnd, dispatch);
//     const {inc, dec, rnd} = 
//     bindActionCreators(actions, dispatch);

//     document.getElementById('inc')
//             .addEventListener('click', inc);//store.dispatch используется для обновления состояния
//             localStorage.setItem('counter', store.getState());

//     document.getElementById('dec')
//             .addEventListener('click', dec);
//             localStorage.setItem('counter', store.getState());

//     document.getElementById('rnd')
//             .addEventListener('click', () => {
//                 const payload = Math.floor(Math.random()*10)//имя переменной, для передачи дополнительных параметров
//                 rnd(payload);
//                 // localStorage.setItem('counter', store.getState());
//                 // localStorage.counter = store.getState()
//                 localStorage['counter'] = store.getState();
//             });

//     const update = () => {
//         document.getElementById('counter')
//                 .innerHTML = store.getState();
//                 console.log(store.getState());
//     };

//     store.subscribe(update);//store.subscribe используется для обновления UI

// }


//========================================================

import {createStore} from 'redux';
import reducer from './reducer';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './Components/App';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
     </Provider>
     , document.getElementById('root')
);
