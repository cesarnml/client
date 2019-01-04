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
  leaveProject,
  username,
  allMembers,
  collectionId
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
    {members.includes(username) && (
      <button onClick={() => leaveProject(id, collectionId)}>Leave</button>
    )}

    {!allMembers.includes(username) && (
      <button onClick={() => joinProject(id, collectionId)}>Join</button>
    )}
  </div>
)

export default Project
