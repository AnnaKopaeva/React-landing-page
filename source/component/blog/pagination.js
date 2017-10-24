import React from 'react'
import { Link } from 'react-router-dom'

class Pagination extends React.Component {

    getNumberPage(){
        const {count, limit, active, maxLength} = this.props;
        const numberPage = count / limit;
        var arr = [active, ];

        for (let i=1; arr.length < maxLength; i++) {
            let before = active - i;
            let after = active + i;

            if (before >= 1)
                arr.unshift(before)

            if (after <= numberPage)
                arr.push(after)
        }
        return arr;
    }

    render() {
        var getNumberPage = this.getNumberPage();
        var {count, limit, active, handlerClick} = this.props;
        const numberPage = count / limit;
        const before = (active - 1) < 1 ? 1 : active - 1;
        const next = (active + 1 >= numberPage) ? numberPage : active + 1;

        const listPages = getNumberPage.map((number, key) => {
            return (
                <li key={key} className={active == number ? 'active' : ''} onClick={() => handlerClick(number)}>
                    <Link to={`/posts?pages=${number}`} >{number}</Link>
                </li>)
        })
        return (
            <ul className="pagination">
                <li onClick={() => handlerClick(before)}><Link to={`/posts?pages=${before}`}><i className="fa fa-arrow-circle-left" aria-hidden="true"></i></Link></li>
                {listPages}
                <li onClick={() => handlerClick(next)}><Link to={`/posts?pages=${next}`}><i className="fa fa-arrow-circle-right" aria-hidden="true"></i></Link></li>
            </ul>
        )
    }
}

export default Pagination;