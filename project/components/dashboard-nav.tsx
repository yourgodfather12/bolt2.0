"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  MessageSquare,
  Settings,
  Users,
  LogOut,
} from "lucide-react";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-indigo-500",
  },
  {
    label: "Messages",
    icon: MessageSquare,
    href: "/dashboard/messages",
    color: "text-emerald-500",
  },
  {
    label: "Contacts",
    icon: Users,
    href: "/dashboard/contacts",
    color: "text-violet-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
    color: "text-neutral-500",
  },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-background/40 border-r border-border/50 backdrop-blur-xl">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold">
          Secure Portal
        </h2>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-x-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-background/20",
                pathname === route.href
                  ? "bg-background/20 text-foreground"
                  : "text-muted-foreground"
              )}
            >
              <route.icon className={cn("h-5 w-5", route.color)} />
              {route.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-auto px-3">
        <button className="flex w-full items-center gap-x-2 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-background/20">
          <LogOut className="h-5 w-5 text-red-500" />
          Logout
        </button>
      </div>
    </div>
  );
}