import { useAuthContext } from "../../../hooks/useAuth";
import { useRouter } from "next/router";
import NavBar from "../../../components/navbar";


export default function Details() {
    const { user, authenticated, error, register, login, logout, isAdmin } = useAuthContext();
    const router = useRouter();
    const data = router.query.apartment;

    return (
        <>
            <NavBar></NavBar>
            <div className="pt-24">
                <h1>HOLA MUNDO</h1>
            </div>
        </>
    )
}