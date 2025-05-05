"use client";
import * as React from "react";
import {
  IconDatabase,
  IconInnerShadowTop,
  IconReport,
} from "@tabler/icons-react";
import { NavDocuments } from "@/components/nav-documents";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  documents: [
    {
      name: "Manage Brand",
      url: "/admin/shop/brand",
      icon: IconReport,
    },
    {
      name: "Manage Categories",
      url: "/admin/shop/category",
      icon: IconDatabase,
    },

    {
      name: "Manage Products",
      url: "/admin/shop/products",
      icon: IconReport,
    },
    {
      name: "Add Product",
      url: "/admin/shop/products/add-product",
      icon: IconReport,
    },
    {
      name: "Update Product",
      url: "/admin/shop/products/update-product",
      icon: IconReport,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavDocuments items={data.documents} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
