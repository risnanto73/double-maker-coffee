import { NavLink } from "react-router-dom";
import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";

export default function NotFound() {
    return (
        <main className="py-16">
            <Container>
                <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-10 text-center">
                    <div className="text-3xl font-semibold text-white">404</div>
                    <p className="mt-2 text-zinc-300">Page not found.</p>
                    <div className="mt-6 flex justify-center gap-2">
                        <Button as={NavLink} to="/">Home</Button>
                        <Button variant="ghost" as={NavLink} to="/admin">Admin</Button>
                    </div>
                </div>
            </Container>
        </main>
    );
}
