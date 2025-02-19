import AppList from "@/components/AppList";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-8 p-6">
      <h1 className="text-3xl font-bold">📚 App Library</h1>
      <AppList />
    </main>
  );
}
