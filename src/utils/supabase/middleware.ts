import { NextResponse, type NextRequest } from 'next/server';
import { createClient } from './server';

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    });

    const supabase = createClient(request, supabaseResponse);

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const pathname = request.nextUrl.pathname;

    // Jeśli użytkownik nie jest zalogowany i próbuje uzyskać dostęp do chronionej strony
    if (
        !user &&
        !pathname.startsWith('/login') &&
        !pathname.startsWith('/auth')
    ) {
        const url = request.nextUrl.clone();
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    // Jeśli użytkownik jest zalogowany i próbuje uzyskać dostęp do strony logowania
    if (user && pathname.startsWith('/login')) {
        const url = request.nextUrl.clone();
        url.pathname = '/';
        return NextResponse.redirect(url);
    }

    return supabaseResponse;
}
