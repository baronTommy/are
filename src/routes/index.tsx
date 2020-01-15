import React from "react";
import { mount, route, lazy, compose, withView } from "navi";
import { Layout } from "../component/other/Layout";
import { View, useCurrentRoute } from "react-navi";

// 手抜きですたい 🐿🐿🐿🐿🐿🐿🐿🐿🐿🐿🐿🐿🐿🐿🐿🐿🐿🐿
const are = async () => ({
  htmlUrl: (
    await (await fetch("https://api.github.com/users/barontommy")).json()
  ).html_url
});

const m = mount({
  "/": route({
    title: "React Site",
    getView: async () => import("./index.mdx")
  }),

  "/getting-started": route({
    title: "Getting Started",
    getView: async () => import("./getting-started.mdx")
  }),

  // router内でいろいろ頑張る
  "/some": route({
    title: "Some",
    getView: async () => {
      try {
        // 画面遷移を見ように すりーーーーぷ 💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤
        await new Promise(resolve => setTimeout(resolve, 2000));

        const { Some } = await import("../component/environments/Some");
        return <Some {...await are()} />;
      } catch {
        // APIデータ取得失敗
        // 手抜きだよ  🐑🐑🐑🐑🐑🐑
      }
    }
  }),

  // 別途定義 のパターン これが最良であるが
  // ディレクトリ構成をよく考える
  "/some2": lazy(() => import("../component/environments/Some2"))
});

const Xxx = withView(req => {
  // Check if the current page is an index page by comparing the remaining
  // portion of the URL's pathname with the index page paths.
  let isViewingIndex = req.path === "/" || /^\/page\/\d+\/$/.test(req.path);

  // Wrap the current page's content with a React Context to pass global
  // configuration to the blog's components.

  // let route = useCurrentRoute();
  // let data = route.data
  // console.log(Object.keys(data))
  return (<><Layout {...req} ><View/></Layout></>);
});

export const routes2 = compose(Xxx, m);

export default m;
