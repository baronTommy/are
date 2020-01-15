import React, { FC } from "react";
import { Link, useCurrentRoute, useLoadingRoute } from "react-navi";

type LayoutProps = any;

export const Layout: FC<LayoutProps> = props => {
  const loadingRoute = useLoadingRoute();
  // let route = useCurrentRoute();

  // let data = route.data
  // let productIds = Object.keys(data)
  // console.log(route)

//   console.log(
//     "views:",
//     route.views.map(x => (x.type ? x.type.name : x.name))
//   );

  return (
    <div className="Layout">
      <nav className="App-nav">
        <Link href="/" activeClassName="active" exact>
          Home
        </Link>

        <Link href="/getting-started/" activeClassName="active">
          Getting Started
        </Link>

        <Link href="/some" activeClassName="active">
          Some
        </Link>

        <Link href="/some2/123" activeClassName="active">
          Some2
        </Link>
      </nav>
      <main>
        <div
          // Only add the `active` class to this element while the
          // next page is loading, triggering a CSS animation to
          // show or hide the loading bar.
          className={`
        App-loading-indicator
        ${loadingRoute ? "active" : ""}
      `}
        />

        {loadingRoute? '✍️✍️✍️✍️✍️✍️✍️✍️✍️✍️✍️✍️✍️✍️✍️✍️✍️✍️✍️ 処理中':''}

        {props.children || null}
      </main>
    </div>
  );
};
