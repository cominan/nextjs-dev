'use server'
import { formSchema } from '@/app/(auth)/login/login-form';
import { z } from 'zod';
export async function loginUser(formData:z.infer<typeof formSchema>) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const res = await fetch(`${apiUrl}` + '/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  const result = await res.json();
  
  if (res.ok) {
    return result.data;
  }
  throw new Error('Failed to login');
} 
