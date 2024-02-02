import { type FC, memo } from 'react'
import { profileReducer } from 'entities/Profile'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader'

const initReducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage: FC = memo(() => {
    return (
        <DynamicModuleLoader reducers={initReducers} removeAfterUnmount>
            <div>23</div>
        </DynamicModuleLoader>
    )
})

export default ProfilePage
