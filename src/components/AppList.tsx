import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";

export default async function AppList() {
  const { data: apps, error } = await supabase.from("apps").select("*");

  if (error) {
    return <p className="text-red-500">Error: {error.message}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {apps.map((app) => (
        <Card key={app.id} className="hover:shadow-lg transition">
          <CardHeader>
            <CardTitle>{app.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">{app.description}</p>
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Visit App →
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
