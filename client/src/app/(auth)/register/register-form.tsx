"use client";
import { registerUser } from "@/actions/register";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
 
export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Tên đăng nhập không được bỏ trống",
  }),
  email: z.string().min(2, {
    message: "Email không được bỏ trống",
  }).email({
    message: "Email không hợp lệ",
  }),
  password: z.string().min(6, {
    message: "Mật khẩu không được bỏ trống",
  }),
  confirmPassword: z.string().min(6, {
    message: "Xác nhận mật khẩu không được bỏ trống",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Mật khẩu và xác nhận mật khẩu không khớp",
});

export default function RegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    return registerUser(data);
  };
  return (
    <Form {...form} >
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-4"
    >
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-white">Tên đăng nhập</FormLabel>
              <FormControl>
                <Input className="text-white" placeholder="Nhập tên đăng nhập ...." {...field} />
              </FormControl>
              <FormMessage />
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-white">Email</FormLabel>
              <FormControl>
                <Input className="text-white" placeholder="Nhập email  ...." {...field} />
              </FormControl>
              <FormMessage />
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-white">Mật khẩu</FormLabel>
              <FormControl>
                <Input className="text-white" placeholder="Nhập mật khẩu ...." {...field} />
              </FormControl>
              <FormMessage />
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="confirmPassword"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-white">Xác nhân mật khẩu</FormLabel>
              <FormControl>
                <Input className="text-white" placeholder="Nhập lại mật khẩu ...." {...field} />
              </FormControl>
              <FormMessage />
        </FormItem>
      )}
    />
      <Button type="submit" className="w-full bg-[#333] hover:bg-[#444] text-white">
        Đăng ký
      </Button>
    </form>
  </Form>
  )
}