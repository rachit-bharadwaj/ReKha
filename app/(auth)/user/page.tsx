import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Login, Register } from "@/components/user";

const page = () => {
  return (
    <div className="p-3">
      <div className="mt-14 mb-5">
        <h1 className="text-primary font-bold text-5xl">Welcome!</h1>
        <p className="text-gray-500">Sign in to continue.</p>
      </div>

      {/* -------------------- signin tab ----------- */}
      <Tabs
        defaultValue="login"
        className="shadow-lg shadow-primary rounded max-w-sm mx-auto"
      >
        <TabsList className="flex p-2">
          <TabsTrigger className="flex-1 text-lg" value="register">
            Register
          </TabsTrigger>
          <TabsTrigger className="flex-1 text-lg" value="login">
            Login
          </TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <Login />
        </TabsContent>

        <TabsContent value="register">
          <Register />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
