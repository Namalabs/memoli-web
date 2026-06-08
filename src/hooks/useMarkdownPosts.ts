'use client';

import { useReducer, useEffect } from 'react';
import type { MarkdownPost, PaginationResult } from '@memoli/utils/markdown-client';
import { getPaginatedPosts, readPostBySlug } from '@memoli/utils/markdown-client';

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

type AsyncAction<T> = { type: 'loading' } | { type: 'success'; payload: T } | { type: 'error'; payload: string };

function asyncReducer<T>(state: AsyncState<T>, action: AsyncAction<T>): AsyncState<T> {
  switch (action.type) {
    case 'loading':
      return { data: null, loading: true, error: null };
    case 'success':
      return { data: action.payload, loading: false, error: null };
    case 'error':
      return { data: null, loading: false, error: action.payload };
  }
}

const initialState = { data: null, loading: true, error: null };

export function usePosts(page: number = 1, limit: number | 'all' = 4) {
  const [state, dispatch] = useReducer(asyncReducer<PaginationResult>, initialState);

  useEffect(() => {
    let cancelled = false;
    dispatch({ type: 'loading' });

    getPaginatedPosts(page, limit === 'all' ? 1000 : limit)
      .then((data) => {
        if (!cancelled) {
          dispatch({
            type: 'success',
            payload: { posts: data.posts, totalPages: data.totalPages, total: data.total },
          });
        }
      })
      .catch((err) => {
        if (!cancelled) dispatch({ type: 'error', payload: err.message ?? 'Failed to fetch posts' });
      });

    return () => {
      cancelled = true;
    };
  }, [page, limit]);

  return {
    posts: state.data?.posts ?? [],
    loading: state.loading,
    error: state.error,
    totalPages: state.data?.totalPages ?? 1,
  };
}

export function usePost(slug: string | null) {
  const [state, dispatch] = useReducer(asyncReducer<MarkdownPost>, {
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    if (!slug) return;

    let cancelled = false;
    dispatch({ type: 'loading' });

    readPostBySlug(slug)
      .then((data) => {
        if (!cancelled) dispatch({ type: 'success', payload: data });
      })
      .catch((err) => {
        if (!cancelled) dispatch({ type: 'error', payload: err.message ?? 'Failed to fetch post' });
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
