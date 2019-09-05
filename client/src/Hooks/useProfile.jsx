import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProfileThunk } from '../store/profile/actions';

function useProfile(username) {

    const [reload, setReload] = useState(false)

    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!profile.data || profile.data.username !== username) {
            dispatch(getProfileThunk(username))
        }
    }, [])

    useEffect(() => {
        if (reload) {
            if (profile) {
                dispatch(getProfileThunk(username))
                setReload(false)
            }
        }
    }, [reload])

    const payload = {
        loading: profile.loading,
        data: profile.data,
        images: profile.images,
        setReloadProfile: setReload
    }

    return payload
}


export default useProfile