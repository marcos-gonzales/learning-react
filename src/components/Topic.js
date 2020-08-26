import React, { useEffect, useState } from 'react'
import { Link, Switch, Route, useParams, useRouteMatch } from 'react-router-dom'
import { data } from '../data'

export const Topics = () => {
  const { path, url } = useRouteMatch()

  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/snapchat`}>SnapChat</Link>
        </li>
        <li>
          <Link to={`${url}/instagram`}>Instagram</Link>
        </li>
        <li>
          <Link to={`${url}/tiktok`}>TikTok</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please click on a link below.</h3>
        </Route>
        <Route path={`${path}/:id`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  )
}

export const Topic = () => {
  const { id } = useParams()
  console.log(id)
  if (id === 'snapchat') {
    const snapchat = data[0].snapchat
    return (
      <div>
        <h3>{snapchat.type}</h3>
        <h3>{snapchat.release_date}</h3>
        <h3>{snapchat.creator}</h3>
      </div>
    )
  }
  if (id === 'instagram') {
    const instagram = data[0].instagram
    return (
      <div>
        <h3>{instagram.type}</h3>
        <h3>{instagram.release_date}</h3>
        <h3>{instagram.creator}</h3>
      </div>
    )
  } else {
    const tiktok = data[0].tiktok
    return (
      <div>
        <h3>{tiktok.type}</h3>
        <h3>{tiktok.release_date}</h3>
        <h3>{tiktok.creator}</h3>
      </div>
    )
  }
}
