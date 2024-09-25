'use client';

import { useState } from 'react';
import { signIn } from '@/app/login/action';
import LoadingButton from "@/app/login/LoadingButton";

export default function Login() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        const formData = new FormData(event.currentTarget);

        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        if (!email || !password) {
            setErrorMessage('Email and password are required');
            setIsLoading(false);
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setErrorMessage('Invalid email format');
            setIsLoading(false);
            return;
        }

        try {
            const result = await signIn(formData);
            if (result.error) {
                setErrorMessage(result.error);
                setIsLoading(false);
            } else {
                setErrorMessage(null);
                setIsLoading(false);
            }
        } catch (error: any) {
            setErrorMessage('Login failed: ' + error.message);
            setIsLoading(false);
        }
    };

    return (
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                />
            </div>
            <div>
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div className="text-red-500 text-sm">
                {errorMessage && (
                    <p>{errorMessage}</p>
                )}
            </div>
            <LoadingButton isLoading={isLoading} />
        </form>
    );
}
