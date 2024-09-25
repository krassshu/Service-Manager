'use client';
import ReactLoading from "react-loading";
interface LoadingButtonProps {
    isLoading: boolean;
}

export default function LoadingButton({ isLoading }: LoadingButtonProps) {
    return (
        <button
            type="submit"
            className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
            disabled={isLoading}
        >
            {isLoading ?
                < div className="w-full flex justify-center items-center"><ReactLoading type={'bubbles'} color="#fff" width={32} height={24}/></div>
                : 'Login' }
        </button>
    );
}
