import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar } from "./nav/Sidebar";




interface AppWrapperProps {
    children: React.ReactNode
}

export function AppWrapper({children}:AppWrapperProps){
return (
 <div className='w-full h-screen overflow-hidden flex items-center justify-center'>
        
      <div className='w-[200px] h-full flex flex-col items-center justify-center'>
         <Sidebar/>
        </div>
   
        <ScrollArea className="h-full  w-full px-2">
            {children}
        </ScrollArea>
 </div>
);
}
