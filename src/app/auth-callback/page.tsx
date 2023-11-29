"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { trpc } from "../_trpc/client";
import { Loader2 } from "lucide-react";

function page() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const { isSuccess } = trpc.authCallback.useQuery(undefined, {
    retry: true,
    retryDelay: 2000,
  });
  if (!isSuccess) {
    console.log("falho");
    router.push("/api/auth/login");
  } else {
    router.push(origin ? `/${origin}` : "/dashboard");
  }
  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="font-semibold text-xl">Configurando sua conta...</h3>
        <p>Você será redirecionado automaticamente.</p>
      </div>
    </div>
  );
}

export default page;
