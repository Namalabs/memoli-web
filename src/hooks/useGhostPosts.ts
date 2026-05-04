// src/hooks/useGhostPosts.ts

import { useReducer, useEffect } from "react";
import { fetchPosts, fetchPostBySlug, GhostPost } from "@memoli/utils/ghost";

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

type AsyncAction<T> =
  | { type: "loading" }
  | { type: "success"; payload: T }
  | { type: "error"; payload: string };

function asyncReducer<T>(
  state: AsyncState<T>,
  action: AsyncAction<T>
): AsyncState<T> {
  switch (action.type) {
    case "loading":
      return { data: null, loading: true, error: null };
    case "success":
      return { data: action.payload, loading: false, error: null };
    case "error":
      return { data: null, loading: false, error: action.payload };
  }
}

const initialState = { data: null, loading: true, error: null };

export function usePosts(page: number = 1) {
  const [state, dispatch] = useReducer(
    asyncReducer<{ posts: GhostPost[]; totalPages: number }>,
    initialState
  );

  useEffect(() => {
    let cancelled = false;
    dispatch({ type: "loading" });

    fetchPosts(page, 4)
      .then((data) => {
        if (!cancelled) dispatch({ type: "success", payload: data });
      })
      .catch((err) => {
        if (!cancelled)
          dispatch({ type: "error", payload: err.message ?? "Failed to fetch posts" });
      });

    return () => {
      cancelled = true;
    };
  }, [page]);

  return {
    posts: state.data?.posts ?? [],
    loading: state.loading,
    error: state.error,
    totalPages: state.data?.totalPages ?? 1,
  };
}

export function usePost(slug: string | null) {
  const [state, dispatch] = useReducer(asyncReducer<GhostPost>, {
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    if (!slug) return;

    let cancelled = false;
    dispatch({ type: "loading" });

    fetchPostBySlug(slug)
      .then((data) => {
        if (!cancelled) dispatch({ type: "success", payload: data });
      })
      .catch((err) => {
        if (!cancelled)
          dispatch({ type: "error", payload: err.message ?? "Failed to fetch post" });
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return {
    post: state.data,
    loading: state.loading,
    error: state.error,
  };
}