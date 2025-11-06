export {}
declare global {
  const $: typeof import('clsx')['clsx']
  const Author: typeof import('C:/D/newsnow-main/shared/consts')['Author']
  const Homepage: typeof import('C:/D/newsnow-main/shared/consts')['Homepage']
  const Interval: typeof import('C:/D/newsnow-main/shared/consts')['Interval']
  const TTL: typeof import('C:/D/newsnow-main/shared/consts')['TTL']
  const Timer: typeof import('C:/D/newsnow-main/src/utils/index')['Timer']
  const Version: typeof import('C:/D/newsnow-main/shared/consts')['Version']
  const atom: typeof import('jotai')['atom']
  const atomWithStorage: typeof import('jotai/utils')['atomWithStorage']
  const cacheSources: typeof import('C:/D/newsnow-main/src/utils/data')['cacheSources']
  const columns: typeof import('C:/D/newsnow-main/shared/metadata')['columns']
  const currentColumnIDAtom: typeof import('C:/D/newsnow-main/src/atoms/index')['currentColumnIDAtom']
  const currentSourcesAtom: typeof import('C:/D/newsnow-main/src/atoms/index')['currentSourcesAtom']
  const delay: typeof import('C:/D/newsnow-main/shared/utils')['delay']
  const fixedColumnIds: typeof import('C:/D/newsnow-main/shared/metadata')['fixedColumnIds']
  const focusSourcesAtom: typeof import('C:/D/newsnow-main/src/atoms/index')['focusSourcesAtom']
  const genSources: typeof import('C:/D/newsnow-main/shared/pre-sources')['genSources']
  const goToTopAtom: typeof import('C:/D/newsnow-main/src/atoms/index')['goToTopAtom']
  const hiddenColumns: typeof import('C:/D/newsnow-main/shared/metadata')['hiddenColumns']
  const isPageReload: typeof import('C:/D/newsnow-main/src/hooks/useOnReload')['isPageReload']
  const isiOS: typeof import('C:/D/newsnow-main/src/utils/index')['isiOS']
  const metadata: typeof import('C:/D/newsnow-main/shared/metadata')['metadata']
  const myFetch: typeof import('C:/D/newsnow-main/src/utils/index')['myFetch']
  const originSources: typeof import('C:/D/newsnow-main/shared/pre-sources')['originSources']
  const preprocessMetadata: typeof import('C:/D/newsnow-main/src/atoms/primitiveMetadataAtom')['preprocessMetadata']
  const primitiveMetadataAtom: typeof import('C:/D/newsnow-main/src/atoms/primitiveMetadataAtom')['primitiveMetadataAtom']
  const projectDir: typeof import('C:/D/newsnow-main/shared/dir')['projectDir']
  const randomItem: typeof import('C:/D/newsnow-main/shared/utils')['randomItem']
  const randomUUID: typeof import('C:/D/newsnow-main/shared/utils')['randomUUID']
  const refetchSources: typeof import('C:/D/newsnow-main/src/utils/data')['refetchSources']
  const relativeTime: typeof import('C:/D/newsnow-main/shared/utils')['relativeTime']
  const safeParseString: typeof import('C:/D/newsnow-main/src/utils/index')['safeParseString']
  const sources: typeof import('C:/D/newsnow-main/shared/sources')['default']
  const toastAtom: typeof import('C:/D/newsnow-main/src/hooks/useToast')['toastAtom']
  const typeSafeObjectEntries: typeof import('C:/D/newsnow-main/shared/type.util')['typeSafeObjectEntries']
  const typeSafeObjectFromEntries: typeof import('C:/D/newsnow-main/shared/type.util')['typeSafeObjectFromEntries']
  const typeSafeObjectValues: typeof import('C:/D/newsnow-main/shared/type.util')['typeSafeObjectValues']
  const useAtom: typeof import('jotai')['useAtom']
  const useAtomValue: typeof import('jotai')['useAtomValue']
  const useCallback: typeof import('react')['useCallback']
  const useContext: typeof import('react')['useContext']
  const useDark: typeof import('C:/D/newsnow-main/src/hooks/useDark')['useDark']
  const useEffect: typeof import('react')['useEffect']
  const useEntireQuery: typeof import('C:/D/newsnow-main/src/hooks/query')['useEntireQuery']
  const useFocus: typeof import('C:/D/newsnow-main/src/hooks/useFocus')['useFocus']
  const useFocusWith: typeof import('C:/D/newsnow-main/src/hooks/useFocus')['useFocusWith']
  const useLogin: typeof import('C:/D/newsnow-main/src/hooks/useLogin')['useLogin']
  const useMemo: typeof import('react')['useMemo']
  const useOnReload: typeof import('C:/D/newsnow-main/src/hooks/useOnReload')['useOnReload']
  const usePWA: typeof import('C:/D/newsnow-main/src/hooks/usePWA')['usePWA']
  const useReducer: typeof import('react')['useReducer']
  const useRef: typeof import('react')['useRef']
  const useRefetch: typeof import('C:/D/newsnow-main/src/hooks/useRefetch')['useRefetch']
  const useRelativeTime: typeof import('C:/D/newsnow-main/src/hooks/useRelativeTime')['useRelativeTime']
  const useSearchBar: typeof import('C:/D/newsnow-main/src/hooks/useSearch')['useSearchBar']
  const useSetAtom: typeof import('jotai')['useSetAtom']
  const useState: typeof import('react')['useState']
  const useSync: typeof import('C:/D/newsnow-main/src/hooks/useSync')['useSync']
  const useToast: typeof import('C:/D/newsnow-main/src/hooks/useToast')['useToast']
  const useUpdateQuery: typeof import('C:/D/newsnow-main/src/hooks/query')['useUpdateQuery']
  const verifyPrimitiveMetadata: typeof import('C:/D/newsnow-main/shared/verify')['verifyPrimitiveMetadata']
}
// for type re-export
declare global {
  // @ts-ignore
  export type { OmitNever, UnionToIntersection, MaybePromise } from 'C:/D/newsnow-main/shared/type.util'
  import('C:/D/newsnow-main/shared/type.util')
  // @ts-ignore
  export type { Color, SourceID, AllSourceID, ColumnID, Metadata, PrimitiveMetadata, FixedColumnID, HiddenColumnID, OriginSource, Source, Column, NewsItem, SourceResponse } from 'C:/D/newsnow-main/shared/types'
  import('C:/D/newsnow-main/shared/types')
  // @ts-ignore
  export type { Timer } from 'C:/D/newsnow-main/src/utils/index'
  import('C:/D/newsnow-main/src/utils/index')
  // @ts-ignore
  export type { Update, ToastItem } from 'C:/D/newsnow-main/src/atoms/types'
  import('C:/D/newsnow-main/src/atoms/types')
}