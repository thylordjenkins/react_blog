import React from 'react'
import { fetchPost, fetchSingleUserPosts } from '../../services/postService'
import { fetchUser } from '../../services/userService'
import { Link } from 'react-router-dom'

class SinglePost extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            post: {},
            author: {},
            otherPosts: []
        }
    }

    loadPostData() {
        fetchPost(this.props.match.params.id)
            .then(post => {
                this.setState({ post })

                fetchUser(post.userId)
                    .then(user => this.setState({ author: user }))

                fetchSingleUserPosts(post.userId)
                    .then(posts => {
                        const myPosts = posts.map(post => {
                            return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                        })

                        return myPosts
                    })
                    .then(posts => this.setState({ otherPosts: posts }))
            });
    }

    componentDidMount() {
        this.loadPostData()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadPostData()
        }
    }

    render() {
        const { post, author, otherPosts } = this.state

        return (
            <>
                <h3>{post.title}</h3>
                <Link to={`/authors/${author.id}`}>{author.name}</Link>
                <p>{post.body}</p>
                <hr />
                <h4>{`${otherPosts.length} more posts from this author`}</h4>
                <ul>
                    {otherPosts}
                </ul>
            </>
        )
    }

}

export default SinglePost