
import {
  Card
} from "@/components/ui/card";
import LoginForm from "./login-form";

export default function LoginPage() {

  return (
    <Card className="w-[400px] shadow-lg m-auto mx-auto mt-20 bg-[#333] p-4">
      <h1 className="text-center text-2xl font-bold text-white">Đăng nhập</h1>
      <LoginForm /> 
    </Card>
  );
}