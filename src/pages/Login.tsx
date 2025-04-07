import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // caminho do contexto
import volleyballImg from '../assets/login_volei.png';
import scoutAiLogo from '../assets/ScoutAí.png';

function Login() {
	const [formData, setFormData] = useState({ nickname: '', password: '' });
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const navigate = useNavigate();
	const { login } = useAuth();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');
		setSuccess('');

		try {
			const response = await fetch('http://127.0.0.1:8000/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					nickname: formData.nickname,
					password: formData.password
				})
			});

			if (!response.ok) {
				const data = await response.json();
				throw new Error(data.detail?.[0]?.msg || 'Erro no login');
			}

			const result = await response.json();
			login(result); // salva no contexto global
			setSuccess(`Bem-vindo(a), ${result.name}`);
			navigate('/'); // redireciona
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message);
			} else {
				setError('Erro desconhecido.');
			}
		}
	};

	return (
		<div className="flex h-screen">
			{/* Lado esquerdo - imagem */}
			<div className="w-1/2 h-screen">
				<img
					src={volleyballImg}
					alt="Login"
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Lado direito - formulário */}
			<div className="w-1/2 h-screen flex items-center justify-center">
				<div className="w-full max-w-sm px-8">
					<div className="flex flex-col items-center mb-6">
						<img src={scoutAiLogo} alt="ScoutAí Logo" className="h-10" />
						<h2 className="text-lg font-semibold text-cyan-800 mt-6">Login</h2>
					</div>

					<form className="space-y-4" onSubmit={handleSubmit}>
						<div>
							<label className="text-sm text-gray-700">E-mail (nickname)</label>
							<input
								type="text"
								name="nickname"
								value={formData.nickname}
								onChange={handleChange}
								className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700"
							/>
						</div>
						<div>
							<label className="text-sm text-gray-700">Senha</label>
							<input
								type="password"
								name="password"
								value={formData.password}
								onChange={handleChange}
								className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700"
							/>
						</div>

						{error && <p className="text-red-500 text-sm text-center">{error}</p>}
						{success && <p className="text-green-600 text-sm text-center">{success}</p>}

						<button
							type="submit"
							className="w-full bg-cyan-700 text-white py-2 rounded-md hover:bg-cyan-800 transition"
						>
							Login
						</button>
					</form>

					<p className="text-sm text-center text-gray-600 mt-4">
						Não tem uma conta?{' '}
						<a href="/registrar" className="text-cyan-700 hover:underline">
							Cadastre-se
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Login;
