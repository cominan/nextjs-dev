"use client";
import { loginUser } from "@/actions/login";
import { registerUser } from "@/actions/register";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
 
export const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email đăng nhập không được bỏ trống",
  }).email({
    message: "Email không hợp lệ",
  }),
  password: z.string().min(6, {
    message: "Mật khẩu không được bỏ trống",
  }),})

export default function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    return loginUser(data);
  };
  return (
    <Form {...form} >
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-4"
    >
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-white">Email đăng nhập</FormLabel>
              <FormControl>
                <Input className="text-white" placeholder="Nhập email ...." {...field} />
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
      <Button type="submit" className="w-full bg-[#333] hover:bg-[#444] text-white">
        Đăng nhập 
      </Button>
    </form>
  </Form>
  )
}