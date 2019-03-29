import * as React from 'react'
import styled from '../styled-components'

import TitleBlock from '../components/TitleBlock'
import TextBlock from '../components/NETextBlock'
import PhotoBlock from '../components/PhotoBlock'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'

const Content = styled.div`
  margin: 40px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const StyledTextBlock = styled(TextBlock)`
  font-size: 17px;
  width: 500px;
  max-width: 90%;
  margin: auto 20px;
`

const StyledPhotoBlock = styled(PhotoBlock)`
  width: 500px;
  height: auto;
  max-width: 90vw;
  max-height: 45vw;
  margin: auto 20px;
`

class NEStudyTour extends React.Component<{}> {
    render() {
      document.title = 'North East Study Tour | Boston, Massachusetts'
      const link1: [string, string] = ['Summary','https://www.cvent.com/events/2019-shingo-northeast-study-tour/event-summary-08b8dbae81ea4d1a9ab900a29808119e.aspx']
      const link2: [string, string] = ['Agenda','https://www.cvent.com/events/2019-shingo-northeast-study-tour/agenda-08b8dbae81ea4d1a9ab900a29808119e.aspx']
      const link3: [string, string] = ['Contact','https//www.cvent.com/events/2019-shingo-northeast-study-tour/contactus-08b8dbae81ea4d1a9ab900a29808119e.aspx']
      return (
        <div>
          <NavBar/>
          <Newsletter/>
          <TitleBlock
                banner = 'https://res.cloudinary.com/shingo/image/upload/v1549898198/Events/StudyTours/2019Northeast/NortheastBannerImage.jpg'
                title = 'NORTHEAST STUDY TOUR'
                info = 'BOSTON, MASSACHUSETTS • MAY 14-16, 2019'
                register = 'https://www.cvent.com/events/2019-shingo-northeast-study-tour/registration-08b8dbae81ea4d1a9ab900a29808119e.aspx?fqp=true'
                link1 = {link1}
                link2 = {link2}
                link3 = {link3}
          />
          <Content>
            <Row>
              <StyledTextBlock/>
              <StyledPhotoBlock image='https://res.cloudinary.com/shingo/image/upload/v1549562775/WebDesign/Logos/Northeast-Study-Tour-logo.png'/>
            </Row>
          </Content> 
          <Footer/>
        </div>
      );
    }
  }
  
  export default NEStudyTour;