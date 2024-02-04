import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'

import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    activeTabId: languageFiltersData[0].id,
    activeListData: [],
    isDataFetched: '',
  }

  componentDidMount() {
    this.getLanguages()
  }

  getLanguages = async () => {
    const {activeTabId} = this.state

    this.setState({
      isDataFetched: false,
    })

    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeTabId}`

    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.popular_repos.map(eachItem => ({
        name: eachItem.name,
        issuesCount: eachItem.issues_count,
        forksCount: eachItem.forks_count,
        starsCount: eachItem.stars_count,
        avatarUrl: eachItem.avatar_url,
        id: eachItem.id,
      }))

      this.setState({
        activeListData: updatedData,
        isDataFetched: true,
      })
    } else {
      this.setState({
        isDataFetched: false,
      })
    }
  }

  onChangeTabId = id => {
    this.setState(
      {
        activeTabId: id,
      },
      this.getLanguages,
    )
  }

  render() {
    const {isDataFetched, activeTabId, activeListData} = this.state
    return (
      <div>
        <h1 className="head-1">Popular</h1>
        <ul className="ul-list">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              eachTab={eachItem}
              key={eachItem.id}
              activeTabId={activeTabId}
              onChangeTabId={this.onChangeTabId}
            />
          ))}
        </ul>
        {isDataFetched === false ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
          </div>
        ) : (
          <ul className="ul-list-2">
            {`${isDataFetched}` ? (
              activeListData.map(eachRepository => (
                <RepositoryItem
                  eachRepository={eachRepository}
                  key={eachRepository.id}
                />
              ))
            ) : (
              <div className="failure-section">
                <img
                  className="failure-image"
                  src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png "
                  alt="failure view"
                />
                <h1 className="text-failure">Something Went wrong</h1>
              </div>
            )}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
