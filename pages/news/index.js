import Link from 'next/link';
import { Fragment } from 'react';

//our-domain.com/news

function NewsPage() {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href='/news/hello-laverne'>Hello, Laverne.</Link>
                </li>
                <li>
                    <a>
                        Goodbye, Laverne.
                    </a>
                </li>
            </ul>
        </Fragment>
    )
}

export default NewsPage;