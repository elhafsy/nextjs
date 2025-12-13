import {NavigationMenu, NavigationMenuList,} from "@/components/ui/navigation-menu"
import CustomLink from "@/components/CustomLink";

function MenuBar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/* <CustomLink href="/vd9/login">
                    Login
                </CustomLink>
                <CustomLink href="/vd9/logout">
                    Logout
                </CustomLink>
                <CustomLink href="/vd9/register">
                    Register
                </CustomLink>
                <CustomLink href="/vd10/a">
                    vd10 - A
                </CustomLink>
                <CustomLink href="/vd10/b">
                    vd10 - B
                </CustomLink>
                <CustomLink href="/vd10/c">
                    vd10 - C
                </CustomLink> */}
                <CustomLink href="/vd11/products">
                    products
                </CustomLink>
                
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default MenuBar;