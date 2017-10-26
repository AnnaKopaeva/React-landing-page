import React from 'react'
import './blog.sass'
import 'normalize.css'
import WrapperFooter from '../footer';
import Pagination from './pagination';
import HeaderBlog from './header-blog';
import Mark from 'component/constants/mark'

import { Link } from 'react-router-dom'

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataset: [],
            active: 1,
            count: 100
        }
    }

    static defaultProps = {
        limit: 9
    }
    getData = (dataset) => {
        this.setState({dataset});
    }

    setCount = (count) => {
        this.setState({count});
    }

    handlerClick = (active) => {
        this.setState({active})
    }

    componentWillMount() {
        var active = location.toString();
        var url = new URL(active);
        active = Number(url.searchParams.get("pages")) || 1;

        const { limit } = this.props;
        this.setState({active});

        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${active}&_limit=${limit}`)
            .then((response) => {
                this.setCount(+response.headers.get('x-total-count'))
                return response.json();
            })
            .then(this.getData)
        console.log(active);
    }


    render(){
        const {active, count} = this.state;
        const {limit} = this.props;
        const listItems = this.state.dataset.map((data, key) => (
            <li key={key} className="main-posts__item">
                <Link to={`/posts/${data.id}`}>
                    <h4>{data.title}</h4>
                    <p className="description">{data.body}</p>
                </Link>
            </li>
        ));

        return(
            <div className="wrapper-posts">
                <HeaderBlog />
                <div className="wrapper-main-posts">
                    <div className="main-posts">
                        <h3 className="title">My blog</h3>
                        <Mark />
                        <ul className="main-posts__list">
                            {listItems}
                        </ul>
                        <Pagination
                            count={count}
                            limit={limit}
                            maxLength={6}
                            active={active}
                            handlerClick={this.handlerClick}
                        />
                    </div>
                </div>
                <WrapperFooter />
            </div>
        )
    }
}

export default Post;

