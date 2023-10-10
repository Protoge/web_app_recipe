"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
    const router = useRouter()
    useEffect(() => {
        router.back()
    },[router])

  return (
    <div className="global">
      
    </div>
  );
}