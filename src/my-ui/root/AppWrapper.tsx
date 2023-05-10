interface AppWrapperProps {
    children: React.ReactNode
}

export function AppWrapper({children}:AppWrapperProps){
return (
 <div className='w-full h-full flex items-center justify-center'>
{children}
 </div>
);
}
