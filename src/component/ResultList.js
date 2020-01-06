import React from 'react'

class ResultList extends React.Component {
    constructor (props) {
        super (props)
    }
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul>
                            {this.props.results.map(value => {
                                return <li className="resultTextRequest" key={value.id_article}> <a href={value.url_article} target="blanck"> {value.title_article} </a> </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default ResultList