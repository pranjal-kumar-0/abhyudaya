"use client"
import FeedPage from '@/components/common/feed-page';
import SideNavBar from '@/components/common/sidenavbar';

const StudentFeedPage = () => {
  return (
    <FeedPage 
      sideNavBar={<SideNavBar />}
      headerTitle="Faculty Feed"
      headerSubtitle="Latest updates from your professors"
    />
  );
};

export default StudentFeedPage;