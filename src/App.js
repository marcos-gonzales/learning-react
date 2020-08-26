import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import About from './components/About'
import Users from './components/Users'
import Home from './components/Home'
import { Topics } from './components/Topic'
import { SocialMedias } from './components/SocialMedia'

const App = () => {
  const [socialMediaData, setSocialMediaData] = useState()

  useEffect(() => {
    fetch('http://localhost:8080/social-media')
      .then((result) => result.json())
      .then((socialMedial) => setSocialMediaData(socialMedial))
  }, [])

  if (!socialMediaData) return <h1>Loading..</h1>
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
            <li>
              <Link to='/topics'>Topics</Link>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/social-media'>Social Media</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/users'>
          <Users />
        </Route>
        <Route path='/topics'>
          <Topics />
        </Route>
        <Route path='/social-media'>
          <SocialMedias />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
