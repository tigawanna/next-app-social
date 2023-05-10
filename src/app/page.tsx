import { AccordionComponent } from "@/my-ui/Accordion";



export default async function Home() {
  return (
    <main className="flex h-full min-h-screen  flex-col items-center justify-between p-2 bg-secondary">
      <h1 className='text-5xl font-bold'>hellow</h1>
        <AccordionComponent/>
    </main>
  )
}
