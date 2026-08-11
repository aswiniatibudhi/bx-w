"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "AI Consulting", href: "/services/ai-consulting" },
      { name: "AI Product Development", href: "/services/ai-product-development" },
    ],
  },
  { name: "Industries", href: "/industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Teams", href: "/teams" },
  { name: "Insights", href: "/insights" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-background sm:h-20",
        scrolled && "shadow-sm"
      )}
    >
      <nav className="relative mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          <div className="flex min-w-0 items-center">
            <Link
              href="/"
              className="flex min-w-0 items-center gap-2.5 leading-none sm:gap-3"
            >
              <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full sm:h-9 sm:w-9">
                <Image
                  src="/images/logo.png"
                  alt=""
                  width={36}
                  height={36}
                  aria-hidden
                  className="absolute left-1/2 top-[-8%] h-[145%] w-[145%] max-w-none -translate-x-1/2 object-cover object-top"
                />
              </span>
              <span className="truncate text-lg font-bold tracking-tight sm:text-2xl">
                <span className="sr-only">BrightAxis AI - </span>
                Bright<span className="text-primary">Axis</span>
              </span>
            </Link>
          </div>

        {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) =>
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link href={child.href}>{child.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9"
            >
              {mounted && (
                <>
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </>
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button asChild>
              <Link href="/contact">Book a Call</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9"
            >
              {mounted && (
                <>
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="h-9 w-9"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-full border-t border-border bg-background shadow-lg lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <React.Fragment key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base text-muted-foreground hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children?.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block px-6 py-2 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </React.Fragment>
              ))}
              <div className="px-3 pt-4">
                <Button asChild className="w-full">
                  <Link href="/contact">Book a Call</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
