'use client'; // Required for using hooks in Next.js

import React, { useState } from 'react';
import { useForm as useReactHookForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import  {send}  from '@/lib/email'; 
// import api from '@/utils/axiosApiInstence';

// Define the form schema using Zod
export const formSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

// Infer the type of the form schema
type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useReactHookForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        try {
            await send(data); // assuming send is an async function
            toast.success('Message sent successfully!');
            reset(); // <- This will clear all form fields
        } catch (error) {
            toast.error('Failed to send message.');
            console.error('Error sending email:', error);
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto space-y-4 bg-card p-4 rounded-xl border border-border"
        >
            {/* Name Field */}
            <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...register('name')} placeholder="Enter your name" />
                {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
            </div>

            {/* Email Field */}
            <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" {...register('email')} placeholder="Enter your email" />
                {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
            </div>

            {/* Message Field */}
            <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    {...register('message')}
                    placeholder="Enter your message"
                    rows={4}
                />
                {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                )}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Sending...' : 'Submit'}
            </Button>
        </form>
    );
}
