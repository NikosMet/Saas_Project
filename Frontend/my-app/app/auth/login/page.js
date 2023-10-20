import Head from 'next/head';
import Link from 'next/link';


export default function Page()
{
	return (
<div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
	  <Head>
		<title>Home</title>
	  </Head>

	<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
	  <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
		<div className="w=-3/5 p-5 text-black">
		  <div className="text-left font-bold">
			<span className="text-green-500">Ebook</span>Store
		  </div>
		  <div className="py-10">
			<h2 className="text-3xl font-bold text-green-500 mb-2">Login to account</h2>
			<div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
			<div className="flex justify-center my-2">
			
			</div>{/*Social Login section*/}

			<div className="flex flex-col items-center">
			  <div className="w-full rounded border border-gray-300 p-2">
				<input type="email" name="email" placeholder="Email" />
			  </div>  
			</div>

			<div className="flex flex-col items-center">
			  <div className="w-full rounded border border-gray-300 p-2">
				<input type="password" name="password" placeholder="Password" />
			  </div>  
			</div>

		  </div>
		</div>
		{/*sign in section*/}
	   
		<div className="w=-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
		  <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
		  <div className="border-2 w-10 cborder-white inline-block mb-2"></div>
		  <p className= "mb-2">Fill up personal information and start journey with us!!</p>
		  <Link href="signup" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">
			Sign Up</Link>
		  </div>
		   {/*sign up section*/}
	  </div>
	</main>
	</div>
	);
}
