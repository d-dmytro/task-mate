import React from 'react';
import Link from 'next/link';

export const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="pageContainer">
      <div className="logo">
        <Link href="/">
          <a>
            <img src="/static/logo.png" />
          </a>
        </Link>
      </div>
      {children}
      <style jsx global>{`
        html {
          box-sizing: border-box;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        body {
          color: #5d647b;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 18px;
          line-height: 1.5;
          margin: 0;
        }
        a {
          text-decoration: none;
        }
      `}</style>
      <style jsx>{`
        .pageContainer {
          margin: 0 auto;
          max-width: 600px;
          padding: 0 15px;
        }
        .logo {
          display: flex;
          justify-content: center;
          margin: 30px 0;
        }
        img {
          width: 150px;
        }
      `}</style>
    </div>
  );
};
