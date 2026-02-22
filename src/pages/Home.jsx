import HomeCar from "../components/HomeCom";
import HomeJobs from "../components/HomeJobs";
import HomeExploer from "../components/HomeExploer";
import RealEstateJobs from "../components/RealEstateJobs";
import TopRecruiters from "../components/Toprecruters";
import AllLocations from "../components/Locations";
import RecruitmentServices from "../components/Recruitment";
import ExclusiveServices from "../components/OurEx"
import CertificationsGrid from "../components/RealEstateCertifications";
const Home = () => {
  return (
    <div className="space-y-10">
      <HomeCar />
      <HomeJobs />
      <HomeExploer />
      <RealEstateJobs />
      <TopRecruiters />
      <AllLocations />
      <RecruitmentServices />
      <ExclusiveServices />
      <CertificationsGrid />
    </div>
  );
};

export default Home;
