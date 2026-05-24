'use client';

import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/home-page');
  };

  return (
    <>
      <button onClick={handleNavigation} className="hover:underline hover: cursor-pointer">
        Ir para Home via Código
      </button>
    </>
  );

}