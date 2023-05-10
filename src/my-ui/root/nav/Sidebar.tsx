import { ItemIndicator } from "@radix-ui/react-context-menu";
import { Home, Settings, UserCircle } from "lucide-react";
import Link from "next/link";

interface SideBarProps {

}

export function Sidebar({}:SideBarProps){

return (
 <div className='w-full h-full flex flex-col items-center justify-center'>
    <NavLinks/>

       
</div>
);
}


interface NavLinksProps {

}

export function NavLinks({}:NavLinksProps){
    const links = [
        { name: "Home", route: '/', Icon: Home },
        { name: "Profile", route: '/profile', Icon: UserCircle },

    ]
return (
 <nav className='w-full h-full flex flex-col items-center justify-center'>
 {links.map((item)=>{
    const Icon = item.Icon
    return (
        <div className="w-[70%] flex items-center justify-evenly gap-2 hover:bg-secondary" >
            <Link 
            href={item.route}
                className="w-full flex items-center justify-evenly gap-5 bg-purple-600 text-xl active:bg-destructive">
                {item.name}
            </Link>
            <Icon size={"2rem"} />
        </div>
    )
 })}
 </nav>
);
}
