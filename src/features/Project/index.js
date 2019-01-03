import React from 'react'

const projectBox = {
  border: '1px solid black',
  margin: '10px',
  padding: '10px'
}

const Project = ({ projectName, description, tags, members, isMember }) => (
  <div style={projectBox}>
    <h3>{projectName}</h3>
    <p>{description}</p>
    {tags && (
      <ul>
        {tags.map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
      </ul>
    )}
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
