import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar.jsx";
import AdminTopbar from "./AdminTopbar.jsx";

export default function AdminLayout() {
    return (
        <div className="min-h-dvh bg-zinc-950 text-zinc-100">
            <div className="grid lg:grid-cols-[280px_1fr]">
                <AdminSidebar />
                <div className="min-h-dvh">
                    <AdminTopbar />
                    <main className="p-4 sm:p-6">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
}
