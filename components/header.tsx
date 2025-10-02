"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/quote-modal";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, Sparkles } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300  ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover-scale">
            <div
              aria-hidden
              className="w-15 h-15 bg-muted-foreground"
              style={{
                WebkitMaskImage: 'url("/logo/hce.png")',
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskImage: 'url("/logo/hce.png")',
                maskSize: "contain",
                maskRepeat: "no-repeat",
              }}
            />
            <div className=" mt-3 text-xl font-bold lg:text-xl text-balance mb-3 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              HappyCraft
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center lg:space-x-10 md:space-x-6 space-x-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-bold transition-colors relative group ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <QuoteModal>
              <Button className="bg-primary hover:bg-primary/90 text-muted-foreground btn-sweep glow-effect cursor-pointer ml-3">
                <Sparkles className="h-4 w-4 slow-spin" /> Get a Free Quote
              </Button>
            </QuoteModal>
          </div>

          {/* Mobile Sheet Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden transition-transform duration-200 font-extrabold hover:scale-110 hover:bg-primary bg-primary cursor-pointer"
              >
                <Menu className="h-6 w-6 " />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left text-primary font-bold text-xl">
                  <div className="flex items-center space-x-2">
                    <div
                      aria-hidden
                      className="w-10 h-10 bg-muted-foreground"
                      style={{
                        WebkitMaskImage: 'url("/logo/hce.png")',
                        WebkitMaskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        maskImage: 'url("/logo/hce.png")',
                        maskSize: "contain",
                        maskRepeat: "no-repeat",
                      }}
                    />
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col space-y-4">
                {navigation.map((item) => (
                  <SheetClose key={item.name} asChild>
                    <Link
                      href={item.href}
                      className={`text-lg font-medium transition-colors py-2 px-4 rounded-md ${
                        isActive(item.href)
                          ? "text-primary bg-primary/10"
                          : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
                <div className="pt-4">
                  <SheetClose asChild>
                    <QuoteModal>
                      <Button className="w-[12rem] ml-2 bg-primary hover:bg-primary/90 btn-sweep text-muted-foreground cursor-pointer">
                        <Sparkles className="h-4 w-4 slow-spin" />
                        Get a Free Quote
                      </Button>
                    </QuoteModal>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
