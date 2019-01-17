import * as React from 'react'
// import styled from '../styled-components'

import TitleBlock from '../components/TitleBlock'

import Footer from '../components/Footer'

class NEStudyTour extends React.Component<{}> {
    render() {
      document.title = 'North East Study Tour | Boston, Massachusetts'
      return (
        <div>
          <TitleBlock
                banner = 'https://res.cloudinary.com/shingo/image/upload/v1543859014/silversea-cruise-canada-boston-massachusetts-usa_wgiinl.jpg'
                title = 'NORTH EAST STUDY TOUR'
                subtitle = 'MAKE WORK MEANINGFUL'
                info = 'BOSTON, MASSACHUSETTS • MAY 14-16, 2019'
                register = 'https://www.cvent.com/events/2019-shingo-northeast-study-tour/registration-08b8dbae81ea4d1a9ab900a29808119e.aspx?fqp=true'
                speakers = 'https://www.cvent.com/events/31st-annual-shingo-conference/speakers-cc99906ddb2f4a5abdc73a67a0142f24.aspx'
                agenda = 'https://www.cvent.com/events/2019-shingo-northeast-study-tour/agenda-08b8dbae81ea4d1a9ab900a29808119e.aspx'
                travel = 'http://www.cvent.com/events/31st-annual-shingo-conference/travel-cc99906ddb2f4a5abdc73a67a0142f24.aspx'
          />
          <Footer/>
        </div>
      );
    }
  }
  
  export default NEStudyTour;