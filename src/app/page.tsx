import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-2xl font-bold">ShadCN is working! 🚀</h1>
      <Button variant="default">Click Me</Button>
    </main>
  );
}
