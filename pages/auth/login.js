import Router from 'next/router';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useEffect } from 'react';

import { supabase } from '@/utils/client';

const LogIn = () => {

    useEffect(() => {

        const fetchAuthState = async () => {
            supabase.auth.onAuthStateChange((event) => {

                if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
                    Router.push('/')
                }

            })
        }

        fetchAuthState();
    }, [])

    return (

        <div className='w-full flex justify-center p-10'>
            <Auth
                supabaseClient={supabase}
                view='sign_in'
                appearance={{
                    theme: ThemeSupa,
                    style: {
                        container: { width: '400px' },
                        button: { background: 'black' }
                    }
                }
                }
                providers={['google']}
                redirectTo='http://localhost:3000/auth/login'
            />
        </div>
    )
}

export default LogIn
