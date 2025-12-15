import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import db from "@/src/server/db/db";
export default async function Home() {
  const users = await db.query.Users.findMany();
  return (
    <div className="h-screen flex items-center justify-center">
      <form className="w-full max-w-md flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center">Create your app</h1>
        <Input name="appName" placeholder="Enter your app name" />
        <Textarea name="description" placeholder="Enter your description" />
        <Button type="submit">Submit</Button>
      </form>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
