import Head from 'next/head';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Smakensa Archive Letter</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<nav className='h-20 w-full flex items-center'>
				<div className='container px-40 flex items-center space-x-5 mx-auto justify-between'>
					<a href='/'>
						<img src='/logo-smk.png' alt='Logo' className='w-20' />
					</a>
					<ul className='flex items-center space-x-5'>
						<li className='text-white font-bold hover:underline hover:text-yellow-500 duration-200 transition'>
							<a href='/'>Home</a>
						</li>
						<li className='text-white font-bold hover:underline hover:text-yellow-500 duration-200 transition'>
							<a href='/'>About</a>
						</li>
						<li className='text-white font-bold hover:underline hover:text-yellow-500 duration-200 transition'>
							<a href='/'>Contact</a>
						</li>
					</ul>
				</div>
			</nav>
			<div className='mt-10'>
				<div className='flex container px-40 w-full mx-auto'>
					<div className='w-1/2'>
						<h1 className='text-3xl font-black text-white'>
							Welcome Smakensa Archive Letter
						</h1>
						<img
							className='object-contain w-10/12'
							src='/information.png'
							alt='Illustration'
						/>
					</div>
					<div className='w-1/2 flex justify-end'>
						<div className='border w-9/12 border-yellow-500 py-5 px-10 rounded'>
							<h1 className='font-black text-white text-xl'>Log In</h1>
							<p className='text-white'>Log In with your email.</p>
							<label className='block text-white mt-5'>Email</label>
							<input
								className='mt-2 bg-gray-900 text-white outline-none border-b focus:border-yellow-500 transition duration-200 w-full pb-2'
								type='text'
								placeholder='Type your email...'
							/>
							<label className='block mt-2 text-white'>Password</label>
							<input
								className='mt-2 bg-gray-900 text-white outline-none border-b focus:border-yellow-500 transition duration-200 w-full pb-2'
								type='password'
								placeholder='Type your password...'
							/>
							<button className='block mt-5 w-full bg-yellow-500 text-white py-2 hover:bg-yellow-600 transition duration-200 rounded'>
								Log In
							</button>
							<p className='mt-5 text-white text-center'>Or log in with</p>
							<div className='flex mt-5 space-x-2'>
								<button className='block w-full bg-blue-700 text-white py-2 hover:bg-blue-800 transition duration-200 rounded'>
									Facebook
								</button>
								<button className='block w-full bg-blue-500 text-white py-2 hover:bg-blue-600 transition duration-200 rounded'>
									Twitter
								</button>
							</div>
							<p className='mt-5 text-white text-center'>
								Don't have an account?{' '}
								<a
									href='/'
									className='font-bold text-yellow-500 hover:underline'
								>
									Sign Up
								</a>
								.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
