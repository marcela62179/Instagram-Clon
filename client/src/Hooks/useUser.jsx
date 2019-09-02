import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getUserThunk } from '../store/user/actions';
import { getTokenDecode } from '../helpers/auth-helpers';

function useUser() {
    const user = useSelector(state => state.user, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        if (getTokenDecode()) {
            let decode = getTokenDecode()
            if (Object.keys(user.data).length === 0 && !user.starting) {
                dispatch(getUserThunk(decode.username))
            }
        }
    }, [])

    return user
}

export default useUser