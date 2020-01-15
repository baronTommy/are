import React, { FC } from "react";
import { Link, View, NotFoundBoundary, useLoadingRoute } from "react-navi";
import { RenderNotFound } from "./component/environments/RenderNotFound";
import "./App.css";

// 手抜き です 😇😇😇 😇😇😇
const Header: FC = () => (
  <header className="App-header">
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
  </header>
);

type MainViewProps = {
  loadingRoute: ReturnType<typeof useLoadingRoute>;
};

// 手抜きです  その2 😇😇😇 😇😇😇
const MainView: FC<MainViewProps> = ({ loadingRoute }) => (
  <main>
    <NotFoundBoundary render={RenderNotFound}>
      <div
        // Only add the `active` class to this element while the
        // next page is loading, triggering a CSS animation to
        // show or hide the loading bar.
        className={`
        App-loading-indicator
        ${loadingRoute ? "active" : ""}
      `}
      />
      <View />
    </NotFoundBoundary>
  </main>
);

export const App: FC = () => {
  const loadingRoute = useLoadingRoute()
  return (
    <div className="App">
      <Header />
      {loadingRoute? '✍️✍️✍️✍️✍️✍️✍️✍️✍️✍️✍️✍️✍️✍️✍️✍️✍️✍️✍️ 処理中':''}

      <MainView
        {...{
          loadingRoute
        }}
      />
    </div>
  );
};
