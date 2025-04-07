import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial";
import Equipes from "./pages/Equipes";
import MeuTime from "./pages/MeuTime";
import AdicionarJogador from "./pages/AdicionarJogador";
import NovaPartida from "./pages/NovaPartida";
import NovaAnalise from "./pages/NovaAnalise";
import Analise from "./pages/Analise";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import RegistrarTime from "./pages/RegistrarTime";
import Estatisticas from "./pages/Estatisticas";
import { AuthProvider } from "./context/AuthContext"; // ✅ import do contexto

function App() {
	return (
		<AuthProvider> {/* ✅ envolve toda a aplicação */}
			<Router>
				<Routes>
					<Route path="/" element={<PaginaInicial sigla="BRA" pais="Brasil" />} />
					<Route path="/equipes" element={<Equipes />} />
					<Route path="/meu-time" element={<MeuTime />} />
					<Route path="/login" element={<Login />} />
					<Route path="/registrar" element={<Registrar />} />
					<Route path="/registrar-time" element={<RegistrarTime />} />
					<Route path="/adicionar-jogador" element={<AdicionarJogador />} />
					<Route path="/nova-analise" element={<NovaAnalise />} />
					<Route path="/nova-partida" element={<NovaPartida />} />
					<Route path="/analise" element={<Analise />} />
					<Route path="/estatisticas" element={<Estatisticas />} />
					<Route path="/estatisticas/:action" element={<Estatisticas />} />
				</Routes>
			</Router>
		</AuthProvider>
	);
}

export default App;
