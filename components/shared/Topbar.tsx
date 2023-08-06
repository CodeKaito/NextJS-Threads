import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

function TopBar() {
    return (
        <nav className="topbar">
            <div>
                <Link href="/" className="flex items-center gap-4">
                    <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
                    <p className="text-heading3-bold text-light-1 max-xs:hidden">
                        Threads
                    </p>
                </Link>

                <div className="flex items-center gap-1">
                    <div className="block:hidden">
                        <SignedIn>
                            <SignOutButton>
                                <div className="flex cursor:pointer">
                                    <Image src="/assets/logout.svg" alt="logout" width={24} height={24} />
                                </div>
                            </SignOutButton>
                        </SignedIn>
                    </div>

                    <OrganizationSwitcher 
                        appearance={{
                            elements: {
                                organizationSwitcherTrigger: "py-24 px-24",
                            }
                        }}
                    />
                </div>

            </div>
        </nav>
    )
}

export default TopBar;