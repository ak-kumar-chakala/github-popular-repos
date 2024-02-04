import './index.css'

const LanguageFilterItem = props => {
  const {activeTabId, onChangeTabId, eachTab} = props

  const {id, language} = eachTab

  const onClickTab = () => {
    console.log(id)
    onChangeTabId(id)
  }

  const buttonClassName = activeTabId === id ? 'style-tab-button' : 'tab-button'

  return (
    <li className="li-item">
      <button onClick={onClickTab} className={buttonClassName} type="button">
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
