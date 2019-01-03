import React from 'react'

// name, description, info
// dashboard, new button up top (contingent on admin)

const mockData = [
  {
    collectionName: 'collection 1',
    description: ';lkafleakh;kajge',
    startDate: 'now',
    endDate: 'then',
    maxMembersPerTeam: 5
  },
  {
    collectionName: 'collection 2',
    description: ';lkafleakh;kajge',
    startDate: 'now',
    endDate: 'then',
    maxMembersPerTeam: 5
  },
  {
    collectionName: 'collection 3',
    description: ';lkafleakh;kajge',
    startDate: 'now',
    endDate: 'then',
    maxMembersPerTeam: 5
  }
]

const Dashboard = () => (
  <div className="dashboard-container">
    <h1>Dashboard</h1>
    {mockData.map(collection => (
      <div className="dashboard-collection-container">
        <h2>{collection.collectionName}</h2>
        <p>{collection.description}</p>
        <p>Start: {collection.startDate}</p>
        <p>End: {collection.endDate}</p>
        <p>Max members per team: {collection.maxMembersPerTeam}</p>
      </div>
    ))}
  </div>
)

export default Dashboard
