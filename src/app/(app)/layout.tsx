import Link from 'next/link';
import Image from 'next/image'

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <aside className="w-64 h-screen bg-[#4e7468] text-white fixed left-0 top-0 hidden md:block">
            <nav className="p-4 space-y-2">
                <Image src="/logoHop.png" width={200}
                    height={200}
                    alt='Logo do HOP branco' />
                <Link href="/dashboard" className="block p-2 hover:bg-gray-800 rounded">Sobre Nós</Link>
                <Link href="/settings" className="block p-2 hover:bg-gray-800 rounded">Eventos</Link>
                <Link href="/settings" className="block p-2 hover:bg-gray-800 rounded">Mídias</Link>
            </nav>
        </aside>
    )
}