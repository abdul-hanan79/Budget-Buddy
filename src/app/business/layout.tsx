import BusinessSidebar from "@/components/BusinessSidebar";
import Heading from "@/components/ui/Heading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-lightBg">
        <BusinessSidebar />
      </div>
      {/* // md:ml-80  */}
      <div className="md:col-span-3 col-span-4 p-2">{children}</div>
    </div>
  );
}
