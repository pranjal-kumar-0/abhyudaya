"use client"
import FacultySideNavBar from '@/components/common/faculty-sidenavbar';
import FeedPage from '@/components/common/feed-page';

const FacultyFeedPage = () => {
  return (
    <FeedPage 
      sideNavBar={<FacultySideNavBar/>}
      headerTitle="My Posts"
      headerSubtitle="Posts you've shared with students"
    />
  );
};

export default FacultyFeedPage;
