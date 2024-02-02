import React from 'react'
import useGithub from '../../../hooks/useGithub'

function GithubProfile() {

  const { data, loading, error } = useGithub("yakintech")

  console.log('Data', data);
  console.log('Loading', loading);


  return (<>
    <h1>github Profile</h1>
    <hr />
    <h3>Login Name: {data.login}</h3>
    <h3>Company: {data.company}</h3>
  </>
  )
}

export default GithubProfile