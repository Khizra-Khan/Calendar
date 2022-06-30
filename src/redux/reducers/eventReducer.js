export default function eventReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_EVENT":
      return [...state, { ...action.event }];
    default:
      return state;
  }
}
