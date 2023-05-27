import useAuth from "../../hooks/useAuth";
import { useAuthContext } from "../../hooks/useAuth";

export default function Admin() {
    const { user, authenticated, error } = useAuthContext();

    if (!authenticated) {
        return (
            <div>
                <h1>
                    Acceso restringido, porfavor Inicia Sesion para acceder a tu Perfil.
                </h1>
            </div>
        );
    }

    if (user.role !== 'ADMIN') {
        return (
            <div>
                <h1>
                    Acceso restringido.
                </h1>
            </div>
        );
    }

    return (
        <div>
            <h1>ADIMN</h1>
        </div>
    );
}
