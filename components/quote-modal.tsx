"use client";

import type React from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ContactForm } from "./contact-form";

interface QuoteModalProps {
  children: React.ReactNode;
  heading?: string;
  SubmitButtonText?: string;
}

export function QuoteModal({ children, heading, SubmitButtonText }: QuoteModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg lg:max-w-2xl max-h-[95vh] overflow-y-auto ">
        <DialogHeader>
          <DialogTitle>{heading || "Get Your Quote Instantly"}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col h-full">
          <ContactForm SubmitButtonText={SubmitButtonText || "Request Quote"} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
