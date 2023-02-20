import { Outlet } from "react-router-dom";
import Headers from "./header";

export default function Layout() {
    return (
        <main>
            <Headers />
            <Outlet />
        </main>
    )
}