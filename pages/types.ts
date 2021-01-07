export type HookTypes = {hookName: string, hookCode: string}
export type HooksTypes = HookTypes[]
export type PropsTypesApp = {
  hooks: HooksTypes
}
export type ReturnStaticPropsTypes = {
  props: PropsTypesApp
}
