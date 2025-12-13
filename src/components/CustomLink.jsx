import {NavigationMenuLink, navigationMenuTriggerStyle} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function CustomLink({href, children}) {
    return (
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href={href} passHref>
                {children}
            </Link>
        </NavigationMenuLink>
    );
}