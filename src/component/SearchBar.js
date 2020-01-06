import React from 'react'

class SearchBar extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <form onSubmit={(e) => { e.preventDefault(); this.props.submit() }}  >
                            <div className="form-group">
                                <input onChange={(e) => this.props.change(e)} type="text" className="form-control" id="text" placeholder="Search..." />
                                <button type="submit" className="btn btn-success btn-lg mt-4">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default SearchBar