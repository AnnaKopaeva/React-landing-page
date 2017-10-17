import React from 'react'
import './blog.sass'
import 'normalize.css'
import WrapperFooter from '../footer';

import { Link } from 'react-router-dom'

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataset: [],
        }
    }

    static defaultProps = {
        limit: 10
    }
    dataset = (dataset) => {
        this.setState({dataset});
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(this.dataset)
    }


    render(){
        const listItems = this.state.dataset.map((data, key) => (
            <li key={key}>
                <Link to={`/posts/${data.id}`}>
                    <h1>{data.title}</h1>
                    <p>{data.body}</p>
                </Link>
            </li>
        ));

        return(
            <div className="wrapper-posts">
                <div className="main-posts">
                    <h3>Post name</h3>
                    <ul>
                        {listItems}
                    </ul>
                </div>
                <WrapperFooter />
            </div>
        )
    }
}

export default Post;