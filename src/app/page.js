import Banner from "@/components/Banner";
import Profile from "@/components/Profile";
import TabsContentComponent from "@/components/TabContent";

export default function Home() {
  return (
    <div className="bg-[#4A4A4A] text-white p-4">
      <Banner />
      <Profile />
      <TabsContentComponent />
    </div>
  );
}
