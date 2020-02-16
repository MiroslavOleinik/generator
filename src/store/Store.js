const initialState = {
  currentQuote: 'Hio',
  allQuote: [
    'Привет',
    'Hi',
    'Bonjorno',
    'Ni hao',
    'Ты пидор',
    'Отвали',
    'Бесишь',
    'Мразь',
  ],
}

export function setCurrentQuote(value) {
  return {
    type: 'SET_CURRENT_QUOTE',
    payload: value,
  }
}

export function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'SET_CURRENT_QUOTE':
      return {
        ...state,
        currentQuote: payload,
      }
    default:
      return state;
  }
}