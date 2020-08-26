import React, { useEffect, useState } from 'react'
import { Link, Switch, Route, useParams, useRouteMatch } from 'react-router-dom'

export const SocialMedias = () => {
  const [getSocialMedia, setSocialMedia] = useState()
  const { path, url } = useRouteMatch()
  useEffect(() => {
    fetch('http://localhost:8080/social-media')
      .then((results) => results.json())
      .then((socialMediaData) => setSocialMedia(socialMediaData))
  }, [])

  if (!getSocialMedia) return <h1>Loading...</h1>

  return (
    <div>
      {getSocialMedia.map((socialMedia) => (
        <div>
          <Link to={`${url}${socialMedia.slug}`}>{socialMedia.name}</Link>
        </div>
      ))}

      <Switch>
        <Route exact path={path}>
          <h3>Please select a media below.</h3>
        </Route>
        <Route path={`${path}/:slug`}>
          <SocialMedia />
        </Route>
      </Switch>
    </div>
  )
}

export const SocialMedia = () => {
  const { slug } = useParams()
  const [getMedia, setMedia] = useState()
  console.log(slug)

  useEffect(() => {
    fetch(`http://localhost:8080/social-media/${slug}`)
      .then((results) => results.json())
      .then((media) => setMedia(media[0]))
  }, [slug])

  if (!getMedia) return <h1>Loading..</h1>
  console.log(getMedia)
  return (
    <div>
      <h1>Owner:{getMedia.owner}</h1>
      <h1>Name:{getMedia.name}</h1>
      <h1>About:{getMedia.about}</h1>
    </div>
  )
}
