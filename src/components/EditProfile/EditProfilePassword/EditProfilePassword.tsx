export default function EditProfilePassword(){

    return(
        <>
            <div className="sm:col-span-7">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-neutral-200">Password</label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input type="password" name="password" id="password" autoComplete="password" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-neutral-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="••••••••••••"/>
                    </div>
                </div>
            </div>
            <div className="sm:col-span-7">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-neutral-200">Repeat password</label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input type="password" name="password" id="password" autoComplete="password" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-neutral-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="••••••••••••"/>
                    </div>
                </div>
            </div>
        </>
    )
}