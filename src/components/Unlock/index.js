import {useState} from 'react'

import {
  MainContainer,
  UnlockContainer,
  LockContainer,
  LockImage,
  LockStatus,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isButtonClicked, changeButtonStatus] = useState(false)

  const onClickButton = () => {
    changeButtonStatus(prevState => !prevState)
  }

  const imageUrl = isButtonClicked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const altText = isButtonClicked ? 'unlock' : 'lock'

  const lockStatus = isButtonClicked
    ? 'Your Device is Unlocked'
    : 'Your Device is Locked'

  const buttonText = isButtonClicked ? 'Lock' : 'Unlock'

  return (
    <MainContainer>
      <UnlockContainer>
        <LockContainer>
          <LockImage src={imageUrl} alt={altText} />
          <LockStatus>{lockStatus}</LockStatus>
        </LockContainer>
        <Button type="button" onClick={onClickButton}>
          {buttonText}
        </Button>
      </UnlockContainer>
    </MainContainer>
  )
}

export default Unlock
