import PropTypes from 'prop-types'
import StyledHeroSection from './style'
import Image from 'next/image'
import Heading from '../../components/Heading'

const HeroSection = (props) => {
  return (
    <StyledHeroSection>
      <Image src={'/hero-resized-min.jpeg'} layout={'fill'} />
      <StyledHeroSection.Content>
        <StyledHeroSection.Inner>
          <Heading size={1} type={'h1'}>
            Veggielicious, massa gött vegetariskt käk
          </Heading>
        </StyledHeroSection.Inner>
      </StyledHeroSection.Content>
    </StyledHeroSection>
  )
}

export default HeroSection
