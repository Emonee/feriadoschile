import type { Merge } from '@/helpers/types'
import json from '@/holidays/holidays.json'

export type Year = '2024' | '2025'
export type Holiday = Merge<typeof json['2024']['holidays'][number], typeof json['2024']['special_holidays'][number]>
