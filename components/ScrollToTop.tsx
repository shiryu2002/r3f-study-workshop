import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // ブラウザ標準のスクロール復元機能を無効化（React Routerでの制御を優先）
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // 即座にトップへスクロール
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}