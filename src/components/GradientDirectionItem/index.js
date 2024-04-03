// Write your code here

import {List, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionItem, currentDirection, onClickDirection} = props
  const {directionId, value, displayText} = directionItem
  const currentButton = directionId === currentDirection ? true : false

  const onClickButton = () => {
    onClickDirection(directionId)
  }

  return (
    <List>
      <DirectionButton
        type="button"
        onClick={onClickButton}
        currentButton={currentButton}
      >
        {displayText}
      </DirectionButton>
    </List>
  )
}

export default GradientDirectionItem
