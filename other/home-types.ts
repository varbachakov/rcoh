export type HookTypes = {hookName: string, hookCode: string}
export type HooksTypes = HookTypes[]
export type ReturnStaticPropsTypes = {
  props: PropsTypesApp
}
export type PropsTypesApp = {
  hooks: HooksTypes
}
