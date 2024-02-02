import { type FC, memo } from 'react'
import { ProfileCard, profileReducers } from 'entities/Profile'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader'

const initReducers: ReducersList = {
    profile: profileReducers
}

const ProfilePage: FC = memo(() => {
    return (
        <DynamicModuleLoader reducers={initReducers} removeAfterUnmount>
            <ProfileCard />
        </DynamicModuleLoader>
    )
})

export default ProfilePage
