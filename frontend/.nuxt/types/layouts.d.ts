import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = string
declare module "../../../node_modules/.pnpm/nuxt@3.15.1_@parcel+watcher@2.5.0_@types+node@22.10.5_db0@0.2.1_ioredis@5.4.2_magicast@0.3.5__4xxuyj5jpvgiodbnfppnkamnbq/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}