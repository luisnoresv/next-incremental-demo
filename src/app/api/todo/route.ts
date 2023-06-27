import { NextResponse } from 'next/server'

import todos from '@/services/data/todos.json'

export async function GET() {
  return NextResponse.json({ data: todos }, { status: 200 })
}
