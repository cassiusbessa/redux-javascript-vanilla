const btn = document.getElementById('change-theme');
btn.addEventListener('click', () => {
  store.dispatch(actionChangeTheme())
});

const actionChangeTheme = () => ({ type: CHANGE_THEME })





const CHANGE_THEME = 'CHANGE_THEME';
const DEFAULT = 'DEFAULT';


const INITIAL_STATE = { theme: 'day' };

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CHANGE_THEME:
      return { theme: state.theme === 'day' ? 'night' : 'day' }
  }
};




const store = Redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
  const { theme } = store.getState();
  const myDiv = document.querySelector('.container');
  myDiv.id = theme;

})