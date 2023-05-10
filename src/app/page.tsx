import { Accordion } from "@/components/ui/accordion";
import { AccordionComponent } from "@/my-ui/Accordion";
import { Sidebar } from "@/my-ui/navigation/Sidebar";
import { playlists } from "@/my-ui/navigation/data/playlists";


export default async function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center justify-between p-2">
      <h1 className='text-5xl font-bold'>hellow</h1>
    
      <AccordionComponent/>
    </main>
  )
}
