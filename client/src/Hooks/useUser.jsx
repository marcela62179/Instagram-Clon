import { useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getUserThunk } from '../store/user/actions';
import { getTokenDecode } from '../helpers/auth-helpers';

function useUser() {

    const [reload, setReload] = useState(false)

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

    useEffect(() => {
        let decode = getTokenDecode()
        if (reload) {
            setReload(false)
            dispatch(getUserThunk(decode.username))
        }
    }, [reload])

    const payload = {
        loading: user.loading,
        starting: user.starting,
        data: user.data,
        isLoged: user.isLoged,
        error: user.error,
        setReloadUser: setReload
    }

    return payload
}

export default useUser