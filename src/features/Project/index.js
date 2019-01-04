import React from 'react'

const projectBox = {
  border: '1px solid black',
  margin: '10px',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
}

const Project = ({
  id,
  name,
  description,
  category,
  author,
  authorCohort,
  members,
  isMember,
  joinProject,
  leaveProject
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
      <button onClick={() => leaveProject()}>Leave</button>
    ) : (
      <button onClick={() => joinProject()}>Join</button>
    )}
  </div>
)

export default Project
