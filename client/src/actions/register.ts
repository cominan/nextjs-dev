'use server'
import { z } from 'zod';
import { formSchema } from './../app/(auth)/register/register-form';

export async function registerUser(formData:z.infer<typeof formSchema>) {
  console.log('Đăng ký:',  formData);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  console.log('API URL:', apiUrl);
  
  const res = await fetch(`${apiUrl}` + '/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error('Failed to register');
  }
  );
  console.log('Kết quả đăng ký:', res);
  return res;
}
