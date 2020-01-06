import React from 'react';
import './App.css';
import ResultList from './component/ResultList';
import SearchBar from './component/SearchBar'

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = { 
      searchText : "",
      baseUrl: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      apiKey: "5RNOaxR6OkSe61Va9k7U5khsrUq6No0v",
      results : []
    }
  }

  handleChange = (e) => {
    this.setState({searchText : e.target.value })
  }

  handleSubmit = () => {
    console.log(this.state.searchText)
    this.requestQuery()
  }

  requestQuery = () => {
    const URL = `${this.state.baseUrl}?q=${this.state.searchText}&api-key=${this.state.apiKey}`
    console.log(URL)
    fetch (URL).then(response => {
      if (response.ok) {
        console.log('Reques success' , response.statusText , response.status)
        return response.json()
      }else {
        console.log('Response Denied' , response.statusText , response.status)
        return
      }
    }).then (data => {
      let responseData = data.response.docs
      console.log(responseData)
      let resultsData = responseData.map(value => {
        let url = value.web_url
        let headline = value.headline
        let titleArticle = headline.main
        let firstParagraph = value.lead_paragraph
        let id = value._id
        //return objet
        return {url_article : url , title_article : titleArticle , first_paragraph : firstParagraph , id_article : id }
      })
      this.setState({results : resultsData})
    })
  }

  render() {
    return (
      <div className="container mt-4 app">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>New York Times Request Api React</h1>
            <hr/>
          </div>
        </div>
          <SearchBar
            change={this.handleChange}
            submit={this.handleSubmit}
          />
        <div className="row">
          <div className="col-md-12 mt-4">
            <h2>Résultat de la request</h2>
            <hr/>
              <ResultList results={this.state.results} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
