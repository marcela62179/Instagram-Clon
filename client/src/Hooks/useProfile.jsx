import {useEffect} from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {getProfileThunk} from '../store/profile/actions';

function useProfile(username) {
    const profile = useSelector(state => state.profile, shallowEqual);
    const dispatch = useDispatch();
    useEffect(() => {
        if (Object.keys(profile.data).length === 0 && !profile.starting) {
            dispatch(getProfileThunk(username))
        }
    }, [])
    return profile
}

export default useProfile