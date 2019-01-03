import React from 'react'

const projectBox = {
  border: '1px solid black',
  margin: '10px'
}

const Project = ({ title, description, tags, members, isMember }) => (
  <div style={projectBox}>
    <h3>{title}</h3>
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
      <button onSubmit={() => console.log('leaving')}>Leave</button>
    ) : (
      <button onSubmit={() => console.log('joining')}>Join</button>
    )}
  </div>
)

export default Project
