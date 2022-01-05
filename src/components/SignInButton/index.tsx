import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss';
import { FiX } from 'react-icons/fi';
import { signIn, useSession, signOut } from 'next-auth/react';

export function SignInButton() {

    const { data } = useSession();
    console.log("data");
    console.log(data);
    console.log("T29d91s5PC+GlG4MhStgwmghgkVRQq2+rsQAb0qkkko");
    console.log("environment variables:")
    console.log(process.env.GITHUB_CLIENT_ID);
    console.log(process.env.GITHUB_CLIENT_SECRET);
    console.log("SECRET: ");
    console.log(process.env.SECRET);

    console.log(process.env.NEXTAUTH_URL);
    console.log(process.env.VERCEL_URL);
    return data ? (
        <button 
            type="button"
            className={styles.signInButton}
            onClick={()=>signOut()}
            >
            <FaGithub color="#04D361"/>
            {data.user.name}
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button 
            type="button"
            className={styles.signInButton}
            onClick={()=>signIn('github')}
            >
            <FaGithub color="#EBA417"/>
            Sign in with GitHub
        </button>
    );
}