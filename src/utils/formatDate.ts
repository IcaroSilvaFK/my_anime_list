

export function formatDate(date: Date | string, opts?: Intl.DateTimeFormatOptions) {

  const defaultOptions = {
    dateStyle: 'short'
  } as const

  return new Intl.DateTimeFormat("pt-BR", opts ?? defaultOptions).format(new Date(date))
}