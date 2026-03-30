import Banner from "@/components/layout/Banner";
import Profile from "@/components/layout/Profile";
import TabsContentComponent from "@/components/content/TabContent";

export default function Home() {
  return (
    <div className="bg-[#4A4A4A] text-white p-4">
      <Banner />
      <Profile />
      <TabsContentComponent />
    </div>
  );
}
