import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PostPage from './../components/posts/PostPage'
import About from './../components/About'
import SinglePost from "./../components/posts/SinglePost"
import Authors from '../components/authors/Authors'
import SingleAuthor from '../components/authors/SingleAuthor'

const Main = () => {

    return (
        <main>
            <Switch>
                <Route path='/authors/:id' component={SingleAuthor} />
                <Route path='/authors' component={Authors} />
                <Route path='/about' component={About} />
                <Route path='/posts/:id' component={SinglePost} />
                <Route path='/' exact component={PostPage} />
            </Switch>
        </main>

    )
}

export default Main