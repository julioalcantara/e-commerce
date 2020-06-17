import { createSelector} from 'reselect';

const selectUser = state => state.user;

//memoized function
export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)