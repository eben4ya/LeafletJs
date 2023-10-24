import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), {
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  ),
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Map />
    </main>
  );
}
