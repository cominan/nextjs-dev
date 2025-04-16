
import {
  Card
} from "@/components/ui/card";
import RegisterForm from "./register-form";

export default function RegisterPage() {

  return (
    <Card className="w-[400px] shadow-lg m-auto mx-auto mt-20 bg-[#333] p-4">
      <h1 className="text-center text-2xl font-bold text-white">Đăng ký tài khoản</h1>
      <RegisterForm /> 
    </Card>
  );
}