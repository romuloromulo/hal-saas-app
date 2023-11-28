"use client";

import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { useState } from "react";
import { Button } from "./ui/button";

function UploadButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}>
      <DialogTrigger asChild>
        <Button>Carregar PDF</Button>
      </DialogTrigger>
    </Dialog>
  );
}

export default UploadButton;
