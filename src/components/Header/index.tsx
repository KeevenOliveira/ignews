/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';
import Image from 'next/image';
import { SignInButton } from '../SignInButton';
import Link from 'next/link';
import { ActiveLink } from '../ActiveLink';

export function Header() {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img
                    src="/images/logo.svg"
                    // width="336"
                    // height="521" 
                    alt="ig.news"
                />
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                        <a >Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/posts">
                        <a>Posts</a>
                    </ActiveLink>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}