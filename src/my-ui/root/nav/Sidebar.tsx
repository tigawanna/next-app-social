import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import {
  Home,
 LogOut,
  Settings,
  UserCircle,
} from "lucide-react";
import Link from "next/link";

interface SideBarProps {}

export function Sidebar({}: SideBarProps) {
  return (
    <div className="flex h-screen  flex-col items-center justify-center gap-5">
    <Separator className="my-1" />
      <h1 className="text-3xl h-[150px]">APP</h1>
    <NavLinks />
    <SystemLinks/>
    </div>
  );
}

interface NavLinksProps {}

export function NavLinks({}: NavLinksProps) {
  const links = [
    { name: "Home", route: "/", Icon: Home },
    { name: "Profile", route: "/profile",Icon: UserCircle},
  ];
  return (
      <div className="flex h-full w-full flex-col items-center justify-start">

   
          <nav className="flex h-[70%] mt-[100px] w-full flex-col items-center justify-start gap-5">

              {links.map((item) => {
                  const Icon = item.Icon;
                  return (
                    <div className="w-full">
                    <Separator className="my-2 " /> 
                      <Button
                          variant="ghost"
                          size="sm"
                          className="">
                          <Link
                              href={item.route}
                              className=" m-5 ">
                              {item.name}
                          </Link>
                          <Icon className="ml-2 h-5 w-5" />
                      </Button>
                      </div>
                  );
              })}
          </nav>
    </div>

  );
}


interface SystemLinksProps { }

export function SystemLinks({ }: SystemLinksProps) {

    return (
        <nav className="flex h-[10%] w-full flex-col items-center justify-start mb-5">
            <Button size="sm"
                className="min-h-12 flex w-[90%] items-center justify-evenly gap-10 hover:text-accent-foreground">
                <Settings />
            </Button>
            <Button size="sm"
            className="min-h-12 flex w-[90%] items-center justify-evenly gap-10 hover:text-accent-foreground">
            <LogOut/>
            </Button>
            <Separator className="my-4" />
        </nav>
    );
}
