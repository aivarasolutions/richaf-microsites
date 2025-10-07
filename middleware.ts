import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Protect /client/* unless NEXT_PUBLIC_CLIENTS_OPEN === 'true'
  if (process.env.NEXT_PUBLIC_CLIENTS_OPEN === 'true') return NextResponse.next();

  const user = process.env.BASIC_AUTH_USER;
  const pass = process.env.BASIC_AUTH_PASS;
  if (!user || !pass) return NextResponse.next();

  const header = req.headers.get('authorization');
  if (header?.startsWith('Basic ')) {
    const [, b64] = header.split(' ');
    const [u, p] = Buffer.from(b64, 'base64').toString('utf8').split(':');
    if (u === user && p === pass) return NextResponse.next();
  }
  return new NextResponse('Auth required', { status: 401, headers: { 'WWW-Authenticate': 'Basic realm="RichAF"' } });
}

export const config = { matcher: ['/client/:path*'] };
