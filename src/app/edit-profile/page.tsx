import EditProfilePassword from "@/components/EditProfile/EditProfilePassword/EditProfilePassword";
import EditProfileUploadAvatar from "@/components/EditProfile/EditProfileUploadAvatar/EditProfileUploadAvatar";
import EditProfileMail from "@/components/EditProfile/EditProfileMail/EditProfileMail";

export default function EditProfile(){

    return(
        <div className="flex justify-center">
            <form className='lg:max-w-2xl'>
                <div className="space-y-0">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-neutral-200">Profile</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-neutral-300">This information will be displayed publicly so be careful what you share.</p>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <EditProfileMail/>
                            <EditProfilePassword/>
                        </div>
                    </div>
                    <EditProfileUploadAvatar/>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-red-700 dark:text-red-900">Cancel</button>
                    <button type="button" className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </form>
        </div>
    )
}