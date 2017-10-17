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
            <div>
                <h3>{dataset.title}</h3>
                <p>{dataset.body}</p>
            </div>
        )
    }
}

export default PostPage;