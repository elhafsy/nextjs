import {NavigationMenu, NavigationMenuList,} from "@/components/ui/navigation-menu"
import CustomLink from "@/components/CustomLink";

function MenuBar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <CustomLink href="/vd9/login">
                    Login
                </CustomLink>
                <CustomLink href="/vd9/logout">
                    Logout
                </CustomLink>
                <CustomLink href="/vd9/register">
                    Register
                </CustomLink>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default MenuBar;