import React from 'react'
import DashboardPage from '@/components/faculty/dashboard/dashboard'
import FacultySideNavBar from '@/components/common/faculty-sidenavbar'

const Dashboard = () => {
  return (
    <DashboardPage sideNavBar={<FacultySideNavBar />} />
  )
}

export default Dashboard