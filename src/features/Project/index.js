import React from 'react'

const projectBox = {
  border: '1px solid black',
  margin: '10px',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
}

// id:2
// name:"EatMe"
// description:"A diet app"
// category:"iOS"
// author:"Samuel"
// authorCohort:"WEB14
// "
// teamCount:0
// collectionId:1
// created_at:"2019-01-03T19:10:59.045Z"
// updated_at:"2019-01-03T19:10:59.045Z"

const Project = ({
  id,
  name,
  description,
  category,
  author,
  authorCohort,
  members,
  isMember
}) => (
  <div style={projectBox}>
    <h3>
      {name} [{category}]
    </h3>
    <p>
      Submitted by: {author} [{authorCohort}]
    </p>
    <p>{description}</p>
    {members && (
      <ul>
        {members.map((member, i) => (
          <li key={i}>{member}</li>
        ))}
      </ul>
    )}
    {isMember ? (
      <button onClick={() => console.log('leaving')}>Leave</button>
    ) : (
      <button onClick={() => console.log('joining')}>Join</button>
    )}
  </div>
)

export default Project

const clickQuestion = (e, id) => {
  this.setState({
    ...{
      question1: false,
      question2: false,
      question3: false,
      question4: false
    },
    ...{ [`question${id}`]: !this.state[`question${id}`] }
  })
}
