import React from 'react';

class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataset: [],
        }
    }

    dataset = (dataset) => {
        this.setState({dataset});
    }

    componentWillMount() {
        const {params: {id}} =this.props.match;

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(this.dataset)
    }

    render(){
        const { dataset } = this.state;
        return(
            <div className="wrapper-detail-post">
                <div className="detail-post">
                    <h4>{dataset.title}</h4>
                    <p className="description">{dataset.body}</p>
                </div>
            </div>
        )
    }
}

export default PostPage;