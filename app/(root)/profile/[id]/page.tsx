import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";

async function Page({ params }: { params: { id: string } }) {
    const user = await currentUser();
    if (!user) return null;

    // fetch organization list created by user
    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect('/onboarding');

    return (
        <section>
            <ProfileHeader

            />
        </section>
    )
}

export default Page;