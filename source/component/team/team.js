import React from 'react'
import './team.sass'
import GaleryTeam from './team-galery'
import Mark from 'component/constants/mark'

import Man1 from './images/man1.png'
import Man2 from './images/man2.png'
import Man3 from './images/man3.png'
import Man4 from './images/man4.png'

export class Team extends React.Component {
  render() {
    return(
      <div className="main-wrapper team-wrapper">
        <div className="team">
          <h2 className="title">Meet Our Team</h2>
          <Mark />
          <p className="description">{"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, \
          totam rem aperiam, eaque ipsa quae ab illo inventore"}</p>
          <GaleryTeam data={this.props.data.galeryTeam} />
        </div>
      </div>
    )
  }
}

class WrapperTeam extends React.Component {
  state = {
    galeryTeam: [
      {
        name: 'John Filmr Doe',
        position: 'Managing Director',
        about: 'Nemo enim ipsam voluptatem quia voluptas ',
        description: 'sit aspernatur aut odit aut fugit, sed quia consequuntur \
          magni dolores eos qui ratione voluptatem.',
        imgSrc: Man1
      },{
        name: 'Chystine Hineu',
        position: 'Lead Designer',
        about: 'Nemo enim ipsam voluptatem quia voluptas ',
        description: 'sit aspernatur aut odit aut fugit, sed quia consequuntur \
          magni dolores eos qui ratione voluptatem.',
        imgSrc: Man2
      },{
        name: 'Martin Matrone',
        position: 'Lead Developer',
        about: 'Nemo enim ipsam voluptatem quia voluptas ',
        description: 'sit aspernatur aut odit aut fugit, sed quia consequuntur \
          magni dolores eos qui ratione voluptatem.',
        imgSrc: Man3
      },{
        name: 'Steve Flaulkin',
        position: 'Sr. UI Designer',
        about: 'Nemo enim ipsam voluptatem quia voluptas ',
        description: 'sit aspernatur aut odit aut fugit, sed quia consequuntur \
          magni dolores eos qui ratione voluptatem.',
        imgSrc: Man4
      }
    ]
  }

  render() {
    return <Team data={this.state} />
  }
}

export default WrapperTeam;