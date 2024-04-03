import {Component} from 'react'

import {
  GradientGeneratorContainer,
  GradientGeneratorCard,
  MainHeading,
  DirectionHeading,
  UnorderList,
  ColorPickerHeading,
  ColorInputContainer,
  ColorInputCard,
  ColorInputHeading,
  ColorInput,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    currentDirection: gradientDirectionsList[0].directionId,
    gradientColor1: '#8ae323',
    gradientColor2: '#014f7b',
  }

  onClickDirection = id => {
    this.setState({currentDirection: id})
  }

  onChangeColor1 = event => {
    this.setState({gradientColor1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({gradientColor2: event.target.value})
  }

  onClickGenerate = () => {
    const {gradientColor1} = this.state
    this.setState({gradientColor1})
  }

  render() {
    const {currentDirection, gradientColor1, gradientColor2} = this.state
    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        currentDirection={currentDirection.toLowerCase()}
        bgColor1={gradientColor1}
        bgColor2={gradientColor2}
      >
        <GradientGeneratorCard>
          <MainHeading>Generate a CSS Color Gradient</MainHeading>
          <DirectionHeading>Choose Direction</DirectionHeading>
          <UnorderList>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                currentDirection={currentDirection}
                key={eachItem.directionId}
                directionItem={eachItem}
                onClickDirection={this.onClickDirection}
              />
            ))}
          </UnorderList>
          <ColorPickerHeading>Pick the Colors</ColorPickerHeading>
          <ColorInputContainer>
            <ColorInputCard>
              <ColorInputHeading>{gradientColor1}</ColorInputHeading>
              <ColorInput
                onChange={this.onChangeColor1}
                value={gradientColor1}
                type="color"
              />
            </ColorInputCard>
            <ColorInputCard>
              <ColorInputHeading>{gradientColor2}</ColorInputHeading>
              <ColorInput
                onChange={this.onChangeColor2}
                value={gradientColor2}
                type="color"
              />
            </ColorInputCard>
          </ColorInputContainer>
          <GenerateButton onClick={this.onClickGenerate} type="button">
            Generate
          </GenerateButton>
        </GradientGeneratorCard>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
