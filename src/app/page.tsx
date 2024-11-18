import { signIn, signOut } from '@/auth';
import { TestAuth } from './_client';

const Home = () => (
	<main>
		<h1>Hello world!</h1>
		<p>
			This is a minimal reproduction of a simple Next.js app with{' '}
			<code>next-auth</code> / <code>auth.js</code> to demonstrate an issue with
			the transition to Next 15. Next 15 makes request-specific functions like{' '}
			<code>cookies()</code> and <code>headers()</code> async whereas in
			previous major releases those functions were synchronous.{' '}
			<code>next-auth</code> / <code>auth.js</code> beta has been patched to
			reflect the new async nature of <code>headers()</code> and{' '}
			<code>cookies()</code>, but not the <code>params</code> object that Next
			15 passes as the second argument to route handlers. Regardless of whether{' '}
			<code>next-auth</code> / <code>auth.js</code> uses the <code>params</code>{' '}
			object,
		</p>
		<form
			action={async () => {
				'use server';
				await signIn();
			}}>
			<button type='submit'>Sign in</button>
		</form>
		<form
			action={async () => {
				'use server';
				await signOut();
			}}>
			<button type='submit'>Sign out</button>
		</form>
		<TestAuth />
	</main>
);

export default Home;
