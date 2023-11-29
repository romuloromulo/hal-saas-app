"use client";
import React from "react";
import UploadButton from "./UploadButton";
import { trpc } from "@/app/_trpc/client";
import { Ghost } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import { db } from "@/db";

function Dashboard() {
  console.log(db, "DB AQUI");
  // const {
  //   isLoading,
  //   data: files,
  //   isError,
  //   isSuccess,
  // } = trpc.getUserFiles.useQuery();
  type File = {
    createdAt: number;
    id: number;
  };

  const files: File[] = [];
  const isLoading: boolean = false;

  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 font-bold text-5xl text-gray-900">Meus arquivos</h1>
        <UploadButton />
      </div>
      {files && files?.length !== 0 ? (
        <div>
          <ul className="mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3">
            {files
              .sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
              )
              .map((file) => (
                <li
                  key={file.id}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg">
                  name
                </li>
              ))}
          </ul>
        </div>
      ) : isLoading ? (
        <Skeleton height={100} className="my-2" count={3} />
      ) : (
        <div className="mt-16 flex flex-col items-center gap-2">
          <Ghost className="h-8 w-8 text-zinc-800" />
          <h3 className="font-semibold text-xl">
            Parece que está bem vazio por aqui...
          </h3>
          <p>Vamos carregar seu primeiro PDF!</p>
        </div>
      )}
    </main>
  );
}

export default Dashboard;
