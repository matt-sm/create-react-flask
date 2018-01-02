import React from 'react'
import HomeView from 'components/Home/HomeView'
import LoadingView from 'components/LoadingView'
import ErrorView from 'components/ErrorView'

const HomeBranch = ({ loading, home }) => {
  if (loading) {
    return <LoadingView />
  } else if (home) {
    return <HomeView {...home} />
  } else {
    return <ErrorView />
  }
}

export default HomeBranch
