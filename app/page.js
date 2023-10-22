import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), {
  loading: () => <p className="text-center text-7xl transform translate-y-[300px] ">Loading...</p>,
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Map />
    </main>
  );
}
