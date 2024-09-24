'use server';

import { createClient } from '@/utils/supabase/server';

export async function loginAction(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        throw new Error('Email and password are required');
    }

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        throw new Error('Invalid email or password');
    }
}
