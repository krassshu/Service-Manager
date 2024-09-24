import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export function createClient(
    request?: NextRequest,
    supabaseResponse?: NextResponse
) {
    const cookieStore = request ? request.cookies : cookies();

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll();
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) => {
                            if (supabaseResponse) {
                                supabaseResponse.cookies.set(name, value, options);
                            } else {
                                cookieStore.set(name, value, options);
                            }
                        });
                    } catch {
                        // Ignoruj błędy ustawiania ciasteczek w komponentach serwerowych
                    }
                },
            },
        }
    );
}
