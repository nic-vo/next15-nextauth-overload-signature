import { auth } from '@/auth';

export const GET = auth((req, ctx) => {
	if (!req.auth)
		return Response.json({ message: 'Unauthorized' }, { status: 401 });
	return Response.json({ message: 'Authorized' }, { status: 200 });
});

export const DELETE = auth((req) => {
	if (!req.auth)
		return Response.json({ message: 'Unauthorized' }, { status: 401 });
	return Response.json({ message: 'Authorized' }, { status: 200 });
});
